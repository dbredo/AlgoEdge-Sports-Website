import { SiteHeader } from "@/components/site-header"
import { SignUpForm } from "@/components/signup-form"

export default function SignUpPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <SignUpForm />
      </main>
    </>
  )
}

