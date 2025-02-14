"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
      <p className="text-red-600 mb-4">{error || "An unknown error occurred"}</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Return to Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
}
