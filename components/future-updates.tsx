import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Zap, LineChart, MessageSquare } from "lucide-react"
import Link from "next/link"

const futureFeatures = [
  {
    title: "Backtesting for Pro & Premium Users",
    description: "Analyze historical performance of your algorithms",
    icon: LineChart,
    status: "Coming Q4 2025",
  },
  {
    title: "Mobile Application",
    description: "Access your data on the go",
    icon: Zap,
    status: "In Development",
  },
  {
    title: "Advanced AI-Powered Insights",
    description: "Leverage machine learning for deeper analysis",
    icon: MessageSquare,
    status: "Planning Phase",
  },
]

export function FutureUpdates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Future Updates & Features Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {futureFeatures.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-[#3f6d63] mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{feature.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-[#3f6d63] text-white hover:bg-[#345c54]">
              Have a feature request? Let us know! <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
