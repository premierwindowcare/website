"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-primary via-blue-bright to-blue-sky relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-blue-pale/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Left - Text Content (Always first on mobile and desktop) */}
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Request Your Free Quote Now
            </h2>
            <p className="text-white/85 text-base md:text-lg mb-6 md:mb-8">
              Contact us for a free, no-obligation quote. We&apos;re happy to answer any questions you may have about our services.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
              <a
                href="tel:6164224749"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20 transition-colors hover:bg-white/20 flex-1 lg:flex-none"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-light/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-pale" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/70">Call Us</p>
                  <p className="text-white font-semibold truncate">(616) 422-4749</p>
                </div>
              </a>

              <a
                href="mailto:info@cleanwithpremier.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20 transition-colors hover:bg-white/20 flex-1 lg:flex-none"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-light/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-pale" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/70">Email Us</p>
                  <p className="text-white font-semibold truncate text-sm md:text-base">info@cleanwithpremier.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full bg-white rounded-2xl p-5 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(616) 555-0123"
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main St, Grand Rapids, MI"
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-foreground mb-1.5">
                  Additional Details <span className="text-muted-foreground">(Optional)</span>
                </label>
                <Textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your windows, property type, or any special requirements..."
                  className="rounded-xl min-h-[80px] md:min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-blue-primary hover:bg-blue-sky text-white py-5 md:py-6 text-base md:text-lg font-semibold transition-colors"
              >
                Request My Quote
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
