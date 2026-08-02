"use client"

import Link from "next/link"

const categories = [
  { label: "Girls Collection", short: "GC", href: "/shop?category=girls+collection" },
  { label: "Boys Collection", short: "BC", href: "/shop?category=boys+collection" },
  { label: "Baby Collection", short: "Baby", href: "/shop?category=baby+collection" },
  { label: "Footwear", short: "FW", href: "/shop?category=footwear" },
  { label: "Accessories", short: "AC", href: "/shop?category=accessories" },
  { label: "Toys", short: "TY", href: "/shop?category=toys" },
]

export function CategoryChips() {
  return (
    <section className="py-4 md:py-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile - Horizontal scroll with icon circles */}
        <div className="md:hidden">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-1 px-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary border-2 border-border/50 flex items-center justify-center text-xs font-serif font-bold text-accent group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-200">
                  {cat.short}
                </div>
                <span className="text-[10px] font-sans text-foreground/60 text-center w-[60px] leading-tight line-clamp-2">
                  {cat.label.replace(" Collection", "")}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop - Pill chips */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="px-5 py-2.5 border border-border rounded-full text-xs tracking-[0.1em] uppercase text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-sans"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
