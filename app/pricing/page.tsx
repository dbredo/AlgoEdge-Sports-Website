import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa"
import { LineChart, Zap, MessageSquare, Clock } from "lucide-react"

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
      <main className="pt-[72px] bg-[#e5e7eb]">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Flexible Plans for Every
              <br />
              <span className="text-[#3f6d63]">Sports Enthusiast</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Choose the plan that best fits your needs. All plans include our core analytics features.
            </p>
            <div className="mt-12 flex justify-center">
              <Link href="/register">
                <Button className="group h-14 rounded-full bg-[#3f6d63] px-8 text-lg font-medium text-white transition-all hover:bg-[#345c54]">
                  Join the waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 pb-24 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[28px] p-8`}
                style={{
                  backgroundColor: "#f0f2f5",
                  border: plan.popular ? "4px solid #3f6d63" : "2px solid #9ca3af",
                  boxShadow: plan.popular ? "0 8px 20px rgba(0, 0, 0, 0.2)" : "0 6px 16px rgba(0, 0, 0, 0.15)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#3f6d63] px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-[15px] text-gray-500">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10 mt-0.5">
                          <Check className="h-3 w-3 text-[#3f6d63]" />
                        </div>
                        <span className="text-[15px] leading-relaxed text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`mt-8 h-11 w-full rounded-full ${
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

          {/* Why Choose Us Section */}
          <section className="py-16 bg-[#f0f2f5] rounded-3xl mb-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4fd1c5] to-[#3f6d63]">
                Why Choose AlgoEdge Sports?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Customizable Algorithms",
                    description: "Create and fine-tune your own algorithms without any coding knowledge required.",
                  },
                  {
                    title: "Comprehensive Data",
                    description: "Access a wide range of sports data, from player statistics to game insights.",
                  },
                  {
                    title: "Affordable Plans",
                    description: "Choose from flexible pricing options designed to fit your specific needs and budget.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-[28px]"
                    style={{
                      backgroundColor: "#e5e7eb",
                      border: "2px solid #9ca3af",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Special Offer Section - Updated to match site style */}
          <section className="mb-24">
            <div className="container mx-auto px-4">
              <div
                className="rounded-[28px] overflow-hidden border-2 border-[#9ca3af]"
                style={{
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="bg-[#3f6d63] text-white p-8">
                  <h2 className="text-2xl font-bold">Special Offer – Get a Free Month!</h2>
                  <p className="text-gray-200">Share your AlgoEdge experience and get rewarded!</p>
                </div>
                <div className="bg-[#f0f2f5] p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">How to Participate:</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Post about AlgoEdge Sports on two social media platforms</li>
                        <li>Share how AlgoEdge Sports helps your sports analysis or algorithm creation</li>
                        <li>Tag the official AlgoEdge Sports account in your posts</li>
                        <li>
                          Email post links/screenshots to{" "}
                          <span className="font-semibold">promo@algoedgesports.com</span>
                        </li>
                        <li>Once verified, your next month's subscription fee will be waived!</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Eligibility Criteria:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Must post on two different social media platforms</li>
                        <li>Social media accounts must have at least 50 followers, friends, or subscribers</li>
                      </ul>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Eligible Platforms:</h4>
                        <div className="flex space-x-4">
                          <a href="https://x.com/AlgoEdgeSports" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl text-[#1DA1F2]" />
                          </a>
                          <a href="https://www.instagram.com/algoedgesports" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl text-[#E1306C]" />
                          </a>
                          <a href="https://www.facebook.com/algoedgesports" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl text-[#4267B2]" />
                          </a>
                          <a href="https://www.tiktok.com/@algoedgesports" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-2xl text-[#000000]" />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/algoedge-sports"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin className="text-2xl text-[#0077B5]" />
                          </a>
                          <a href="https://www.youtube.com/@algoedgesports" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-2xl text-[#FF0000]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button className="group rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54]">
                      Share Your AlgoEdge Experience Today!{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Updates Section - Styled to match site */}
          <section className="py-16 bg-[#f0f2f5] rounded-3xl mb-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4fd1c5] to-[#3f6d63]">
                Future Updates & Features Coming Soon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Backtesting for Pro & Premium Users",
                    description: "Analyze historical performance of your algorithms",
                    icon: "LineChart",
                    status: "Coming Q4 2025",
                  },
                  {
                    title: "Mobile Application",
                    description: "Access your data on the go",
                    icon: "Zap",
                    status: "In Development",
                  },
                  {
                    title: "Advanced AI-Powered Insights",
                    description: "Leverage machine learning for deeper analysis",
                    icon: "MessageSquare",
                    status: "Planning Phase",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-[28px]"
                    style={{
                      backgroundColor: "#e5e7eb",
                      border: "2px solid #9ca3af",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[#4fd1c5]/10 to-[#3f6d63]/10 hover:from-[#4fd1c5]/20 hover:to-[#3f6d63]/20 transition-colors">
                        {feature.icon === "LineChart" && <LineChart className="h-8 w-8 text-[#3f6d63]" />}
                        {feature.icon === "Zap" && <Zap className="h-8 w-8 text-[#3f6d63]" />}
                        {feature.icon === "MessageSquare" && <MessageSquare className="h-8 w-8 text-[#3f6d63]" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                    <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{feature.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <Button className="group rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54]">
                    Have a feature request? Let us know!{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 mb-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to elevate your sports analysis?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join AlgoEdge Sports today and transform the way you analyze sports data with our powerful,
                user-friendly platform.
              </p>
              <Link href="/register">
                <Button className="group h-14 rounded-full bg-[#3f6d63] px-8 text-lg font-medium text-white transition-all hover:bg-[#345c54]">
                  Join the waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
