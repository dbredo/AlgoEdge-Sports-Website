import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(request: Request) {
  const headersList = headers()
  const url = new URL(request.url)

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    pathname: url.pathname,
    host: headersList.get("host"),
    protocol: headersList.get("x-forwarded-proto"),
    headers: Object.fromEntries(headersList.entries()),
  })
}

export async function POST(request: Request) {
  return GET(request)
}