import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TrustBar } from "@/components/trust-bar"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <TrustBar />
      <Footer />
    </main>
  )
}
