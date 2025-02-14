import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Terms and Conditions | AlgoEdge Sports",
  description: "Read the terms and conditions for using AlgoEdge Sports services.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions for AlgoEdge Sports</h1>
        <p className="text-lg mb-6 font-semibold">
          IMPORTANT: READ CAREFULLY BEFORE USING THE SERVICES PROVIDED BY ALGOEDGE SPORTS
        </p>
        <p className="mb-6">
          This Terms and Conditions Agreement ("Agreement") governs the relationship between you (the "User") and
          AlgoEdge Sports Inc. ("AlgoEdge Sports" or "we") and applies to your access and use of the AlgoEdge Sports
          platform, services, and tools (the "Services"). By creating an account, purchasing a subscription, or using
          the Services, you acknowledge that you have read, understand, and agree to be bound by this Agreement.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Services and Licenses</h2>
          <h3 className="text-xl font-semibold mb-2">1.1 Grant of License</h3>
          <p className="mb-4">
            AlgoEdge Sports grants you a limited, non-exclusive, non-transferable, and revocable license to access and
            use its Services for your personal or internal business use in accordance with this Agreement. All features,
            data, tools, algorithms, and other content provided by AlgoEdge Sports (the "Platform") are subject to this
            license.
          </p>
          <h3 className="text-xl font-semibold mb-2">1.2 Permitted Use</h3>
          <p className="mb-2">You may use the Services to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create, customize, and manage sports-related data algorithms.</li>
            <li>Analyze and sort sports-related data made available by AlgoEdge Sports.</li>
            <li>Access content provided on a subscription basis.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Subscriptions</h2>
          <h3 className="text-xl font-semibold mb-2">2.1 Account and Payment</h3>
          <p className="mb-4">To access the Services, you must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account with accurate, up-to-date information.</li>
            <li>
              Select a subscription plan and pay the associated fees. All fees are non-refundable unless explicitly
              stated otherwise.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">2.2 Automatic Renewal</h3>
          <p className="mb-4">
            Subscriptions will automatically renew at the end of each term unless canceled at least 30 days prior to
            renewal. By subscribing, you authorize AlgoEdge Sports to charge your payment method on file for renewal
            fees.
          </p>
          <h3 className="text-xl font-semibold mb-2">2.3 Cancellation</h3>
          <p className="mb-4">
            You may cancel your subscription by contacting support@algoedgesports.com at least 30 days prior to the
            renewal date. Access to the Services will continue until the end of the current subscription term.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <h3 className="text-xl font-semibold mb-2">3.1 Account Security</h3>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your account credentials. Sharing your username
            or password with others is strictly prohibited.
          </p>
          <h3 className="text-xl font-semibold mb-2">3.2 Prohibited Actions</h3>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Share or redistribute any content, data, or tools from AlgoEdge Sports without explicit permission.</li>
            <li>Reverse-engineer, copy, or create derivative works based on the Platform or its content.</li>
            <li>Use the Services for illegal or unauthorized purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Ownership and Intellectual Property</h2>
          <p className="mb-4">
            All intellectual property, including but not limited to algorithms, data, tools, software, and content
            provided by AlgoEdge Sports, remains the sole property of AlgoEdge Sports and its licensors. You are granted
            no rights to this intellectual property except as expressly outlined in this Agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data and Privacy</h2>
          <h3 className="text-xl font-semibold mb-2">5.1 Collection and Use of Data</h3>
          <p className="mb-4">
            AlgoEdge Sports may collect and aggregate anonymized data from your use of the Platform to improve its
            Services. For full details on how we handle your personal data, refer to our Privacy Policy.
          </p>
          <h3 className="text-xl font-semibold mb-2">5.2 User Data</h3>
          <p className="mb-4">
            You retain ownership of data you input into the Platform. By using the Services, you grant AlgoEdge Sports a
            license to process and analyze this data as part of the functionality of the Platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitations of Liability</h2>
          <p className="mb-2">To the fullest extent permitted by law, AlgoEdge Sports is not liable for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Indirect, incidental, or consequential damages.</li>
            <li>Losses resulting from your use of the Platform, including inaccurate data or algorithmic outputs.</li>
            <li>Any decision or action you take based on the outputs of the Platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
          <p className="mb-4">
            The Services are provided "as is" without warranties of any kind, including implied warranties of
            merchantability, fitness for a particular purpose, or non-infringement. AlgoEdge Sports does not guarantee
            uninterrupted, error-free, or accurate results from its Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="mb-4">
            AlgoEdge Sports reserves the right to terminate your access to the Services at any time if you violate this
            Agreement. Upon termination, you must cease all use of the Services and delete any proprietary content
            downloaded or copied from the Platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            This Agreement is governed by the laws of the Province of Alberta, Canada, without regard to its conflict of
            law principles. Any disputes arising from this Agreement must be resolved in the courts located in Alberta,
            Canada.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Modifications</h2>
          <p className="mb-4">
            AlgoEdge Sports reserves the right to update or modify this Agreement at any time. Changes will take effect
            upon posting to the AlgoEdge Sports website. Continued use of the Services indicates your acceptance of any
            changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
          <p className="mb-4">
            If you have questions about this Agreement, please contact us at support@algoedgesports.com.
          </p>
        </section>
      </main>
    </>
  )
}
