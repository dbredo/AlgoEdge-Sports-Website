import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto bg-[#3f6d63] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-[#4fd1c5]">Elevate</span> Your Sports Analysis?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We're launching soon. Join the early access list and be part of a smarter era in sports analytics.
            <span className="block mt-4 font-semibold text-[#4fd1c5]">
              ⚡ The first 1,000 people to join the waitlist will get 3 months free on the platform.
            </span>
          </p>
          <div className="flex justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="flash-teal-bg text-[#3f6d63] bg-white px-8 py-3 rounded-full shadow-lg button-hover group"
              >
                Join The Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}