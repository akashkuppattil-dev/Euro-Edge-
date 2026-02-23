"use client"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
          <div className="w-8 h-px bg-accent mb-6" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-sans mb-4">
            Premium Nightwear Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.08] tracking-tight text-balance">
            Elegance You
            <br />
            <em className="italic">Deserve</em>
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-base lg:text-lg font-sans leading-relaxed max-w-md">
            Luxurious maxi nighties crafted from premium imported rayon. 
            Where comfort meets sophistication.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary-foreground/5 transition-all duration-300"
            >
              Collections
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
          <Image
            src="/images/product-2.png"
            alt="JOOHAA LUXE premium kaftan nightwear"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/10 lg:bg-transparent" />
          {/* Subtle gradient bleed from left on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
