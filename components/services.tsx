"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Square, Layers } from "lucide-react"
import { HashLink } from "@/components/hash-link"

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Glass",
      description: "Crystal-clear glass cleaning for a flawless finish.",
      image: "/window.jpg",
    },
    {
      icon: Square,
      title: "Frames",
      description:
        "Detailed frame cleaning to remove dust and buildup for a polished look.",
      image: "/frame.jpg",
    },
    {
      icon: Layers,
      title: "Sills",
      description:
        "Thorough sill cleaning to eliminate dirt and leave everything spotless.",
      image: "/sill.jpg",
    },
  ]

  return (
    <section id="services" className="scroll-mt-28 py-12 md:py-20 bg-blue-soft">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We don&apos;t just clean windows — we provide a comprehensive service that covers every detail.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-pale/40 via-blue-light/30 to-blue-sky/20 p-8 md:p-10 border border-blue-light/40 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/30 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-blue-primary/10 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-blue-primary" />
                <span className="text-sm font-medium text-blue-primary">
                  Included With Service
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-deep mb-3">
                Complimentary Touch-Ups
              </h3>

              <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                See something we missed? Let us know and we&apos;ll return to make it right, with complimentary touch-ups available to keep your windows looking their best year-round.
              </p>

              <Button
                asChild
                className="rounded-full bg-blue-primary hover:bg-blue-sky text-white group"
              >
                <HashLink href="#contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </HashLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-light/50"
            >
              {/* IMAGE */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-deep mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
