import Link from "next/link"
import { MapPin } from "lucide-react"
import { cityHref, serviceCities } from "@/lib/site-pages"

export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-28 py-16 md:py-24 bg-blue-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-4">
            Proudly Serving West Michigan
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From Holland to Grand Rapids and everywhere in between, we&apos;ve got
            you covered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-primary" />
                <span className="text-base md:text-lg font-semibold text-blue-deep">
                  Our Service Area
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {serviceCities.map((city) => (
                  <Link
                    key={city}
                    href={cityHref(city)}
                    className="flex items-center gap-2 bg-blue-soft rounded-xl px-3 md:px-4 py-2.5 md:py-3 border border-border transition-all hover:-translate-y-0.5 hover:border-blue-light/60 hover:bg-white hover:shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-sky flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm md:text-base truncate">
                      {city}
                    </span>
                  </Link>
                ))}
              </div>

              <p className="text-muted-foreground mt-6 text-sm md:text-base">
                Don&apos;t see your city? Give us a call. We may still be able to help!
              </p>
            </div>

            <div className="min-h-[320px] overflow-hidden rounded-xl border border-border bg-blue-bg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268387.4018387342!2d-86.22790670154734!3d42.90346464779628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6dcf1b3e3a118483%3A0x27e984a22b749c13!2sPremier%20Window%20Care!5e1!3m2!1sen!2sus!4v1781732019464!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Window Care West Michigan service area map"
                className="block h-full min-h-[320px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
