"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function ChangeEmailForm() {
  const [newEmail, setNewEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // First verify the user's password
      const {
        data: { user },
        error: signInError,
      } = await supabase.auth.signInWithPassword({
        email: (await supabase.auth.getUser()).data.user?.email || "",
        password,
      })

      if (signInError) throw new Error("Please verify your current password")

      // Then update the email
      const { error: updateError } = await supabase.auth.updateUser({ email: newEmail })

      if (updateError) throw updateError

      toast({
        title: "Verification email sent",
        description: "Please check your new email address for a confirmation link.",
      })

      // Redirect to check email page
      router.push("/check-email")
    } catch (error) {
      console.error("Error changing email:", error)
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
    <Card>
      <CardHeader>
        <CardTitle>Change Email Address</CardTitle>
        <CardDescription>Enter your new email address and current password to make this change.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleEmailChange} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newEmail">New Email Address</Label>
            <Input
              id="newEmail"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter your new email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Current Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Verify your current password"
              required
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Change Email"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/profile")}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
