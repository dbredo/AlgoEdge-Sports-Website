"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      if (error) throw error
      setSuccess(true)
      toast({
        title: "Password reset email sent",
        description: "If an account exists with this email, you will receive further instructions.",
      })
    } catch (error) {
      console.error("Password reset error:", error)
      setError("An error occurred while processing your request. Please try again.")
      toast({
        title: "Error",
        description: "An error occurred while processing your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <p className="mb-4">
          If an account exists with this email, a password reset link has been sent. Please check your inbox.
        </p>
        <Link href="/login" className="text-blue-600 hover:underline">
          Return to Login
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleResetPassword} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Sending..." : "Send Reset Link"}
      </Button>
      <p className="text-center text-sm">
        Remember your password?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  )
}
