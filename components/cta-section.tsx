import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-[#3f6d63] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Sports Analysis?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of sports enthusiasts who have gained a competitive edge with AlgoEdge. Start your free trial
          today and experience the power of advanced sports analytics.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#3f6d63] hover:bg-gray-100">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#345c54]">
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
