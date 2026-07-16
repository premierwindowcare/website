import Link from "next/link"
import { ArrowRight, Check, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Contact, ContactForm } from "@/components/contact"
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
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.85fr)] lg:items-start lg:gap-14">
          <div className="max-w-3xl text-center lg:pt-10 lg:text-left">
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

            <div className="flex justify-center lg:justify-start">
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
          <ContactForm className="lg:max-w-xl lg:justify-self-end" />
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
            <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
              {page.communitySections.map((section, sectionIndex) => (
                <section
                  key={section.title}
                  className={`rounded-[2rem] p-6 md:p-10 lg:p-12 ${
                    sectionIndex === 1
                      ? "bg-blue-deep text-white"
                      : sectionIndex === 2
                        ? "border border-border bg-white shadow-sm"
                        : "bg-blue-soft"
                  }`}
                >
                  <div className="mb-8 max-w-4xl">
                    <p
                      className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
                        sectionIndex === 1 ? "text-blue-pale" : "text-blue-primary"
                      }`}
                    >
                      {sectionIndex === 0
                        ? "Local care, made simple"
                        : sectionIndex === 1
                          ? page.city === "Kentwood"
                            ? "What we see most"
                            : "What we see most often"
                          : page.city === "Hudsonville"
                            ? "Get to know our hometown"
                            : `About ${page.city}`}
                    </p>
                    <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
                      <span className={sectionIndex === 1 ? "text-white" : undefined}>
                        {section.title}
                      </span>
                    </h2>
                    <p
                      className={`text-lg leading-relaxed ${
                        sectionIndex === 1 ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {section.intro}
                    </p>
                  </div>

                  <div
                    className={
                      sectionIndex === 0
                        ? "grid gap-5 lg:grid-cols-3"
                        : sectionIndex === 1
                          ? "grid gap-x-10 gap-y-8 md:grid-cols-2"
                          : "space-y-8"
                    }
                  >
                    {section.items.map((item, itemIndex) => (
                      <article
                        key={item.title}
                        className={
                          sectionIndex === 0
                            ? "rounded-2xl bg-white p-6 shadow-sm"
                            : sectionIndex === 1
                              ? "flex gap-4 border-t border-white/20 pt-6"
                              : "grid gap-4 border-t border-border pt-8 md:grid-cols-[3rem_minmax(0,1fr)]"
                        }
                      >
                        {sectionIndex === 1 ? (
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-blue-pale">
                            <Check className="h-4 w-4" />
                          </span>
                        ) : sectionIndex === 2 ? (
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft font-bold text-blue-primary">
                            {itemIndex + 1}
                          </span>
                        ) : null}
                        <div>
                          <h3
                            className={`mb-3 text-xl font-bold ${
                              sectionIndex === 1 ? "text-white" : "text-blue-deep"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`leading-relaxed ${
                              sectionIndex === 1 ? "text-white/80" : "text-foreground"
                            }`}
                          >
                            {item.body}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>

                  {"closing" in section && section.closing ? (
                    <div className="mt-10 rounded-2xl bg-white/10 p-6 md:flex md:items-center md:gap-5 md:p-8">
                      <span className="mb-4 block text-sm font-bold uppercase tracking-[0.15em] text-blue-pale md:mb-0 md:w-32 md:shrink-0">
                        How we help
                      </span>
                      <p className="text-lg leading-relaxed text-white">{section.closing}</p>
                    </div>
                  ) : null}
                </section>
              ))}
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
