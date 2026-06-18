"use client"

import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Star, ThumbsUp } from "lucide-react"
import { HashLink } from "@/components/hash-link"

export function Hero() {
  const trustBadges = [
    { icon: Shield, label: "Fully Insured" },
    { icon: Sparkles, label: "Streak-Free Guarantee" },
    { icon: ThumbsUp, label: "Satisfaction Guarantee" },
  ]

  return (
    <section className="relative min-h-[95vh] flex items-center pt-36 pb-28 overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/website_video_compressed.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🔵 Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-deep/80 via-blue-primary/70 to-blue-deep/80" />

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-light/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-pale/20 rounded-full blur-3xl animate-float-slow animation-delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-sky/20 rounded-full blur-2xl animate-float animation-delay-1000" />

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#E6F2FF"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up text-balance">
            Window Cleaning in Hudsonville, MI
          </h1>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-white animate-fade-in-up animation-delay-200">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-blue-pale text-blue-pale"
                />
              ))}
            </div>
            <span className="text-sm font-semibold md:text-base">
              5.0&nbsp;&nbsp;·&nbsp;&nbsp;24+ Google reviews
            </span>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in-up animation-delay-200 text-pretty">
            Reliable window cleaning for homes and businesses. Fast, streak-free results from a hardworking local team you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white hover:bg-blue-soft text-blue-primary px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <HashLink href="#contact">
                Get a Free Quote
              </HashLink>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in-up animation-delay-600">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 border border-white/25"
              >
                <badge.icon className="w-5 h-5 text-blue-pale" />

                <span className="text-sm text-white font-medium">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
