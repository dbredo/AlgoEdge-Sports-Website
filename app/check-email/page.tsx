import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Check Your Email | AlgoEdge Sports",
  description: "Please check your email for a confirmation link to complete your request.",
}

export default function CheckEmailPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Check Your
              <br />
              <span className="text-[#3f6d63]">Email</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              We've sent you an email with a confirmation link. Please check your inbox.
            </p>
          </div>

          {/* Email Confirmation Card */}
          <div className="flex justify-center pb-24">
            <div
              className="w-full max-w-md rounded-[28px] p-8"
              style={{
                backgroundColor: "#f0f2f5",
                border: "2px solid #9ca3af",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#3f6d63]/10">
                  <Mail className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Email Confirmation</h2>

              <div className="space-y-4 mb-8">
                <p className="text-center text-gray-700">
                  We've sent a confirmation link to your email address. Please check your inbox and click on the link to
                  complete your request.
                </p>
                <p className="text-sm text-center text-gray-500">
                  If you don't see the email, please check your spam folder. The email should arrive within a few
                  minutes.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full h-11 rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54] transition-all"
                >
                  <Link href="/login">
                    Return to Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full h-11 rounded-full border-gray-300 hover:bg-gray-50">
                  <Link href="/contact" className="flex items-center justify-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Need Help?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
