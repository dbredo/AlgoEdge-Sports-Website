import { AuthForm } from "@/components/auth-form"
import { SiteHeader } from "@/components/site-header"

export default function AuthPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up or Sign In</h1>
        <AuthForm />
      </main>
    </>
  )
}