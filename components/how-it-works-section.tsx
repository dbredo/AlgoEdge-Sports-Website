import { Lightbulb, Code, BarChart2, Zap } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Define Your Strategy",
    description: "Identify the key factors and metrics that matter most for your sports analysis.",
  },
  {
    icon: Code,
    title: "Build Custom Algorithms",
    description:
      "Use our intuitive interface to create algorithms tailored to your specific needs, no coding required.",
  },
  {
    icon: BarChart2,
    title: "Analyze Real-Time Data",
    description: "Access up-to-the-minute stats and apply your algorithms for instant insights.",
  },
  {
    icon: Zap,
    title: "Make Informed Decisions",
    description: "Use the generated insights to make data-driven decisions for betting or fantasy leagues.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How AlgoEdge Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#3f6d63] rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
