import { SiteHeader } from "@/components/site-header"
import { ReauthenticateForm } from "@/components/reauthenticate-form"
import { Suspense } from "react"

export default function ReauthenticatePage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-md pt-[72px] px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <ReauthenticateForm />
        </Suspense>
      </main>
    </>
  )
}