import { CheckoutRedirect } from "@/components/checkout-redirect"

export default function CheckoutPage({ searchParams }: { searchParams: { session_id: string } }) {
  return <CheckoutRedirect sessionId={searchParams.session_id} />
}
