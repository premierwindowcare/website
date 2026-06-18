import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MaintenancePlans, ServiceCards } from "@/components/services"
import { TrustBar } from "@/components/trust-bar"
import type { getLocationPage } from "@/lib/site-pages"

type LocationPageLayoutProps = {
  page: NonNullable<ReturnType<typeof getLocationPage>>
}

export function LocationPageLayout({ page }: LocationPageLayoutProps) {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-blue-primary to-blue-sky pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-blue-light/25 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-64 w-64 rounded-full bg-blue-pale/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-blue-pale" />
              West Michigan Service Area
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white text-balance md:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              {page.heroIntro}
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-lg text-blue-primary shadow-lg hover:bg-blue-soft"
              >
                <Link href="#contact">
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-soft py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
                Local Window Cleaning Services in {page.city}
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {page.servicesIntro}
              </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
                {page.expertiseTitle}
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Every city has different property types, traffic patterns, weather exposure,
                and window cleaning needs. Here is how we approach work in {page.city}.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {page.expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-blue-bg p-6 shadow-sm"
                >
                  <div className="mb-4 h-2 w-12 rounded-full bg-blue-primary" />
                  <p className="leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <MaintenancePlans />
        </div>
      </section>

      <Contact />
      <TrustBar />
      <Footer />
    </main>
  )
}
