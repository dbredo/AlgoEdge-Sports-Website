import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    console.log("Auth callback received:", {
      url: request.url,
      code: code ? "present" : "missing",
      timestamp: new Date().toISOString(),
    })

    if (code) {
      const supabase = createRouteHandlerClient({ cookies })
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error("Error exchanging code for session:", error)
        throw error
      }

      // Successful verification
      return NextResponse.redirect(`${requestUrl.origin}/auth/confirm`)
    }

    throw new Error("No code provided in callback URL")
  } catch (error) {
    console.error("Auth callback error:", error)
    return NextResponse.redirect(
      `${new URL(request.url).origin}/auth/error?error=${encodeURIComponent(
        error instanceof Error ? error.message : "Authentication failed",
      )}`,
    )
  }
}
