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

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const galleryImages = Array.from(new Set(service.galleryImages))
  const isExterior = service.slug === "exterior-window-cleaning"
  const isInterior = service.slug === "interior-window-cleaning"

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

      {!isExterior && !isInterior ? (
      <section className="bg-blue-soft py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-primary shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
                What to Expect
              </div>
              <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
                {service.cardTitle} That Feels Finished
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {service.detailsIntro}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-lg md:p-8">
                <h3 className="mb-5 text-2xl font-bold text-blue-deep">
                  Why This Service Helps
                </h3>
                <div className="space-y-4">
                  {service.detailHighlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-primary" />
                      <p className="leading-relaxed text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-blue-deep p-6 text-white shadow-lg md:p-8">
                <h3 className="mb-5 text-2xl font-bold">
                  How We Handle It
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-pale" />
                      <p className="leading-relaxed text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
