import { SiteHeader } from "@/components/site-header"
import { ChangePasswordForm } from "@/components/change-password-form"
import { ProtectedRoute } from "@/components/protected-route"

export default function ChangePasswordPage() {
  return (
    <ProtectedRoute>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-[#3f6d63]">Change Password</h1>
        <ChangePasswordForm />
      </main>
    </ProtectedRoute>
  )
}
