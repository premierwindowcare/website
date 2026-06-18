import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TrustBar } from "@/components/trust-bar"
import { WhyUs } from "@/components/why-us"
import { Reviews } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <ServiceArea />
      <Contact />
      <FAQ />
      <TrustBar />
      <Footer />
    </main>
  )
}
