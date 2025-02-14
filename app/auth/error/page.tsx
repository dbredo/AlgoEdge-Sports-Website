import { Suspense } from "react"
import dynamic from "next/dynamic"

const AuthErrorContent = dynamic(() => import("./AuthErrorContent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense fallback={<p>Loading...</p>}>
        <AuthErrorContent />
      </Suspense>
    </div>
  )
}
