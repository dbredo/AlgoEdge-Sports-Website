import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "AlgoEdge has completely transformed my approach to sports betting. The custom algorithms have given me a significant edge in my analysis.",
    author: "Michael S.",
    role: "Professional Sports Bettor",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "As a fantasy league manager, AlgoEdge has been a game-changer. The real-time insights have helped me make crucial decisions that led to multiple league wins.",
    author: "Sarah L.",
    role: "Fantasy League Champion",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "The intuitive interface and powerful analytics of AlgoEdge have made complex sports data accessible and actionable. It's an essential tool for any serious sports analyst.",
    author: "David R.",
    role: "Sports Data Analyst",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
