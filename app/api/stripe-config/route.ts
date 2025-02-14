import { NextResponse } from "next/server"
import Stripe from "stripe"
import stripe from "@/lib/stripe"

export async function GET() {
  try {
    const config = {
      nodeVersion: process.version,
      environment: process.env.NODE_ENV,
      stripeLibraryVersion: Stripe.VERSION,
      stripeApiVersion: stripe.getApiField("version"),
      stripeApiVersionFromEnv: process.env.STRIPE_API_VERSION,
      stripeSecretKeyLastFourChars: process.env.STRIPE_SECRET_KEY_ALGOEDGE?.slice(-4),
    }

    // Test Stripe connection
    const account = await stripe.accounts.retrieve()

    return NextResponse.json({
      success: true,
      config,
      accountId: account.id,
    })
  } catch (error) {
    console.error("Stripe configuration test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Stripe configuration test failed",
        details: error instanceof Error ? error.message : "Unknown error",
        config: {
          nodeVersion: process.version,
          environment: process.env.NODE_ENV,
          stripeLibraryVersion: Stripe.VERSION,
          stripeApiVersionFromEnv: process.env.STRIPE_API_VERSION,
          stripeSecretKeyLastFourChars: process.env.STRIPE_SECRET_KEY_ALGOEDGE?.slice(-4),
        },
      },
      { status: 500 },
    )
  }
}