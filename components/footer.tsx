import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-deep py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-sky to-blue-light flex items-center justify-center">
                <span className="text-blue-deep font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-white">Premier Window Care</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional window cleaning for homes and businesses across West Michigan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="#why-us" className="text-white/70 hover:text-white transition-colors text-sm">
                Why Us
              </Link>
              <Link href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm">
                Testimonials
              </Link>
              <Link href="#service-area" className="text-white/70 hover:text-white transition-colors text-sm">
                Service Area
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                Contact
              </Link>
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
