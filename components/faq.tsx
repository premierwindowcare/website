"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will rain make my windows dirty after they are cleaned?",
    answer:
      "Not usually. Rainwater does not cause most spotting by itself. Spots usually come from dust, pollen, sprinkler minerals, or grime that was already on the glass or surrounding surfaces.",
  },
  {
    question: "What is the 7-Day Rain Guarantee?",
    answer:
      "If windows cleaned during a scheduled maintenance visit get dirty within 7 days of our cleaning, we’ll clean them again for free. This covers the windows and services included in your original cleaning.",
  },
  {
    question: "What is pure water window cleaning?",
    answer:
      "Pure water cleaning uses filtered water with minerals removed, so exterior glass can dry clear without soap residue. It is especially helpful for upper windows and larger exterior panes.",
  },
  {
    question: "Can hard water be removed before it ruins the glass?",
    answer:
      "In many cases, yes. Hard water removal targets mineral buildup before it etches into the glass and becomes permanent damage. The sooner it is addressed, the better the chance of restoring clarity.",
  },
  {
    question: "Why do some windows still look cloudy after cleaning?",
    answer:
      "Cloudiness can come from failed window seals, oxidation, old mineral etching, or damage between panes. If the issue is inside the glass unit or etched into the surface, cleaning may improve the look but may not fully remove it.",
  },
  {
    question: "Do screens need to be removed before the appointment?",
    answer:
      "You do not need to remove them ahead of time unless you prefer to. If screens are part of the service, we can handle them during the appointment and make sure they are put back carefully.",
  },
  {
    question: "Is screen cleaning included with my service?",
    answer:
      "Screen cleaning is an optional add-on for maintenance plans and one-time cleanings. We can talk through your screen needs during the quote so you know exactly what is included before scheduling.",
  },
  {
    question: "How often should West Michigan homes schedule window cleaning?",
    answer:
      "Most homes do well with spring and fall cleanings. Homes near busy roads, sprinklers, trees, construction dust, or lakeshore weather may benefit from Seasonal Maintenance in spring, summer, and fall.",
  },
  {
    question: "How can I pay after the job is finished?",
    answer:
      "Payment is simple after the work is complete. Premier Window Care accepts cash, check, and major credit or debit cards.",
  },
]

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-28 bg-blue-soft py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-primary">
            FAQ
          </p>
          <h2 className="mb-3 text-3xl font-bold text-blue-deep md:text-4xl">
            Common Window Cleaning Questions
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A few helpful answers before you schedule your next cleaning.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-blue-pale bg-white px-5 shadow-lg md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="py-5 text-base font-bold text-blue-deep hover:text-blue-primary hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
