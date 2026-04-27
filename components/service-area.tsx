import { MapPin } from "lucide-react"

export function ServiceArea() {
  const cities = [
    "Hudsonville",
    "Grand Rapids",
    "Wyoming",
    "Kentwood",
    "Grandville",
    "Jenison",
    "Holland",
    "Grand Haven"
  ]

  return (
    <section id="service-area" className="py-16 md:py-24 bg-blue-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
            Proudly Serving West Michigan
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From Holland to Grand Rapids and everywhere in between — we&apos;ve got you covered.
          </p>
        </div>

        {/* Map Area */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-5 md:p-10 border border-border overflow-hidden shadow-sm">
            {/* Decorative Map Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {/* West Michigan Outline - Simplified Shape */}
                <path
                  d="M100,50 Q120,30 150,40 L200,35 Q230,45 250,60 L280,80 Q300,100 290,140 L285,180 Q280,220 260,250 L220,270 Q180,280 140,270 L100,250 Q80,220 85,180 L90,140 Q85,100 100,50 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-primary"
                />
                {/* Lake Michigan */}
                <path
                  d="M50,40 Q30,80 35,150 Q40,220 60,280"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-blue-sky"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-primary" />
                <span className="text-base md:text-lg font-semibold text-blue-deep">Our Service Area</span>
              </div>

              {/* Cities Grid - Better mobile layout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-soft rounded-xl px-3 md:px-4 py-2.5 md:py-3 border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-sky flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm md:text-base truncate">{city}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-6 md:mt-8 text-sm md:text-base">
                Don&apos;t see your city? Give us a call — we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
