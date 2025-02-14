"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function StripeConnectionTest() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/stripe-test")
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
      <Button onClick={testConnection} disabled={loading}>
        {loading ? "Testing..." : "Test Stripe Connection"}
      </Button>
      {result && <pre className="bg-gray-100 p-4 rounded-md overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
