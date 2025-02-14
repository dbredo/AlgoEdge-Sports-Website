"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutSuccessPage({ searchParams }: { searchParams: { session_id: string } }) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const router = useRouter()

  useEffect(() => {
    const verifyCheckout = async () => {
      try {
        const response = await fetch(`/api/check-session?session_id=${searchParams.session_id}`)
        const data = await response.json()

        if (data.status === "paid") {
          setStatus("success")
          // Here you can update your database or perform any other necessary actions
        } else {
          setStatus("error")
        }
      } catch (error) {
        console.error("Error verifying checkout:", error)
        setStatus("error")
      }
    }

    if (searchParams.session_id) {
      verifyCheckout()
    } else {
      setStatus("error")
    }
  }, [searchParams.session_id])

  if (status === "loading") {
    return <div>Verifying your purchase...</div>
  }

  if (status === "error") {
    return <div>There was an error processing your purchase. Please contact support.</div>
  }

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your subscription has been successfully activated.</p>
      <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  )
}
