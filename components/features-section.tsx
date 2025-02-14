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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-2 bg-primary-100 rounded-full">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
