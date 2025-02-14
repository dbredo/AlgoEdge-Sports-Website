import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { DashboardContent } from "@/components/dashboard-content"
import stripe from "@/lib/stripe"

export const dynamic = "force-dynamic"

async function getSubscriptionPlan(stripeCustomerId: string | null) {
  console.log("[getSubscriptionPlan] Starting with stripeCustomerId:", stripeCustomerId)

  if (!stripeCustomerId) {
    console.log("[getSubscriptionPlan] No stripeCustomerId, returning Free")
    return "Free"
  }

  if (!process.env.STRIPE_SECRET_KEY_ALGOEDGE) {
    console.error("[getSubscriptionPlan] STRIPE_SECRET_KEY_ALGOEDGE is not set")
    return "Unknown"
  }

  try {
    console.log("[getSubscriptionPlan] Attempting to retrieve customer from Stripe")
    const customer = await stripe.customers.retrieve(stripeCustomerId, {
      expand: ["subscriptions"],
    })
    console.log("[getSubscriptionPlan] Retrieved customer:", JSON.stringify(customer, null, 2))

    if (customer.deleted) {
      console.log("[getSubscriptionPlan] Customer is deleted, returning Free")
      return "Free"
    }

    const subscription = customer.subscriptions?.data[0]
    if (!subscription) {
      console.log("[getSubscriptionPlan] No active subscription found, returning Free")
      return "Free"
    }

    const priceId = subscription.items.data[0].price.id
    console.log("[getSubscriptionPlan] Extracted Price ID:", priceId)

    // Map price IDs to plan names
    const planMap = {
      price_1QkUBPG6KmMfCiR87bv1Su72: "Basic",
      price_1QkUDJG6KmMfCiR8xHzKtKbj: "Pro",
      price_1QkUGMG6KmMfCiR8aaIA0nTs: "Premium",
    }

    const plan = planMap[priceId] || "Unknown"
    console.log("[getSubscriptionPlan] Determined plan:", plan)
    return plan
  } catch (error) {
    console.error("[getSubscriptionPlan] Error fetching subscription:", error)
    return "Unknown"
  }
}

export default async function DashboardPage() {
  console.log("[DashboardPage] Initializing")
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log("[DashboardPage] Session state:", session ? "Authenticated" : "Not authenticated")

  let profile = null
  let subscriptionPlan = "Free"

  if (session) {
    console.log("[DashboardPage] Fetching profile for user ID:", session.user.id)
    const { data, error } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

    console.log("[DashboardPage] Supabase query result:", { data, error })

    if (!error && data) {
      profile = data
      console.log("[DashboardPage] Profile data retrieved:", JSON.stringify(profile, null, 2))

      if (profile.stripe_customer_id) {
        console.log("[DashboardPage] Calling getSubscriptionPlan with stripe_customer_id:", profile.stripe_customer_id)
        subscriptionPlan = await getSubscriptionPlan(profile.stripe_customer_id)
      } else {
        console.log("[DashboardPage] No stripe_customer_id found in profile")
      }

      console.log("[DashboardPage] Subscription plan determined:", subscriptionPlan)
    } else {
      console.error("[DashboardPage] Error fetching profile:", error)
    }
  }

  console.log("[DashboardPage] Final data being passed to DashboardContent:", {
    user: session?.user,
    profile,
    subscriptionPlan,
  })

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-[72px]">
        <DashboardContent user={session?.user} profile={profile} subscriptionPlan={subscriptionPlan} />
      </main>
    </>
  )
}
