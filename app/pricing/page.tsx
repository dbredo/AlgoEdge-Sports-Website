import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { FutureUpdates } from "@/components/future-updates"
import { SpecialOffer } from "@/components/special-offer"

export const metadata: Metadata = {
  title: "Pricing | AlgoEdge Sports",
  description:
    "Choose the perfect plan for your sports analytics needs with AlgoEdge Sports' flexible pricing options.",
}

const plans = [
  {
    name: "Basic",
    description: "Perfect for casual sports fans",
    price: "$9.99",
    features: [
      "Access to basic data and filters (e.g., viewing stats, basic sorting)",
      "One custom algorithm (e.g., variable selection, assigning weights, setting thresholds)",
      "Ability to view rankings and output",
      "Community forum and basic support",
    ],
  },
  {
    name: "Pro",
    description: "For serious sports analysts",
    price: "$29.99",
    features: [
      "All features of the Basic Plan",
      "Access to advanced data and customizable filters",
      "Three custom algorithm creation (e.g., variable selection, assigning weights, setting thresholds)",
      "Ability to compare multiple algorithms",
      "Enhanced analytics tools",
      "Priority customer support or chat",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "For professional sports analysts and organizations",
    price: "$59.99",
    features: [
      "All features of the Pro Plan",
      "Access to exclusive, real-time data feeds (e.g., live player stats, game scores)",
      "Unlimited custom algorithms (e.g., variable selection, adding weights, setting thresholds)",
      "Personalized consulting sessions on algorithm building",
      "Access to early releases, beta features, and priority access to new tools",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Flexible Plans for Every Sports Enthusiast
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Choose the plan that best fits your needs. All plans include our core analytics features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 pb-24 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border bg-white p-8 shadow-sm ${
                  plan.popular ? "border-[#3f6d63] ring-1 ring-[#3f6d63]" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#3f6d63] px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-[15px] text-gray-500">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#3f6d63]" />
                        <span className="text-[15px] leading-relaxed text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`mt-8 h-11 w-full ${
                        plan.popular
                          ? "bg-[#3f6d63] text-white hover:bg-[#345c54]"
                          : "border-2 border-[#3f6d63] bg-white text-[#3f6d63] hover:bg-gray-50"
                      }`}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer Section */}
          <SpecialOffer />

          {/* Future Updates Section */}
          <FutureUpdates />
        </div>
      </main>
    </>
  )
}
