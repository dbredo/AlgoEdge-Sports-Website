import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function GET() {
  try {
    console.log("Starting Stripe test")
    console.log("Stripe library version:", stripe.VERSION)
    console.log("Configured API version:", stripe.getApiField("version"))

    const account = await stripe.accounts.retrieve()
    console.log("Successfully retrieved account:", account.id)

    return NextResponse.json({
      success: true,
      message: "Stripe connection successful",
      accountId: account.id,
      stripeVersion: stripe.VERSION,
      apiVersion: stripe.getApiField("version"),
    })
  } catch (error) {
    console.error("Stripe test error:", error)
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    return NextResponse.json(
      {
        success: false,
        error: "Stripe connection failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}