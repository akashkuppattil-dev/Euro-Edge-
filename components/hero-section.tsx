"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"

const collageCards = [
  {
    label: "Girls Collection",
    image: "/images/product-1.png",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-1 row-span-2",
    href: "/shop?category=girls+collection"
  },
  {
    label: "Boys Collection",
    image: "/images/product-2.png",
    aspect: "aspect-square",
    gridSpan: "col-span-1",
    href: "/shop?category=boys+collection"
  },
  {
    label: "Baby Collection",
    image: "/images/product-4.png",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-1 row-span-2",
    href: "/shop?category=baby+collection"
  },
  {
    label: "Party Wear",
    image: "/images/product-3.png",
    aspect: "aspect-square",
    gridSpan: "col-span-1",
    href: "/shop?category=girls+collection"
  },
  {
    label: "Daily Wear",
    image: "/images/product-6.png",
    aspect: "aspect-square",
    gridSpan: "col-span-1",
    href: "/shop?category=girls+collection"
  },
  {
    label: "Nightwear",
    image: "/images/product-5.png",
    aspect: "aspect-square",
    gridSpan: "col-span-1",
    href: "/shop?category=girls+collection"
  }
]

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-8 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Side: Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-accent-foreground/60 font-sans font-bold">
            Tiny Trends
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 leading-[1.1] tracking-tight">
            Everyday Wear, <br />
            <span className="italic text-accent-foreground/80">Made Beautiful</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-sm md:text-base font-sans leading-relaxed">
            Premium children's apparel. Shipping all over India.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <Link
              href="/shop"
              className="px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.18em] uppercase font-sans font-semibold rounded-full hover:bg-primary/95 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Shop Collection
            </Link>
          </div>
        </div>

        {/* Right Side: Boutique Collage Layout */}
        <div className="lg:col-span-7 w-full">
          <div className="grid grid-cols-3 gap-3 md:gap-4 select-none">
            {collageCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className={`group relative rounded-2xl overflow-hidden bg-secondary/30 border border-border/40 hover:border-accent/80 transition-all duration-300 ${card.gridSpan} ${card.aspect}`}
              >
                {/* Image underlay */}
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  priority={idx < 3}
                />

                {/* Dashed placeholder border overlay representing upload area/styling details */}
                <div className="absolute inset-2 border border-dashed border-white/40 rounded-xl group-hover:border-accent/70 transition-colors pointer-events-none" />

                {/* Bottom label banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent p-3 md:p-4 flex flex-col justify-end h-[60%]">
                  <span className="text-[10px] md:text-xs tracking-wider font-sans font-medium text-white/95 truncate">
                    {card.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
