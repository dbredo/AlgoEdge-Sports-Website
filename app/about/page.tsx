import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Heart, Lightbulb, Users, Target, Share2, Shield, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | AlgoEdge Sports",
  description:
    "Learn about AlgoEdge Sports' mission to empower sports enthusiasts with cutting-edge data analytics tools and our commitment to making a positive impact.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        {/* Hero Banner */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20us%20_%20AlgoEdge-hcDssrZzd0afxsddGJXYYsprMXlekI.webp"
            alt="AlgoEdge Sports Analytics Visualization"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-4xl">
              Empower Sports Enthusiasts with the Power of Data
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At AlgoEdge Sports, our mission is to empower sports enthusiasts, analysts, and businesses with
              cutting-edge data and tools that transform the way sports are analyzed. By providing access to
              comprehensive player, team, and game statistics, we help users make informed, data-driven decisions with
              confidence. We aim to bridge the gap between complex sports analytics and accessible insights, offering
              both depth and simplicity to fuel innovation and improve outcomes in sports analysis and decision-making.
            </p>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Innovation",
                  description:
                    "We are committed to continuously advancing the tools, data, and technology that power our platform.",
                  icon: Lightbulb,
                },
                {
                  title: "Accessibility",
                  description:
                    "We believe that sports analytics should be accessible to everyone—from casual fans to professional analysts.",
                  icon: Users,
                },
                {
                  title: "Accuracy",
                  description:
                    "Our data is sourced from trusted providers and constantly updated to provide the most accurate insights.",
                  icon: Target,
                },
                {
                  title: "Collaboration",
                  description: "We value the power of community and believe in fostering a collaborative environment.",