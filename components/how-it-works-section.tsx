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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background image overlay - same as Features section */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80')] opacity-5 z-0"></div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3f6d63]/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-[#3f6d63]">AlgoEdge</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process helps you transform raw data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              <div className="bg-gradient-to-br from-[#3f6d63] to-[#3f6d63] rounded-full p-5 mb-6 shadow-lg glow-effect">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




