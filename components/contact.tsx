"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send } from "lucide-react"

type AddressSuggestion = {
place_id: number
display_name: string
}

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

const [addressQuery, setAddressQuery] = useState("")
const [addressSuggestions, setAddressSuggestions] = useState<
AddressSuggestion[]

> ([])
> const [showSuggestions, setShowSuggestions] = useState(false)

const addressWrapperRef = useRef<HTMLDivElement>(null)

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleAddressChange = (
e: React.ChangeEvent<HTMLInputElement>
) => {
const value = e.target.value

```
setFormData((prev) => ({
  ...prev,
  address: value,
}))

setAddressQuery(value)
```

}

const searchAddresses = async (query: string) => {
if (query.length < 3) {
setAddressSuggestions([])
return
}

```
try {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
      query
    )}&countrycodes=us&limit=5`
  )

  const results = await response.json()

  setAddressSuggestions(results)
  setShowSuggestions(results.length > 0)
} catch (error) {
  console.error("Address lookup failed:", error)
}
```

}

useEffect(() => {
const timeout = setTimeout(() => {
if (addressQuery.length >= 3) {
searchAddresses(addressQuery)
} else {
setAddressSuggestions([])
setShowSuggestions(false)
}
}, 300)

```
return () => clearTimeout(timeout)
```

}, [addressQuery])

useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
if (
addressWrapperRef.current &&
!addressWrapperRef.current.contains(event.target as Node)
) {
setShowSuggestions(false)
}
}

```
document.addEventListener("mousedown", handleClickOutside)

return () => {
  document.removeEventListener("mousedown", handleClickOutside)
}
```

}, [])

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
setLoading(true)

```
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
```

}

return ( <section
   id="contact"
   className="py-16 md:py-24 bg-gradient-to-br from-blue-primary via-blue-bright to-blue-sky relative overflow-hidden"
 > <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-light/20 rounded-full blur-3xl" /> <div className="absolute bottom-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-blue-pale/15 rounded-full blur-3xl" />

```
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

      <div className="w-full mt-1 lg:mt-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Request Your Free Quote Now
        </h2>

        <p className="text-white/85 text-base md:text-lg mb-6 md:mb-8">
          Contact us for a free, no-obligation quote. We're happy to answer
          any questions you may have about our services.
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
              Thanks for reaching out — we'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  First Name
                </label>
                <Input
                  name="firstName"
                  required
                  autoComplete="given-name"
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
                  autoComplete="family-name"
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
                autoComplete="email"
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
                autoComplete="tel"
                placeholder="(616) 555-0123"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <div ref={addressWrapperRef} className="relative">
              <label className="block text-sm font-semibold text-gray-900 mb-1">
                Address
              </label>

              <Input
                name="address"
                required
                autoComplete="street-address"
                placeholder="Start typing your address..."
                value={formData.address}
                onChange={handleAddressChange}
                onFocus={() => {
                  if (addressSuggestions.length > 0) {
                    setShowSuggestions(true)
                  }
                }}
                className="rounded-xl"
              />

              {showSuggestions && addressSuggestions.length > 0 && (
                <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
                  {addressSuggestions.map((suggestion) => (
                    <button
                      key={suggestion.place_id}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          address: suggestion.display_name,
                        }))
                        setShowSuggestions(false)
                      }}
                      className="block w-full border-b px-4 py-3 text-left text-sm hover:bg-gray-100 last:border-b-0"
                    >
                      {suggestion.display_name}
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-1 text-xs text-gray-500">
                Select an address from the list or continue typing manually.
              </p>
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
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        )}
      </div>
    </div>
  </div>
</section>
```

)
}
