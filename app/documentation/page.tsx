import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
  BookOpen,
  Wrench,
  Brain,
  Database,
  Lightbulb,
  BookText,
  HelpCircle,
  ArrowRight,
  Filter,
  Weight,
  BarChart2,
  Clock,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | AlgoEdge Sports",
  description: "Learn how to use AlgoEdge Sports to build powerful sports models and make the most of your data.",
}

export default function DocumentationPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              AlgoEdge Sports
              <br />
              <span className="text-[#3f6d63]">Documentation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Everything you need to get started, build powerful sports models, and make the most of your data — with
              zero coding required.
            </p>
          </div>

          {/* Documentation Content */}
          <div className="flex justify-center pb-24">
            <div
              className="w-full max-w-4xl rounded-[28px] p-8 md:p-10"
              style={{
                backgroundColor: "#f0f2f5",
                border: "2px solid #9ca3af",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-[#3f6d63]/10">
                  <BookOpen className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Welcome to the AlgoEdge Sports Documentation Hub</h2>
                <p className="text-gray-700 mt-2">
                  Here you'll find everything you need to get started, build powerful sports models, and make the most
                  of your data.
                </p>
              </div>

              <div className="space-y-12">
                {/* Platform Overview Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <Wrench className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Platform Overview</h2>
                  </div>

                  <p className="mb-4 text-gray-700">What you can do with AlgoEdge:</p>

                  <ul className="space-y-3 mb-4">
                    {[
                      "Build custom algorithms using filters, weights, and scoring rules",
                      "Compare team and player data across multiple seasons",
                      "Set thresholds for specific stats",
                      "Rank results from highest to lowest (or lowest to highest)",
                      "Analyze matchups and trends in real-time",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#3f6d63] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-700">
                    Whether you're building a model for fantasy sports, betting research, or just to geek out on stats —
                    we've got you covered.
                  </p>
                </section>

                {/* How to Build an Algorithm Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <Brain className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">How to Build an Algorithm</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3f6d63] text-white flex items-center justify-center mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Select Your Sport</h3>
                        <p className="text-gray-700">Choose from available leagues (e.g., NFL, NBA, MLB, NHL, etc.)</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3f6d63] text-white flex items-center justify-center mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Pick Your Data Points</h3>
                        <p className="text-gray-700">
                          Choose stats like: win %, goals per game, turnover ratio, red zone efficiency, etc.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3f6d63] text-white flex items-center justify-center mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Set Rules & Filters</h3>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 space-y-2 mt-2">
                          <div className="flex items-center">
                            <Filter className="h-4 w-4 text-[#3f6d63] mr-2" />
                            <p className="text-gray-700 text-sm">Example: "Points per game greater than 100"</p>
                          </div>
                          <div className="flex items-center">
                            <Filter className="h-4 w-4 text-[#3f6d63] mr-2" />
                            <p className="text-gray-700 text-sm">Example: "Turnovers per game less than 12"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3f6d63] text-white flex items-center justify-center mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Apply Weights (Optional)</h3>
                        <div className="flex items-center">
                          <Weight className="h-4 w-4 text-[#3f6d63] mr-2" />
                          <p className="text-gray-700">Assign more importance to certain metrics.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3f6d63] text-white flex items-center justify-center mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Run Your Model</h3>
                        <div className="flex items-center">
                          <BarChart2 className="h-4 w-4 text-[#3f6d63] mr-2" />
                          <p className="text-gray-700">
                            See real-time results based on your criteria. Save and re-run models anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Glossary Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <Database className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Data Glossary</h2>
                  </div>

                  <p className="mb-4 text-gray-700">Learn what each stat means and how it's calculated.</p>

                  <Link
                    href="/glossary"
                    className="inline-flex items-center text-[#3f6d63] font-medium hover:text-[#345c54] transition-colors"
                  >
                    View the full glossary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </section>

                {/* Tips & Best Practices Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <Lightbulb className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Tips & Best Practices</h2>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Start with simple rules and refine as you go",
                      "Use weights only when you're confident in how each stat should impact the outcome",
                      "Save multiple versions of your algorithm for comparison",
                      "Keep an eye on recency — recent form often matters more than season averages",
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="p-1 rounded-full bg-[#3f6d63]/10 mr-2 mt-0.5">
                          <Lightbulb className="h-3 w-3 text-[#3f6d63]" />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Tutorials Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <BookText className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Tutorials</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "How to Build a Basic Model", time: "5 min" },
                      { title: "Using Weights vs. Filters", time: "7 min" },
                      { title: "Finding Value in Underdogs", time: "10 min" },
                      { title: "Exporting Data for Offline Use", time: "3 min" },
                    ].map((tutorial, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <div className="mr-3">
                          <BookText className="h-5 w-5 text-[#3f6d63]" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-900 font-medium">{tutorial.title}</p>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {tutorial.time}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Need Help Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#3f6d63]/10 mr-3">
                      <HelpCircle className="h-6 w-6 text-[#3f6d63]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Need Help?</h2>
                  </div>

                  <p className="text-gray-700">
                    Check out our{" "}
                    <Link href="/faq" className="text-[#3f6d63] hover:text-[#345c54]">
                      FAQ
                    </Link>
                    , or reach out to{" "}
                    <a href="mailto:support@algoedgesports.com" className="text-[#3f6d63] hover:text-[#345c54]">
                      support@algoedgesports.com
                    </a>{" "}
                    — we're here to help.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

