import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const { priceId, userId, userEmail } = await request.json()

    console.log("Received request:", { priceId, userId, userEmail })

    if (!priceId || !userId || !userEmail) {
      console.error("Missing required parameters:", { priceId, userId, userEmail })
      return NextResponse.json(
        {
          error: "Failed to create checkout session",
          message: "Missing required parameters",
          details: { priceId, userId, userEmail },
        },
        { status: 400 },
      )
    }

    console.log("Creating checkout session with Stripe")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/confirm?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-cancel`,
      client_reference_id: userId,
      customer_email: userEmail,
    })

    console.log("Checkout session created:", session.id)
    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    let errorMessage = "Unknown error occurred"
    let errorDetails = {}

    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = {
        name: error.name,
        stack: error.stack,
      }
    }

    // Check if it's a Stripe error
    if (typeof error === "object" && error !== null && "type" in error) {
      const stripeError = error as any
      errorDetails = {
        type: stripeError.type,
        code: stripeError.code,
        param: stripeError.param,
      }
    }

    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        message: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}