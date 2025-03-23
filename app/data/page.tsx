import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Users, Database, Activity, TrendingUp, Globe, Zap, Check, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Data/API | AlgoEdge Sports",
  description: "Access comprehensive sports data and powerful API solutions for your analysis needs.",
}

const features = [
  {
    title: "Player Statistics",
    description:
      "Individual performance metrics across multiple sports including scoring averages, player props, and advanced stats like efficiency ratings.",
    icon: Users,
  },
  {
    title: "Team Data",
    description: "Matchup records, win probabilities, and trends for head-to-head analysis.",
    icon: Database,
  },
  {
    title: "Game Data",
    description: "Real-time game scores, play-by-play updates, and injury reports.",
    icon: Activity,
  },
  {
    title: "Betting Insights",
    description: "Public betting trends, line movement, and over/under stats.",
    icon: TrendingUp,
  },
]

const apiFeatures = [
  {
    title: "Built with Open Data in Mind",
    description: "All of our APIs use open data, ensuring that anything you build is independent and adaptable.",
    icon: Globe,
  },
  {
    title: "Scale Seamlessly with Microsoft Azure",
    description:
      "AlgoEdge's cloud-native API infrastructure scales effortlessly, limited only by your creativity and budget.",
    icon: Zap,
  },
]

const benefits = [
  {
    title: "Real-Time Access",
    description:
      "Our extensive dataset supports analysis, decision-making, and risk management. Access real-time data to power your models, applications, or store it for future use.",
    icon: Activity,
  },
  {
    title: "Affordable Pricing",
    description:
      "Choose from customizable packages based on the features you need — no paying for extras you won't use. Designed to grow with your goals, whether you're just getting started or scaling up.",
    icon: Database,
  },
]

const quickStartFeatures = [
  "Get real-time data access within minutes of signing up",
  "No software download required to get started",
  "User-friendly platform with intuitive setup",
  "Seamless integration with your existing workflow",
]

export default function DataPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Unmatched Sports Data to
              <span className="text-[#3f6d63]"> Fuel Your Analysis</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              AlgoEdge provides a comprehensive suite of sports data, combining historical trends, real-time updates,
              and advanced analytics to support your decision-making.
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

          {/* Feature Cards */}
          <div className="grid gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-[28px] bg-white p-8"
                style={{
                  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <feature.icon className="h-8 w-8 text-[#3f6d63]" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* API Visualization Section */}
        <section className="bg-gray-50 pt-12 pb-24">
          <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1100px] overflow-hidden rounded-3xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0IcizOBt1ceP7ZBZeArPl1MgyIF9tq.png"
                alt="AlgoEdge API Visualization"
                className="h-auto w-full"
              />
            </div>

            <div className="mt-24 grid gap-24 lg:grid-cols-2">
              {/* API Capabilities */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-[#3f6d63]/10 px-6 py-2">
                  <Globe className="mr-2 h-5 w-5 text-[#3f6d63]" />
                  <h2 className="text-xl font-semibold text-[#3f6d63]">API Capabilities</h2>
                </div>
                <p className="text-[#6b7280] text-lg">
                  AlgoEdge provides exclusive access to a powerful sports data API, designed to deliver real-time
                  information and advanced analytics directly to you.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10">
                      <Check className="h-5 w-5 text-[#3f6d63]" />
                    </div>
                    <span className="text-[#6b7280]">
                      Access Comprehensive Data: Tap into a wide range of sports data, from player and team statistics
                      to game scores and betting insights.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10">
                      <Check className="h-5 w-5 text-[#3f6d63]" />
                    </div>
                    <span className="text-[#6b7280]">
                      Customizable Reports: Easily retrieve specific data tailored to your needs, whether it's player
                      performance, matchup trends, or real-time game updates.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10">
                      <Check className="h-5 w-5 text-[#3f6d63]" />
                    </div>
                    <span className="text-[#6b7280]">
                      Stay Ahead of the Curve: Gain the competitive edge with up-to-the-minute stats, game predictions,
                      and trends to inform your analysis and decisions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* API Offerings */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-[#3f6d63]/10 px-6 py-2">
                  <Zap className="mr-2 h-5 w-5 text-[#3f6d63]" />
                  <h2 className="text-xl font-semibold text-[#3f6d63]">Our API Offerings</h2>
                </div>
                <p className="text-[#6b7280] text-lg">
                  We offer a broad range of APIs to support your needs. We partner with leading providers of content, as
                  well as our own curated information, to make it easier to implement and maintain.
                </p>
                <div className="space-y-8">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">Built with Open Data in Mind</h3>
                    <p className="mt-3 text-[#6b7280]">
                      All of our APIs use open data, ensuring that anything you build is independent and adaptable.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">Scale Seamlessly</h3>
                    <p className="mt-3 text-[#6b7280]">
                      AlgoEdge's cloud-native API infrastructure scales effortlessly, limited only by your creativity
                      and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[40px] font-bold text-gray-900">Why Choose AlgoEdge?</h2>
              <p className="mt-8 max-w-[800px] text-[18px] leading-[1.6] text-[#6b7280]">
                Gain instant, on-demand access to a wide array of sports data through our powerful API solutions. Get
                the insights you need when you need them—securely, and with fewer resources than traditional data feeds.
              </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {/* Quick Start Card */}
              <div className="group rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f6d63]/10">
                  <Shield className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="mt-6 text-[22px] font-semibold text-gray-900">Start Quickly, For Free</h3>
                <ul className="mt-6 space-y-4">
                  {quickStartFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3f6d63]/10">
                        <Check className="h-4 w-4 text-[#3f6d63]" />
                      </div>
                      <span className="text-[#6b7280]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real-Time Access Card */}
              <div className="group rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f6d63]/10">
                  <Activity className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="mt-6 text-[22px] font-semibold text-gray-900">Real-Time Access</h3>
                <p className="mt-6 text-[#6b7280] leading-relaxed">
                  Our extensive dataset supports analysis, decision-making, and risk management. Access real-time data
                  to power your models, applications, or store it for future use.
                </p>
              </div>

              {/* Affordable Pricing Card */}
              <div className="group rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f6d63]/10">
                  <Database className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="mt-6 text-[22px] font-semibold text-gray-900">Affordable Pricing</h3>
                <p className="mt-6 text-[#6b7280] leading-relaxed">
                  Choose from customizable packages based on the features you need — no paying for extras you won't use.
                  Designed to grow with your goals, whether you're just getting started or scaling up.
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center">
              <p className="text-center text-[18px] text-[#6b7280]">
                Looking for a no-code option or want to see how our products work?
                <br />
                Contact us for a demo or explore our demo options today!
              </p>
              <Link href="/register" target="_blank" rel="noopener noreferrer">
                <Button className="group mt-10 h-14 rounded-full bg-[#3f6d63] px-8 text-lg font-medium text-white transition-all hover:bg-[#345c54]">
                  Join the waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
