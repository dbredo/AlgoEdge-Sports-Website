"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export function SubscriptionSuccessContent() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    const verifySubscription = async () => {
      if (!sessionId) {
        setError("No session ID found")
        setLoading(false)
        return
      }

      try {
        const response = await fetch("/api/verify-subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        })

        if (!response.ok) {
          throw new Error("Failed to verify subscription")
        }

        const { success } = await response.json()

        if (!success) {
          throw new Error("Subscription verification failed")
        }

        // Update user's subscription status in Supabase
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (user) {
          await supabase.from("profiles").update({ subscription_status: "active" }).eq("id", user.id)
        }
      } catch (err) {
        console.error("Error verifying subscription:", err)
        setError("An error occurred while verifying your subscription. Please contact support.")
      } finally {
        setLoading(false)
      }
    }

    verifySubscription()
  }, [sessionId])

  if (loading) {
    return (
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Verifying Your Subscription</h1>
        <p className="text-center">Please wait while we confirm your subscription...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Subscription Error</h1>
        <p className="text-center text-red-600 mb-4">{error}</p>
        <div className="flex justify-center">
          <Button onClick={() => router.push("/contact")}>Contact Support</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Subscription Successful!</h1>
      <p className="text-center mb-6">Thank you for subscribing to AlgoEdge Sports. Your account is now active.</p>
      <div className="flex justify-center">
        <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
      </div>
    </main>
  )
}
