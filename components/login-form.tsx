"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      console.log("[LoginForm] Attempting login with email:", email)

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      if (!data.session) {
        throw new Error("No session data returned")
      }

      console.log("[LoginForm] Login successful, session created:", {
        userId: data.session.user.id,
        email: data.session.user.email,
        expiresAt: data.session.expires_at,
      })

      // Set the session cookie explicitly
      await supabase.auth.setSession(data.session)

      toast({
        title: "Sign in successful",
        description: "Welcome back!",
      })

      // Add a small delay to ensure cookie is set
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verify session is set before redirect
      const {
        data: { session: verifySession },
      } = await supabase.auth.getSession()
      console.log("[LoginForm] Session verification:", {
        hasSession: !!verifySession,
        userId: verifySession?.user?.id,
      })

      if (verifySession) {
        // Use router.push instead of window.location for smoother transition
        router.push("/dashboard")
      } else {
        throw new Error("Session verification failed")
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
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button disabled={loading} type="submit">
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  )
}

export default LoginForm

