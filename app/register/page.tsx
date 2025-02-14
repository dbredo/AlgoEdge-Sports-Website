import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { RegistrationWithSubscriptionForm } from "@/components/registration-with-subscription-form"

export const metadata: Metadata = {
  title: "Register | AlgoEdge Sports",
  description: "Create your account on AlgoEdge Sports and start your sports analytics journey.",
}

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
        <RegistrationWithSubscriptionForm />
      </main>
    </>
  )
}
