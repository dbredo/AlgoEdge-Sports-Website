import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AlgoEdge Sports | Advanced Sports Analytics Platform",
  description:
    "AlgoEdge Sports empowers sports enthusiasts with cutting-edge analytics tools. Create custom algorithms, analyze real-time data, and gain a competitive edge in sports betting and fantasy leagues.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection
          title="Revolutionize Your Sports Analysis with AlgoEdge"
          description="Harness the power of advanced analytics to gain a competitive edge in sports betting and fantasy leagues. Create custom algorithms, analyze real-time data, and make informed decisions with ease."
          cta={
            <Link href="/signup">
              <Button className="h-10 rounded-lg bg-[#3f6d63] hover:bg-[#345c54] px-6 text-[15px] font-medium text-white shadow-md transition-all duration-300 border-none">
                Register Now
              </Button>
            </Link>
          }
        />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}