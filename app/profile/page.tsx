import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { ProfileContent } from "@/components/profile-content"
import { ProtectedRoute } from "@/components/protected-route"
import stripe from "@/lib/stripe"

export const dynamic = "force-dynamic"

async function getSubscriptionPlan(stripeCustomerId: string | null) {
  console.log("[getSubscriptionPlan] Starting with stripeCustomerId:", stripeCustomerId)

  if (!stripeCustomerId) {
    console.log("[getSubscriptionPlan] No stripeCustomerId, returning Free")
    return "Free"
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

export default async function ProfilePage() {
  console.log("[ProfilePage] Starting profile page render", new Date().toISOString())
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  // Get the session
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession()

  if (sessionError) {
    console.error("[ProfilePage] Session error:", sessionError)
    return null
  }

  if (!session?.user) {
    console.log("[ProfilePage] No session found")
    return null
  }

  console.log("[ProfilePage] Session found:", {
    userId: session.user.id,
    email: session.user.email,
    userMetadata: session.user.user_metadata,
  })

  // Get the profile data
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single()

  if (profileError) {
    console.error("[ProfilePage] Profile error:", profileError)
  }

  console.log("[ProfilePage] Profile data:", profile)

  // Get subscription plan
  const subscriptionPlan = await getSubscriptionPlan(profile?.stripe_customer_id)

  console.log("[ProfilePage] Final data:", {
    user: session.user,
    profile,
    subscriptionPlan,
  })

  return (
    <ProtectedRoute>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-[72px]">
        <h1 className="text-3xl font-bold mb-6 text-[#3f6d63]">Your Profile</h1>
        <ProfileContent user={session.user} profile={profile} subscriptionPlan={subscriptionPlan} />
      </main>
    </ProtectedRoute>
  )
}
