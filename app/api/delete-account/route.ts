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

    // Cancel Stripe subscription if exists
    if (profile?.stripe_subscription_id) {
      await stripe.subscriptions.del(profile.stripe_subscription_id)
    }

    // Delete Stripe customer if exists
    if (profile?.stripe_customer_id) {
      await stripe.customers.del(profile.stripe_customer_id)
    }

    // Delete user data from profiles table
    await supabase.from("profiles").delete().eq("id", session.user.id)

    // Delete user authentication data
    const { error } = await supabase.auth.admin.deleteUser(session.user.id)

    if (error) throw error

    return NextResponse.json({ status: "success" })
  } catch (error) {
    console.error("Error deleting account:", error)
    return NextResponse.json({ error: "Failed to delete account" }, { status: 500 })
  }
}