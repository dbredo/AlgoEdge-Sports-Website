import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "This is exactly what's been missing — the ability to customize and weight data without writing code. It's going to be huge.",
    author: "Michael S.",
    title: "Sports Betting Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "I've never seen a fantasy tool this flexible. If this works like you're planning, it's going to dominate fantasy leagues.",
    author: "Sarah L.",
    title: "Fantasy League Commissioner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The concept is killer. If you can pull this off cleanly, it's going to be a game-changer for how people use sports data.",
    author: "David R.",
    title: "Quantitative Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-white text-center mb-4">Industry Reactions</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Early feedback from sports bettors, fantasy players, and data pros who've seen what we're building.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 group hover:translate-y-[-4px] transition-all duration-300 bg-gray-800/20 backdrop-blur-sm border border-gray-700/30"
            >
              <Quote className="w-10 h-10 text-[#4fd1c5] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-300 mb-8 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 ring-2 ring-[#4fd1c5]/30"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-[#4fd1c5]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
