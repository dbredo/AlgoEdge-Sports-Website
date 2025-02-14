"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function UpdateProductsPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleUpdateProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/update-stripe-products", { method: "POST" })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: "Failed to update products" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Update Stripe Products</h1>
      <Button onClick={handleUpdateProducts} disabled={loading}>
        {loading ? "Updating..." : "Update Products"}
      </Button>
      {result && <pre className="mt-4 p-4 bg-gray-100 rounded-md overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}