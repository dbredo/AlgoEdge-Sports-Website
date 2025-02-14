import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlgoEdge Sports",
  description: "Transform the way you understand sports with cutting-edge data and analytics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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



import './globals.css'
