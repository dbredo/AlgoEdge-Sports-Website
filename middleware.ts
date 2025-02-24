import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(request: NextRequest) {
  const requestTime = new Date().toISOString()
  console.log(`[Middleware ${requestTime}] Request to path:`, request.nextUrl.pathname)

  // Log all cookies for debugging
  const cookies = request.cookies.getAll()
  console.log(
    `[Middleware ${requestTime}] Cookies:`,
    cookies.map((c) => ({ name: c.name, value: c.value })),
  )

  // Log headers for debugging
  console.log(`[Middleware ${requestTime}] Headers:`, {
    cookie: request.headers.get("cookie"),
    authorization: request.headers.get("authorization"),
  })

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

    // Define protected routes that require authentication
    const protectedRoutes = ["/dashboard", "/profile", "/data-hub"]
    const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    // Define auth routes that should redirect to dashboard if authenticated
    const authRoutes = ["/login", "/register", "/signup"]
    const isAuthRoute = authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    if (session) {
      // User is authenticated
      if (isAuthRoute) {
        console.log(
          `[Middleware ${requestTime}] Authenticated user attempting to access auth page, redirecting to dashboard`,
        )
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
      // Allow access to protected routes
      return res
    } else {
      // User is not authenticated
      if (isProtectedRoute) {
        console.log(
          `[Middleware ${requestTime}] Unauthenticated user attempting to access protected route, redirecting to login`,
        )
        return NextResponse.redirect(new URL("/login", request.url))
      }
      // Allow access to public routes
      return res
    }
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





