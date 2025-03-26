import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, BarChart2 } from "lucide-react"
import { FaYoutube, FaTiktok } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="bg-[#3f6d63] text-white border-t border-[#3f6d63]/30">
      <div className="container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BarChart2 className="w-6 h-6 text-[#4fd1c5]" />
              <span className="text-xl font-bold text-[#4fd1c5]">AlgoEdge</span>
              <span className="text-xl font-bold text-white">Sports</span>
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Sports analytics made simple. Build your edge with real data — no code, no hassle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#4fd1c5] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/AlgoEdgeSports"
              target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4fd1c5] transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/algoedgesports/" 
              target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4fd1c5] transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/algoedge-sports/" 
              target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4fd1c5] transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@algoedgesports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4fd1c5] transition-colors"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@algoedgesports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4fd1c5] transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4fd1c5]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4fd1c5]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/documentation" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4fd1c5]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-white/80 hover:text-[#4fd1c5] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AlgoEdge Sports. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-white/60 hover:text-[#4fd1c5] text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-[#4fd1c5] text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-white/60 hover:text-[#4fd1c5] text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

