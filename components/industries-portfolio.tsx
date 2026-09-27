"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Building2,
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  Building,
  GraduationCap,
  Check,
  ArrowRight,
  Trees,
} from "lucide-react"

export interface IndustrySector {
  id: string
  number: string
  sectorLabel: string
  title: string
  subtitle: string
  approach: string
  image?: string
  propertyScope: string[]
  appliedDivisions: string[]
  keyDeliverables: string[]
  ctaText: string
}

export const primaryIndustries: IndustrySector[] = [
  {
    id: "residential",
    number: "01",
    sectorLabel: "SECTOR 01 • VILLAS & APARTMENTS",
    title: "Residential & Villas",
    subtitle: "Villas & Apartments",
    approach: "Turnkey Craftsmanship & Complete Home Engineering",
    image: "/images/industries/sector-01-residential.jpg",
    propertyScope: [
      "Villas",
      "Apartments",
      "Townhouses",
      "Residential Communities",
    ],
    appliedDivisions: [
      "Civil & Finishing",
      "MEP & Technical",
      "Swimming Pool",
      "Landscaping",
      "Maintenance",
    ],
    keyDeliverables: [
      "Luxury villa renovation & painting",
      "Premium tiling & flooring",
      "Pool construction & maintenance",
      "Electrical & AC upgrades",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "commercial",
    number: "02",
    sectorLabel: "SECTOR 02 • OFFICES & BUSINESS SPACES",
    title: "Commercial & Offices",
    subtitle: "Offices & Business Spaces",
    approach: "Corporate Fit-Out, MEP Infrastructure & Facilities Care",
    image: "/images/industries/sector-02-commercial.jpg",
    propertyScope: [
      "Offices",
      "Commercial Buildings",
      "Retail Spaces",
      "Business Centers",
      "Showrooms",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Office partitions & false ceilings",
      "Electrical distribution & architectural lighting",
      "HVAC & ventilation systems",
      "AMC with scheduled servicing",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "hospitality",
    number: "03",
    sectorLabel: "SECTOR 03 • HOTELS & RESORTS",
    title: "Hotels & Hospitality",
    subtitle: "Hotels & Resorts",
    approach: "High-Aesthetic Finishing & Guest-First Engineering",
    image: "/images/industries/sector-03-hospitality.jpg",
    propertyScope: [
      "Hotels",
      "Resorts",
      "Guest Houses",
      "Hospitality Properties",
      "Leisure Facilities",
    ],
    appliedDivisions: [
      "Swimming Pool",
      "MEP & Technical",
      "Landscaping",
      "Civil & Finishing",
      "Maintenance",
    ],
    keyDeliverables: [
      "Pool engineering & maintenance",
      "Landscaping & outdoor finishing",
      "High-traffic area tiling & painting",
      "Responsive technical support",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "restaurants",
    number: "04",
    sectorLabel: "SECTOR 04 • RESTAURANTS & CAFÉS",
    title: "Restaurants & F&B",
    subtitle: "Restaurants & Cafés",
    approach: "Specialized Kitchen MEP, Sanitary Drainage & Dining Ambiance",
    image: "/images/industries/sector-04-restaurants.jpg",
    propertyScope: [
      "Restaurants",
      "Cafés",
      "Commercial Kitchens",
      "F&B Spaces",
      "Outdoor Dining",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Kitchen plumbing & drainage",
      "HVAC & ventilation systems",
      "Slip-resistant flooring & finishes",
      "Decorative lighting & carpentry",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "retail",
    number: "05",
    sectorLabel: "SECTOR 05 • STORES & SHOWROOMS",
    title: "Retail & Shopping",
    subtitle: "Stores & Showrooms",
    approach: "High-Traffic Floor Finishes, Showroom Lighting & Quick Handover",
    image: "/images/industries/sector-05-retail.jpg",
    propertyScope: [
      "Retail Stores",
      "Shopping Centers",
      "Boutiques",
      "Showrooms",
      "Outlets",
    ],
    appliedDivisions: [
      "Civil & Finishing",
      "MEP & Technical",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Durable floor tiling",
      "Accent & track lighting",
      "Feature ceilings & displays",
      "Refurbishment support",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "industrial",
    number: "06",
    sectorLabel: "SECTOR 06 • WAREHOUSES & FACILITIES",
    title: "Industrial & Warehouses",
    subtitle: "Warehouses & Facilities",
    approach: "Heavy-Duty Civil Contracting, High-Load Power & Storage MEP",
    image: "/images/industries/sector-06-industrial.jpg",
    propertyScope: [
      "Warehouses",
      "Industrial Facilities",
      "Workshops",
      "Production Facilities",
      "Storage",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "General Maintenance",
    ],
    keyDeliverables: [
      "Industrial flooring & coatings",
      "Electrical cabling & distribution",
      "Waterproofing & roof repair",
      "Ventilation & electromechanical",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "property-management",
    number: "07",
    sectorLabel: "SECTOR 07 • BUILDINGS & COMMUNITIES",
    title: "Property & Facility Management",
    subtitle: "Buildings & Communities",
    approach: "Comprehensive Asset Preservation, Planned Maintenance & AMCs",
    image: "/images/industries/sector-07-property.jpg",
    propertyScope: [
      "Residential",
      "Commercial",
      "Building Portfolios",
      "Managed Facilities",
      "Communities",
    ],
    appliedDivisions: [
      "General Maintenance",
      "MEP & Technical",
      "Civil & Finishing",
      "Landscaping",
      "Swimming Pool",
    ],
    keyDeliverables: [
      "Planned maintenance & AMC support",
      "Multi-skilled maintenance teams",
      "Irrigation & common area upkeep",
      "Pool maintenance & testing",
    ],
    ctaText: "Discuss Your Project →",
  },
  {
    id: "healthcare-education",
    number: "08",
    sectorLabel: "SECTOR 08 • SPECIALIZED FACILITIES",
    title: "Healthcare & Educational Facilities",
    subtitle: "Specialized Facilities",
    approach: "Strict Code Compliance, Sterile Environments & Safe Spaces",
    image: "/images/industries/sector-08-healthcare.jpg",
    propertyScope: [
      "Clinics",
      "Medical Centers",
      "Schools & Campuses",
      "Training Centers",
      "Student Facilities",
    ],
    appliedDivisions: [
      "MEP & Technical",
      "Civil & Finishing",
      "Maintenance",
      "Landscaping",
    ],
    keyDeliverables: [
      "Hygienic paint & cleanroom finishes",
      "HVAC, filtration & ventilation",
      "Safe electrical & plumbing systems",
      "Campus grounds & outdoor works",
    ],
    ctaText: "Discuss Your Project →",
  },
]

export function IndustriesPortfolio() {
  return (
    <div className="w-full">
      {/* =========================================
          SECTION 1 — HERO
      ========================================= */}
      {/* =========================================
          SECTION 1 — HERO (Panoramic Wallpaper Background)
      ========================================= */}
      <section className="relative overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex items-center py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        {/* Background Wallpaper Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries-hero-bg.png"
            alt="Euro Edge Industries We Serve Wallpaper - Dubai Skyline & Engineering"
            fill
            priority
            className="object-cover object-right sm:object-[center_right] lg:object-center"
            sizes="100vw"
          />
          {/* Subtle directional gradient on the left side to ensure high contrast and crystal-clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:max-w-2xl lg:max-w-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0066cc] block">
              INDUSTRIES WE SERVE
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0a2540] font-bold tracking-tight">
              Built for Every Environment
            </h1>

            <p className="text-sm sm:text-base text-slate-800 font-medium max-w-xl pt-1 leading-relaxed">
              Tailored technical contracting, MEP maintenance, and turnkey facilities engineering across commercial, residential, and industrial sectors in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2 — 8 INDUSTRY SECTIONS
          Clean technical layout (Images removed as requested)
      ========================================= */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto space-y-6 sm:space-y-7">
          {primaryIndustries.map((sector, index) => {
            const hasImage = Boolean(sector.image)
            const isImageLeft = index % 2 === 0

            return (
              <article
                key={sector.id}
                id={sector.id}
                className="scroll-mt-28 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 p-6 sm:p-7 lg:p-8"
              >
                {hasImage ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isImageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative w-full h-[220px] sm:h-[260px] lg:h-full min-h-[220px] lg:min-h-[270px] rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs">
                        <Image
                          src={sector.image!}
                          alt={sector.title}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 flex flex-col justify-between space-y-4 ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Top Header */}
                      <div className="space-y-1.5">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0a2540] tracking-tight">
                          {sector.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                          <span className="text-[#0066cc] font-semibold">{sector.subtitle}</span>
                          <span>•</span>
                          <span>{sector.approach}</span>
                        </div>
                      </div>

                      {/* Applied Services (Left) + Property Types (Middle) + Highlights & CTA (Right) */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 pt-3 border-t border-slate-100 flex-1">
                        {/* 1. Applied Services (Left) */}
                        <div className="sm:col-span-4 space-y-2">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0066cc] block font-sans">
                            Applied Services
                          </span>
                          <ul className="space-y-1.5 text-xs">
                            {sector.appliedDivisions.map((srv, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-snug text-slate-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] flex-shrink-0 mt-1.5" />
                                <span>{srv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. Property Types (Middle / Right of Applied Services) */}
                        <div className="sm:col-span-4 space-y-2">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                            Property Types
                          </span>
                          <ul className="space-y-1.5 text-xs">
                            {sector.propertyScope.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-snug text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-1.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 3. Key Highlights & CTA (Right) */}
                        <div className="sm:col-span-4 flex flex-col justify-between space-y-3">
                          <div className="space-y-2">
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                              Key Highlights
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-700">
                              {sector.keyDeliverables.map((kd, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-snug">
                                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                  <span>{kd}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white font-sans font-semibold text-xs tracking-wide transition-all duration-200 shadow-2xs group/btn"
                            >
                              <span>{sector.ctaText}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-5">
                    {/* Top Row: Title, Approach & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0a2540] tracking-tight">
                          {sector.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                          <span className="text-[#0066cc] font-semibold">{sector.subtitle}</span>
                          <span>•</span>
                          <span>{sector.approach}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex-shrink-0 pt-1 sm:pt-0">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white font-sans font-semibold text-xs tracking-wide transition-all duration-200 shadow-2xs group/btn"
                        >
                          <span>{sector.ctaText}</span>
                        </Link>
                      </div>
                    </div>

                    {/* Three-Column Grid: Left (Applied Services), Middle (Property Types), Right (Key Highlights) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
                      {/* Left: Applied Services */}
                      <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0066cc] block font-sans">
                          Applied Services
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm">
                          {sector.appliedDivisions.map((srv, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-snug text-slate-700 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] flex-shrink-0 mt-1.5" />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Middle: Property Types */}
                      <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                          Property Types
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm">
                          {sector.propertyScope.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-snug text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-1.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Key Highlights */}
                      <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                          Key Highlights
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {sector.keyDeliverables.map((kd, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 leading-snug">
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{kd}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* =========================================
            SECTION 3 — OUTDOOR & LANDSCAPE APPLICATIONS
        ========================================= */}
        <div className="max-w-[1400px] mx-auto mt-12 sm:mt-16">
          <div className="rounded-2xl bg-[#071d33] text-white p-5 sm:p-7 lg:p-8 border border-white/10 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fbb03b] flex items-center gap-1.5">
                  <Trees className="w-4 h-4" />
                  <span>OUTDOOR &amp; LANDSCAPING</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Outdoor Spaces Across Every Property
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
                  Landscaping, paving, irrigation, and grounds maintenance for villas, commercial developments, and hospitality venues.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Soft Landscaping",
                    "Hard Landscaping",
                    "Paving & Interlock",
                    "Irrigation Systems",
                    "Garden & Outdoor Works",
                    "Landscape Maintenance",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-slate-200 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/services/landscaping-works"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fbb03b] hover:bg-[#e59e2f] text-[#0a2540] font-bold text-xs tracking-wider transition-all shadow-sm"
                  >
                    <span>Explore Landscaping</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Pergola Picture Showcase */}
              <div className="lg:col-span-5">
                <div className="relative h-[200px] sm:h-[240px] w-full rounded-xl overflow-hidden border border-white/15 shadow-sm">
                  <Image
                    src="/images/industries/outdoor-pergola.jpg"
                    alt="Luxury outdoor landscaping and pergola living space"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 4 — FINAL CTA (CONVERSION SECTION)
        ========================================= */}
        <div className="max-w-[1400px] mx-auto mt-12 sm:mt-14">
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 sm:p-10 lg:p-12 text-center space-y-5 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-2.5 relative z-10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#fbb03b] uppercase block">
                READY TO DISCUSS?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] tracking-tight">
                Have a Project in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Tell us about your property, technical requirements or maintenance needs. Our team is ready to discuss the right solution for your project.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fbb03b] hover:bg-[#e59e2f] text-[#0a2540] font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0a2540] border border-slate-300 font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
