"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export function PostRegistrationFlow() {
  const [status, setStatus] = useState<"loading" | "verified" | "unverified" | "error">("loading")
  const router = useRouter()

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        if (error) throw error

        if (user) {
          if (user.email_confirmed_at) {
            setStatus("verified")
          } else {
            setStatus("unverified")
          }
        } else {
          setStatus("error")
        }
      } catch (error) {
        console.error("Error checking user status:", error)
        setStatus("error")
      }
    }

    checkUserStatus()
  }, [])

  if (status === "loading") {
    return <div>Checking your account status...</div>
  }

  if (status === "unverified") {
    return (
      <div>
        <h1>Almost there!</h1>
        <p>Thank you for your payment. Please check your email to verify your account.</p>
        <p>Once verified, you can start using AlgoEdge Sports.</p>
        <Button onClick={() => router.push("/login")}>Go to Login</Button>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div>
        <p>There was an error verifying your account. Please try again or contact support.</p>
        <Button onClick={() => router.push("/login")}>Go to Login</Button>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to AlgoEdge Sports!</h1>
      <p>Your account is verified and your subscription is active. You can now start using our services.</p>
      <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
    </div>
  )
}
