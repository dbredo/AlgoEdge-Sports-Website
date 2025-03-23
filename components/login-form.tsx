"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { ArrowRight, Mail, Lock } from "lucide-react"

export function LoginForm() {
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
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </Label>
          <Link href="/forgot-password" className="text-sm text-[#3f6d63] hover:text-[#345c54]">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <Button
        disabled={loading}
        type="submit"
        className="w-full h-11 rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54] transition-all"
      >
        {loading ? "Logging in..." : "Sign In"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <div className="text-center text-gray-600 text-sm">
        Don't have an account?{" "}
        <Link href="/waitlist" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
          Join the waitlist
        </Link>
      </div>
    </form>
  )
}

export default LoginForm

