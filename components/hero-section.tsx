"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroImages = [
  { src: "/images/product-2.png", alt: "Teal Floral Kaftan", label: "Kaftans" },
  { src: "/images/product-3.png", alt: "Blue Rose Maxi Nighty", label: "Maxi Nighties" },
  { src: "/images/product-6.png", alt: "Black Dahlia Nighty", label: "V Neck Collection" },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full">
      {/* ---- MOBILE ---- */}
      <div className="md:hidden relative h-[85vh] min-h-[520px] max-h-[700px] overflow-hidden">
        {/* 3 background image panels side by side */}
        <div className="absolute inset-0 grid grid-cols-3">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                sizes="34vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/20" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-5">
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans font-semibold">
            Joohaa Luxe
          </p>
          <h1 className="font-serif text-3xl text-primary-foreground mt-2 leading-[1.15] text-balance">
            Everyday Wear,{" "}
            <em className="italic">Made Beautiful</em>
          </h1>
          <p className="text-primary-foreground/60 text-xs font-sans mt-2.5 max-w-[260px] leading-relaxed">
            Premium imported ladies wear crafted for everyday elegance.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-5">
            <Link
              href="/shop"
              className="px-6 py-2.5 bg-accent text-accent-foreground text-[10px] tracking-[0.18em] uppercase font-sans font-medium rounded-full active:scale-95 transition-transform"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="px-6 py-2.5 border border-primary-foreground/30 text-primary-foreground text-[10px] tracking-[0.18em] uppercase font-sans font-medium rounded-full active:scale-95 transition-transform"
            >
              Collections
            </Link>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-5">
            {heroImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-6 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-primary-foreground/30"
                }`}
                aria-label={`View ${img.label}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---- DESKTOP ---- */}
      <div className="hidden md:block relative h-[80vh] min-h-[560px] max-h-[800px] overflow-hidden">
        {/* 3 background panels */}
        <div className="absolute inset-0 grid grid-cols-3">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="34vw"
                priority
              />
              {/* Label at bottom of each panel */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/60 to-transparent h-28" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70 font-sans whitespace-nowrap">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Center dark scrim for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-sans font-semibold">
            Joohaa Luxe Clothing
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mt-5 leading-[1.08] text-balance max-w-3xl">
            Everyday Wear,{" "}
            <em className="italic">Made Beautiful</em>
          </h1>
          <p className="mt-4 text-primary-foreground/50 text-sm lg:text-base font-sans leading-relaxed max-w-lg">
            Premium imported ladies wear crafted for everyday elegance. Shipping all over India.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Link
              href="/shop"
              className="px-8 py-3.5 bg-accent text-accent-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/collections"
              className="px-8 py-3.5 border border-primary-foreground/25 text-primary-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
