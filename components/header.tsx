"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#service-area", label: "Service Area" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/website/premier-03.png"
              alt="Premier Window Care"
              width={220}
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-blue-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
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
              <Link href="#contact">Get a Free Quote</Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-blue-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="tel:6164224749"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                (616) 422-4749
              </a>
              <Button asChild className="rounded-full bg-blue-primary hover:bg-blue-sky text-white w-full">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
