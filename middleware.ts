import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  console.log("[Middleware] Executed for path:", request.nextUrl.pathname)

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    console.log("[Middleware] Session state:", session ? "Authenticated" : "Not authenticated")
    console.log("[Middleware] Session details:", session ? {
      user: session.user.id,
      email: session.user.email,
      aud: session.user.aud
    } : "No session")

    if (session && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register")) {
      console.log("[Middleware] Session found, redirecting to dashboard")
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    console.log("[Middleware] Allowing request to continue")
    return res
  } catch (error) {
    console.error("[Middleware] Error getting session:", error)
    return res
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
}
