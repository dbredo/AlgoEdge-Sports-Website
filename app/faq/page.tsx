import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | AlgoEdge Sports",
  description: "Find answers to frequently asked questions about AlgoEdge Sports platform, features, and services.",
}

export default function FAQPage() {
  const faqItems = [
    {
      question: "What is AlgoEdge Sports?",
      answer:
        "AlgoEdge Sports is a no-code platform that lets you build custom sports algorithms, analyze real-time data, and gain insights to make smarter decisions — whether you're into fantasy, betting, or just deep sports analysis.",
    },
    {
      question: "Do I need coding experience to use AlgoEdge?",
      answer:
        "Not at all. AlgoEdge is designed for non-technical users. You can build algorithms and analyze data with a simple, intuitive interface — no code required.",
    },
    {
      question: "What sports do you cover?",
      answer: (
        <div>
          <p className="mb-3">We currently offer data for major leagues including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>NFL</li>
            <li>NBA</li>
            <li>NHL</li>
            <li>MLB</li>
            <li>College Football (NCAA)</li>
            <li>College Basketball (NCAA)</li>
            <li>Top European Soccer Leagues (Premier League, La Liga, Bundesliga, Serie A, Ligue 1)</li>
          </ul>
          <p className="mt-3">More leagues and sports are in development.</p>
        </div>
      ),
    },
    {
      question: "Is AlgoEdge legal for betting purposes?",
      answer:
        "AlgoEdge does not provide betting advice or facilitate gambling. It's a data platform. If you choose to use the insights for betting, ensure you follow the laws and regulations in your local jurisdiction.",
    },
    {
      question: "How does the algorithm builder work?",
      answer: (
        <div>
          <p className="mb-3">
            Our algorithm builder is designed to let anyone create powerful data models — no code, no friction. Here's
            how it works:
          </p>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Choose Your Sport & Dataset</h4>
          <p className="mb-3">
            Select the sport and league you want to work with, then filter by date range, season, or game type (e.g.,
            regular season, playoffs).
          </p>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Pick Your Stats</h4>
          <p className="mb-3">
            Browse or search our database of available statistics — from high-level metrics like points per game to
            advanced data like efficiency ratios.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Set Rules or Conditions</h4>
          <p className="mb-2">Create filters to narrow your results:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Example: "Passing yards per game greater than 250"</li>
            <li>Example: "Opponent shooting % less than 40% over last 5 games"</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Assign Weights</h4>
          <p className="mb-3">
            Prioritize certain data points by assigning weight values to them. This affects scoring and ranking within
            your model.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Define Ranking Logic</h4>
          <p className="mb-3">
            Choose how you want results sorted — highest to lowest, lowest to highest, or by custom score.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Run the Model & View Results</h4>
          <p>
            Instantly see your filtered dataset, ranked and scored based on your rules and weights. From there, you can
            refine, save, and compare.
          </p>
        </div>
      ),
    },
    {
      question: "Can I compare teams or players across seasons?",
      answer:
        "Yes! You can filter by specific seasons, date ranges, and even isolate home vs. away splits or playoff vs. regular season performance.",
    },
    {
      question: "Is real-time data included?",
      answer: "Yes. Our data updates in near real-time, giving you access to the most current stats available.",
    },
    {
      question: "Can I save and re-use my algorithms?",
      answer: "Absolutely. You can save, duplicate, and edit your custom models anytime.",
    },
    {
      question: "How accurate is your data?",
      answer:
        "We partner with trusted data providers to ensure accuracy and consistency. While no data source is perfect, we monitor for quality and keep data as up-to-date as possible.",
    },
    {
      question: "Can I export data?",
      answer: "Yes. Depending on your subscription tier, you can export datasets and results for offline analysis.",
    },
    {
      question: "How much does AlgoEdge cost?",
      answer: (
        <p>
          We offer flexible subscription plans based on the features and access level you need. Visit our{" "}
          <Link href="/pricing" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            Pricing page
          </Link>{" "}
          for more details.
        </p>
      ),
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will remain active until the end of your current billing cycle.",
    },
    {
      question: "Do you offer team or group accounts?",
      answer: (
        <p>
          Team access and enterprise features are currently in development. Reach out to{" "}
          <a href="mailto:support@algoedgesports.com" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            support@algoedgesports.com
          </a>{" "}
          if you're interested in early access.
        </p>
      ),
    },
    {
      question: "Can I share my models with others?",
      answer:
        "Currently, models are private to your account. However, we encourage users to share their process, screenshots, and insights on social media. Full public-sharing functionality is on our roadmap.",
    },
    {
      question: "What makes AlgoEdge different from other sports data platforms?",
      answer:
        "AlgoEdge combines real-time sports data with a fully customizable, no-code algorithm builder. It's built for deep analysis but accessible to anyone — no spreadsheets, no Python, just smart design.",
    },
    {
      question: "Is my personal information safe?",
      answer: (
        <p>
          Yes. We take privacy seriously and comply with Canadian privacy laws as well as global standards like GDPR.
          For more, check out our{" "}
          <Link href="/privacy" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            Privacy Policy
          </Link>
          .
        </p>
      ),
    },
    {
      question: "What devices can I use AlgoEdge on?",
      answer:
        "AlgoEdge is fully web-based and mobile-friendly. You can access it from any device with an internet connection — no apps or downloads required.",
    },
    {
      question: "Do you offer tutorials or guides?",
      answer: (
        <p>
          Yes! Our{" "}
          <Link href="/tutorials" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            Tutorials section
          </Link>{" "}
          includes walkthroughs, tips, and use cases to help you get the most out of the platform.
        </p>
      ),
    },
    {
      question: "Who is AlgoEdge built for?",
      answer:
        "Sports bettors, fantasy managers, DFS players, analysts, and sports fans who want to go deeper than the scoreboard. If you're into strategy, numbers, and performance, AlgoEdge is for you.",
    },
    {
      question: "What if I have a question not listed here?",
      answer: (
        <p>
          We're happy to help. Email us anytime at{" "}
          <a href="mailto:support@algoedgesports.com" className="text-[#3f6d63] hover:text-[#345c54] font-medium">
            support@algoedgesports.com
          </a>
          , and we'll get back to you ASAP.
        </p>
      ),
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="pt-[72px] bg-[#e5e7eb] min-h-screen">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-16 sm:py-24">
            <h1 className="text-center text-[48px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Frequently Asked
              <br />
              <span className="text-[#3f6d63]">Questions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-center text-[18px] leading-[1.6] text-[#6b7280]">
              Find answers to common questions about AlgoEdge Sports and how to make the most of our platform.
            </p>
          </div>

          {/* FAQ Content */}
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
                  <HelpCircle className="h-12 w-12 text-[#3f6d63]" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-700 mt-2">
                  Get quick answers to the most common questions about AlgoEdge Sports.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-4 text-gray-700 bg-gray-50 border-t border-gray-200">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-8 p-6 bg-[#3f6d63]/10 rounded-2xl border border-[#3f6d63]/20 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-700 mb-4">
                  We're here to help! Reach out to our support team for personalized assistance.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-[#3f6d63] text-white rounded-full font-medium hover:bg-[#345c54] transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}