"use client"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/product-2.png"
          alt="JOOHAA LUXE premium nightwear"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block text-accent text-xs tracking-[0.3em] uppercase font-sans mb-4 lg:mb-6">
              Premium Nightwear Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-[1.1] tracking-tight text-balance">
              Elegance You
              <br />
              <em className="italic">Deserve</em>
            </h1>
            <p className="mt-5 lg:mt-6 text-primary-foreground/70 text-base lg:text-lg font-sans leading-relaxed max-w-md">
              Luxurious maxi nighties crafted from premium imported rayon. 
              Where comfort meets sophistication.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/shop?sort=newest"
                className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
