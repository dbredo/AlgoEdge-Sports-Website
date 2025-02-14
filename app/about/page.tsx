import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Heart, Lightbulb, Users, Target, Share2, Shield, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | AlgoEdge Sports",
  description:
    "Learn about AlgoEdge Sports' mission to empower sports enthusiasts with cutting-edge data analytics tools and our commitment to making a positive impact.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        {/* Hero Banner */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20us%20_%20AlgoEdge-hcDssrZzd0afxsddGJXYYsprMXlekI.webp"
            alt="AlgoEdge Sports Analytics Visualization"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-4xl">
              Empower Sports Enthusiasts with the Power of Data
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At AlgoEdge Sports, our mission is to empower sports enthusiasts, analysts, and businesses with
              cutting-edge data and tools that transform the way sports are analyzed. By providing access to
              comprehensive player, team, and game statistics, we help users make informed, data-driven decisions with
              confidence. We aim to bridge the gap between complex sports analytics and accessible insights, offering
              both depth and simplicity to fuel innovation and improve outcomes in sports analysis and decision-making.
            </p>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Innovation",
                  description:
                    "We are committed to continuously advancing the tools, data, and technology that power our platform.",
                  icon: Lightbulb,
                },
                {
                  title: "Accessibility",
                  description:
                    "We believe that sports analytics should be accessible to everyone—from casual fans to professional analysts.",
                  icon: Users,
                },
                {
                  title: "Accuracy",
                  description:
                    "Our data is sourced from trusted providers and constantly updated to provide the most accurate insights.",
                  icon: Target,
                },
                {
                  title: "Collaboration",
                  description: "We value the power of community and believe in fostering a collaborative environment.",
                  icon: Share2,
                },
                {
                  title: "Integrity",
                  description: "We are dedicated to maintaining the highest ethical standards in everything we do.",
                  icon: Shield,
                },
                {
                  title: "Inspiration",
                  description:
                    "We strive to empower our users by transforming raw data into meaningful insights that inspire smarter decisions and deeper connections to the game.",
                  icon: Sparkles,
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-6">
                    <value.icon className="h-12 w-12 text-[#3f6d63]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Journey Section */}
          <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#3f6d63]/20" />

                {/* 2024 */}
                <div className="relative pl-16 pb-12">
                  <div className="absolute left-0 top-2 w-8 h-8 bg-[#3f6d63] rounded-full border-4 border-white" />
                  <h3 className="text-2xl font-bold mb-4 text-[#3f6d63]">2024</h3>
                  <p className="text-gray-600">
                    The idea was conceptualized after recognizing gaps in accessible sports analytics. Previously,
                    making data-driven decisions required knowledge of coding languages, limiting access to only those
                    with technical expertise. Our initial groundwork began with the goal of developing a platform that
                    empowers users with advanced algorithm creation tools—without the need for coding. AlgoEdge
                    simplifies the process, enabling anyone to leverage complex analytics and build custom models
                    effortlessly.
                  </p>
                </div>

                {/* 2025 */}
                <div className="relative pl-16">
                  <div className="absolute left-0 top-2 w-8 h-8 bg-[#3f6d63] rounded-full border-4 border-white" />
                  <h3 className="text-2xl font-bold mb-4 text-[#3f6d63]">2025</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      AlgoEdge Sports platform launched with cutting-edge tools for algorithm creation, allowing users
                      to customize and fine-tune data filters, weights, and scoring methods for more precise and
                      actionable insights. The AlgoEdge Sports platform offers a unique way to analyze sports data,
                      making complex analytics accessible to everyone from casual fans to professional analysts.
                    </p>
                    <p className="text-gray-600">
                      Key partnerships established to integrate additional sports data sources, enhancing the platform's
                      value and accuracy for users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
              <div className="flex justify-center items-center w-64 h-64 overflow-hidden rounded-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dylan%20Bredo%20-%20Headshot.jpg-Mj4h7dJyhgzX3INEfDQjzH854Km5Md.jpeg"
                  alt="Founder of AlgoEdge Sports"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  Hi, I'm Dylan! As a CFA charterholder with a Master's in Business Analytics and Finance, my journey
                  has always been fueled by a passion for data-driven insights. With years of experience in analyzing
                  complex data and making informed financial decisions, I founded AlgoEdge Sports to bring the same
                  powerful analytical tools used in finance to the world of sports. My mission is to help sports
                  enthusiasts, analysts, and bettors make smarter, more informed decisions by providing easy access to
                  cutting-edge algorithms and real-time data. At AlgoEdge Sports, we're redefining how people interact
                  with sports data, and I'm excited to share this innovative platform with you!
                </p>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Commitment</h2>
            <div className="max-w-4xl mx-auto flex items-start gap-8">
              <div className="flex-1 space-y-8">
                <p className="text-[#6b7280] leading-relaxed">
                  At AlgoEdge Sports, we believe in making a positive impact beyond sports analytics. That's why we are
                  proud to commit a portion of our profits to supporting addiction recovery causes. We are dedicated to
                  helping individuals and families affected by addiction by supporting programs, initiatives, and
                  organizations that provide vital resources for recovery, treatment, and rehabilitation.
                </p>
                <p className="text-[#6b7280] leading-relaxed">
                  If you or someone you know is struggling with addiction, please remember that help is available. You
                  are not alone. Reach out to a professional or a local support group to start your journey to recovery.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  For gambling addiction, you can contact the National Gambling Helpline at 1-800-522-4700 or visit the
                  website{" "}
                  <a href="https://www.ncpgambling.org" className="text-blue-600 hover:underline">
                    https://www.ncpgambling.org
                  </a>{" "}
                  for more information and support.
                </p>
              </div>
              <div className="hidden md:block">
                <Heart className="h-64 w-64 text-gray-300" strokeWidth={2} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}