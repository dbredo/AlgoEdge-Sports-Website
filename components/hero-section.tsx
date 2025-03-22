import { Button } from "@/components/ui/button"
import Link from "next/link"
import type React from "react"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  cta: React.ReactNode
}

export function HeroSection({ title, description, cta }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white mt-32">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#3f6d63]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3f6d63]/10 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-8xl container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-0 pb-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
              <span className="text-[#3f6d63]">Revolutionize</span> Your
              <br />
              Sports Analysis with
              <br />
              AlgoEdge
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 max-w-xl">
              Harness the power of advanced analytics to gain a competitive edge in sports betting and fantasy leagues.
              Create custom algorithms, analyze real-time data, and make informed decisions with ease.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {cta}
              <Link href="/features">
                <Button
                  variant="outline"
                  className="h-11 rounded-md bg-[#4fd1c5] hover:bg-[#45bdb2] px-6 text-[15px] font-medium text-white button-hover group border-none"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[1.33] w-full pt-8 pb-8">
            <div className="animate-float-small overflow-visible p-4 rounded-2xl bg-[#3f6d63]/20 backdrop-blur-sm">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page%20Picture%20-%20AlgoEdge-ZeFhphJv62jCY9yZGd6RGx34krYjJL.webp"
                  alt="AlgoEdge Sports Analytics Dashboard"
                  className="w-full h-auto rounded-xl shadow-lg border-2 border-[#3f6d63]/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}