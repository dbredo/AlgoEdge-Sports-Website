"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function EmailConfirmPage() {
  const [message, setMessage] = useState("Verifying your email...")
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const router = useRouter()

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const { error } = await supabase.auth.onAuthStateChange(async (event, session) => {
          if (event === "SIGNED_IN") {
            setStatus("success")
            setMessage("Email verified successfully.")
            setTimeout(() => router.push("/dashboard"), 3000)
          }
        })

        if (error) throw error
      } catch (error) {
        console.error("Error during email confirmation:", error)
        setStatus("error")
        setMessage("An error occurred during email confirmation. Please try again.")
      }
    }

    handleEmailConfirmation()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-32">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AlgoEdge-Ls98PgXMD9EnwVZLRknSqHGfzpseVU.png"
              alt="AlgoEdge Sports Logo"
              className="w-full"
            />
          </div>
          <CardTitle className="text-2xl font-bold">AlgoEdge Sports</CardTitle>
          <CardDescription>Email Confirmation</CardDescription>
        </CardHeader>
        <CardContent>
          {status === "loading" && (
            <>
              <Loader2 className="mr-2 h-16 w-16 animate-spin text-[#3f6d63]" />
              <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
              <p className="mt-2 text-center text-sm text-gray-600">
                We've sent a confirmation email to your address. Please check your inbox and click the link to verify
                your account.
              </p>
              <p className="mt-2 text-center text-sm text-gray-600">
                This may take a few minutes. Don't forget to check your spam folder!
              </p>
            </>
          )}
          {status === "success" && <p className="text-center text-green-600">{message} Redirecting to dashboard...</p>}
          {status === "error" && <p className="text-center text-red-600">{message}</p>}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild variant="outline" className="w-full">
            <Link href="/login">Return to Login</Link>
          </Button>
          <Button asChild variant="link" className="w-full">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
