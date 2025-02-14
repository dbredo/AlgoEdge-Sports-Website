import { Sliders, Globe, Timer, Layout } from "lucide-react"

const advantages = [
  {
    title: "Ultimate Customization",
    description:
      "Assign weights, set thresholds, and choose directional rankings for data points to build algorithms that fit your exact needs.",
    icon: Sliders,
  },
  {
    title: "Multi-Sport Compatibility",
    description:
      "Analyze data across multiple sports, from football and basketball to soccer and beyond, all within a single platform.",
    icon: Globe,
  },
  {
    title: "Real-Time Insights",
    description: "Access live rankings and dynamic analysis as games unfold, keeping you ahead of the competition.",
    icon: Timer,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our intuitive tools make even complex data analytics approachable, whether you're a seasoned bettor, a fantasy sports enthusiast, or just exploring sports stats.",
    icon: Layout,
  },
]

export function CompetitionSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[800px] text-[48px] font-bold leading-[1.2] tracking-[-0.02em]">
            Our Edge Over the Competition
          </h2>
          <p className="mt-6 max-w-[800px] text-[20px] leading-[1.6] text-[#6b7280]">
            At AlgoEdge Sports, we redefine sports data analytics with a platform that puts the power of customization
            in your hands. Unlike traditional tools, AlgoEdge Sports offers unparalleled flexibility and precision,
            enabling users to craft algorithms tailored to their unique strategies and goals.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8">
          {advantages.map((advantage, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#3f6d63]/10">
                <advantage.icon className="h-6 w-6 text-[#3f6d63]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{advantage.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
