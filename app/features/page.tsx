import { SiteHeader } from "@/components/site-header"
import { FeaturesSection } from "@/components/features-section"

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-[72px]">
        <h1 className="text-3xl font-bold mb-6">AlgoEdge Sports Features</h1>
        <FeaturesSection />
      </main>
    </>
  )
}
