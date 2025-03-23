import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Disclaimer | AlgoEdge Sports",
  description: "Important information about the use of AlgoEdge Sports services and platform.",
}

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Legal
              <br />
              <span className="text-[#3f6d63]">Disclaimer</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Important information about the use of our platform and services.
            </p>
          </div>

          {/* Disclaimer Content */}
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
                  <AlertTriangle className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
                <p className="text-gray-600 mt-2">Last updated: March 22, 2025</p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  The information, tools, and services provided by AlgoEdge Sports ("we", "our", or "us") are intended
                  solely for informational and educational purposes. By using our platform, you acknowledge and agree to
                  the terms of this Disclaimer.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. No Betting or Financial Advice</h2>
                  <p className="mb-4">
                    AlgoEdge Sports does not provide betting advice, financial advice, or investment recommendations of
                    any kind. Our platform delivers sports data, statistics, and customizable tools that users can
                    utilize to create and test their own algorithms. Any outcomes or decisions based on these tools are
                    entirely your responsibility.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Use at Your Own Risk</h2>
                  <p className="mb-4">
                    While we strive to ensure accuracy and reliability, we do not guarantee the completeness,
                    correctness, or reliability of any data or outcomes generated on our platform. All decisions made
                    based on AlgoEdge Sports data or tools are made at your own risk. We are not liable for any losses,
                    damages, or decisions made by users.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. No Guarantees of Performance</h2>
                  <p className="mb-4">
                    Historical data and statistical analysis do not guarantee future outcomes. AlgoEdge Sports makes no
                    representations or warranties regarding the performance of any algorithm, model, or approach
                    developed using our platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Third-Party Tools and Integrations</h2>
                  <p className="mb-4">
                    Our platform may include links to or integrations with third-party services such as analytics
                    providers, advertisers, or social media platforms. We are not responsible for the content, accuracy,
                    or policies of those third parties.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Jurisdictional Limitations</h2>
                  <p className="mb-4">
                    It is your responsibility to ensure that the use of AlgoEdge Sports and any data or strategies
                    generated comply with the laws and regulations of your local jurisdiction, particularly in relation
                    to gambling, data use, or financial modeling.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Contact</h2>
                  <p className="mb-4">
                    If you have any questions about this Disclaimer, please contact us at{" "}
                    <a href="mailto:support@algoedgesports.com" className="text-[#3f6d63] hover:text-[#345c54]">
                      support@algoedgesports.com
                    </a>
                    .
                  </p>
                </section>

                <div className="p-4 bg-[#3f6d63]/10 rounded-lg border border-[#3f6d63]/20 text-center">
                  <p className="text-gray-700">
                    By using our platform and services, you acknowledge that you have read, understood, and agree to
                    this Disclaimer. For more information about our terms and policies, please see our{" "}
                    <Link href="/terms" className="text-[#3f6d63] hover:text-[#345c54]">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
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

