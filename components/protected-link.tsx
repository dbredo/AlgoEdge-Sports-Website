"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type React from "react" // Added import for React

interface ProtectedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ProtectedLink({ href, children, className }: ProtectedLinkProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }
    checkAuth()
  }, [])

  if (!isAuthenticated) {
    return null
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
