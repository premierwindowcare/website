import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Privacy Policy | Premier Window Care",
  description: "Privacy Policy for Premier Window Care.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <article className="mx-auto max-w-4xl px-4 pb-16 pt-32 text-base leading-7 text-slate-700 md:pb-24 md:pt-40">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-primary">Legal</p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-blue-deep md:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Effective date: July 20, 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">1. Overview</h2>
            <p>
              Premier Window Care LLC ("Premier," "we," "us," or "our") operates <a className="text-blue-primary underline" href="https://cleanwithpremier.com">https://cleanwithpremier.com</a> (the "Website"). This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit the Website, request a quote, contact us, or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly, including when you submit a quote request or otherwise contact us:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your first and last name, email address, phone number, service address, and the source through which you heard about us.</li>
              <li>Details you include about your property, windows, requested services, or special requirements.</li>
              <li>Information you provide through telephone calls, email, or the Tawk.to live-chat feature.</li>
            </ul>
            <p className="mt-3">We and our service providers may also collect technical information automatically, such as IP address, browser and device information, operating system, referring pages, pages viewed, approximate location derived from IP address, and interaction or event data. The exact data collected depends on the analytics, chat, and embedded-content providers described below.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">3. How We Collect Information</h2>
            <p>We collect information from quote-request forms, email and phone communications, the live-chat feature, cookies and similar technologies, analytics tools, and embedded Google Maps content. Quote-request form submissions are processed through Formspree.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">4. How We Use Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to quote requests, questions, and service inquiries.</li>
              <li>Prepare estimates, schedule and provide requested services, and communicate about those services.</li>
              <li>Operate, secure, troubleshoot, and improve the Website and our customer service.</li>
              <li>Measure Website use and marketing performance.</li>
              <li>Comply with legal obligations and protect our rights, safety, and property.</li>
              <li>Send text messages about appointments, follow-ups, billing, and promotions or offers when you provide your mobile number.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">5. Text Message Communications</h2>
            <p>When you provide your mobile number to Premier, you agree to receive text messages about appointment reminders, follow-up messages, billing inquiries, and promotions or offers. Message frequency varies based on your interaction with us and the services you use. Message and data rates may apply under your mobile plan.</p>
            <p className="mt-3">You may provide your mobile number through our online quote form, verbally during a conversation, or by completing a paper form. You may opt out at any time by replying <strong>STOP</strong> to a message or by contacting us at <a className="text-blue-primary underline" href="mailto:info@cleanwithpremier.com">info@cleanwithpremier.com</a>.</p>
            <p className="mt-3">We do not share mobile information, text-message originator opt-in data, or consent with third parties or affiliates for their marketing or promotional purposes.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">6. Email Communications</h2>
            <p>When you provide your email address to Premier, you agree to receive emails about appointment reminders, follow-up messages, billing inquiries, and promotions or offers. Email frequency varies based on your interaction with us and the services you use.</p>
            <p className="mt-3">You may provide your email address through our online quote form, verbally during a conversation, or by completing a paper form. You may opt out at any time by texting <strong>STOP</strong> to <a className="text-blue-primary underline" href="tel:6164224749">(616) 422-4749</a>, or by contacting us at <a className="text-blue-primary underline" href="mailto:info@cleanwithpremier.com">info@cleanwithpremier.com</a>.</p>
            <p className="mt-3">We do not share email addresses or email-marketing consent with third parties or affiliates for their marketing or promotional purposes.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">7. Legal Bases for Processing</h2>
            <p>Where the GDPR or similar law applies, we process personal information to respond to your request and take steps toward a service agreement; for our legitimate interests in operating, securing, and improving our business and Website; to comply with legal obligations; and with your consent where consent is required, including for non-essential cookies or similar technologies where applicable.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">8. Service Providers and Third Parties</h2>
            <p className="mb-3">We use the following third-party services in connection with the Website:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Formspree</strong>, which processes quote-request form submissions.</li>
              <li><strong>Tawk.to</strong>, which provides the live-chat feature.</li>
              <li><strong>Vercel Analytics</strong>, which provides Website analytics in production.</li>
              <li><strong>Google Analytics</strong>, which is implemented on the Website&apos;s <code>/doorhanger</code> page.</li>
              <li><strong>Google Maps</strong>, which provides embedded maps on the Website.</li>
            </ul>
            <p className="mt-3">These providers may collect or receive information as described in their own privacy notices. We may also disclose information to professional advisers, insurers, government authorities where required by law, or a successor in connection with a merger, sale, financing, or transfer of all or part of our business.</p>
            <p className="mt-3">We do not sell personal information or share it for cross-context behavioral advertising as those terms are defined under California law.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">9. Cookies, Analytics, and Embedded Content</h2>
            <p>The Website and its third-party providers may use cookies, pixels, local storage, and similar technologies to operate features, remember preferences, provide chat and map functionality, analyze traffic, and measure performance. Google Maps, Tawk.to, Google Analytics, and Vercel Analytics may set or access their own technologies subject to their privacy practices.</p>
            <p className="mt-3">You can manage cookies through your browser settings. We do not currently provide a cookie-consent banner or preference tool. Blocking cookies or similar technologies should not prevent you from submitting a quote request, although third-party features may not function as intended.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">10. Payments</h2>
            <p>The Website does not provide a checkout or collect payment-card information. The Website states that payment is made after work is completed and that cash, check, and major credit or debit cards are accepted. Card payments for invoices are processed through Stripe and are subject to Stripe&apos;s privacy practices.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">11. Data Security and Retention</h2>
            <p>We use reasonable administrative, technical, and physical safeguards designed to protect personal information. No internet transmission or storage system is completely secure, and we cannot guarantee absolute security.</p>
            <p className="mt-3">We retain personal information only as long as reasonably necessary for the purposes described in this policy, including responding to requests, providing services, maintaining business records, resolving disputes, and meeting legal obligations.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">12. Your Privacy Rights</h2>
            <p>You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law. You may also object to or request restriction of certain processing, withdraw consent where processing relies on consent, or request data portability where applicable.</p>
            <p className="mt-3">California residents may have rights to know, correct, delete, and limit certain uses of sensitive personal information, and to be free from discrimination for exercising their rights. We do not sell or share personal information as described above. To make a request, contact us using the information below. We may need to verify your identity before completing your request. Authorized agents may submit requests where permitted by law.</p>
            <p className="mt-3">Premier provides services in West Michigan and does not intentionally offer services to individuals in the EEA or UK. If you are in a jurisdiction with additional privacy rights, you may have the right to complain to your local data-protection authority.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">13. Children&apos;s Privacy</h2>
            <p>The Website is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information to us, contact us so we can take appropriate action.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">14. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the effective date above. We do not send email or text-message notices when this policy changes.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-blue-deep">15. Contact Us</h2>
            <p>For privacy questions or requests, contact Premier Window Care LLC at <a className="text-blue-primary underline" href="mailto:info@cleanwithpremier.com">info@cleanwithpremier.com</a>, <a className="text-blue-primary underline" href="tel:6164224749">(616) 422-4749</a>, or 4672 40th Ave, Hudsonville, MI 49426.</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
