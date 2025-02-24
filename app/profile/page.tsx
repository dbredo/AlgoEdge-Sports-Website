import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { ProfileContent } from "@/components/profile-content"
import { ProtectedRoute } from "@/components/protected-route"
import stripe from "@/lib/stripe"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

async function getSubscriptionPlan(stripeCustomerId: string | null) {
  const logPrefix = "[getSubscriptionPlan]"
  console.log(`${logPrefix} Starting with stripeCustomerId:`, stripeCustomerId)

  if (!stripeCustomerId) {
    console.log(`${logPrefix} No stripeCustomerId, returning Free`)
    return "Free"
  }

  try {
    console.log(`${logPrefix} Attempting to retrieve customer from Stripe`)
    const customer = await stripe.customers.retrieve(stripeCustomerId, {
      expand: ["subscriptions"],
    })
    console.log(`${logPrefix} Retrieved customer:`, JSON.stringify(customer, null, 2))

    if (customer.deleted) {
      console.log(`${logPrefix} Customer is deleted, returning Free`)
      return "Free"
    }

    const subscription = customer.subscriptions?.data[0]
    if (!subscription) {
      console.log(`${logPrefix} No active subscription found, returning Free`)
      return "Free"
    }

    const priceId = subscription.items.data[0].price.id
    console.log(`${logPrefix} Extracted Price ID:`, priceId)

    const planMap = {
      price_1QkUBPG6KmMfCiR87bv1Su72: "Basic",
      price_1QkUDJG6KmMfCiR8xHzKtKbj: "Pro",
      price_1QkUGMG6KmMfCiR8aaIA0nTs: "Premium",
    }

    const plan = planMap[priceId] || "Unknown"
    console.log(`${logPrefix} Determined plan:`, plan)
    return plan
  } catch (error) {
    console.error(`${logPrefix} Error fetching subscription:`, error)
    return "Unknown"
  }
}

export default async function ProfilePage() {
  const requestTime = new Date().toISOString()
  console.log(`[ProfilePage ${requestTime}] Starting profile page render`)

  const cookieStore = cookies()
  console.log(
    `[ProfilePage ${requestTime}] Available cookies:`,
    cookieStore.getAll().map((c) => c.name),
  )

  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    console.log(`[ProfilePage ${requestTime}] Attempting to get session`)
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError) {
      console.error(`[ProfilePage ${requestTime}] Session error:`, sessionError)
      redirect("/login")
    }

    if (!session?.user) {
      console.log(`[ProfilePage ${requestTime}] No session found, redirecting to login`)
      redirect("/login")
    }

    console.log(`[ProfilePage ${requestTime}] Session found:`, {
      userId: session.user.id,
      email: session.user.email,
      userMetadata: session.user.user_metadata,
      sessionExpiresAt: session.expires_at,
    })

    console.log(`[ProfilePage ${requestTime}] Fetching profile data`)
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single()

    if (profileError) {
      console.error(`[ProfilePage ${requestTime}] Profile error:`, profileError)
    }

    console.log(`[ProfilePage ${requestTime}] Profile data:`, profile)

    const subscriptionPlan = await getSubscriptionPlan(profile?.stripe_customer_id)

    console.log(`[ProfilePage ${requestTime}] Final data:`, {
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
  } catch (error) {
    console.error(`[ProfilePage ${requestTime}] Unexpected error:`, error)
    redirect("/login")
  }
}