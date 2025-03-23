import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart2,
  Filter,
  GitCompare,
  LineChart,
  Zap,
  Brain,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Join the Waitlist | AlgoEdge Sports",
  description:
    "Be among the first to experience AlgoEdge Sports. Join our waitlist for early access to our no-code sports analytics platform.",
}

export default function WaitlistPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#e5e7eb]">
        {/* Hero Section with Gradient Background */}
        <div className="relative bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[48px] sm:text-[56px] font-bold leading-[1.1] tracking-tight mb-6">
                Ready to Elevate Your <span className="text-[#4fd1c5]">Sports Analysis?</span>
              </h1>
              <p className="text-[18px] sm:text-[20px] leading-[1.6] text-white/90 max-w-3xl mx-auto mb-8">
                We're launching soon. Join the early access list and be part of a smarter era in sports analytics —
                where real data drives better results.
              </p>
              <div className="inline-flex items-center bg-[#4fd1c5]/20 px-6 py-3 rounded-full text-[#4fd1c5] font-semibold mb-10">
                <Zap className="h-5 w-5 mr-2" />
                The first 1,000 to join the waitlist will get 3 months free on the platform.
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#e5e7eb] to-transparent"></div>
        </div>

        {/* Waitlist Form Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[28px] p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Join the Waitlist</h2>
              <WaitlistForm />
              <p className="text-sm text-gray-500 mt-4 text-center">
                We'll only email you with early access and product updates. No spam.
              </p>
            </div>
          </div>
        </div>

        {/* What Is AlgoEdge Sports Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 rounded-full bg-[#3f6d63]/10">
                <BarChart2 className="h-10 w-10 text-[#3f6d63]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
              What Is AlgoEdge Sports?
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Custom sports analytics. No code. No spreadsheets. No hassle.
            </p>

            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              AlgoEdge lets you build your own models, run your own rankings, and find hidden value — all through a
              simple, no-code platform. Whether you're into betting, fantasy, or data-driven sports insight, AlgoEdge
              gives you the tools to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <Filter className="h-6 w-6 text-[#3f6d63]" />,
                  title: "Build custom algorithms",
                  description: "Create your own models using your preferred stat filters and weights",
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-[#3f6d63]" />,
                  title: "View real-time insights",
                  description: "See rankings, outputs, and matchups as they happen",
                },
                {
                  icon: <GitCompare className="h-6 w-6 text-[#3f6d63]" />,
                  title: "Compare multiple models",
                  description: "Test different strategies side-by-side to find what works best",
                },
                {
                  icon: <LineChart className="h-6 w-6 text-[#3f6d63]" />,
                  title: "Explore performance trends",
                  description: "Analyze data across recent games, seasons, and more",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-[#3f6d63]/10 mr-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white rounded-[20px] p-6 shadow-lg flex items-center">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <p className="text-white/90 font-medium">Discover deeper trends with future AI-powered insights</p>
            </div>
          </div>
        </section>

        {/* Why Join the Waitlist Now Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 rounded-full bg-[#3f6d63]/10">
                  <Clock className="h-10 w-10 text-[#3f6d63]" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
                Why Join the Waitlist Now?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Be first in line for platform access",
                  "Help shape the product during beta",
                  "Unlock 3 months free if you're in the first 1,000",
                  "Get early access to our mobile app and backtesting tools",
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-6 bg-[#f0f2f5] rounded-[20px] border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-[#3f6d63] mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#3f6d63]/5 rounded-[20px] p-8 border border-[#3f6d63]/20">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-[#3f6d63]/20">
                    <Target className="h-6 w-6 text-[#3f6d63]" />
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium">
                  Early adopters will have a direct line to our product team, helping us build the features you need
                  most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
              How We're Different
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Most tools hand you predictions. AlgoEdge hands you the engine.
            </p>

            <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">You control the data.</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Choose the stats that matter",
                    description: "Select from hundreds of metrics across major sports",
                  },
                  {
                    title: "Assign weights, set thresholds",
                    description: "Fine-tune your model with precise controls",
                  },
                  {
                    title: "Rank teams, players, or games your way",
                    description: "Create custom leaderboards based on your criteria",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#f0f2f5] rounded-[20px] p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#3f6d63] mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Visualize outputs instantly",
                    description: "See your results in real-time with intuitive charts and tables",
                  },
                  {
                    title: "Evolve your models with real-time updates",
                    description: "Refine your approach as new data becomes available",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#f0f2f5] rounded-[20px] p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#3f6d63] mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-4">No code. Just smarter insights.</p>
              <p className="text-gray-700 max-w-2xl mx-auto">
                AlgoEdge Sports is designed for everyone from casual fans to professional analysts. Our intuitive
                interface makes powerful sports analytics accessible to all.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your edge?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join the waitlist today and take control of your sports analysis.
              </p>
              <Link href="#top" className="inline-block">
                <Button className="group h-14 rounded-full bg-white text-[#3f6d63] px-8 text-lg font-medium transition-all hover:bg-[#4fd1c5] hover:text-white">
                  Join the Waitlist
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