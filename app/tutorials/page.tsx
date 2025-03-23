import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { BookText, Clock, Video, FileText, ArrowRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tutorials | AlgoEdge Sports",
  description: "Learn how to make the most of AlgoEdge Sports with our step-by-step tutorials and guides.",
}

export default function TutorialsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              AlgoEdge Sports
              <br />
              <span className="text-[#3f6d63]">Tutorials</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Step-by-step guides to help you master sports analytics and algorithm creation.
            </p>
          </div>

          {/* Coming Soon Content */}
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
                  <BookText className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutorials Coming Soon!</h2>
                <div className="inline-block px-4 py-2 bg-[#3f6d63]/10 rounded-full text-[#3f6d63] font-medium mb-6">
                  Launching April 2025
                </div>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  We're working hard to create comprehensive tutorials to help you get the most out of AlgoEdge Sports.
                  Check back soon for step-by-step guides, video walkthroughs, and expert tips.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#3f6d63]/10 mb-4">
                    <Video className="h-6 w-6 text-[#3f6d63]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                  <p className="text-gray-700">
                    Watch step-by-step video guides on how to create powerful algorithms, analyze data, and make the
                    most of our platform.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#3f6d63]/10 mb-4">
                    <FileText className="h-6 w-6 text-[#3f6d63]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Written Guides</h3>
                  <p className="text-gray-700">
                    Detailed documentation with screenshots, examples, and best practices to help you build effective
                    sports analytics models.
                  </p>
                </div>
              </div>

              <div className="bg-[#3f6d63]/5 rounded-2xl p-6 border border-[#3f6d63]/20 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-[#3f6d63] mr-2" />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Getting started with your first algorithm",
                    "Advanced filtering techniques",
                    "Using weights effectively",
                    "Analyzing historical data patterns",
                    "Exporting and sharing your insights",
                    "Sport-specific strategy guides",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-[#3f6d63] text-white flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-[#3f6d63] mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Get Notified When Tutorials Launch</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Want to be the first to know when our tutorials are available? Sign up for our newsletter or follow us
                  on social media.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/waitlist">
                    <Button className="rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54]">
                      Subscribe to Updates
                    </Button>
                  </Link>
                  <Link href="/documentation">
                    <Button variant="outline" className="rounded-full border-[#3f6d63] text-[#3f6d63]">
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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