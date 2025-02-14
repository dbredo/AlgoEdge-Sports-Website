"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"
import { ProtectedLink } from "@/components/protected-link"

export function SiteHeader() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("[SiteHeader] Auth state changed:", event)
      setUser(session?.user ?? null)
    })

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      console.log("[SiteHeader] User state:", session?.user ? "Logged in" : "Not logged in")
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AlgoEdge-Ls98PgXMD9EnwVZLRknSqHGfzpseVU.png"
              alt="AlgoEdge Sports Logo"
              className="h-8 w-8"
            />
            <span className="text-[17px] font-medium">AlgoEdge Sports</span>
          </Link>
          <nav className="flex items-center gap-8">
            {!user ? (
              <>
                <Link href="/about" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
                <Link href="/data" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  Data/API
                </Link>
                <Link href="/pricing" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
                <Link href="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <Link href="/game-tracker" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  Game Tracker
                </Link>
                <ProtectedLink href="/data-hub" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
                  Data Hub
                </ProtectedLink>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/game-tracker">Game Tracker</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/data-hub">Data Hub</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/billing">Billing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
