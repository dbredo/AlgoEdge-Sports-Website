"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      console.log("[LoginForm] Checking for existing session")
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) {
        console.log("[LoginForm] Existing session found, redirecting to dashboard")
        router.push("/dashboard")
      } else {
        console.log("[LoginForm] No existing session found")
      }
    }
    checkSession()
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      console.log("[LoginForm] Login attempt started with email:", email)
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      console.log("[LoginForm] Login attempt result:", data)

      if (error) throw error

      if (data.session) {
        console.log("[LoginForm] Login successful, session created:", data.session.user.id)
        await supabase.auth.setSession(data.session)
        toast({
          title: "Sign in successful",
          description: "Welcome back!",
        })
        console.log("[LoginForm] Redirecting to dashboard after successful login")
        console.log("[LoginForm] Pushing to dashboard route")
        router.push("/dashboard")
        console.log("[LoginForm] Router push completed")
      } else {
        throw new Error("No session data returned")
      }
    } catch (error) {
      console.error("[LoginForm] Login error:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
      console.log("[LoginForm] Login attempt finished")
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Signing in..." : "Sign In"}
      </Button>

      <div className="space-y-2 text-center text-sm">
        <p>
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot your password?
        </Link>
      </div>
    </form>
  )
}
