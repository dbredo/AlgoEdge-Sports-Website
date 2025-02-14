import { SiteHeader } from "@/components/site-header"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <LoginForm />
      </main>
    </>
  )
}
