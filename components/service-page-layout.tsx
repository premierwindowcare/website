import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TrustBar } from "@/components/trust-bar"
import type { ServicePage } from "@/lib/site-pages"

type ServicePageLayoutProps = {
  service: ServicePage
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-blue-primary to-blue-sky pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-blue-light/25 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-64 w-64 rounded-full bg-blue-pale/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Window Cleaning Service
              </div>

              <h1 className="mb-6 max-w-3xl text-4xl font-bold text-white text-balance md:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                {service.summary}
              </p>

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

            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/25 shadow-2xl">
              <Image
                src={service.image}
                alt={service.cardTitle}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {![
        "commercial-window-cleaning",
        "interior-window-cleaning",
        "hard-water-stain-removal",
      ].includes(service.slug) && (
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-3">
              {service.galleryImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${service.cardTitle} photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-blue-soft py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-primary shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
                What to Expect
              </div>
              <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
                {service.cardTitle} That Feels Finished
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {service.detailsIntro}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-lg md:p-8">
                <h3 className="mb-5 text-2xl font-bold text-blue-deep">
                  Why This Service Helps
                </h3>
                <div className="space-y-4">
                  {service.detailHighlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-primary" />
                      <p className="leading-relaxed text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-blue-deep p-6 text-white shadow-lg md:p-8">
                <h3 className="mb-5 text-2xl font-bold">
                  How We Handle It
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-pale" />
                      <p className="leading-relaxed text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <TrustBar />
      <Footer />
    </main>
  )
}
