import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle, Mail, Video } from "lucide-react"

export function HelpSupport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Help & Support</CardTitle>
        <CardDescription>Get assistance when you need it</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <HelpCircle className="mr-2 h-4 w-4" />
            <Link href="/faq" className="text-blue-600 hover:underline">
              Visit our Help Center
            </Link>
          </div>
          <Button className="w-full" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
          <div className="flex items-center">
            <Video className="mr-2 h-4 w-4" />
            <span className="text-gray-600">Video tutorials coming soon!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
