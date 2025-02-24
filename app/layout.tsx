import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlgoEdge Sports",
  description: "Transform the way you understand sports with cutting-edge data and analytics",
  generator: "v0.dev",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
          <SiteFooter />
          <Toaster />
        </body>
      </html>
    )
  } catch (error) {
    console.error("[RootLayout] Error getting session:", error)
    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
          <SiteFooter />
          <Toaster />
        </body>
      </html>
    )
  }
}


