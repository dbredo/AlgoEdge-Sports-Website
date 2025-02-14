import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | AlgoEdge Sports",
  description: "Get in touch with AlgoEdge Sports for any inquiries or support.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-[800px] pt-[72px]">
        <div className="py-16 sm:py-24">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-center text-lg leading-normal text-gray-600 sm:text-xl">
            Have a question or need support? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </main>
    </>
  )
}
