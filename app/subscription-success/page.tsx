import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SubscriptionSuccessContent } from "@/components/subscription-success-content"

export default function SubscriptionSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Subscription Successful!</h1>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <SubscriptionSuccessContent />
        </Suspense>
      </main>
    </>
  )
}
