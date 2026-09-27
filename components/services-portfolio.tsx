"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Zap,
  Hammer,
  ShieldCheck,
  Wind,
  Waves,
  Droplet,
  Compass,
  Sprout,
  Layers,
  Grid,
  Paintbrush,
  Wrench,
  Trees,
  Lightbulb,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Phone,
} from "lucide-react"

// Types
export interface DisciplineCard {
  id: string
  number: string
  title: string
  division: string
  category: "all" | "civil" | "mep" | "pool" | "landscaping" | "maintenance"
  image: string
  icon: React.ComponentType<{ className?: string }>
  badge: string
  description: string
  highlights: string[]
  slug: string
}

// 22 Official Services across Euro Edge's Technical Scope
const disciplinesList: DisciplineCard[] = [
  // 1. Civil & Finishing (5 Services)
  {
    id: "painting-interior-exterior",
    number: "01",
    title: "Painting – Interior & Exterior",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/painting-contracting.jpg",
    icon: Paintbrush,
    badge: "Jotun Certified",
    description:
      "Professional interior decorative and exterior protective coatings utilizing premium Jotun and Caparol elastomeric paints engineered for UAE climate resilience.",
    highlights: [
      "Jotashield & Fenomastic certified application",
      "Anti-fungal, washable & crack-bridging coatings",
      "Precision airless spray & artisan roller finishes",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "wall-floor-tiling",
    number: "02",
    title: "Wall & Floor Tiling",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/tiling-works.jpg",
    icon: Grid,
    badge: "Zero Lippage",
    description:
      "Laser-leveled installation of large-format Italian porcelain, natural marble slabs, exterior stone pavers, and waterproof stainproof epoxy joint grouting.",
    highlights: [
      "Large-format porcelain & bookmatched marble",
      "Zero-lippage laser leveling system",
      "Waterproof & stain-resistant epoxy grouting",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "plastering",
    number: "03",
    title: "Plastering",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/plaster-works.jpg",
    icon: Wrench,
    badge: "Structural Grade",
    description:
      "Precision structural blockwork, cementitious wall rendering, floor screeding, and laser-flat skim-coating providing the ideal substrate for luxury finishes.",
    highlights: [
      "Fiber-reinforced screeds with laser level",
      "Mesh-reinforced joints preventing settlement cracks",
      "Ultra-smooth interior skim & render finishes",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "false-ceiling-gypsum-partitions",
    number: "04",
    title: "False Ceiling & Gypsum Partitions",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/false-ceiling.jpg",
    icon: Layers,
    badge: "DCD Fire-Rated",
    description:
      "Dubai Civil Defense compliant fire-rated drywall partitions, moisture-resistant suspended ceilings, acoustic baffling, and concealed shadow-gap LED cove profiles.",
    highlights: [
      "Dubai Civil Defense fire-rated drywall assemblies",
      "Acoustic insulation core for noise dampening",
      "Seamless shadowline & architectural LED coves",
    ],
    slug: "civil-finishing-works",
  },
  {
    id: "carpentry-wood-flooring",
    number: "05",
    title: "Carpentry & Wood Flooring",
    division: "Civil & Finishing",
    category: "civil",
    image: "/images/services/carpentry-flooring.jpg",
    icon: Trees,
    badge: "Master Joinery",
    description:
      "Bespoke architectural joinery, solid timber doors, customized floor-to-ceiling wardrobes, and luxury parquet and herringbone hardwood installations.",
    highlights: [
      "Custom wardrobes with integrated illumination",
      "Luxury parquet & herringbone solid hardwood",
      "Acoustic dampening underlayment systems",
    ],
    slug: "civil-finishing-works",
  },

  // 2. MEP & Technical Works (5 Services)
  {
    id: "electrical-works",
    number: "06",
    title: "Electrical Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/electrical-works.jpg",
    icon: Lightbulb,
    badge: "DEWA Certified",
    description:
      "Distribution board (DB) dressing, three-phase load balancing, certified cabling infrastructure, architectural lighting automation, and DEWA approvals.",
    highlights: [
      "DEWA-certified load calculations & inspections",
      "Neat distribution board dressing & circuit tagging",
      "Smart lighting control (DALI / 0-10V automation)",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "plumbing-sanitary-works",
    number: "07",
    title: "Plumbing & Sanitary Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/plumbing-sanitary.jpg",
    icon: Droplet,
    badge: "Pressure Tested",
    description:
      "PPR/PEX potable water networks, acoustic drainage piping, booster pump sets, central water heaters, and luxury concealed sanitary fixture installations.",
    highlights: [
      "Hydrostatic pipe pressure testing protocols",
      "Automatic booster pumps & multi-stage filtration",
      "Concealed thermostatic mixers & sanitaryware",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "ac-hvac-works",
    number: "08",
    title: "AC & HVAC Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/hvac-systems.jpg",
    icon: Wind,
    badge: "Chilled Water & VRF",
    description:
      "High-efficiency inverter HVAC installations, chilled water fan coil unit (FCU) chemical servicing, air balancing, and smart digital thermostat integrations.",
    highlights: [
      "Chilled water FCU & AHU chemical descaling",
      "Energy-saving VRF/VRV inverter systems",
      "Precision airflow balancing & thermal audits",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "ventilation-air-filtration",
    number: "09",
    title: "Ventilation & Air Filtration",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/mep-services.jpg",
    icon: Wind,
    badge: "Clean Air IAQ",
    description:
      "Fresh air handling units (FAHU), energy recovery ventilators (ERV), galvanized acoustic duct fabrication, and antibacterial UV filtration for indoor air quality.",
    highlights: [
      "FAHU & ERV balanced fresh air networks",
      "GI & pre-insulated ductwork with acoustic lining",
      "Antibacterial UV & HEPA air sanitization",
    ],
    slug: "mep-technical-works",
  },
  {
    id: "electromechanical-works",
    number: "10",
    title: "Electromechanical Works",
    division: "MEP & Technical",
    category: "mep",
    image: "/images/services/mep-technical.jpg",
    icon: Zap,
    badge: "Turnkey Plant",
    description:
      "Comprehensive electromechanical engineering for commercial hubs, industrial facilities, and residential complexes with end-to-end commissioning.",
    highlights: [
      "Motor control centers (MCC) & pump panels",
      "Full electromechanical testing & commissioning",
      "Preventive predictive plant vibration analysis",
    ],
    slug: "mep-technical-works",
  },

  // 3. Swimming Pool Works (5 Services)
  {
    id: "pool-construction",
    number: "11",
    title: "Pool Construction",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/swimming-pool.jpg",
    icon: Waves,
    badge: "Engineered Shell",
    description:
      "Turnkey reinforced concrete shell casting, overflow channels, infinity horizons, and designer pool engineering compliant with Dubai Municipality standards.",
    highlights: [
      "Heavy-duty reinforced concrete casting",
      "Infinity horizon & perimeter overflow gutters",
      "Full Dubai Municipality structural compliance",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "waterproofing",
    number: "12",
    title: "Waterproofing",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/civil-finishing.jpg",
    icon: ShieldCheck,
    badge: "72-Hr Flood Test",
    description:
      "Specialized multi-layer elastomeric and cementitious waterproofing membranes for pools, balance tanks, wet areas, and sub-structures backed by warranty.",
    highlights: [
      "Certified 72-hour hydrostatic flood test protocol",
      "High-elasticity polyurethane & cementitious coatings",
      "Reinforced expansion joints & penetration seals",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-tiling-finishing",
    number: "13",
    title: "Pool Tiling & Finishing",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/swimming-pool-clean.jpg",
    icon: Grid,
    badge: "Designer Glass",
    description:
      "Artisan installation of imported Spanish and Italian glass mosaics, bullnose coping stones, underwater LED lighting, and chemical-proof epoxy grouting.",
    highlights: [
      "Designer Italian & Spanish glass mosaics",
      "Anti-slip natural stone & granite pool copings",
      "Submersible IP68 LED illumination systems",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-equipment-installation",
    number: "14",
    title: "Pool Equipment Installation",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/kitchen-equipment-maintenance.jpg",
    icon: Wrench,
    badge: "Smart Automation",
    description:
      "Variable-speed filtration pumps, high-rate sand filters, automated salt chlorinators, titanium reverse-cycle heat pumps, and remote monitoring controls.",
    highlights: [
      "Energy-saving variable speed pump setups",
      "Titanium heat & chill reverse-cycle pumps",
      "Automated digital pH/ORP dosing controllers",
    ],
    slug: "swimming-pool-works",
  },
  {
    id: "pool-maintenance",
    number: "15",
    title: "Pool Maintenance",
    division: "Swimming Pools",
    category: "pool",
    image: "/images/services/swimming-pool-clean.jpg",
    icon: Droplet,
    badge: "Crystal Clear",
    description:
      "Scheduled chemical water balancing, vacuuming, filter backwashing, algae preventative treatments, and comprehensive plant room health inspections.",
    highlights: [
      "Bi-weekly laboratory water balancing (pH & Cl)",
      "Bottom vacuuming & surface skimming",
      "Plant room pump & seal preventive checkups",
    ],
    slug: "swimming-pool-works",
  },

  // 4. Landscaping Works (5 Services)
  {
    id: "soft-hard-landscaping",
    number: "16",
    title: "Soft & Hard Landscaping",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping.jpg",
    icon: Compass,
    badge: "Architectural Living",
    description:
      "Harmonious exterior transformations combining drought-resilient flora, mature date palms, natural stone walkways, decorative pergolas, and ambient lighting.",
    highlights: [
      "Desert-adapted horticulture & turfing",
      "Custom timber & aluminium pergolas",
      "Architectural low-voltage exterior lighting",
    ],
    slug: "landscaping-works",
  },
  {
    id: "paving-interlock",
    number: "17",
    title: "Paving & Interlock",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/fit-out-renovation.jpg",
    icon: Layers,
    badge: "Heavy Duty",
    description:
      "Heavy-duty concrete interlock block paving for villa driveways, commercial walkways, pedestrian plazas, and natural travertine terrace patios.",
    highlights: [
      "Laser-leveled sand screed & sub-base compaction",
      "Heavy vehicle load interlock installations",
      "Natural granite, flagstone & travertine paving",
    ],
    slug: "landscaping-works",
  },
  {
    id: "irrigation",
    number: "18",
    title: "Irrigation",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping-hedge.jpg",
    icon: Sprout,
    badge: "Smart Water Saver",
    description:
      "Computerized weather-sensing drip networks and pop-up rotor sprinklers designed to sustain lush gardens while reducing water usage by up to 40%.",
    highlights: [
      "Automated weather-responsive smart controllers",
      "Pressure-compensating root-zone drip lines",
      "Zoned solenoid valve manifold assemblies",
    ],
    slug: "landscaping-works",
  },
  {
    id: "garden-outdoor-works",
    number: "19",
    title: "Garden & Outdoor Works",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping.jpg",
    icon: Trees,
    badge: "Outdoor Leisure",
    description:
      "Bespoke outdoor kitchens, built-in masonry BBQ stations, soothing water fountains, decorative boundary wall cladding, and composite deck platforms.",
    highlights: [
      "Custom stainless steel BBQ islands & sinks",
      "Architectural water features & pond cascades",
      "Weather-resistant composite & hardwood decks",
    ],
    slug: "landscaping-works",
  },
  {
    id: "landscape-maintenance",
    number: "20",
    title: "Landscape Maintenance",
    division: "Landscaping Works",
    category: "landscaping",
    image: "/images/services/landscaping-hedge.jpg",
    icon: Sprout,
    badge: "Year-Round Care",
    description:
      "Dedicated horticultural maintenance contracts covering precision lawn mowing, tree pruning, soil fertilization, organic pest management, and valve audits.",
    highlights: [
      "Scheduled lawn mowing, edging & aeration",
      "Palm frond pruning & pest management",
      "Routine irrigation line pressure & leak audits",
    ],
    slug: "landscaping-works",
  },

  // 5. General Maintenance (2 Services)
  {
    id: "building-villa-maintenance",
    number: "21",
    title: "Building & Villa Maintenance",
    division: "General Maintenance",
    category: "maintenance",
    image: "/images/services/building-maintenance.jpg",
    icon: ShieldCheck,
    badge: "Annual AMC",
    description:
      "Comprehensive Annual Maintenance Contracts (AMC) engineered to protect asset value, ensure uninterrupted MEP performance, and provide 24/7 hotline care.",
    highlights: [
      "Guaranteed priority SLA response times",
      "Scheduled quarterly multi-point MEP audits",
      "Comprehensive digital asset logging & reports",
    ],
    slug: "general-maintenance-amc",
  },
  {
    id: "renovation-repair-works",
    number: "22",
    title: "Renovation & Repair Works",
    division: "General Maintenance",
    category: "maintenance",
    image: "/images/services/technical-support.jpg",
    icon: Clock,
    badge: "Rapid Turnkey",
    description:
      "Rapid-turnaround turnkey renovations, bathroom & kitchen updates, structural wall crack repairs, and 24/7 emergency troubleshooting for unexpected breakdowns.",
    highlights: [
      "Dedicated 24/7 emergency troubleshooting dispatch",
      "Turnkey kitchen & bathroom modernization",
      "Fast-track mobilization & permanent defect repair",
    ],
    slug: "general-maintenance-amc",
  },
]



export function ServicesPortfolio() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "civil" | "mep" | "pool" | "landscaping" | "maintenance"
  >("all")
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null)

  const filteredDisciplines =
    activeCategory === "all"
      ? disciplinesList
      : disciplinesList.filter((item) => item.category === activeCategory)

  const handleCardClick = (id: string) => {
    // Allows tap-to-flip on mobile devices
    setFlippedCardId(flippedCardId === id ? null : id)
  }

  return (
    <div className="w-full bg-background text-foreground">
      {/* =========================================
          1. ARCHITECTURAL HERO (Exact Warm Parchment Style from User Image)
          Font: Cormorant Garamond (500, -0.02em) + Inter (400 / 600)
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 via-slate-50 to-white pt-12 sm:pt-16 pb-12 lg:pb-16 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clean Brand Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow / Label: Inter 600, Letter-spacing 0.18em */}
              <div className="flex items-center gap-3">
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] text-[#0066cc] tracking-[0.18em] uppercase font-semibold">
                  OUR SERVICES
                </span>
              </div>

              {/* H1 / Display: Cormorant Garamond 500, Letter-spacing -0.02em */}
              <h1 className="font-editorial-h1 text-[clamp(2.4rem,4.6vw,4rem)] text-[#0a2540] font-medium leading-[1.02] tracking-[-0.02em]">
                Built With Precision.
                <span className="block">Delivered Under One Team.</span>
              </h1>

              {/* Action Buttons: Clean Navy & White Architectural Styling */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#capabilities"
                  className="font-editorial-nav inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0a2540] text-white text-xs uppercase tracking-wider hover:bg-[#0066cc] transition-colors shadow-sm"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4 text-[#fbb03b]" />
                </a>

                <Link
                  href="/contact"
                  className="font-editorial-nav inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 bg-white text-[#0a2540] text-xs uppercase tracking-wider hover:border-[#0a2540] hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  Request a Site Visit
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Hero Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 lg:h-[23rem] rounded-[1.75rem] lg:rounded-tl-[8rem] lg:rounded-br-[5rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <Image
                  src="/images/services/civil-finishing.jpg"
                  alt="Euro Edge Technical Services Engineers Reviewing Modern Interior Finishes Dubai"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Floating Verified Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0a2540] text-[#fbb03b]">
                      <FileCheck className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="font-editorial-eyebrow text-[11px] font-bold text-[#0a2540] uppercase tracking-wide">
                        100% Dubai Compliant
                      </div>
                      <div className="font-editorial-body text-[11px] text-slate-600">
                        DEWA, Dubai Municipality &amp; Civil Defense
                      </div>
                    </div>
                  </div>
                  <span className="font-editorial-eyebrow text-[10px] font-semibold text-[#0066cc] bg-[#0066cc]/10 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* =========================================
          3. MAIN CAPABILITIES SECTION WITH 3D FLIP CARDS
          Font: Cormorant Garamond H2 (500) + Inter
      ========================================= */}
      <section id="capabilities" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] tracking-[0.18em] text-[#0066cc] uppercase block font-semibold">
              WHAT WE DELIVER
            </span>
            <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0a2540] tracking-tight">
              Capabilities, end to end.
            </h2>
            <p className="font-editorial-body text-sm sm:text-base text-slate-600 leading-relaxed">
              A comprehensive range of MEP, maintenance, fabrication, HVAC, swimming pool, and fit-out services for residential, commercial, and industrial clients across the UAE.
            </p>
          </div>

          {/* Filter Pills (All + 5 Core Categories) */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { id: "all", label: "All Disciplines", count: 22 },
              { id: "civil", label: "Civil & Finishing", count: 5 },
              { id: "mep", label: "MEP & Technical", count: 5 },
              { id: "pool", label: "Swimming Pools", count: 5 },
              { id: "landscaping", label: "Landscaping Works", count: 5 },
              { id: "maintenance", label: "Maintenance & AMC", count: 2 },
            ].map((tab) => {
              const isActive = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`font-editorial-nav inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0a2540] text-white shadow-sm font-semibold"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 font-medium"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-white text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Interactive 3D Flip Card Grid */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredDisciplines.map((item) => {
              const IconComponent = item.icon
              const isManuallyFlipped = flippedCardId === item.id

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className="group block h-[22rem] sm:h-[23rem] perspective-1600 cursor-pointer select-none"
                  aria-label={`${item.title} — click or hover to view technical scope`}
                >
                  <div
                    className={`relative h-full w-full transform-style-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-y-180 group-focus-visible:rotate-y-180 ${
                      isManuallyFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* =========================================
                        FRONT FACE (Image + Dark Vignette + Title)
                        Strictly NO image zoom/scale distortion
                    ========================================= */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 shadow-md backface-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={`${item.title} - Euro Edge Technical Services Dubai`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Gradient Vignette for strong text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/95 via-[#0a2540]/30 to-black/35" />

                      {/* Bottom: ONLY Service Title */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="font-editorial-h2 text-xl sm:text-2xl text-white font-medium leading-snug drop-shadow-md">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* =========================================
                        BACK FACE (Detailed Technical Scope + Single Enquire Now Button)
                        Styling: Logo Metallic Light Gray (#f1f5f9 / #e2e8f0)
                        Rotated 180 degrees
                    ========================================= */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-slate-300/80 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-6 text-[#0a2540] backface-hidden rotate-y-180 shadow-xl">
                      {/* Top Header on Back */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#0066cc] shadow-xs">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="font-editorial-eyebrow text-[10px] font-semibold tracking-wider uppercase text-[#0a2540] bg-white/90 border border-slate-300 px-2.5 py-1 rounded-md shadow-2xs">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="mt-4 font-editorial-h2 text-xl font-medium text-[#0a2540]">
                          {item.title}
                        </h3>

                        <p className="font-editorial-body mt-2 text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="mt-4 space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0066cc] shrink-0 mt-0.5" />
                              <span className="font-editorial-body leading-tight font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Button on Back: Clean full-width Enquire Now button linking directly to Contact */}
                      <div className="pt-4 border-t border-slate-200">
                        <Link
                          href={`/contact?service=${encodeURIComponent(item.title)}`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-editorial-eyebrow w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#fbb03b] text-[#0a2540] font-semibold text-xs uppercase tracking-wider hover:bg-[#0a2540] hover:text-white transition-colors group/btn shadow-sm"
                        >
                          Enquire Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          4. DUBAI ENGINEERING DESK — TURNKEY PROPOSAL
          Font: Cormorant Garamond H1 (500) + Inter
      ========================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a2540] text-white shadow-2xl border border-[#fbb03b]/30">
            {/* Ambient luxury lighting effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(251,176,59,0.18)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(0,102,204,0.25)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Headline, Copy, Action Buttons */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Eyebrow Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#fbb03b]/40">
                    <span className="w-2 h-2 rounded-full bg-[#fbb03b] animate-pulse" />
                    <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#fbb03b] tracking-[0.18em] uppercase">
                      Dubai Engineering Desk
                    </span>
                  </div>

                  {/* Main Editorial Headline */}
                  <h2 className="font-editorial-h1 text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15]">
                    Need a Customized <br className="hidden sm:inline" />
                    <span className="text-[#fbb03b] italic">Turnkey Proposal?</span>
                  </h2>

                  {/* Description */}
                  <p className="font-editorial-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Our chartered engineering team conducts complimentary site visits across Dubai to assess MEP capacity, civil specifications, and prepare itemized bills of quantities (BOQ).
                  </p>

                  {/* Trust Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbb03b] shrink-0" />
                      <span>Complimentary Dubai-Wide Site Survey</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbb03b] shrink-0" />
                      <span>DEWA, DM & DCD Code Compliance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbb03b] shrink-0" />
                      <span>Itemized BOQ & Transparent Pricing</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbb03b] shrink-0" />
                      <span>Guaranteed 48-Hour SLA Response</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      href="/contact"
                      className="font-editorial-eyebrow inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#fbb03b] text-[#0a2540] font-semibold text-xs uppercase tracking-[0.14em] hover:bg-white hover:text-[#0a2540] transition-all duration-300 shadow-lg shadow-[#fbb03b]/20 group"
                    >
                      <span>Schedule Site Visit</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="tel:+971543909946"
                      className="font-editorial-eyebrow inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors text-xs font-semibold uppercase tracking-[0.14em]"
                    >
                      <Phone className="w-4 h-4 text-[#fbb03b]" />
                      <span>Direct: +971 54 390 9946</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Engineering Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 border border-white/15 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="font-editorial-eyebrow text-[10px] text-[#fbb03b] uppercase tracking-wider block">
                          Technical Assessment Protocol
                        </span>
                        <h4 className="font-editorial-h2 text-lg text-white font-medium">
                          Turnkey Site Audit
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#fbb03b]/10 border border-[#fbb03b]/30 flex items-center justify-center text-[#fbb03b]">
                        <FileCheck className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#fbb03b]/20 text-[#fbb03b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Physical Site Inspection</p>
                          <p className="text-xs text-slate-400">Civil scope, dimensions, structural integrity, and MEP load analysis.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#fbb03b]/20 text-[#fbb03b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Regulatory & Authority Review</p>
                          <p className="text-xs text-slate-400">DEWA, Civil Defense, and Dubai Municipality feasibility checks.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#fbb03b]/20 text-[#fbb03b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Itemized BOQ Submission</p>
                          <p className="text-xs text-slate-400">Transparent line-item material specs, labor rates, and milestone timelines.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-editorial-eyebrow uppercase tracking-wider text-[10px]">
                        Coverage: Dubai & Northern Emirates
                      </span>
                      <span className="text-[#fbb03b] font-medium">Zero Obligation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
