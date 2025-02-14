import { Button } from "@/components/ui/button"
import Link from "next/link"
import type React from "react" // Added import for React

interface HeroSectionProps {
  title: string
  description: string
  cta: React.ReactNode
}

export function HeroSection({ title, description, cta }: HeroSectionProps) {
  return (
    <section className="pt-[72px]">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-2 items-center gap-16 py-24">
          <div className="flex flex-col gap-5">
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em]">{title}</h1>
            <p className="text-[18px] lg:text-[20px] leading-[1.6] text-[#4b5563]">{description}</p>
            <div className="flex items-center gap-3 pt-3">
              {cta}
              <Link href="/features" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="h-11 rounded-md border-gray-300 px-6 text-[15px] font-medium hover:bg-gray-50"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[1.33] w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page%20Picture%20-%20AlgoEdge-ZeFhphJv62jCY9yZGd6RGx34krYjJL.webp"
              alt="AlgoEdge Sports Analytics Dashboard"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
