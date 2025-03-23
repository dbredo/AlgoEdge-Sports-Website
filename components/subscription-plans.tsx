"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export interface Plan {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
  popular?: boolean
}

const PLANS: Plan[] = [
  {
    id: "price_1QkUBPG6KmMfCiR87bv1Su72",
    name: "Basic",
    price: 9.99,
    interval: "month",
    features: ["Access to basic data and filters", "One custom algorithm", "Community forum access"],
  },
  {
    id: "price_1QkUDJG6KmMfCiR8xHzKtKbj",
    name: "Pro",
    price: 29.99,
    interval: "month",
    features: ["All Basic features", "Three custom algorithms", "Advanced analytics tools", "Priority support"],
    popular: true,
  },
  {
    id: "price_1QkUGMG6KmMfCiR8aaIA0nTs",
    name: "Premium",
    price: 59.99,
    interval: "month",
    features: ["All Pro features", "Unlimited custom algorithms", "Real-time data feeds", "Personalized consulting"],
  },
]

interface SubscriptionPlansProps {
  onSelectPlan: (plan: Plan) => void
  selectedPlanId: string | null
}

export function SubscriptionPlans({ onSelectPlan, selectedPlanId }: SubscriptionPlansProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`relative rounded-[28px] p-6 flex flex-col h-full`}
          style={{
            backgroundColor: "#f0f2f5",
            border:
              selectedPlanId === plan.id
                ? "4px solid #3f6d63"
                : plan.popular
                  ? "3px solid #3f6d63"
                  : "2px solid #9ca3af",
            boxShadow:
              plan.popular || selectedPlanId === plan.id
                ? "0 8px 20px rgba(0, 0, 0, 0.2)"
                : "0 6px 16px rgba(0, 0, 0, 0.15)",
          }}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-[#3f6d63] px-4 py-1 text-sm font-medium text-white">
              Most Popular
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500">/{plan.interval}</span>
            </div>
          </div>

          <div className="flex-grow mb-6">
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10 mt-0.5">
                    <Check className="h-3 w-3 text-[#3f6d63]" />
                  </div>
                  <span className="text-[15px] leading-relaxed text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={() => {
              console.log("Selecting plan:", plan)
              onSelectPlan(plan)
            }}
            className={`rounded-full h-11 ${
              selectedPlanId === plan.id
                ? "bg-[#3f6d63] text-white hover:bg-[#345c54]"
                : "border-2 border-[#3f6d63] bg-white text-[#3f6d63] hover:bg-gray-50"
            }`}
          >
            {selectedPlanId === plan.id ? "Selected" : `Choose ${plan.name}`}
          </Button>
        </div>
      ))}
    </div>
  )
}
