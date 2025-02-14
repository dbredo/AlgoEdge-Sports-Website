"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function ReauthenticateForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleReauthenticate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
      })

      if (error) throw error

      toast({
        title: "Verification email sent",
        description: "Please check your email for the verification link.",
      })
      router.push("/check-email")
    } catch (error) {
      console.error("Reauthentication error:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-3">
        <div className="mx-auto w-32">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AlgoEdge-Ls98PgXMD9EnwVZLRknSqHGfzpseVU.png"
            alt="AlgoEdge Sports Logo"
            className="w-full"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-center">Verify Your Email</CardTitle>
        <CardDescription className="text-center">
          Enter your email address to receive a new verification link.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleReauthenticate}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="flex items-center space-x-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Verification Link"}
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/login">Return to Login</Link>
          </Button>
          <Button asChild variant="link" className="w-full">
            <Link href="/contact">Need Help?</Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
