"use client"

import Link from "next/link"

const categories = [
  { label: "Round Neck", href: "/shop?neck=round" },
  { label: "V Neck", href: "/shop?neck=v-neck" },
  { label: "Feeding Friendly", href: "/shop?feature=feeding" },
  { label: "Lace Detailed", href: "/shop?feature=lace" },
  { label: "Ankle Length", href: "/shop?length=ankle" },
  { label: "Premium Rayon", href: "/shop?fabric=rayon" },
  { label: "Kaftans", href: "/shop?category=kaftan" },
  { label: "Pajama Sets", href: "/shop?category=sets" },
]

export function CategoryChips() {
  return (
    <section className="py-8 lg:py-10 px-4 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex-shrink-0 px-5 py-2.5 border border-border rounded-full text-xs tracking-[0.1em] uppercase text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-sans"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
