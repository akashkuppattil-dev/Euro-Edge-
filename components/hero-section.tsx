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
      {/* ---- MOBILE: Single rotating image ---- */}
      <div className="md:hidden relative h-[75vh] min-h-[480px] max-h-[640px] overflow-hidden">
        {/* Rotating single background image */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Subtle bottom-only gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content at bottom */}
        <div className="absolute inset-x-0 bottom-0 pb-8 px-5">
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans font-semibold">
            Joohaa Luxe
          </p>
          <h1 className="font-serif text-3xl text-white mt-1.5 leading-[1.15] text-balance">
            Everyday Wear,{" "}
            <em className="italic">Made Beautiful</em>
          </h1>
          <p className="text-white/70 text-xs font-sans mt-2 max-w-[260px] leading-relaxed">
            Premium imported ladies wear crafted for everyday elegance.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-4">
            <Link
              href="/shop"
              className="px-6 py-2.5 bg-accent text-accent-foreground text-[10px] tracking-[0.18em] uppercase font-sans font-medium rounded-full active:scale-95 transition-transform"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="px-6 py-2.5 border border-white/40 text-white text-[10px] tracking-[0.18em] uppercase font-sans font-medium rounded-full active:scale-95 transition-transform"
            >
              Collections
            </Link>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-4">
            {heroImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-6 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-white/40"
                }`}
                aria-label={`View ${img.label}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---- DESKTOP: 3 crisp image panels with minimal overlay ---- */}
      <div className="hidden md:block relative h-[80vh] min-h-[560px] max-h-[800px] overflow-hidden">
        {/* 3 image panels */}
        <div className="absolute inset-0 grid grid-cols-3">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer" onClick={() => setActiveIndex(i)}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="34vw"
                priority
              />
              {/* Very light bottom gradient only - keeps image quality */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/80 font-sans font-medium whitespace-nowrap">
                {img.label}
              </span>
              {/* Thin divider line between panels */}
              {i < heroImages.length - 1 && (
                <div className="absolute top-0 right-0 w-px h-full bg-white/15" />
              )}
            </div>
          ))}
        </div>

        {/* Center floating content card - no full-screen dark overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center pointer-events-auto bg-primary/75 backdrop-blur-sm px-12 py-10 rounded-sm">
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent font-sans font-semibold">
              Joohaa Luxe Clothing
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white mt-4 leading-[1.1] text-balance">
              Everyday Wear,{" "}
              <em className="italic">Made Beautiful</em>
            </h1>
            <p className="mt-3 text-white/60 text-sm font-sans leading-relaxed max-w-md mx-auto">
              Premium imported ladies wear. Shipping all over India.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link
                href="/shop"
                className="px-8 py-3 bg-accent text-accent-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Shop Collection
              </Link>
              <Link
                href="/collections"
                className="px-8 py-3 border border-white/30 text-white text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
