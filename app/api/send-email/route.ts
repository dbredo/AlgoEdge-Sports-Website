import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { getClientIp, checkRateLimit, setRateLimitHeaders } from "@/lib/rate-limit"

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req)
    const rateLimit = await checkRateLimit(ip)

    const headers = new Headers()
    setRateLimitHeaders(headers, rateLimit)

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded",
          ...rateLimit,
        },
        {
          status: 429,
          headers,
        },
      )
    }

    const { to, subject, text, html } = await req.json()
    await sendEmail(to, subject, text, html)

    return NextResponse.json(
      {
        success: true,
        rateLimit,
      },
      { headers },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}