"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/images/product-2.png",
    alt: "Teal Floral Kaftan",
    label: "New In",
    title: "Floral Kaftans",
    subtitle: "Effortless grace for every evening",
  },
  {
    src: "/images/product-3.png",
    alt: "Blue Rose Maxi Nighty",
    label: "Best Seller",
    title: "Maxi Nighties",
    subtitle: "Breathable rayon, all-day comfort",
  },
  {
    src: "/images/product-6.png",
    alt: "Black Dahlia Nighty",
    label: "Exclusive",
    title: "Dark Florals",
    subtitle: "Premium imported collection",
  },
  {
    src: "/images/product-5.png",
    alt: "Navy Floral Nighty",
    label: "Trending",
    title: "Night Florals",
    subtitle: "Elegant prints for restful nights",
  },
]

const quickCategories = [
  { label: "Kaftans", href: "/shop?category=v+neck+-+full+length" },
  { label: "Nighties", href: "/shop?category=normal+nighty" },
  { label: "Pajama Sets", href: "/shop?category=pajama+set" },
  { label: "New In", href: "/shop" },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const handleManualNav = (direction: "prev" | "next") => {
    setIsAutoPlaying(false)
    if (direction === "prev") prev()
    else next()
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section className="relative">
      {/* ─── MOBILE HERO ─── */}
      <div className="md:hidden">
        {/* Carousel */}
        <div className="relative overflow-hidden bg-secondary">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 relative">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority={i === 0}
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />

                  {/* Content over image */}
                  <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
                    <span className="inline-block px-2.5 py-0.5 bg-accent/90 text-accent-foreground text-[9px] tracking-[0.15em] uppercase font-sans font-semibold rounded-full mb-2">
                      {slide.label}
                    </span>
                    <h2 className="font-serif text-2xl text-primary-foreground leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-primary-foreground/70 text-xs font-sans mt-1">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 8000)
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Category Row */}
        <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {quickCategories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex-shrink-0 px-4 py-2 bg-card border border-border rounded-full text-[11px] tracking-wide text-foreground/80 font-sans font-medium hover:bg-secondary hover:border-accent/40 active:scale-95 transition-all"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ─── DESKTOP HERO ─── */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 min-h-[600px] lg:min-h-[680px]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 py-16 bg-card">
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans font-semibold">
                {slides[current].label}
              </span>
              <h1
                className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mt-4 leading-[1.1] transition-all duration-500"
                key={`title-${current}`}
              >
                {slides[current].title}
              </h1>
              <p className="mt-4 text-muted-foreground text-sm lg:text-base font-sans leading-relaxed max-w-sm">
                {slides[current].subtitle}
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
                >
                  Shop Collection
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center px-8 py-3.5 border border-border text-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-secondary transition-all duration-300"
                >
                  View All
                </Link>
              </div>

              {/* Dot navigation */}
              <div className="flex items-center gap-3 mt-12">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i)
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 8000)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-8 h-2 bg-accent"
                        : "w-2 h-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
                <span className="ml-3 text-[10px] text-muted-foreground font-sans tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Right: Image Carousel */}
            <div className="relative overflow-hidden bg-secondary">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Arrow Controls */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
                <button
                  onClick={() => handleManualNav("prev")}
                  className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={() => handleManualNav("next")}
                  className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
