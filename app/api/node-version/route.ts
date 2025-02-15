import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    nodeVersion: process.version,
    environment: process.env.NODE_ENV,
  })
}