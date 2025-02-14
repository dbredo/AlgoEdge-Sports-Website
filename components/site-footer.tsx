import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">© 2024 AlgoEdge Sports. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <ContactModal>
              <Button variant="ghost" className="text-sm text-gray-500 hover:text-gray-900">
                Contact
              </Button>
            </ContactModal>
            <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
