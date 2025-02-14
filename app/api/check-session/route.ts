import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log("Server-side session check:", session ? "Authenticated" : "Not authenticated")

  return NextResponse.json({
    authenticated: !!session,
    user: session?.user ?? null,
  })
}