import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseKey)

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, subject, text, html }),
  })

  if (!response.ok) {
    throw new Error("Failed to send email")
  }

  return response.json()
}

export async function notifyUser(userId: string, subject: string, message: string, htmlMessage?: string) {
  try {
    const { data, error } = await supabase.from("profiles").select("email").eq("id", userId).single()

    if (error) throw error

    if (data && data.email) {
      await sendEmail(data.email, subject, message, htmlMessage)
    } else {
      console.error("No email found for user:", userId)
    }
  } catch (error) {
    console.error("Error notifying user:", error)
    throw error
  }
}
