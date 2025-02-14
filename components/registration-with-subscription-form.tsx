"use client"

import { useState, type React } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle } from "lucide-react"
import { SubscriptionPlans, type Plan } from "@/components/subscription-plans"
import { loadStripe } from "@stripe/stripe-js"
import { useAuthCooldown } from "@/lib/auth-utils"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_ALGOEDGE!)

export function RegistrationWithSubscriptionForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const router = useRouter()
  const { canAttempt, recordAttempt } = useAuthCooldown()

  const handleSelectPlan = (plan: Plan) => {
    console.log("Selected plan:", plan)
    setSelectedPlan(plan)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canAttempt) {
      toast({
        title: "Too many attempts",
        description: "Please wait before trying again.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setError(null)

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match")
      }

      if (!selectedPlan) {
        throw new Error("Please select a subscription plan")
      }

      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (authError) throw authError

      if (!authData.user) {
        throw new Error("Registration failed - no user created")
      }

      // Create Stripe Checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: selectedPlan.id,
          userId: authData.user.id,
          userEmail: email,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          throw error
        }
      }
    } catch (error) {
      recordAttempt()
      console.error("Registration error:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      toast({
        title: "Registration Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Select a Subscription Plan</h2>
        <SubscriptionPlans onSelectPlan={handleSelectPlan} selectedPlanId={selectedPlan?.id || null} />
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      <Button type="submit" disabled={loading || !selectedPlan} className="w-full">
        {loading ? "Processing..." : "Register and Subscribe"}
      </Button>
    </form>
  )
}
