import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privacy Policy | AlgoEdge Sports",
  description: "Read about how AlgoEdge Sports collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl pt-[72px] px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-6">Effective Date: January 23, 2025</p>

        <p className="mb-6">
          AlgoEdge ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your
          information when you visit our website (the "Website") or subscribe to our services. By using our Website, you
          consent to the data practices described in this Privacy Policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
          <p className="mb-2">We may collect the following personal information directly from you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Payment information (e.g., credit card details)</li>
            <li>Account login credentials</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">1.2 Non-Personal Information</h3>
          <p className="mb-2">
            We may collect non-personal information automatically when you visit our Website, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Device information</li>
            <li>Referring website URLs</li>
            <li>Pages visited and time spent on our Website</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">1.3 Cookies and Tracking Technologies</h3>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our Website. These may
            include session cookies, persistent cookies, and third-party cookies for analytics and performance
            monitoring.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use the information we collect for the following purposes:</p>
          <h3 className="text-xl font-semibold mb-2">To Provide Services:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Process subscription payments.</li>
            <li>Grant access to the Website's features and tools.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">To Improve the Website:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Analyze user behavior and Website performance.</li>
            <li>Customize your experience based on your preferences.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">To Communicate with You:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Respond to your inquiries.</li>
            <li>Send account updates, newsletters, and service-related announcements.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">For Security and Compliance:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Detect, prevent, and address technical issues or unauthorized access.</li>
            <li>Comply with applicable legal requirements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. However, we may share your information
            with the following entities for specific purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Service Providers:</strong> Third-party vendors that help us process payments, manage the Website,
              or perform analytics.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Government authorities or law enforcement when required by law or to
              protect our legal rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition, your information may
              be transferred to the new entity.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to provide our services or as required by
            law. When your information is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Security of Your Information</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized
            access, disclosure, or misuse. However, no data transmission or storage system is completely secure, and we
            cannot guarantee the absolute security of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <h3 className="text-xl font-semibold mb-2">6.1 Access and Update</h3>
          <p className="mb-4">
            You have the right to access and update the personal information we hold about you. You can make changes by
            logging into your account or contacting us directly.
          </p>
          <h3 className="text-xl font-semibold mb-2">6.2 Opt-Out of Communications</h3>
          <p className="mb-4">
            You may opt out of receiving promotional emails by clicking the "unsubscribe" link in the email or
            contacting us. Note that we may still send you essential service-related communications.
          </p>
          <h3 className="text-xl font-semibold mb-2">6.3 Cookies</h3>
          <p className="mb-4">
            You can manage your cookie preferences through your browser settings. However, disabling cookies may affect
            the functionality of our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="mb-4">
            Our Website may contain links to third-party websites. We are not responsible for the privacy practices or
            content of these external sites. We encourage you to review their privacy policies before sharing your
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our Website is not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children. If we become aware that we have collected information from a child, we will take
            steps to delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. International Users</h2>
          <p className="mb-4">
            If you access our Website from outside [Your Jurisdiction], please note that your information may be
            transferred to, stored, and processed in a country where data protection laws may differ from those of your
            location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and
            regulatory reasons. Any updates will be posted on this page with the "Effective Date" revised accordingly.
            We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
          </p>
        </section>

        <p className="mb-4">
          By using our Website, you acknowledge that you have read and understood this Privacy Policy and agree to its
          terms.
        </p>
      </main>
    </>
  )
}
