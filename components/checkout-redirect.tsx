"use client"

import { useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_ALGOEDGE!)

interface CheckoutRedirectProps {
  sessionId: string
}

export function CheckoutRedirect({ sessionId }: CheckoutRedirectProps) {
  useEffect(() => {
    const redirectToCheckout = async () => {
      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error("Redirect to checkout failed:", error)
        }
      }
    }
    redirectToCheckout()
  }, [sessionId])

  return <div>Redirecting to checkout...</div>
}
