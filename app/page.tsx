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

export default function HomePage() {
  // Create the CTA button for the hero section
  const heroCta = (
    <Link href="/waitlist">
      <Button className="group h-11 rounded-md bg-[#3f6d63] hover:bg-[#345c54] px-6 text-[15px] font-medium text-white button-hover flex items-center">
        <Rocket className="mr-2 h-4 w-4" /> Join the waitlist
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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