"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { orderedServicePages } from "@/lib/site-pages"

const memberships = [
  {
    name: "One-Time Cleaning",
    subtitle: "A complete reset",
    description:
      "For homeowners who want their windows cleaned when they need it.",
    savings: "No discount",
    cadence: "Single service",
    badge: null,
    benefits: [
      "No Touch-ups Between Services",
      "No Hard Water Removal",
      "No 7-Day Rain Guarantee",
    ],
    cta: "Get My Free Quote",
    recommended: false,
  },
  {
    name: "Biannual Maintenance",
    subtitle: 'The "Stay Ahead" Plan',
    schedule: "2 visits • Spring + Fall",
    description:
      "The sweet spot for homeowners who want to prevent heavy seasonal buildup without needing three cleanings every year.",
    savings: "Save $100/year",
    cadence: "2 scheduled cleanings",
    badge: null,
    benefits: [
      "Free Touch-ups Between Services",
      "Free Hard Water Removal",
      "7-Day Rain Guarantee",
      "Full 3-Part Cleaning",
    ],
    cta: "Choose Biannual",
    recommended: false,
  },
  {
    name: "Seasonal Maintenance",
    subtitle: 'The "Always Clean" Plan',
    schedule: "3 visits • Spring • Summer • Fall",
    description:
      "For homeowners who want consistently clean windows throughout the year without having to think about scheduling.",
    savings: "Save $150/year",
    cadence: "3 scheduled cleanings",
    badge: "BEST VALUE",
    benefits: [
      "Free Touch-ups Between Services",
      "Free Hard Water Removal",
      "7-Day Rain Guarantee",
      "Full 3-Part Cleaning",
    ],
    cta: "Choose Seasonal Maintenance",
    recommended: true,
  },
];

const maintenanceProcess = [
  { number: "01", title: "Glass", heading: "A full glass cleaning", description: "The exterior glass is thoroughly cleaned including the edges and corners where dirt and grime can collect." },
  { number: "02", title: "Frames & Sills ", heading: "The details that others miss", description: "The areas around your windows are cleaned of any and all dust, pollen, cobwebs, and grime that can build up over time. Keeping these areas clean will help prevent water from raining down them and tracking dirty water back down onto your glass." },
  { number: "03", title: "Pure Water Finish", heading: "A spot free rinse", description: "A final rinse with purified water ensures there are no spots or watermarks left behind after cleaning, so your windows stay nice and clear for the longest possible." },
]

const seasonalBuildup = [
  { season: "Spring", title: "Pollen", description: "Fine pollen and airborne particles settle on glass and screens, creating a hazy, dirty appearance." },
  { season: "Summer", title: "Mineral Spotting", description: "Irrigation, sprinklers, heat, and other summer related precipititation can cause white spots to appear on the exterior glass of your windows." },
  { season: "Fall", title: "Dust & Debris", description: "Dry weather, yard work, leaves, and other construction work in your area can cause additional buildup to appear on your windows." },
]

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
      {orderedServicePages.map((service) => (
        <Link key={service.slug} href={`/${service.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-light/50 hover:shadow-xl">
          <div className="relative h-40 overflow-hidden md:h-48"><Image src={service.image} alt={service.cardTitle} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
          <div className="p-6 md:p-8">
            <h3 className="mb-3 text-xl font-bold text-blue-deep transition-colors group-hover:text-blue-primary">{service.cardTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{service.cardDescription}</p>
            <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-primary">Learn more<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function MaintenancePlans() {
  return (
    <div className="space-y-16 md:space-y-24">
      <header className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Seasonal Maintenance</p>
        <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-5xl">Clean Windows Are Great. Maintained Windows Stay That Way.</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">Your windows aren't dirty in the same way, all year round. Pollen sticks to glass in the spring, mineral deposits gather on glass in the summer, and dust and debris cling to screens in the fall. Our maintenance plans help you keep your glass looking its best, throughout the year - without having to wait to clean the dirt off, again.</p>
      </header>

      <section aria-labelledby="maintenance-process-heading">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 id="maintenance-process-heading" className="mb-3 text-2xl font-bold text-blue-deep md:text-3xl">Our 3-Part Cleaning Process</h3>
          <p className="text-muted-foreground">Each maintenance service includes a comprehensive clean, not just a quick wipe-down of the glass</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {maintenanceProcess.map((step) => (
            <article key={step.number} className={`rounded-2xl border bg-white p-6 shadow-sm ${step.number === "03" ? "border-blue-primary ring-1 ring-blue-primary/20 md:-translate-y-1" : "border-border"}`}>
              <p className="mb-4 text-sm font-black tracking-[0.18em] text-blue-primary">{step.number}</p>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">{step.title}</p>
              <h4 className="mb-3 text-xl font-bold text-blue-deep">{step.heading}</h4>
              <p className="leading-relaxed text-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="seasonal-maintenance-heading">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 id="seasonal-maintenance-heading" className="mb-3 text-2xl font-bold text-blue-deep md:text-3xl">Why Seasonal Maintenance?</h3>
          <p className="text-lg text-muted-foreground">Your windows don&apos;t get dirty the same way all year.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {seasonalBuildup.map((season) => (
            <article key={season.season} className="rounded-2xl bg-blue-soft p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">{season.season}</p>
              <h4 className="mb-3 text-2xl font-bold text-blue-deep">{season.title}</h4>
              <p className="leading-relaxed text-foreground">{season.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-lg font-bold text-blue-deep">Three seasons. Three different problems. One maintenance plan.</p>
      </section>

      <section aria-label="Maintenance plan options">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Choose your level of care</p>
          <p className="text-lg text-muted-foreground">Cleaning removes what&apos;s there. Maintenance keeps you ahead of what&apos;s coming back.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {memberships.map((membership) => (
            <article key={membership.name} className={`relative flex flex-col rounded-2xl border bg-blue-bg p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${membership.recommended ? "border-blue-primary shadow-lg ring-1 ring-blue-primary/20 md:-translate-y-2" : "border-border hover:border-blue-light/70"}`}>
              {membership.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">{membership.badge}</div>}
              <h3 className="mb-1 text-2xl font-bold text-blue-deep">{membership.name}</h3>
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-primary">{membership.subtitle}</p>
              <p className="mb-6 leading-relaxed text-muted-foreground">{membership.description}</p>
              <div className="mb-6 border-b border-border pb-5"><p className="text-3xl font-black text-blue-deep">{membership.savings}</p><p className="mt-1 text-xs font-bold uppercase text-muted-foreground">{membership.cadence}</p></div>
              <ul className="mb-6 space-y-3">
                {membership.benefits.map((benefit) => {
                  const unavailable = membership.name === "One-Time Cleaning"

                  return (
                    <li key={benefit} className={`flex gap-3 text-sm font-medium ${unavailable ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {unavailable ? <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /> : <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-primary" />}
                      <span>{benefit}</span>
                    </li>
                  )
                })}
              </ul>
              <Button asChild className="mt-auto w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky"><Link href="/#contact">{membership.cta}</Link></Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export function Services() {
  return (
    <>
      <section id="services" className="scroll-mt-28 bg-blue-soft py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">Thorough window cleaning, inside and out. Explore our full range of options for homes and businesses across West Michigan.</p>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section id="maintenance-plans" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4"><MaintenancePlans /></div>
      </section>
    </>
  )
}
