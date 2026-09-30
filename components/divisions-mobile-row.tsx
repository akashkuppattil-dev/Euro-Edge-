"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface DivisionItem {
  id: string
  title: string
  image: string
  slug: string
  objectPosition: string
  category?: string
  subtitle?: string
}

export const defaultDivisions: DivisionItem[] = [
  {
    id: "facility",
    title: "Facility Management",
    image: "/images/services/facility-management-official.jpg",
    slug: "general-maintenance-amc",
    objectPosition: "center 18%",
    category: "Division 01",
    subtitle: "Complete Preventive & Corrective Maintenance AMC",
  },
  {
    id: "fitout",
    title: "Fit-Out & Renovation",
    image: "/images/services/fit-out-renovation-official.jpg",
    slug: "civil-finishing-works",
    objectPosition: "68% 25%",
    category: "Division 02",
    subtitle: "Turnkey Interior Fit-Out & Architectural Refurbishment",
  },
  {
    id: "mep",
    title: "MEP & HVAC Systems",
    image: "/images/services/mep-technical.jpg",
    slug: "mep-technical-works",
    objectPosition: "center 20%",
    category: "Division 03",
    subtitle: "Mechanical, Electrical, Plumbing & Central Air Conditioning",
  },
  {
    id: "civil",
    title: "Civil Maintenance",
    image: "/images/services/civil-maintenance-official.jpg",
    slug: "civil-finishing-works",
    objectPosition: "45% 25%",
    category: "Division 04",
    subtitle: "Tiling, Painting, Waterproofing & Structural Repairs",
  },
  {
    id: "pool-landscaping",
    title: "Pool & Landscaping",
    image: "/images/services/swimming-pool.jpg",
    slug: "swimming-pool-works",
    objectPosition: "center 30%",
    category: "Division 05",
    subtitle: "Custom Pool Construction, Filtration & Hard Landscaping",
  },
]

export function DivisionsMobileRow({
  divisions = defaultDivisions,
}: {
  divisions?: DivisionItem[]
}) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const total = divisions.length

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Automatic slide swipe every 3 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current
      if (diff > 40) {
        nextSlide()
      } else if (diff < -40) {
        prevSlide()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
    setTimeout(() => setIsPaused(false), 2200)
  }

  return (
    <div
      className="md:hidden relative w-full overflow-hidden py-1"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        Single Row Track:
        - 1st card 100% visible on left
        - 2nd card ~20% visible on right
        - Shifts smoothly every 3 seconds
        - No navigation buttons
      */}
      <div
        className="flex transition-transform duration-500 ease-out gap-3.5"
        style={{
          transform: `translateX(calc(-${current * 83}% - ${current * 14}px))`,
        }}
      >
        {divisions.map((item, idx) => (
          <Link
            key={item.id}
            href={`/services/${item.slug}`}
            className="flex-shrink-0 w-[82%] relative h-[330px] sm:h-[370px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 flex flex-col justify-between p-5 select-none"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{ objectPosition: item.objectPosition }}
              sizes="(max-width: 768px) 85vw, 400px"
              priority={idx === 0}
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

            {/* Top Division Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/55 border border-white/20 text-[#fbb03b] text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                {item.category || `Division 0${idx + 1}`}
              </span>
            </div>

            {/* Bottom Content & Explore Action */}
            <div className="relative z-10 space-y-3">
              <div className="space-y-1">
                <h3 className="font-editorial-h2 text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-[11px] text-white/80 line-clamp-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                )}
              </div>

              {/* Action Button (No arrow buttons) */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbb03b] text-[#0a2540] text-xs font-bold uppercase tracking-wider shadow-md">
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
