import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, AlertTriangle } from "lucide-react"

export function NotificationsUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications & Updates</CardTitle>
        <CardDescription>Stay informed about platform updates and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Bell className="mr-2 h-4 w-4 text-blue-500" />
            <span>New backtesting feature coming soon!</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
            <span>Your subscription will expire in 7 days. Renew now to avoid interruption.</span>
          </li>
        </ul>
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold">Community Engagement</h3>
          <p className="text-sm text-gray-600">Coming soon: Join our Discord community for discussions and support!</p>
        </div>
      </CardContent>
    </Card>
  )
}
