import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy | AlgoEdge Sports",
  description: "Learn about how AlgoEdge Sports uses cookies and similar technologies on our website.",
}

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Cookie
              <br />
              <span className="text-[#3f6d63]">Policy</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Learn about how we use cookies and similar technologies on our website.
            </p>
          </div>

          {/* Cookie Policy Content */}
          <div className="flex justify-center pb-24">
            <div
              className="w-full max-w-4xl rounded-[28px] p-8 md:p-10"
              style={{
                backgroundColor: "#f0f2f5",
                border: "2px solid #9ca3af",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-[#3f6d63]/10">
                  <Cookie className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
                <p className="text-gray-600 mt-2">Last updated: March 22, 2025</p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  This Cookie Policy explains how AlgoEdge Sports ("we", "us", or "our") uses cookies and similar
                  technologies when you visit our website and digital platforms. We are based in Canada and serve users
                  globally. We are committed to complying with applicable privacy laws, including PIPEDA (Canada), GDPR
                  (EU/UK), and CCPA (California).
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. What Are Cookies?</h2>
                  <p className="mb-4">
                    Cookies are small text files stored on your device when you visit a website. They help us recognize
                    your device, remember your preferences, analyze website traffic, and deliver relevant content.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Types of Cookies We Use</h2>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Essential Cookies</h3>
                  <p className="mb-4">
                    Required for our website to function and for you to access secure areas.
                    <br />
                    <em>Example: Login authentication, subscription functionality.</em>
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Analytics Cookies</h3>
                  <p className="mb-4">
                    Help us understand how visitors use our site so we can improve the user experience.
                    <br />
                    <em>Example: Google Analytics.</em>
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Functional Cookies</h3>
                  <p className="mb-4">
                    Enable the website to remember user choices and enhance personalization.
                    <br />
                    <em>Example: Language preferences, saved filters.</em>
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Marketing & Advertising Cookies</h3>
                  <p className="mb-4">
                    Used to deliver relevant ads and measure marketing performance.
                    <br />
                    <em>Example: Facebook Pixel, Google Ads.</em>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Third-Party Cookies</h2>
                  <p className="mb-4">
                    We may use third-party services that place cookies on your device for analytics or marketing
                    purposes. These services may collect data across websites and platforms.
                  </p>
                  <p className="mb-4">For more information, refer to their policies:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3f6d63] hover:text-[#345c54]"
                      >
                        Google Privacy & Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/policy.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3f6d63] hover:text-[#345c54]"
                      >
                        Meta Privacy Policy
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Managing Your Cookie Preferences</h2>
                  <p className="mb-4">
                    Most web browsers allow you to control cookies through their settings. You can typically:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Delete cookies from your browser</li>
                    <li>
                      Block cookies by activating the setting on your browser that allows you to refuse all or some
                      cookies
                    </li>
                    <li>Set your browser to notify you when you receive a cookie</li>
                  </ul>
                  <p className="mb-4">
                    Please note that if you choose to block or delete cookies, you may not be able to access certain
                    areas or features of our website, and some services may not function properly.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions about this Cookie Policy, please contact us at{" "}
                    <a href="mailto:support@algoedgesports.com" className="text-[#3f6d63] hover:text-[#345c54]">
                      support@algoedgesports.com
                    </a>
                    .
                  </p>
                </section>

                <div className="p-4 bg-[#3f6d63]/10 rounded-lg border border-[#3f6d63]/20 text-center">
                  <p className="text-gray-700">
                    By continuing to use our website, you consent to our use of cookies as described in this Cookie
                    Policy. For more information about how we protect your personal data, please see our{" "}
                    <Link href="/privacy" className="text-[#3f6d63] hover:text-[#345c54]">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

