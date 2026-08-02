"use client"

import Link from "next/link"
import Image from "next/image"

const categories = [
  { label: "Girls", image: "/images/product-1.png", href: "/shop?category=girls+collection" },
  { label: "Boys", image: "/images/product-2.png", href: "/shop?category=boys+collection" },
  { label: "Baby", image: "/images/product-4.png", href: "/shop?category=baby+collection" },
  { label: "Footwear", image: "/images/product-2.png", href: "/shop?category=footwear" },
  { label: "Accessories", image: "/images/product-5.png", href: "/shop?category=accessories" },
  { label: "Toys", image: "/images/product-6.png", href: "/shop?category=toys" },
]

export function CategoryChips() {
  return (
    <section className="py-3 md:py-10 px-4 md:px-12 bg-background border-b border-border/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Horizontal scroll on mobile, flex grid on desktop */}
        <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto scrollbar-hide py-2 px-1 md:overflow-visible md:py-0 md:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center flex-shrink-0 group text-center cursor-pointer select-none"
            >
              {/* Circle Image Wrapper */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border border-border/60 group-hover:border-accent shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 64px, 96px"
                />
              </div>

              {/* Label below */}
              <span className="mt-2 text-[10px] md:text-[11px] tracking-wider font-sans font-bold text-foreground/75 uppercase group-hover:text-accent-foreground transition-colors leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
