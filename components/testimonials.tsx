import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Darcy Briseno",
      location: "Jenison, MI",
      quote: "Josiah and Drew did a wonderful job washing my windows! They saved me so much time and did a thorough job. I will definitely use them again next time!",
      rating: 5,
    },
    {
      name: "Isaiah Murphy",
      location: "Holland, MI",
      quote: "Great job highly recommend!",
      rating: 5,
    },
    {
      name: "",
      location: "",
      quote: "Coming Soon...",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="scroll-mt-28 py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied customers across West Michigan.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-soft rounded-2xl p-8 border border-border shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-blue-sky text-blue-sky"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-primary to-blue-sky flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-blue-deep">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
