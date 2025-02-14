import { SiteHeader } from "@/components/site-header"
import { ResetPasswordForm } from "@/components/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
        <ResetPasswordForm />
      </main>
    </>
  )
}
