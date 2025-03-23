"use client"

import { useState, type React } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle, User, Mail, Lock, CreditCard, ArrowRight } from "lucide-react"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Full Name
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
              placeholder="Create a password (min. 8 characters)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
            Confirm Password
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
              placeholder="Confirm your password"
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center space-x-3 mb-6">
          <CreditCard className="h-6 w-6 text-[#3f6d63]" />
          <h2 className="text-2xl font-bold text-gray-900">Select a Subscription Plan</h2>
        </div>
        <SubscriptionPlans onSelectPlan={handleSelectPlan} selectedPlanId={selectedPlan?.id || null} />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="pt-4">
        <Button
          type="submit"
          disabled={loading || !selectedPlan}
          className="w-full h-12 rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54] transition-all"
        >
          {loading ? "Processing..." : "Register and Subscribe"}
          {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>

        <div className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  )
}
