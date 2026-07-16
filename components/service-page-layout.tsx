import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Contact, ContactForm } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TrustBar } from "@/components/trust-bar"
import type { ServicePage } from "@/lib/site-pages"

type ServicePageLayoutProps = {
  service: ServicePage
}

const exteriorIncluded = [
  ["Exterior glass cleaning", "Cleaning of exterior glass removes dirt, pollen, rain spots, and the outdoor film that dulls your view."],
  ["Frame cleaning", "We clear frames of cobwebs and dust so clean glass doesn’t get overlooked."],
  ["Sill cleaning", "Exterior sills are swept free of debris to help avoid future staining or buildup."],
  ["Screen check", "We inspect screens for visible dirt and debris. Deeper screen cleaning is available as an add-on or with a maintenance plan."],
  ["Edge and corner detailing", "We wash the places where a garden hose or DIY cleaning can leave traces of dirt behind."],
  ["Final walk through", "Before we leave, we walk around the property and inspect every window to make sure everything looks perfect."],
] as const

const exteriorSigns = [
  "Your windows look cloudy, hazy, or dirty even after it rains.",
  "There’s a yellow-green pollen film on or around the sills.",
  "Your windows have white, chalky mineral deposits near sprinklers or in areas exposed to well water.",
  "There are cobwebs or insects collecting around window corners and accessible frames.",
  "You can’t remember the last time your windows received a professional exterior cleaning.",
  "Photos of your home or storefront look murky because of reflective grime.",
] as const

const exteriorBenefits = [
  ["Better glass protection", "Pollen, dust, and mineral deposits build up and can become permanent if left alone. Preventative cleaning helps windows go longer without needing restoration or replacement."],
  ["More natural light", "Removing the exterior film that blocks light from entering your home lets your space enjoy more daylight and rely less on artificial lighting."],
  ["Increased curb appeal", "Clean exterior glass is one of the quickest ways to improve the appearance of your home or business from the yard, driveway, or street."],
  ["Professional first impression", "For commercial storefronts, clear exterior glass helps customers see a clean, polished space as they enter."],
] as const

const exteriorSteps = [
  ["Access and buildup assessment", "We identify access needs and areas where heavy pollen, sprinkler spotting, or seasonal grime need extra attention during cleaning."],
  ["Exterior pane washing", "Professional cleaning techniques deliver sparkling results rather than glass that simply looks less dirty."],
  ["Accessible frame and sill cleaning", "We clear away cobwebs, dust, and other debris so the rest of the window doesn’t get overlooked."],
  ["Edge and corner detailing", "We target the areas that rushed cleaning can miss or leave dirty."],
  ["Final walk through and review", "Before we leave, we walk around the property and inspect every window to make sure everything looks perfect."],
] as const

const exteriorSeasons = [
  ["Spring", "Pollen drives much of the exterior buildup seen in West Michigan. Getting ahead of the heaviest season can make a major difference in how clean your windows stay."],
  ["Summer", "Dust, pollen, and sprinkler spotting accumulate steadily, especially on south and west facing windows and glass."],
  ["Fall", "Leaves and storm debris can collect in sills and corners before winter moves in."],
  ["Winter", "Road salt and slush can build up on the lowest parts of your windows, especially if you live near major roadways."],
] as const

const interiorIncluded = [
  ["Interior glass washing", "Each pane of glass is hand-cleaned and squeegeed to a streak-free finish rather than receiving only a superficial wipe."],
  ["Glass edge detailing", "The edges of each pane are detailed after squeegeeing to remove drips and leave the glass with a finished appearance."],
  ["Smudge and haze removal", "Fingerprints, pet marks, and household film are removed so windows offer clear views in natural light."],
  ["High touch detail cleaning", "The glass around handles and other frequent touch points receives special care to remove noticeable marks."],
  ["Furniture protection", "We work carefully around furnishings and flooring, moving what is necessary and returning it to its proper place after cleaning."],
  ["Final walk through", "Before we leave, we walk around the property and inspect every window to make sure everything looks perfect."],
] as const

const interiorSigns = [
  "Visible fingerprints or smudges have accumulated on interior glass.",
  "Pet nose prints have left their mark on glass doors or low interior windows.",
  "A cloudy film makes rooms feel less bright, even when the lights are on.",
  "Streaks or white, hazy spots remain visible after wiping the glass.",
  "Cooking residue or fireplace soot has caused cloudy buildup on kitchen or living room glass.",
  "It has been more than six months since the inside of the windows was cleaned rather than dusted.",
] as const

const interiorBenefits = [
  ["Protects your glass", "Regular cleaning prevents household film and residue from lingering on the glass and becoming more difficult to remove over time."],
  ["Restores natural light", "Interior buildup reduces the natural light entering a room just as exterior grime does. Clean interior panes can noticeably brighten your space, especially in winter."],
  ["Adds a finished appearance", "A sparkling room with dull or dirty windows can still feel incomplete. Clean interior glass helps bring the whole space together."],
  ["Show home ready", "Whether you are showing a home, preparing for a party, or entertaining regularly, clear interior windows support a polished first impression."],
] as const

const interiorSteps = [
  ["Walk the interior first", "Before beginning, we note buildup on the glass, access and safety concerns, furniture placement, flooring, and nearby surfaces."],
  ["Wash and squeegee each pane", "Every window is washed, squeegeed, and detailed along the edges to remove streaks, smudges, and haze."],
  ["Detail edges and corners", "We revisit the perimeter of each pane to remove drips and residue that can remain after washing and squeegeeing."],
  ["Protect furnishings throughout", "We take care throughout the process to protect furnishings and flooring from damage or unnecessary marking."],
  ["Final walk through and review", "Before we leave, we walk around the property and inspect every window to make sure everything looks perfect."],
] as const

const interiorHomeFactors = [
  ["Winter window buildup", "With windows closed throughout the cold season, interior haze and dust can accumulate faster than usual, especially when heating circulates particles."],
  ["Fireplaces and candles", "Wood burning and gas fireplaces, along with candles used during long winter nights, can contribute to buildup on interior glass."],
  ["Pets and young children", "Nose prints, handprints, and other everyday marks tend to collect fastest on lower panes and glass doors."],
  ["New construction", "Even newer homes can retain film or dust from the building process that normal household cleaning does not always remove."],
] as const

const hardWaterCauses = [
  ["Sprinkler overspray", "Sprinklers that repeatedly reach nearby windows can leave mineral deposits behind after the water evaporates."],
  ["Roof and gutter runoff", "Water running from roofing materials or gutters can carry minerals onto the glass below."],
  ["Well water", "Well water often contains higher mineral levels that can leave visible deposits after repeated exposure."],
  ["Lake and river spray plus humidity", "Properties near West Michigan lakes and rivers may experience more frequent mineral exposure."],
  ["Power washing overspray", "Power washing near unprotected windows can leave mineral rich droplets on the glass."],
] as const

const hardWaterDifferences = [
  "Regular soap and squeegee cleaning will not remove established mineral deposits, no matter how many times it is repeated.",
  "The longer deposits remain, the more likely they are to become permanent etching rather than a removable surface stain.",
  "Common household cleaning products like vinegar and store brand glass cleaners will provide little to no improvement when attempting to remove hard water.",
  "Professional hard water spot removal or glass restoration is needed to address this issue.",
] as const

const hardWaterBenefits = [
  ["A focused treatment for mineral deposits", "A specialty treatment targets deposits that standard exterior window cleaning cannot effectively address."],
  ["Helps avoid permanent etching", "The earlier deposits are treated, the less opportunity they have to etch into the glass."],
  ["Improves the appearance of the glass", "Focusing directly on mineral deposits can dramatically reduce the appearance of water spots and similar staining."],
  ["Realistic expectations", "A professional inspection helps determine what can be removed and whether any damage has become permanent."],
] as const

const hardWaterSteps = [
  ["Assessment", "We identify the severity of the deposits and determine whether the glass needs this specialty service or standard exterior window cleaning."],
  ["Severity test", "We assess whether deposits remain on the surface or have etched into the glass. This guides the treatment and the result that can realistically be achieved."],
  ["Deposit focused treatment", "We use a detailed method that focuses directly on the mineral deposits rather than treating the glass like a standard cleaning."],
  ["Exterior glass cleaning", "After addressing the deposits, we clean and review the exterior glass. We also identify any permanent etching that treatment could not remove."],
] as const

const hardWaterResults = [
  ["Surface deposits", "These are typically greatly reduced or completely removed, depending on their severity."],
  ["Etching that is just beginning", "Early etching can often be reduced significantly, although some marks may remain visible upon close inspection."],
  ["Permanent etching", "Permanent damage will not respond like a surface deposit. We will make that clear during the assessment."],
] as const

const hardWaterPrevention = [
  "Adjust sprinkler heads to avoid spraying the glass of your home.",
  "Rinse nearby glass with clean water after power washing around the house.",
  "Consider a water softener if you use well water and are dealing with mineral deposits on a large scale.",
  "Pair treatment with a regular maintenance plan so new deposits can be addressed before they become a larger issue.",
] as const

const commercialProperties = [
  ["Storefronts and retail", "Street level glass is often the first element potential customers see as they pass by your storefront."],
  ["Offices", "Exterior and interior glass cleaning can include entryways, customer facing glass, and conference room glass."],
  ["Restaurants and cafes", "Front glass can be washed on a rotating or recurring basis to keep the interior visible and appealing."],
  ["Property managers", "Recurring window cleaning can be arranged for multiple rental units, apartment buildings, or condominium properties through one point of contact."],
  ["Small commercial buildings", "Medical offices, salons, and other customer facing buildings have unique presentation and service needs."],
] as const

const commercialIncluded = [
  ["Exterior storefront and office glass", "Customer and street facing windows receive a full cleaning with attention to how the property looks from outside."],
  ["Interior glass cleaning", "Interior service is available alongside exterior cleaning for a clear result on both sides of the glass."],
  ["Frame and sill detailing", "Frames and sills are cleaned so the full window looks finished rather than only the glass."],
  ["Entryway and door glass", "Frequently touched and highly visible entry glass is cleaned as a standard part of the visit."],
  ["Recurring scheduling", "Weekly, biweekly, monthly, and quarterly plans can be built around the needs of your property."],
  ["Flexible timing", "Visits can be scheduled in the morning, in the evening, or even outside of business hours to avoid disrupting customer traffic."],
] as const

const commercialBenefits = [
  ["Customer ready presentation", "Commercial storefronts, offices, and other properties are cleaned with customer presentation in mind."],
  ["Dependable service", "Exterior and interior washing of your property’s glass is provided to a consistently professional standard."],
  ["Scheduling flexibility", "Visits can be arranged around your hours of operation and the general availability of your business."],
  ["A brighter workspace", "Clean, clear glass allows natural light to brighten offices and other customer-facing areas."],
] as const

const commercialSteps = [
  ["Confirm project needs", "We confirm the property needs, timing, and access before the job so your team knows what to expect and there are no surprises on cleaning day."],
  ["Polish customer facing glass", "We clean the glass your customers can see, giving it a polished finish that makes the space shine and creates a crisp, clean presentation."],
  ["Work around your schedule", "That might mean cleaning storefronts before they open, offices after they close, or sometime in between. Whatever works best with your day, we make it our priority."],
  ["Review completed work", "At the completion of service, we review the cleaned areas so your space is ready for guests as soon as we leave."],
] as const

const commercialReasons = [
  ["First impressions matter", "Potential customers form an impression before entering your storefront. Dirty, cloudy, or unkempt glass can detract from an otherwise impressive presentation."],
  ["Consistent presentation builds trust", "Recurring commercial washing helps maintain a reliably clean appearance, especially for businesses whose regular customers notice changes over time."],
  ["Natural light affects mood and perception", "Clean glass allows natural light into offices, retail spaces, and other customer-facing areas, helping them feel brighter and more welcoming."],
  ["A visible return on investment", "Compared with many maintenance expenses, professional window cleaning provides an immediately visible result."],
] as const

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const galleryImages = Array.from(new Set(service.galleryImages))
  const isExterior = service.slug === "exterior-window-cleaning"
  const isInterior = service.slug === "interior-window-cleaning"
  const isHardWater = service.slug === "hard-water-removal"
  const isCommercial = service.slug === "commercial-window-cleaning"

  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-blue-primary to-blue-sky pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-blue-light/25 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-64 w-64 rounded-full bg-blue-pale/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.85fr)] lg:items-start lg:gap-14">
            <div className="lg:pt-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Window Cleaning Service
              </div>

              <h1 className="mb-6 max-w-3xl text-4xl font-bold text-white text-balance md:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                {service.summary}
              </p>

              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-lg text-blue-primary shadow-lg hover:bg-blue-soft"
              >
                <Link href="#contact">
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <ContactForm className="lg:max-w-xl lg:justify-self-end" />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${service.cardTitle} photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCommercial ? (
        <>
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Built around your property</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Who We Work With</h2><p className="text-lg leading-relaxed text-muted-foreground">Commercial window washing can take place across a variety of properties. We customize the timing and procedures around the needs of your business.</p></div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{commercialProperties.map(([title, body]) => <article key={title} className="rounded-2xl border border-border bg-blue-soft p-6"><span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-primary text-white"><Check className="h-4 w-4" /></span><h3 className="mb-2 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-deep py-16 text-white md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-pale">A complete commercial cleaning</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">What’s Included in Commercial Service</h2><p className="text-lg leading-relaxed text-white/75">Service is tailored to the glass, timing, and other recurring needs of your storefront, office, or customer-facing property.</p></div>
              <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">{commercialIncluded.map(([title, body]) => <article key={title} className="flex gap-4 border-t border-white/20 pt-6"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-pale" /><div><h3 className="mb-2 text-xl font-bold text-white">{title}</h3><p className="leading-relaxed text-white/80">{body}</p></div></article>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Professional and practical</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Why This Service Helps</h2><p className="text-lg leading-relaxed text-muted-foreground">Commercial service keeps your property’s windows clean and appealing while remaining flexible to your team’s scheduling needs.</p></div>
              <div className="grid gap-6 md:grid-cols-2">{commercialBenefits.map(([title, body], index) => <article key={title} className="grid gap-4 rounded-[2rem] border border-border p-6 shadow-sm md:grid-cols-[3rem_1fr] md:p-8"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft font-bold text-blue-primary">{index + 1}</span><div><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></div></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10 lg:p-12">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Our process</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">How We Handle It</h2><p className="text-lg leading-relaxed text-muted-foreground">Clear communication and planning ensure that your service is dependable and causes minimal disruption to your customers.</p></div>
              <div>{commercialSteps.map(([title, body], index) => <article key={title} className="grid gap-4 border-t border-border py-6 md:grid-cols-[3rem_14rem_1fr] md:items-start"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">A detail customers notice</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Why Clean Windows Matter for Businesses</h2></div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{commercialReasons.map(([title, body]) => <article key={title} className="rounded-2xl bg-blue-soft p-6"><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
              <div className="mt-8 rounded-2xl border border-blue-light/50 border-l-4 border-l-blue-primary bg-gradient-to-r from-blue-soft to-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-8 md:p-8"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-primary">Keep your business appearing its best</p><p className="text-lg font-medium leading-relaxed text-blue-deep">Arrange a one-time commercial service or ask about a recurring schedule that fits your needs and budget.</p></div><Button asChild className="mt-5 w-full shrink-0 rounded-full bg-blue-primary text-white hover:bg-blue-sky md:mt-0 md:w-fit"><Link href="#contact">Request a Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
            </div></div>
          </section>
        </>
      ) : null}

      {isHardWater ? (
        <>
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Where spots come from</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">What Causes Hard Water Spots on Windows?</h2><p className="text-lg leading-relaxed text-muted-foreground">Hard water spots occur when water with high mineral levels evaporates on glass, leaving calcium, magnesium, and other deposits behind. Several common sources cause these deposits on West Michigan properties.</p></div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{hardWaterCauses.map(([title, body]) => <article key={title} className="rounded-2xl border border-border bg-blue-soft p-6 lg:col-span-1"><span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-primary text-white"><Check className="h-4 w-4" /></span><h3 className="mb-2 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-deep py-16 text-white md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-pale">More than just dirt</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Hard Water Stain Removal Is Different From Regular Cleaning</h2><p className="text-lg leading-relaxed text-white/75">While typical dirt and grime can be easily cleaned from glass surfaces during a regular window cleaning service, hard water deposits require something a little different.</p></div>
              <div className="grid gap-5">{hardWaterDifferences.map((item) => <div key={item} className="flex gap-4 border-t border-white/20 pt-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-pale" /><p className="leading-relaxed text-white/85">{item}</p></div>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Focus on the problem</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Why This Service Is Beneficial</h2><p className="text-lg leading-relaxed text-muted-foreground">This specialty treatment is intended for glass exposed to sprinklers, roof runoff, or another source of mineral rich water. Treating the glass early can help prevent further damage and permanent etching.</p></div>
              <div className="grid gap-6 md:grid-cols-2">{hardWaterBenefits.map(([title, body], index) => <article key={title} className="grid gap-4 rounded-[2rem] border border-border p-6 shadow-sm md:grid-cols-[3rem_1fr] md:p-8"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft font-bold text-blue-primary">{index + 1}</span><div><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></div></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10 lg:p-12">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Our process</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">How We Handle Hard Water Spot Removal</h2><p className="text-lg leading-relaxed text-muted-foreground">Every restoration project begins with a detailed assessment. Removing surface deposits is different from dealing with mineral damage that has already etched the glass.</p></div>
              <div>{hardWaterSteps.map(([title, body], index) => <article key={title} className="grid gap-4 border-t border-border py-6 md:grid-cols-[3rem_14rem_1fr] md:items-start"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Realistic expectations</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">What You Should Know About the Possible Results</h2><p className="text-lg leading-relaxed text-muted-foreground">Most hard water deposits respond well to treatment when they have not permanently etched the glass. The existing condition determines how much clarity can be restored.</p></div>
              <div className="grid gap-5 md:grid-cols-3">{hardWaterResults.map(([title, body], index) => <article key={title} className="rounded-2xl bg-blue-soft p-6"><span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-primary shadow-sm">{index + 1}</span><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
              <div className="mt-8 rounded-2xl border border-blue-light/50 border-l-4 border-l-blue-primary bg-gradient-to-r from-blue-soft to-white p-6 shadow-sm md:p-8"><p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-primary">Earlier is better</p><p className="text-lg font-medium leading-relaxed text-blue-deep">Getting treatment early can make all the difference in how the glass looks after mineral deposits have been removed.</p></div>
            </div></div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] bg-white p-7 shadow-sm md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Slowing the effects</p><h2 className="mb-6 text-2xl font-bold text-blue-deep md:text-3xl">Preventing Further Hard Water Damage</h2><div className="space-y-4">{hardWaterPrevention.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-primary" /><p className="leading-relaxed text-foreground">{item}</p></div>)}</div></article>
              <article className="flex flex-col rounded-[2rem] border border-blue-light/40 bg-white p-7 shadow-sm md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Need just a simple cleaning?</p><h2 className="mb-4 text-2xl font-bold text-blue-deep md:text-3xl">Exterior Window Cleaning</h2><p className="mb-6 leading-relaxed text-foreground">If your glass simply has spots or film from pollen, dust, or rain, exterior window cleaning may be the right service for you.</p><Button asChild className="mt-auto w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky sm:w-fit"><Link href="/exterior-window-cleaning">View Exterior Window Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></article>
            </div></div>
          </section>
        </>
      ) : null}

      {isInterior ? (
        <>
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">A complete clean</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">What Gets Done During an Interior Cleaning</h2><p className="text-lg leading-relaxed text-muted-foreground">Interior windows collect fingerprints, dust, pet marks, and haze that can leave even clean rooms feeling incomplete. We treat the panes and glass edges as parts of one finished result so every window looks genuinely complete.</p></div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {interiorIncluded.map(([title, body]) => <article key={title} className="rounded-2xl border border-border bg-blue-soft p-6"><span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-primary text-white"><Check className="h-4 w-4" /></span><h3 className="mb-2 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}
              </div>
            </div></div>
          </section>

          <section className="bg-blue-deep py-16 text-white md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-pale">Time for a cleaning?</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Signs Your Interior Windows Need Attention</h2><p className="text-lg leading-relaxed text-white/75">Interior buildup tends to develop gradually and subtly. These situations are clear signs that the glass needs to be cleaned rather than simply dusted.</p></div>
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">{interiorSigns.map((sign) => <div key={sign} className="flex gap-4 border-t border-white/20 pt-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-pale" /><p className="leading-relaxed text-white/85">{sign}</p></div>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Beyond clean glass</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Why Interior Cleaning Is Important</h2></div>
              <div className="grid gap-6 md:grid-cols-2">{interiorBenefits.map(([title, body], index) => <article key={title} className="grid gap-4 rounded-[2rem] border border-border p-6 shadow-sm md:grid-cols-[3rem_1fr] md:p-8"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft font-bold text-blue-primary">{index + 1}</span><div><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></div></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10 lg:p-12">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Our process</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">How We Do It</h2><p className="text-lg leading-relaxed text-muted-foreground">A conscientious process ensures thorough work while respecting the rooms, furnishings, and surfaces around each window.</p></div>
              <div>{interiorSteps.map(([title, body], index) => <article key={title} className="grid gap-4 border-t border-border py-6 md:grid-cols-[3rem_14rem_1fr] md:items-start"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">What builds up inside</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Interior Cleaning for West Michigan Homes</h2><p className="text-lg leading-relaxed text-muted-foreground">Interior buildup does not follow the same seasonal pattern as outdoor grime, but several local factors contribute to it consistently in West Michigan.</p></div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{interiorHomeFactors.map(([title, body]) => <article key={title} className="rounded-2xl bg-blue-soft p-6"><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}</div>
            </div></div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><article className="mx-auto flex max-w-5xl flex-col rounded-[2rem] bg-white p-7 shadow-sm md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Inside or outside?</p><h2 className="mb-4 text-2xl font-bold text-blue-deep md:text-3xl">Interior vs. Exterior Window Cleaning</h2><p className="mb-4 leading-relaxed text-foreground">Interior cleaning takes care of fingerprints, pet marks, dust, and haze from inside the home. Exterior cleaning focuses on pollen, rain spots, hard water, and the effects of weather on the outside of the glass.</p><p className="mb-6 leading-relaxed text-foreground">Both types of buildup matter, and many customers choose interior and exterior cleaning during the same visit for a clear result on both sides of the glass.</p><Button asChild className="w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky sm:w-fit"><Link href="/exterior-window-cleaning">View Exterior Window Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></article></div>
          </section>
        </>
      ) : null}

      {isExterior ? (
        <>
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-10 max-w-3xl">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">A complete clean</p>
                  <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">What Gets Done During an Exterior Cleaning</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">The most effective way to clean your windows starts with treating the window as a whole unit. We detail the glass and get to the smaller areas that make your windows sparkle.</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {exteriorIncluded.map(([title, body]) => (
                    <article key={title} className="rounded-2xl border border-border bg-blue-soft p-6">
                      <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-primary text-white"><Check className="h-4 w-4" /></span>
                      <h3 className="mb-2 text-xl font-bold text-blue-deep">{title}</h3>
                      <p className="leading-relaxed text-foreground">{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-deep py-16 text-white md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-pale">Time for a cleaning?</p>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">Signs You Need Exterior Cleaning</h2>
                  <p className="text-lg leading-relaxed text-white/75">Outdoor buildup has a way of creeping up on you. If any of these signs sound familiar, your windows could be due for more than just another hose wash.</p>
                </div>
                <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {exteriorSigns.map((sign) => (
                    <div key={sign} className="flex gap-4 border-t border-white/20 pt-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-pale" />
                      <p className="leading-relaxed text-white/85">{sign}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-10 max-w-3xl">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">More than looks</p>
                  <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Why Exterior Cleaning Is Important</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {exteriorBenefits.map(([title, body], index) => (
                    <article key={title} className="grid gap-4 rounded-[2rem] border border-border p-6 shadow-sm md:grid-cols-[3rem_1fr] md:p-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft font-bold text-blue-primary">{index + 1}</span>
                      <div><h3 className="mb-3 text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10 lg:p-12">
                <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Our process</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">How We Do It</h2><p className="text-lg leading-relaxed text-muted-foreground">A reliable system ensures every window is cared for from start to finish, giving you consistently excellent results.</p></div>
                <div className="space-y-0">
                  {exteriorSteps.map(([title, body], index) => (
                    <article key={title} className="grid gap-4 border-t border-border py-6 md:grid-cols-[3rem_14rem_1fr] md:items-start">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold text-blue-deep">{title}</h3><p className="leading-relaxed text-foreground">{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Plan around the weather</p><h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">Exterior Cleaning Through West Michigan’s Seasons</h2><p className="text-lg leading-relaxed text-muted-foreground">The accumulation on your home’s exterior windows isn’t consistent year-round. A professional cleaning schedule that takes the seasons into account prevents excessive buildup from becoming a problem.</p></div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {exteriorSeasons.map(([season, body]) => <article key={season} className="rounded-2xl bg-blue-soft p-6"><h3 className="mb-3 text-2xl font-bold text-blue-deep">{season}</h3><p className="leading-relaxed text-foreground">{body}</p></article>)}
                </div>
                <div className="mt-8 rounded-2xl border border-blue-light/50 border-l-4 border-l-blue-primary bg-gradient-to-r from-blue-soft to-white p-6 shadow-sm md:p-8">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-primary">A smarter cleaning schedule</p>
                  <p className="text-lg font-medium leading-relaxed text-blue-deep">This pattern is why cleaning your windows on a quarterly or biannual schedule can be smarter than trying to keep up with yearly service. Regular cleaning helps prevent heavier accumulation before it becomes difficult to address.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-soft py-16 md:py-24">
            <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              <article className="flex flex-col rounded-[2rem] bg-white p-7 shadow-sm md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Inside or outside?</p><h2 className="mb-4 text-2xl font-bold text-blue-deep md:text-3xl">Exterior vs. Interior Cleaning</h2><p className="mb-4 leading-relaxed text-foreground">Exterior cleaning removes pollen, rain spotting, dust, and hard water buildup to prevent problems with light, curb appeal, and maintenance. Interior cleaning focuses on fingerprints, pet marks, and other residue left inside the home or business.</p><p className="mb-6 leading-relaxed text-foreground">Most properties benefit from both interior and exterior cleaning, but one may be more important based on the property’s needs. Exterior cleaning has a bigger impact on curb appeal, while interior cleaning keeps the view looking polished from inside.</p><Button asChild className="mt-auto w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky sm:w-fit"><Link href="/interior-window-cleaning">View Interior Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></article>
              <article className="flex flex-col rounded-[2rem] border border-blue-light/40 bg-white p-7 shadow-sm md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-primary">Stubborn white spots?</p><h2 className="mb-4 text-2xl font-bold text-blue-deep md:text-3xl">Hard Water Spot Removal</h2><p className="mb-4 leading-relaxed text-foreground">White, chalky deposits from hard water are mineral buildups that can’t be cleaned away by conventional exterior cleaning methods.</p><p className="mb-6 leading-relaxed text-foreground">Hard water removal is a specialized extra service that targets existing mineral deposits caused by sprinklers or other sources of frequent water exposure.</p><Button asChild className="mt-auto w-full rounded-full bg-blue-primary text-white hover:bg-blue-sky sm:w-fit"><Link href="/hard-water-removal">View Hard Water Spot Removal <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></article>
            </div></div>
          </section>
        </>
      ) : null}

      <Contact />
      <TrustBar />
      <Footer />
    </main>
  )
}
