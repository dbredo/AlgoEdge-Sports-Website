import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa"
import Link from "next/link"

export function SpecialOffer() {
  return (
    <section className="py-16 bg-[#f0f5f4]">
      <div className="container mx-auto px-4">
        <Card className="bg-white border-2 border-[#3f6d63]">
          <CardHeader className="bg-[#3f6d63] text-white">
            <CardTitle className="text-2xl font-bold">Special Offer – Get a Free Month!</CardTitle>
            <CardDescription className="text-gray-200">
              Share your AlgoEdge experience and get rewarded!
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">How to Participate:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Post about AlgoEdge Sports on two social media platforms</li>
                  <li>Share how AlgoEdge Sports helps your sports analysis or algorithm creation</li>
                  <li>Tag the official AlgoEdge Sports account in your posts</li>
                  <li>
                    Email post links/screenshots to <span className="font-semibold">promo@algoedgesports.com</span>
                  </li>
                  <li>Once verified, your next month's subscription fee will be waived!</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Eligibility Criteria:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Must post on two different social media platforms</li>
                  <li>Social media accounts must have at least 50 followers, friends, or subscribers</li>
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Eligible Platforms:</h4>
                  <div className="flex space-x-4">
                    <a href="https://x.com/AlgoEdgeSports" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-2xl text-[#1DA1F2]" />
                    </a>
                    <a href="https://www.instagram.com/algoedgesports" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl text-[#E1306C]" />
                    </a>
                    <a href="https://www.facebook.com/algoedgesports" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-2xl text-[#4267B2]" />
                    </a>
                    <a href="https://www.tiktok.com/@algoedgesports" target="_blank" rel="noopener noreferrer">
                      <FaTiktok className="text-2xl text-[#000000]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/algoedge-sports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl text-[#0077B5]" />
                    </a>
                    <a href="https://www.youtube.com/@algoedgesports" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="text-2xl text-[#FF0000]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="https://www.algoedgesports.com/contact">
                <Button className="bg-[#3f6d63] text-white hover:bg-[#345c54]">
                  Share Your AlgoEdge Experience Today! <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
