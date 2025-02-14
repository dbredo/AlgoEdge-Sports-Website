import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter, Azeret_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AlgoEdge Sports",
  description: "Transform the way you understand sports with cutting-edge data and analytics",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${azeretMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
