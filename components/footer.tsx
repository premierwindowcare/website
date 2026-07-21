"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"
import { HashLink } from "@/components/hash-link"
import { cityHref, orderedServicePages, serviceCities } from "@/lib/site-pages"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-deep py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand */}
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="mb-4 -ml-2 md:-ml-3">
              <Image
                src="/premierwhite.png"
                alt="Premier Window Care"
                width={260}
                height={80}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Reliable window cleaning for homes and businesses across West Michigan.
            </p>

            <div className="mt-5">
              <p className="mb-3 text-sm font-semibold text-white">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61590872960711"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Premier Window Care on Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-blue-deep"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/premierwindowcare/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Premier Window Care on Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-blue-deep"
                >
                  <Instagram className="size-4" />
                </a>
              </div>
            </div>

            <address className="mt-5 not-italic text-sm leading-6 text-white/70">
              4672 40th Ave<br />
              Hudsonville, MI 49426
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <HashLink href="/#services" className="text-white/70 hover:text-white transition-colors text-sm">
                Services
              </HashLink>
              <HashLink href="/#maintenance-plans" className="text-white/70 hover:text-white transition-colors text-sm">
                Maintenance Plans
              </HashLink>
              <HashLink href="/#why-us" className="text-white/70 hover:text-white transition-colors text-sm">
                Why Us
              </HashLink>
              <HashLink href="/#reviews" className="text-white/70 hover:text-white transition-colors text-sm">
                Reviews
              </HashLink>
              <HashLink href="/#faq" className="text-white/70 hover:text-white transition-colors text-sm">
                FAQ
              </HashLink>
              <HashLink href="/#service-area" className="text-white/70 hover:text-white transition-colors text-sm">
                Service Area
              </HashLink>
              <HashLink href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                Contact
              </HashLink>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              {orderedServicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {service.cardTitle}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Service Areas</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {serviceCities.map((city) => (
                <Link
                  key={city}
                  href={cityHref(city)}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {city}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:6164224749"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-blue-light" />
                (616) 422-4749
              </a>
              <a
                href="mailto:info@cleanwithpremier.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-blue-light" />
                info@cleanwithpremier.com
              </a>
            </div>

            <nav aria-label="Legal" className="mt-5 flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </nav>

            <div className="mt-5 aspect-square w-full max-w-44 overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268387.4018387342!2d-86.22790670154734!3d42.90346464779628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6dcf1b3e3a118483%3A0x27e984a22b749c13!2sPremier%20Window%20Care!5e1!3m2!1sen!2sus!4v1781732019464!5m2!1sen!2sus"
                width="180"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Window Care location map"
                className="block h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Premier Window Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
