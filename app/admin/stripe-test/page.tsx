import { StripeTest } from "@/components/stripe-test"

export default function StripeTestPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Stripe Integration Test</h1>
      <StripeTest />
    </div>
  )
}