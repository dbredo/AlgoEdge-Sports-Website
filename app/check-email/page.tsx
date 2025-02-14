import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckEmailPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Check Your Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We've sent a confirmation link to your email address. Please check your inbox and click on the link to
              verify your account.
            </p>
            <p className="text-sm text-gray-500">
              If you don't see the email, please check your spam folder. The email should arrive within a few minutes.
            </p>
            <div className="flex flex-col space-y-2">
              <Button asChild variant="outline">
                <Link href="/login">Return to Login</Link>
              </Button>
              <Button asChild variant="link">
                <Link href="/contact">Need Help?</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
