"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TestCheckoutForm() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState("")

  const createCheckoutSession = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: "price_1QkUBPG6KmMfCiR87bv1Su72", // Replace with your actual price ID
          userId: "test-user-id",
          userEmail: "test@example.com",
        }),
      })
      const data = await response.json()
      setResult(data)
      if (data.sessionId) {
        setSessionId(data.sessionId)
      }
    } catch (error) {
      setResult({ error: "Failed to create checkout session" })
    } finally {
      setLoading(false)
    }
  }

  const verifyCheckoutSession = async () => {
    if (!sessionId) {
      setResult({ error: "Please enter a session ID" })
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`/api/check-session?session_id=${sessionId}`)
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: "Failed to verify checkout session" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Button onClick={createCheckoutSession} disabled={loading}>
          {loading ? "Creating..." : "Create Checkout Session"}
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="sessionId">Session ID:</Label>
        <Input
          id="sessionId"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          placeholder="Enter session ID"
          className="flex-grow"
        />
        <Button onClick={verifyCheckoutSession} disabled={loading}>
          {loading ? "Verifying..." : "Verify Session"}
        </Button>
      </div>
      {result && <pre className="mt-4 p-4 bg-gray-100 rounded-md overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
