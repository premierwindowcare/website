import { Shield, Clock, Eye, ThumbsUp } from "lucide-react"

export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Peace of mind knowing you're protected. We carry comprehensive liability insurance for every job.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We show up on time, every time. Consistent, dependable service you can count on.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "We don't cut corners. Every window, frame, and sill gets the attention it deserves.",
    },
    {
      icon: ThumbsUp,
      title: "Full Satisfaction Guarantee",
      description: "You don’t pay until you’re happy with the results. If anything isn’t right, we’ll make it right.",
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-28 bg-blue-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-pale/50 via-blue-light/30 to-blue-sky/20 p-8 flex items-center justify-center border border-blue-light/40 overflow-hidden">
              {/* Decorative Window Icon */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-blue-sky/50 rounded-xl grid grid-cols-2 grid-rows-2 gap-2 p-2">
                    <div className="bg-gradient-to-br from-blue-pale/80 to-blue-light/50 rounded-lg" />
                    <div className="bg-gradient-to-br from-blue-pale/80 to-blue-light/50 rounded-lg" />
                    <div className="bg-gradient-to-br from-blue-pale/80 to-blue-light/50 rounded-lg" />
                    <div className="bg-gradient-to-br from-blue-pale/80 to-blue-light/50 rounded-lg" />
                  </div>
                </div>
                {/* Sparkle effects */}
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-light rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-sky rounded-full animate-pulse animation-delay-400" />
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-pale rounded-full animate-pulse animation-delay-600" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
              Why Choose Premier Window Care?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We&apos;re not just window cleaners — we&apos;re perfectionists dedicated to delivering exceptional results every time.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-primary to-blue-sky flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-deep mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
