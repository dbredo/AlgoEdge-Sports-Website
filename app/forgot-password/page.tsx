import { SiteHeader } from "@/components/site-header"
import { ForgotPasswordForm } from "@/components/forgot-password-form"
import { Suspense } from "react"

export default function ForgotPasswordPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ForgotPasswordForm />
        </Suspense>
      </main>
    </>
  )
}
