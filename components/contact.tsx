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

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/xrervkpg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      setLoading(false)

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      setLoading(false)
      alert("Network error. Please try again.")
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-primary via-blue-bright to-blue-sky relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-blue-pale/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="w-full mt-1 lg:mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Request Your Free Quote Now
            </h2>

            <p className="text-white/85 text-base md:text-lg mb-6 md:mb-8">
              Contact us for a free, no-obligation quote. We&apos;re happy to answer any questions you may have about our services.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
              <a
                href="tel:6164224749"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-blue-light/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-pale" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Call Us</p>
                  <p className="text-white font-semibold">(616) 422-4749</p>
                </div>
              </a>

              <a
                href="mailto:info@cleanwithpremier.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-blue-light/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-pale" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email Us</p>
                  <p className="text-white font-semibold text-sm md:text-base">
                    info@cleanwithpremier.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full bg-white rounded-2xl p-5 md:p-8 shadow-2xl">

            {submitted ? (
              <div className="text-center py-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Form Submitted
                </h3>

                <p className="text-muted-foreground">
                  Thanks for reaching out — we&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* First + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(616) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Address
                  </label>
                  <Input
                    name="address"
                    required
                    placeholder="123 Main St, Grand Rapids, MI"
                    value={formData.address}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Additional Details
                  </label>
                  <Textarea
                    name="details"
                    placeholder="Tell us about your windows, property type, or any special requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className="rounded-xl min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-blue-primary hover:bg-blue-sky text-white py-5 md:py-6 text-base md:text-lg font-semibold"
                >
                  {loading ? "Sending..." : "Request My Quote"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
