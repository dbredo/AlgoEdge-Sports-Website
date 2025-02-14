import { BarChart3, Compass, Zap } from "lucide-react"

const features = [
  {
    title: "Comprehensive Analytics",
    description:
      "Access detailed data on players, teams, and games to drive your decisions based on trends, matchups, and performance metrics.",
    icon: BarChart3,
  },
  {
    title: "Guided Models",
    description:
      "Use our expert-driven models to help structure your analysis, whether you're a casual fan or a professional sports analyst.",
    icon: Compass,
  },
  {
    title: "Efficient Decision-Making",
    description:
      "Our platform enables you to quickly assess key metrics, making it easier to evaluate potential outcomes and refine your strategies.",
    icon: Zap,
  },
]

export function DataDrivenDecisionsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[800px] text-[48px] font-bold leading-[1.2] tracking-[-0.02em]">
            Make Informed, Data-Driven Sports Analysis Decisions
          </h2>
          <p className="mt-6 max-w-[800px] text-[20px] leading-[1.6] text-[#6b7280]">
            AlgoEdge Sports's top-rated analytics tools and guided sports models help you make robust, data-driven
            decisions. Whether you're analyzing player stats, team performance, or game outcomes, our platform equips
            you with the insights you need to stay ahead.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3f6d63]/10 mb-4">
                <feature.icon className="h-8 w-8 text-[#3f6d63]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
