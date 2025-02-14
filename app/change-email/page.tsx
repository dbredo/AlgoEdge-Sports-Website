import { SiteHeader } from "@/components/site-header"
import { ChangeEmailForm } from "@/components/change-email-form"
import { ProtectedRoute } from "@/components/protected-route"

export default function ChangeEmailPage() {
  return (
    <ProtectedRoute>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Change Email Address</h1>
        <ChangeEmailForm />
      </main>
    </ProtectedRoute>
  )
}
