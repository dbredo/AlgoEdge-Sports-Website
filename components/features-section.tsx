import { BarChart3, Layout, Clock, Users } from "lucide-react"

const features = [
  {
    title: "Centralized Dashboard",
    description:
      "Easily access all your sports analytics models, player stats, team data, and game insights in one streamlined interface.",
    icon: Layout,
  },
  {
    title: "Customizable Models",
    description:
      "Tailor your sports portfolios to specific metrics, trends, or sports types, enabling you to focus on the most relevant data for your analysis.",
    icon: BarChart3,
  },
  {
    title: "Efficient Management",
    description:
      "Quickly edit, update, or refine your models with intuitive tools designed for fast, on-the-fly adjustments.",
    icon: Clock,
  },
  {
    title: "Share and Present",
    description:
      "Effortlessly showcase your models to clients or collaborators, ensuring everyone has real-time access to the latest insights.",
    icon: Users,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80')] opacity-5"></div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto container-padding relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful <span className="text-[#4fd1c5]">Features</span> for Sports Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our platform provides everything you need to analyze, predict, and gain insights from sports data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl glass-card bg-gray-800/20 backdrop-blur-sm card-hover border border-gray-700/30"
            >
              <div className="mb-6 p-4 bg-gray-800/50 rounded-full group-hover:bg-[#3f6d63]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[#4fd1c5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


