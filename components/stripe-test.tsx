"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function StripeTest() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testStripe = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/test-stripe")
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: "Failed to test Stripe connection" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={testStripe} disabled={loading}>
        {loading ? "Testing..." : "Test Stripe Connection"}
      </Button>
      {result && <pre className="bg-gray-100 p-4 rounded-md overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
