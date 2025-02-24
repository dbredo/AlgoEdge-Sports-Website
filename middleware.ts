import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const requestTime = new Date().toISOString()
  console.log(`[Middleware ${requestTime}] Request to path:`, request.nextUrl.pathname)

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  try {
    console.log(`[Middleware ${requestTime}] Attempting to get session...`)
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError) {
      console.error(`[Middleware ${requestTime}] Session error:`, sessionError)
      return res
    }

    console.log(`[Middleware ${requestTime}] Session check result:`, {
      hasSession: !!session,
      userId: session?.user?.id,
      userEmail: session?.user?.email,
      aud: session?.user?.aud,
      sessionExpiresAt: session?.expires_at,
    })

    // Add session info to request headers for debugging
    res.headers.set("x-session-status", session ? "authenticated" : "unauthenticated")

    if (session) {
      if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register") {
        console.log(
          `[Middleware ${requestTime}] Authenticated user attempting to access auth page, redirecting to dashboard`,
        )
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    } else {
      const protectedRoutes = ["/profile", "/dashboard", "/data-hub"]
      if (protectedRoutes.includes(request.nextUrl.pathname)) {
        console.log(
          `[Middleware ${requestTime}] Unauthenticated user attempting to access protected route, redirecting to login`,
        )
        return NextResponse.redirect(new URL("/login", request.url))
      }
    }

    console.log(`[Middleware ${requestTime}] Request proceeding normally`)
    return res
  } catch (error) {
    console.error(`[Middleware ${requestTime}] Unexpected error:`, error)
    return res
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}
