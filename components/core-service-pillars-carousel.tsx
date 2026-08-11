"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Hammer, Zap, ShieldCheck } from "lucide-react"

const iconMap: Record<string, any> = {
  Building2, Hammer, Zap, ShieldCheck
}
export function CoreServicePillarsCarousel({ pillars }: { pillars: any[] }) {
  return (
    <>
      {/* Mobile Swipeable View (Hidden on sm and above) */}
      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory pb-4 hide-scrollbar -mx-4 px-4">
          {pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || Building2
            return (
              <div 
                key={pillar.num}
                className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 w-[85vw] max-w-[340px] shrink-0 snap-center transform-gpu"
              >
                {/* Card Top Image Header */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <Image
                    src={pillar.img}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#0a2540]/90 text-[#fbb03b] text-[10px] font-mono font-bold uppercase border border-white/10 shadow-sm">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/80 shrink-0">
                      {pillar.num}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-foreground truncate whitespace-normal line-clamp-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans line-clamp-3 whitespace-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center justify-center w-full gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 py-3 rounded-xl border border-primary/10 transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Swipe Indicator */}
        <div className="flex items-center justify-end gap-2 text-xs font-semibold text-muted-foreground pt-1 pr-2">
          <span>Swipe to explore</span>
          <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
        </div>
      </div>

      {/* Desktop Grid View (Hidden on mobile) */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const IconComponent = iconMap[pillar.iconName] || Building2
          return (
            <div
              key={pillar.num}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top Image Header */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0a2540]/90 text-[#fbb03b] text-[10px] font-mono font-bold uppercase border border-white/10 shadow-sm">
                    {pillar.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white/80">
                    {pillar.num}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary/90 transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
