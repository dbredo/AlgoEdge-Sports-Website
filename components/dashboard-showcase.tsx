export function DashboardShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-lg bg-[#3f6d63]/10 px-3 py-1 text-sm text-[#3f6d63]">
            <span className="font-semibold">Powerful Analytics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Your Edge in the Game
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Building Smarter Sports Algorithms with AlgoEdge's comprehensive analytics platform. Filter, optimize, and
            unleash the power of precision insights.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950/50 p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-[#3f6d63]/10 p-3">
                    <feature.icon className="h-6 w-6 text-[#3f6d63]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { BarChart3, Brain, Zap } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive data analysis tools for deeper sports insights",
  },
  {
    icon: Brain,
    title: "Smart Algorithms",
    description: "Custom AI-powered algorithms for predictive modeling",
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Instant updates and live data processing capabilities",
  },
]
