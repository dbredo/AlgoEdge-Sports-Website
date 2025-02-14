import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"

export interface Plan {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: "price_1QkUBPG6KmMfCiR87bv1Su72",
    name: "Basic",
    price: 9.99,
    interval: "month",
    features: ["Access to basic data and filters", "One custom algorithm", "Community forum access"],
  },
  {
    id: "price_1QkUDJG6KmMfCiR8xHzKtKbj",
    name: "Pro",
    price: 29.99,
    interval: "month",
    features: ["All Basic features", "Three custom algorithms", "Advanced analytics tools", "Priority support"],
  },
  {
    id: "price_1QkUGMG6KmMfCiR8aaIA0nTs",
    name: "Premium",
    price: 59.99,
    interval: "month",
    features: ["All Pro features", "Unlimited custom algorithms", "Real-time data feeds", "Personalized consulting"],
  },
]

interface SubscriptionPlansProps {
  onSelectPlan: (plan: Plan) => void
  selectedPlanId: string | null
}

export function SubscriptionPlans({ onSelectPlan, selectedPlanId }: SubscriptionPlansProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <Card key={plan.id} className={`flex flex-col ${selectedPlanId === plan.id ? "ring-2 ring-primary" : ""}`}>
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>
              ${plan.price}/{plan.interval}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="list-disc list-inside space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                console.log("Selecting plan:", plan)
                onSelectPlan(plan)
              }}
              className="w-full"
              variant={selectedPlanId === plan.id ? "secondary" : "default"}
            >
              {selectedPlanId === plan.id ? "Selected" : `Select ${plan.name} Plan`}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
