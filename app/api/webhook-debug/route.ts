import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function POST(request: Request) {
  const headersList = headers()
  const body = await request.text()

  console.log("[Webhook Debug] Request received:", {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(headersList.entries()),
    body: body.slice(0, 1000) + (body.length > 1000 ? "..." : ""), // Truncate long bodies
  })

  return NextResponse.json({
    received: true,
    timestamp: new Date().toISOString(),
    headers: Object.fromEntries(headersList.entries()),
    bodyPreview: body.slice(0, 100) + (body.length > 100 ? "..." : ""),
  })
}

export async function GET() {
  return NextResponse.json({
    status: "Webhook debug endpoint active",
    usage: {
      POST: "Send any webhook payload to debug headers and body",
      GET: "Check if endpoint is active",
    },
    timestamp: new Date().toISOString(),
  })
}