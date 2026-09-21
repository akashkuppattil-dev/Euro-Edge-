"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Hammer, Zap, ShieldCheck, House, Brush } from "lucide-react"

const iconMap: Record<string, any> = {
  Building2, Hammer, Zap, ShieldCheck, House, Brush
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
                className="group relative rounded-3xl overflow-hidden h-[400px] w-[85vw] max-w-[320px] shrink-0 snap-center flex flex-col justify-end p-6 shadow-md transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  className="object-cover z-0"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a]/95 z-10" />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col gap-2.5">
                  <div className="flex items-center justify-start text-white mb-1">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-white/80 leading-relaxed font-sans line-clamp-4 font-medium">
                    {pillar.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/30 transition-colors w-max"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
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
              className="group relative rounded-[2rem] overflow-hidden h-[480px] flex flex-col justify-end p-7 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={pillar.img}
                alt={pillar.title}
                fill
                className="object-cover z-0 group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#1a1a1a]/50 to-[#1a1a1a]/95 z-10 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col gap-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center justify-start text-white mb-2">
                  <IconComponent className="w-9 h-9 drop-shadow-md" />
                </div>
                
                <h3 className="font-serif font-bold text-[22px] text-white leading-tight drop-shadow-md">
                  {pillar.title}
                </h3>
                
                <p className="text-[13px] text-white/80 leading-relaxed font-sans line-clamp-4 font-medium mb-1 drop-shadow-sm">
                  {pillar.desc}
                </p>

                <div className="pt-3">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/30 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 w-max"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
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
