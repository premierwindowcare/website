"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { servicePages } from "@/lib/site-pages"

const memberships = [
  {
    name: "One Time",
    savings: "No discount",
    cadence: "Single Cleaning",
    badge: null,
    benefits: [
      "No touch ups in between service",
      "No screen cleaning",
      "No hard water removal",
    ],
  },
  {
    name: "Quarterly",
    savings: "$100 off",
    cadence: "Per Cleaning",
    badge: "Best Value",
    benefits: [
      "Free touch ups in between service",
      "Screen cleaning",
      "Hard water removal",
    ],
  },
  {
    name: "Biannually",
    savings: "$50 off",
    cadence: "Per Cleaning",
    badge: null,
    benefits: [
      "Free touch ups in between service",
      "Screen cleaning",
      "Hard water removal",
    ],
  },
]

export function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {servicePages.map((service) => (
        <Link
          key={service.slug}
          href={`/${service.slug}`}
          className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-light/50"
        >
          <div className="relative h-40 md:h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.cardTitle}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-primary to-blue-sky">
              <service.icon className="h-5 w-5 text-white" />
            </div>

            <h3 className="text-xl font-bold text-blue-deep mb-3 group-hover:text-blue-primary transition-colors">
              {service.cardTitle}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {service.cardDescription}
            </p>

            <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-primary">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function MaintenancePlans() {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <div className="mb-3 flex items-center justify-center gap-2 text-4xl font-black text-blue-deep md:text-5xl">
          SAVE BIG
        </div>
        <h3 className="mb-3 text-2xl font-bold text-blue-primary md:text-3xl">
          With Our Maintenance Plans
        </h3>
        <p className="text-muted-foreground md:text-lg">
          Pick the cleaning plan that best fits your home or business and save more with every scheduled visit.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {memberships.map((membership) => (
          <div
            key={membership.name}
            className="relative rounded-2xl border border-border bg-blue-bg p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-light/70 hover:shadow-xl"
          >
            {membership.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                {membership.badge}
              </div>
            )}
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-primary">
              {membership.name}
            </p>
            <div className="mb-6 border-b border-border pb-5">
              <p className="text-4xl font-black text-blue-deep">
                {membership.savings}
              </p>
              <p className="mt-1 text-xs font-bold uppercase text-muted-foreground">
                {membership.cadence}
              </p>
            </div>
            <ul className="mb-6 space-y-3">
              {membership.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className={`flex gap-3 text-sm font-medium ${
                    membership.name === "One Time"
                      ? "text-muted-foreground line-through"
                      : "text-foreground"
                  }`}
                >
                  {membership.name === "One Time" ? (
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-primary" />
                  )}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky"
            >
              <Link href="/#contact">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <>
      <section id="services" className="scroll-mt-28 py-12 md:py-20 bg-blue-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We don&apos;t just clean windows. We provide detailed service options for
              homes and businesses across West Michigan.
            </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      <section id="maintenance-plans" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <MaintenancePlans />
        </div>
      </section>
    </>
  )
}
