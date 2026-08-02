"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, MessageCircle, Crown, Cloud, Tag, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] md:min-h-[95vh] flex items-center justify-center py-16 px-4 bg-background">
      
      {/* Background Image: Mockup Flat-lay (no baked-in text) */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/hero-flatlay-blank.png"
          alt="Tiny Trends Premium Children's Apparel Flat-lay"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Center Container: Renders text and buttons directly on top of the background flatlay */}
      <div className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center">
        
        {/* Heart + Tagline */}
        <div className="flex flex-col items-center gap-1.5 mb-3">
          <span className="text-rose-400 text-xs">❤</span>
          <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-accent-foreground/80 font-sans font-bold">
            Premium Children's Apparel
          </span>
        </div>

        {/* Heading with Cursive Script Accent */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c2b38] leading-[1.15] tracking-tight font-normal">
          Beautiful Styles <br />
          <span className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#d49b91] block mt-1 tracking-normal font-semibold">
            for Every Little Moment 💕
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-muted-foreground text-xs md:text-sm font-sans leading-relaxed max-w-lg">
          Discover thoughtfully curated collections for Babies, Girls & Boys.<br />
          From everyday essentials to festive outfits,<br />
          we bring comfort, quality & timeless style for your little ones.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 w-full">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d49b91] hover:bg-[#c3897f] text-white text-[11px] tracking-[0.18em] uppercase font-sans font-semibold rounded-full transition-all shadow-md active:scale-95"
          >
            <span>Shop Collections</span>
            <ShoppingBag className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://wa.me/918129780324?text=Hi%20Tiny%20Trends%2C%20I%27d%20like%20to%20enquire%20about%20your%20apparel%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#eae3d9]/80 hover:bg-[#ded5c7] border border-border/80 text-foreground/80 text-[11px] tracking-[0.15em] uppercase font-sans font-semibold rounded-full transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>

      </div>
      
    </section>
  )
}
