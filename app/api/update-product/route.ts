import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const { productId, newName } = await request.json()

    const updatedProduct = await stripe.products.update(productId, {
      name: newName,
    })

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      product: {
        id: updatedProduct.id,
        name: updatedProduct.name,
        active: updatedProduct.active,
      },
    })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update product",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}