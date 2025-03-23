import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ForgotPasswordForm } from "@/components/forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password | AlgoEdge Sports",
  description: "Reset your password for your AlgoEdge Sports account.",
}

export default function ForgotPasswordPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Forgot Your
              <br />
              <span className="text-[#3f6d63]">Password?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Don't worry, it happens to the best of us. Enter your email below and we'll send you a reset link.
            </p>
          </div>

          {/* Forgot Password Form Card */}
          <div className="flex justify-center pb-24">
            <div
              className="w-full max-w-md rounded-[28px] p-8"
              style={{
                backgroundColor: "#f0f2f5",
                border: "2px solid #9ca3af",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Reset Password</h2>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-8">
                    <div className="w-8 h-8 border-4 border-[#3f6d63] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }
              >
                <ForgotPasswordForm />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
