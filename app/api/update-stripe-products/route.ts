import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

const products = [
  { name: "Basic", price: 999 },
  { name: "Pro", price: 2999 },
  { name: "Premium", price: 5999 },
]

export async function POST() {
  try {
    const updatedProducts = []

    for (const product of products) {
      // Create or update product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        active: true,
      })

      // Create price for the product
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "usd",
        recurring: { interval: "month" },
      })

      updatedProducts.push({
        id: stripeProduct.id,
        name: stripeProduct.name,
        priceId: price.id,
        unitAmount: price.unit_amount,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Products and prices updated successfully",
      products: updatedProducts,
    })
  } catch (error) {
    console.error("Error updating products and prices:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update products and prices",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}