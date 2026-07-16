"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Reviews() {
  const reviews = [
    {
      name: "Candace Molenkamp",
      location: "Google Review",
      quote: "Our windows look great! We are so happy with how they turned out.",
      rating: 5,
    },
    {
      name: "Miranda Galliani",
      location: "Google Review",
      quote:
        "Windows, screens, and tracks were able to be done the same day. They completed the job so quickly, and everything looks amazing! Very impressed with this company and would definitely recommend. Pricing was great, too!",
      rating: 5,
    },
    {
      name: "Alan N",
      location: "Google Review",
      quote: "Super polite and prompt.",
      rating: 5,
    },
    {
      name: "Digvijay Singh",
      location: "Google Review",
      quote: "Reasonable price.",
      rating: 5,
    },
    {
      name: "Walter",
      location: "Google Review",
      quote:
        "Did a great job and was able to clean the windows that I find hard to reach. The serviceman arrived at the appointed time and was done with the entire exterior within a couple of hours. Now I can do something other than clean windows on a Saturday afternoon.",
      rating: 5,
    },
    {
      name: "Amanda Semple",
      location: "Google Review",
      quote: "Reasonable price.",
      rating: 5,
    },
    {
      name: "Steve Johnson",
      location: "Google Review",
      quote: "Five-star Google review.",
      rating: 5,
    },
    {
      name: "Nico Smith",
      location: "Google Review",
      quote:
        "They did a great job cleaning up the windows. Very professional and got the job done with no mess or hassle.",
      rating: 5,
    },
    {
      name: "Mark Sahro",
      location: "Google Review",
      quote:
        "They were professional, efficient, and friendly. The value they provided for the job they did was cost-effective.",
      rating: 5,
    },
    {
      name: "Laura Moore",
      location: "Google Review",
      quote: "Very professional, great communication!",
      rating: 5,
    },
    {
      name: "Nicole Sutton",
      location: "Google Review",
      quote: "Very quick and clean! Even did the garage windows!",
      rating: 5,
    },
    {
      name: "Kara Hill",
      location: "Google Review",
      quote:
        "This company did an amazing job on my windows! Above and beyond what I have had in the past! Extremely reasonable price, professional, and kind! I would highly recommend them and will be using them in the future.",
      rating: 5,
    },
    {
      name: "Brenda Seitz",
      location: "Google Review",
      quote:
        "Arrived on time, were courteous and respectful and did an amazing job. Will definitely use them again and refer to others.",
      rating: 5,
    },
    {
      name: "Jack Meyer",
      location: "Google Review",
      quote:
        "Drew is the man. Young guys are very professional, fair price, good work. Highly recommend.",
      rating: 5,
    },
    {
      name: "Big Lake Promotions",
      location: "Google Review",
      quote: "Thorough, prompt and professional. Highly recommend.",
      rating: 5,
    },
    {
      name: "Kathleen Kelley",
      location: "Google Review",
      quote: "So excited to have clean windows. Thank you.",
      rating: 5,
    },
    {
      name: "Liz Snow",
      location: "Google Review",
      quote:
        "Great effort, even had to pause to wait out a storm. Lots of construction dirt scrubbed off. Thank you.",
      rating: 5,
    },
    {
      name: "Martin Quinnan",
      location: "Google Review",
      quote: "Very good job. On time and exactly as promised.",
      rating: 5,
    },
    {
      name: "Colleen Galdys",
      location: "Google Review",
      quote: "Prompt, thorough, windows and trim looks great.",
      rating: 5,
    },
    {
      name: "Luann Sun",
      location: "Google Review",
      quote:
        "Young people did a great job. Will hire them again next time when we need window cleaning.",
      rating: 5,
    },
    {
      name: "Nathan Stieve",
      location: "Google Review",
      quote: "Our windows have never been clearer.",
      rating: 5,
    },
    {
      name: "Keith Berman",
      location: "Google Review",
      quote:
        "The team showed on time, if not early, for the scheduled job. They did an amazing job. Our windows look great! Highly recommend this group of hardworking folks. Additionally, we have many plants and flower pots, and they were extremely careful not to disturb or harm any of them. We will work with them in the future.",
      rating: 5,
    },
    {
      name: "David Harvey",
      location: "Google Review",
      quote: "Did an excellent job. Very nice and conscientious staff.",
      rating: 5,
    },
    {
      name: "Barb Kasen",
      location: "Google Review",
      quote:
        "Excellent service. Crew was timely, polite and did an excellent job. Highly recommend.",
      rating: 5,
    },
    {
      name: "Megan Vollink",
      location: "Google Review",
      quote:
        "Great service, easy communication and quality work. Would use them again.",
      rating: 5,
    },
    {
      name: "Karen See",
      location: "Google Review",
      quote: "Windows look great. They did a very good job at getting all the dirt off.",
      rating: 5,
    },
    {
      name: "Amanda Elliott",
      location: "Google Review",
      quote: "Did a great job. My windows look great.",
      rating: 5,
    },
    {
      name: "Darcy Briseno",
      location: "Google Review",
      quote:
        "Josiah and Drew did a wonderful job washing my windows. They saved me so much time and did a thorough job. I will definitely use them again next time.",
      rating: 5,
    },
  ]

  const reviewLoop = [...reviews, ...reviews.slice(0, 4)]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [timerResetKey, setTimerResetKey] = useState(0)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((index) => index + 1)
    }, 4500)

    return () => window.clearTimeout(timeout)
  }, [activeIndex, timerResetKey])

  const handleTransitionEnd = () => {
    if (activeIndex >= reviews.length) {
      setIsTransitioning(false)
      setActiveIndex(0)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsTransitioning(true))
      })
    }
  }

  const goToPrevious = () => {
    setTimerResetKey((key) => key + 1)
    setActiveIndex((index) => {
      if (index <= 0) {
        return reviews.length - 1
      }

      return index - 1
    })
  }

  const goToNext = () => {
    setTimerResetKey((key) => key + 1)
    setActiveIndex((index) => index + 1)
  }

  return (
    <section id="reviews" className="scroll-mt-28 overflow-hidden bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-blue-deep md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Hear from satisfied customers
            across West Michigan.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-white to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-white to-transparent md:block" />

        <div
          className={`flex w-max gap-[var(--review-card-gap)] pl-[calc((100vw_-_var(--review-card-width))_/_2)] md:pl-0 ${
            isTransitioning ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{
            transform: `translateX(calc(var(--review-card-step) * -${activeIndex}))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {reviewLoop.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="relative flex w-[var(--review-card-width)] flex-col rounded-2xl border border-blue-pale bg-white p-6 shadow-lg"
            >
              <div
                aria-label="Google review"
                className="absolute right-5 top-5 rounded-full border border-border bg-white px-2.5 py-1 text-xs font-bold shadow-sm"
              >
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
              </div>

              <div className="mb-6 flex gap-1 pr-20">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-blue-sky text-blue-sky"
                  />
                ))}
              </div>

              <blockquote className="mb-6 min-h-[132px] text-base leading-relaxed text-foreground">
                {review.quote}
              </blockquote>

              <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-pale bg-blue-soft">
                  <span className="text-sm font-bold text-blue-deep">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-blue-deep">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 md:block">
          <div className="container mx-auto flex justify-between px-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={goToPrevious}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/90 text-blue-deep shadow-lg transition-colors hover:bg-blue-bg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={goToNext}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/90 text-blue-deep shadow-lg transition-colors hover:bg-blue-bg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous review"
            onClick={goToPrevious}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-blue-deep shadow-md transition-colors hover:bg-blue-bg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={goToNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-blue-deep shadow-md transition-colors hover:bg-blue-bg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
