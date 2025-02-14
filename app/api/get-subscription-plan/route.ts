import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const customerId = searchParams.get("customerId")

  if (!customerId) {
    return NextResponse.json({ error: "Customer ID is required" }, { status: 400 })
  }

  try {
    console.log("[API] Attempting to retrieve customer from Stripe")
    const customer = await stripe.customers.retrieve(customerId, {
      expand: ["subscriptions"],
    })
    console.log("[API] Retrieved customer:", JSON.stringify(customer, null, 2))

    if (customer.deleted) {
      console.log("[API] Customer is deleted, returning Free")
      return NextResponse.json({ plan: "Free" })
    }

    const subscription = customer.subscriptions?.data[0]
    if (!subscription) {
      console.log("[API] No active subscription found, returning Free")
      return NextResponse.json({ plan: "Free" })
    }

    const priceId = subscription.items.data[0].price.id
    console.log("[API] Extracted Price ID:", priceId)

    // Map price IDs to plan names
    const planMap = {
      price_1QkUBPG6KmMfCiR87bv1Su72: "Basic",
      price_1QkUDJG6KmMfCiR8xHzKtKbj: "Pro",
      price_1QkUGMG6KmMfCiR8aaIA0nTs: "Premium",
    }

    const plan = planMap[priceId] || "Unknown"
    console.log("[API] Determined plan:", plan)
    return NextResponse.json({ plan })
  } catch (error) {
    console.error("[API] Error fetching subscription:", error)
    return NextResponse.json({ error: "Failed to fetch subscription plan" }, { status: 500 })
  }
}