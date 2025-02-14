"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  priceId: string
  unitAmount: number
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/stripe-test")
        const data = await response.json()
        if (data.success) {
          setProducts(
            data.data.products.map((product: any) => ({
              ...product,
              priceId: data.data.prices.find((price: any) => price.product === product.id)?.id,
              unitAmount: data.data.prices.find((price: any) => price.product === product.id)?.unit_amount,
            })),
          )
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div>Loading products...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${(product.unitAmount / 100).toFixed(2)} / month</p>
          <Button className="mt-4">Subscribe</Button>
        </div>
      ))}
    </div>
  )
}
