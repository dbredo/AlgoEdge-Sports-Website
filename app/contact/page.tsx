import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | AlgoEdge Sports",
  description: "Get in touch with AlgoEdge Sports for any inquiries or support.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Get in
              <br />
              <span className="text-[#3f6d63]">Touch</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Have a question or need support? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="flex justify-center pb-24">
            <div
              className="w-full max-w-2xl rounded-[28px] p-8 md:p-10"
              style={{
                backgroundColor: "#f0f2f5",
                border: "2px solid #9ca3af",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
