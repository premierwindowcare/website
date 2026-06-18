"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HashLink } from "@/components/hash-link"
import { cityHref, serviceCities, servicePages } from "@/lib/site-pages"

type NavLink = {
  href: `/#${string}`
  label: string
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<"services" | "areas" | null>(null)

  const navLinks: NavLink[] = [
    { href: "/#why-us", label: "Why Us" },
    { href: "/#reviews", label: "Reviews" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/premier-03.png"
              alt="Premier Window Care"
              width={220}
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-blue-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === "services" ? null : "services")
                }
                className="flex items-center gap-1 text-muted-foreground hover:text-blue-primary transition-colors text-sm font-medium"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              {openDropdown === "services" && (
                <div className="absolute left-0 top-full z-50 w-72 pt-4">
                  <div className="rounded-2xl border border-border bg-white p-3 shadow-xl">
                    <HashLink
                      href="/#services"
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-blue-deep hover:bg-blue-soft"
                    >
                      All Services
                    </HashLink>
                    {servicePages.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-blue-soft hover:text-blue-primary"
                      >
                        {service.cardTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-blue-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </HashLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("areas")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "areas" ? null : "areas")}
                className="flex items-center gap-1 text-muted-foreground hover:text-blue-primary transition-colors text-sm font-medium"
              >
                Service Area
                <ChevronDown className="h-4 w-4" />
              </button>

              {openDropdown === "areas" && (
                <div className="absolute left-0 top-full z-50 w-72 pt-4">
                  <div className="rounded-2xl border border-border bg-white p-3 shadow-xl">
                    <HashLink
                      href="/#service-area"
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-blue-deep hover:bg-blue-soft"
                    >
                      All Service Areas
                    </HashLink>
                    {serviceCities.map((city) => (
                      <Link
                        key={city}
                        href={cityHref(city)}
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-blue-soft hover:text-blue-primary"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6164224749"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-blue-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (616) 422-4749
            </a>
            <Button asChild className="rounded-full bg-blue-primary hover:bg-blue-sky text-white">
              <HashLink href="/#contact">Get a Free Quote</HashLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-blue-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground hover:text-blue-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <HashLink
                href="/#services"
                className="text-foreground hover:text-blue-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </HashLink>
              <div className="mt-2 grid gap-1 border-l border-border pl-4">
                {servicePages.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="py-1.5 text-sm text-muted-foreground hover:text-blue-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.cardTitle}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-blue-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </HashLink>
            ))}

            <div>
              <HashLink
                href="/#service-area"
                className="text-foreground hover:text-blue-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Service Area
              </HashLink>
              <div className="mt-2 grid gap-1 border-l border-border pl-4">
                {serviceCities.map((city) => (
                  <Link
                    key={city}
                    href={cityHref(city)}
                    className="py-1.5 text-sm text-muted-foreground hover:text-blue-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="tel:6164224749"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                (616) 422-4749
              </a>
              <Button asChild className="rounded-full bg-blue-primary hover:bg-blue-sky text-white w-full">
                <HashLink href="/#contact">Get a Free Quote</HashLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
