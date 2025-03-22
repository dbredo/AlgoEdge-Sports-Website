"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Menu, X, BarChart2, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProtectedLink } from "@/components/protected-link"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [user, setUser] = React.useState<any>(null)
  const router = useRouter()

  React.useEffect(() => {
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
    <header className="w-full z-50 bg-[#3f6d63]">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="w-6 h-6 text-[#4fd1c5]" />
            <span className="text-xl font-bold text-[#4fd1c5]">AlgoEdge</span>
            <span className="text-xl font-bold text-white">Sports</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!user ? (
              <>
                <Link href="/about" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  About Us
                </Link>
                <Link href="/data" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  Data/API
                </Link>
                <Link href="/pricing" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  Pricing
                </Link>
                <Link href="/login" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white hover:bg-[#4fd1c5] text-[#3f6d63] px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  Register Now
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  Dashboard
                </Link>
                <Link href="/game-tracker" className="text-white hover:text-[#4fd1c5] transition-colors font-medium">
                  Game Tracker
                </Link>
                <ProtectedLink
                  href="/data-hub"
                  className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                >
                  Data Hub
                </ProtectedLink>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="relative h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <User className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 bg-[#3f6d63] text-white border-[#3f6d63]/50"
                    align="end"
                    forceMount
                  >
                    <DropdownMenuItem asChild className="hover:bg-[#345c54] focus:bg-[#345c54] font-medium">
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-[#345c54] focus:bg-[#345c54] font-medium">
                      <Link href="/game-tracker">Game Tracker</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-[#345c54] focus:bg-[#345c54] font-medium">
                      <Link href="/data-hub">Data Hub</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-[#345c54] focus:bg-[#345c54] font-medium">
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="hover:bg-[#345c54] focus:bg-[#345c54] font-medium">
                      <Link href="/billing">Billing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem
                      onClick={handleSignOut}
                      className="hover:bg-[#345c54] focus:bg-[#345c54] text-[#4fd1c5] hover:text-white font-medium"
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3">
            <nav className="flex flex-col space-y-3">
              {!user ? (
                <>
                  <Link
                    href="/about"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/data"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data/API
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/login"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-white hover:bg-[#4fd1c5] text-[#3f6d63] px-4 py-2 rounded-lg transition-all duration-300 text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register Now
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/game-tracker"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Game Tracker
                  </Link>
                  <ProtectedLink
                    href="/data-hub"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Hub
                  </ProtectedLink>
                  <Link
                    href="/profile"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/billing"
                    className="text-white hover:text-[#4fd1c5] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Billing
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut()
                      setIsMenuOpen(false)
                    }}
                    className="text-[#4fd1c5] hover:text-white transition-colors text-left font-medium"
                  >
                    Log out
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}