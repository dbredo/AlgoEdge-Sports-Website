import { Button } from "@/components/ui/button"
import Link from "next/link"

interface WelcomeHeaderProps {
  userName: string
  subscriptionTier: string
}

export function WelcomeHeader({ userName, subscriptionTier }: WelcomeHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
        <p className="text-gray-600">Subscription: {subscriptionTier}</p>
      </div>
      <Button asChild>
        <Link href="/create-algorithm">Create New Algorithm</Link>
      </Button>
    </div>
  )
}
