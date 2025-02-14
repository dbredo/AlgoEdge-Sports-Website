import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import stripe from "@/lib/stripe"

export async function POST() {
  const supabase = createRouteHandlerClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  try {
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id, stripe_subscription_id")
      .eq("id", session.user.id)
      .single()

    if (!profile?.stripe_subscription_id) {
      return NextResponse.json({ error: "No active subscription found" }, { status: 400 })
    }

    const subscription = await stripe.subscriptions.update(profile.stripe_subscription_id, {
      cancel_at_period_end: true,
    })

    await supabase.from("profiles").update({ subscription_status: "cancelling" }).eq("id", session.user.id)

    return NextResponse.json({ status: "success", subscription })
  } catch (error) {
    console.error("Error cancelling subscription:", error)
    return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 })
  }
}