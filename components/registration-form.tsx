"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle } from "lucide-react"

const checkEmailExists = async (email: string) => {
  console.log(`Checking if email exists: ${email}`)
  try {
    const { data, error } = await supabase.from("profiles").select("email").eq("email", email).maybeSingle()

    if (error) throw error
    return !!data
  } catch (error) {
    console.error("Error checking email:", error)
    throw error
  }
}

export function RegistrationForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const emailExists = await checkEmailExists(email)
      if (emailExists) {
        setError("An account with this email already exists")
        toast({
          title: "Registration Error",
          description: "An account with this email already exists",
          variant: "destructive",
        })
        setLoading(false)
        return
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (authError) throw authError

      if (authData.user) {
        // Wait for a short period to allow the trigger to create the profile
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Check if profile was created
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", authData.user.id)
          .single()

        if (profileError) {
          console.error("Error fetching profile:", profileError)
          throw new Error("Failed to create user profile")
        }

        console.log("Registration process completed")
        toast({
          title: "Registration successful",
          description: "Please check your email for the confirmation link.",
        })
        router.push("/login")
      } else {
        throw new Error("User registration failed")
      }
    } catch (error) {
      console.error("Registration error:", error)
      if (error instanceof Error) {
        setError(error.message)
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      } else {
        setError("An unknown error occurred")
        toast({
          title: "Error",
          description: "An unknown error occurred",
          variant: "destructive",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>
      {error && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Registering..." : "Register"}
      </Button>
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  )
}
