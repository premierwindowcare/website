"use client"

import Image from "next/image"
import { Shield, Clock, Eye, ThumbsUp } from "lucide-react"

export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Fully Insured",
      description:
        "Peace of mind knowing you're protected. We carry comprehensive liability insurance for every job.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description:
        "We show up on time, every time. Consistent, dependable service you can count on.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "We don't cut corners. Every window, frame, and sill gets the attention it deserves.",
    },
    {
      icon: ThumbsUp,
      title: "Full Satisfaction Guarantee",
      description:
        "You don’t pay until you’re happy with the results. If anything isn’t right, we’ll make it right.",
    },
  ]

  return (
    <section id="why-us" className="scroll-mt-28 py-20 md:py-28 bg-blue-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden border-0 relative">
              
              <Image
                src="/20260722_120201.jpg"
                alt="Professional window cleaning"
                fill
                className="object-cover object-center"
              />

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
                    <h3 className="font-semibold text-blue-deep mb-1">
                      {reason.title}
                    </h3>
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
