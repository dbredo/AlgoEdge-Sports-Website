"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Wrench,
  BarChart2,
  SlidersHorizontal,
  GitCompare,
  LineChart,
  Smartphone,
  Bot,
  Users,
  Target,
  CheckCircle2,
  Shield,
  Rocket,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#e5e7eb]">
        {/* Hero Section with Gradient Background */}
        <div className="relative bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white pt-28 pb-32 sm:pt-36 sm:pb-40 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-block mb-8 animate-float">
                <div className="p-5 rounded-full bg-white/10 backdrop-blur-sm">
                  <Brain className="h-12 w-12 text-[#4fd1c5]" />
                </div>
              </div>
              <h1 className="text-[48px] sm:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
                Sports Analytics, <span className="text-[#4fd1c5]">Reimagined</span>
              </h1>
              <p className="text-[20px] sm:text-[22px] leading-[1.6] text-white/90 max-w-3xl mx-auto mb-8">
                AlgoEdge Sports empowers everyday fans, bettors, and analysts to harness the power of sports data —
                without writing a single line of code. Our platform lets you build custom algorithms, explore real-time
                and historical stats, and uncover insights designed to give you an edge.
              </p>
              <p className="text-[22px] font-semibold text-[#4fd1c5] mb-12">
                No spreadsheets. No programming. Just results.
              </p>
              <Link href="/waitlist">
                <Button className="h-14 rounded-full bg-white text-[#3f6d63] hover:bg-[#4fd1c5] hover:text-white px-8 text-lg font-medium transition-all group">
                  <Rocket className="mr-2 h-5 w-5" /> Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why AlgoEdge Section */}
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="p-5 rounded-full bg-[#3f6d63]/10 flex-shrink-0 animate-float">
                <Lightbulb className="h-10 w-10 text-[#3f6d63]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
                  Why AlgoEdge?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                  Traditional sports data tools are either too basic or too technical. AlgoEdge bridges the gap:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "No-code, visual tools that make algorithm building accessible",
                    "Real-time and historical data access for deep analysis",
                    "Custom algorithm creation with full control over filters, weights, and scoring",
                    "Built for sports bettors, DFS players, fantasy managers, and analysts",
                    "Always evolving, with a roadmap driven by our community",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#3f6d63] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Can Do Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-[#3f6d63]/10 mb-4 animate-float">
              <Brain className="h-8 w-8 text-[#3f6d63]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
              What You Can Do with AlgoEdge
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our platform gives you the tools to analyze sports data your way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Build Custom Algorithms */}
            <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#3f6d63]/10 mr-4 group-hover:bg-[#3f6d63]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Build Custom Algorithms</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Easily create your own models based on the metrics that matter most to you:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Select from a wide range of player and team stats",
                  "Assign weights and define performance thresholds",
                  "Build your scoring logic visually, no coding required",
                  "Instantly rank teams or players based on your algorithm",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#3f6d63] text-white flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* View Rankings & Model Outputs */}
            <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#3f6d63]/10 mr-4 group-hover:bg-[#3f6d63]/20 transition-colors">
                  <BarChart2 className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">View Rankings & Model Outputs</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Once your algorithm is set, you'll get dynamic, sortable rankings tailored to your criteria. See who
                meets your benchmarks and how they stack up — instantly.
              </p>
              <div className="mt-6 bg-[#3f6d63]/5 rounded-xl p-4 border border-[#3f6d63]/10">
                <div className="flex items-center justify-between mb-2 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2">
                  <span>Rank</span>
                  <span>Team</span>
                  <span>Score</span>
                </div>
                {[
                  { rank: 1, team: "Team A", score: 94.8 },
                  { rank: 2, team: "Team B", score: 89.3 },
                  { rank: 3, team: "Team C", score: 85.1 },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center justify-between py-2 text-gray-800">
                    <span className="font-bold">{item.rank}</span>
                    <span>{item.team}</span>
                    <span className="font-medium text-[#3f6d63]">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customize with Advanced Filters */}
            <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#3f6d63]/10 mr-4 group-hover:bg-[#3f6d63]/20 transition-colors">
                  <SlidersHorizontal className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Customize with Advanced Filters</h3>
              </div>
              <p className="text-gray-700 mb-4">Dive deeper with customizable filters:</p>
              <ul className="space-y-3 mb-4">
                {[
                  "Isolate by team, player, or matchup",
                  "Filter by date ranges, game type, home/away splits, or custom timeframes",
                  "Analyze recent form, trends, or outliers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#3f6d63] text-white flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare Multiple Algorithms */}
            <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#3f6d63]/10 mr-4 group-hover:bg-[#3f6d63]/20 transition-colors">
                  <GitCompare className="h-6 w-6 text-[#3f6d63]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Compare Multiple Algorithms</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Test different strategies by running multiple algorithms side by side. See how small changes impact
                rankings — and which models perform best under different scenarios.
              </p>
              <div className="mt-4 bg-[#3f6d63]/5 rounded-xl p-4 border border-[#3f6d63]/10">
                <div className="flex items-center justify-between mb-2 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2">
                  <span>Model</span>
                  <span>Top Pick</span>
                  <span>Accuracy</span>
                </div>
                {[
                  { model: "Model A", pick: "Team X", accuracy: "68%" },
                  { model: "Model B", pick: "Team Y", accuracy: "72%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 text-gray-800">
                    <span>{item.model}</span>
                    <span>{item.pick}</span>
                    <span className="font-medium text-[#3f6d63]">{item.accuracy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Analytics */}
          <div className="bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white rounded-[28px] p-8 shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Enhanced Analytics (Pro & Premium Tools)</h3>
              </div>
              <p className="mb-4 text-white/90">Gain deeper insights with advanced tools:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Compare performance over time",
                  "Identify stat correlations",
                  "Track changes in value based on real-time events",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 transform hover:translate-y-[-5px] transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-white text-[#3f6d63] flex items-center justify-center text-xs mr-3 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data You Can Trust */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="p-5 rounded-full bg-[#3f6d63]/10 flex-shrink-0 animate-float">
                <Shield className="h-10 w-10 text-[#3f6d63]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
                  Data You Can Trust
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                  We source reliable, real-time data from trusted providers and cover a wide range of sports, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "NFL",
                    "NBA",
                    "NHL",
                    "MLB",
                    "College Football (NCAA)",
                    "College Basketball (NCAA)",
                    "Premier League",
                    "La Liga",
                    "Bundesliga",
                  ].map((sport, index) => (
                    <div
                      key={index}
                      className="bg-[#3f6d63]/5 rounded-xl p-4 text-center transform hover:translate-y-[-5px] transition-all duration-300 border border-[#3f6d63]/10"
                    >
                      <span className="font-medium text-gray-800">{sport}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 italic">
                  More leagues and advanced stat types are being added regularly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Built for Growth */}
        <div className="container mx-auto px-4 py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5]">
              Built for Growth
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're not just building a tool — we're building a long-term platform for modern sports analysis. Here's
              what's on the horizon:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <LineChart className="h-6 w-6 text-white" />,
                title: "Historical Backtesting",
                description: "Analyze how your algorithms would have performed over past seasons",
                status: "Coming Q4 2025",
              },
              {
                icon: <Smartphone className="h-6 w-6 text-white" />,
                title: "Mobile App",
                description: "Access your models on the go",
                status: "In Development",
              },
              {
                icon: <Bot className="h-6 w-6 text-white" />,
                title: "AI-Powered Insights",
                description: "Get machine-learned suggestions and anomaly detection",
                status: "Planning Phase",
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Community & Sharing",
                description: "Collaborate, share your models, and learn from others",
                status: "Coming Soon",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3f6d63] to-[#4fd1c5] rounded-[28px] p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white/20 mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mt-1">
                      {item.status}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 pl-14">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Community */}
        <div className="container mx-auto px-4 py-24">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="p-5 rounded-full bg-[#3f6d63]/10 flex-shrink-0 animate-float">
                <Users className="h-10 w-10 text-[#3f6d63]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Support & Community</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                  We're here to help you build smarter. Every AlgoEdge user gets access to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    "Our growing community forum",
                    "Tutorials and platform walkthroughs",
                    "Direct support (tiered based on your access level)",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#3f6d63]/5 rounded-xl p-4 border border-[#3f6d63]/10 transform hover:translate-y-[-5px] transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#3f6d63] mr-3 flex-shrink-0" />
                        <span className="text-gray-800">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Edge Starts Here */}
        <div className="container mx-auto px-4 pb-24">
          <div className="bg-gradient-to-br from-[#3f6d63] to-[#345c54] text-white rounded-[32px] p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <div className="p-5 rounded-full bg-white/10 inline-block mb-6 animate-float">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Edge Starts Here</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
                AlgoEdge is more than just a stats site. It's a smarter, faster, and more intuitive way to analyze
                sports — and it's built for people who want to make data-driven decisions without technical friction.
              </p>
              <Link href="/waitlist">
                <Button className="group h-14 rounded-full bg-white text-[#3f6d63] px-8 text-lg font-medium transition-all hover:bg-[#4fd1c5] hover:text-white">
                  <Rocket className="mr-2 h-5 w-5" /> Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>

      <SiteFooter />
    </>
  )
}