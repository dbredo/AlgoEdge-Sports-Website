import { NextResponse } from "next/server"
import { signUpRateLimit } from "@/lib/rate-limit"

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"
  const { success } = await signUpRateLimit.limit(ip)

  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
  }

  // Your existing sign-up logic here
  // ...
}