"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Headphones,
  Wrench,
  Building2,
  Hammer,
  Cog,
  Home as HomeIcon,
  Building,
  Factory,
  Utensils,
  Layers,
  MessageSquare,
  Sparkles,
  Plus,
  Minus,
  HelpCircle,
  Phone,
} from "lucide-react"

export interface ProjectScope {
  id: number
  title: string
  categoryLabel: string
  filterCategory: "RESIDENTIAL" | "COMMERCIAL" | "FACILITY MANAGEMENT" | "HOSPITALITY" | "INDUSTRIAL"
  location: string
  estimatedTimeline: string
  image: string
  services: string[]
  description: string
  technicalHighlights: string[]
}

const exampleScopes: ProjectScope[] = [
  {
    id: 1,
    title: "Residential Villa MEP & Fit-Out Scope",
    categoryLabel: "RESIDENTIAL",
    filterCategory: "RESIDENTIAL",
    location: "Dubai, UAE",
    estimatedTimeline: "4 – 6 Weeks",
    image: "/images/hero/hero-option-2.png",
    services: ["HVAC SERVICES", "ELECTRICAL", "PLUMBING", "FIT-OUT WORKS"],
    description:
      "Turnkey MEP services for luxury residential villas. Complete system servicing, AC duct cleaning, interior and lighting installation, power distribution works and plumbing & sanitary upgrades.",
    technicalHighlights: [
      "HVAC system servicing & AC duct cleaning",
      "Electrical distribution inspection & upgrades",
      "Plumbing & sanitary installation & upgrades",
      "Interior fit-out & lighting works",
    ],
  },
  {
    id: 2,
    title: "Corporate Office Fit-Out & MEP Integration Scope",
    categoryLabel: "COMMERCIAL",
    filterCategory: "COMMERCIAL",
    location: "Dubai, UAE",
    estimatedTimeline: "30 – 45 Days",
    image: "/images/services/mep-services.jpg",
    services: ["MEP INTEGRATION", "ELECTRICAL", "LIGHTING"],
    description:
      "Comprehensive fit-out for corporate offices including MEP integration, lighting, electrical works, data systems and interior upgrades.",
    technicalHighlights: [
      "Frameless double-glazed glass partition assembly",
      "Low-power LED architectural grid lighting installation",
      "FCU motor servicing & thermostat calibration",
    ],
  },
  {
    id: 3,
    title: "Commercial High-Rise Annual Facility Maintenance Scope",
    categoryLabel: "COMMERCIAL",
    filterCategory: "COMMERCIAL",
    location: "Dubai, UAE",
    estimatedTimeline: "Annual Contract",
    image: "/images/services/building-maintenance.jpg",
    services: ["FACILITY MANAGEMENT", "HVAC", "MAINTENANCE"],
    description:
      "Annual maintenance for commercial towers including HVAC servicing, facade cleaning, MEP systems, lighting, and civil maintenance.",
    technicalHighlights: [
      "Predictive preventive maintenance schedule (PPM)",
      "24/7 rapid emergency callout team dispatch",
      "Full building automation system (BMS) monitoring",
    ],
  },
  {
    id: 4,
    title: "Resort Swimming Pool & Commercial Kitchen Scope",
    categoryLabel: "HOSPITALITY",
    filterCategory: "HOSPITALITY",
    location: "Dubai, UAE",
    estimatedTimeline: "3 – 4 Weeks",
    image: "/images/services/swimming-pool.jpg",
    services: ["POOL MAINTENANCE", "KITCHEN EQUIPMENT", "PLUMBING"],
    description:
      "Complete solution for resort swimming pools and F&B outlets including equipment servicing, plumbing, and commercial kitchen works.",
    technicalHighlights: [
      "Daily chemical water testing & filtration pump overhaul",
      "High-grade stainless steel kitchen exhaust ducting",
      "Submersible pump & heater/chiller maintenance",
    ],
  },
  {
    id: 5,
    title: "Industrial Logistics Warehouse Power & Floor Upgrade Scope",
    categoryLabel: "INDUSTRIAL",
    filterCategory: "INDUSTRIAL",
    location: "Dubai, UAE",
    estimatedTimeline: "3 – 4 Weeks",
    image: "/images/services/industrial-maintenance.jpg",
    services: ["ELECTRICAL", "POWER SYSTEMS", "FLOORING"],
    description:
      "Heavy-duty electrical upgrades, power distribution, floor epoxy works, and warehouse infrastructure improvements.",
    technicalHighlights: [
      "Industrial high-voltage DB panel & circuit breaker fitting",
      "Heavy-duty industrial exhaust & ventilation installation",
      "Abrasion-resistant industrial epoxy floor coating",
    ],
  },
  {
    id: 6,
    title: "Commercial & Residential Facility Management Scope",
    categoryLabel: "FACILITY MANAGEMENT",
    filterCategory: "FACILITY MANAGEMENT",
    location: "Dubai, UAE",
    estimatedTimeline: "Ongoing",
    image: "/images/services/fit-out-renovation.jpg",
    services: ["MAINTENANCE", "SUPPORT", "PREVENTIVE CARE"],
    description:
      "Ongoing facility management for commercial & residential properties including preventive maintenance and technical support.",
    technicalHighlights: [
      "Scheduled preventive MEP inspections",
      "Dedicated account engineer & helpdesk",
      "24/7 emergency dispatch team",
    ],
  },
]

const categories = [
  { label: "All Projects", value: "ALL" },
  { label: "Residential", value: "RESIDENTIAL" },
  { label: "Commercial", value: "COMMERCIAL" },
  { label: "Hospitality", value: "HOSPITALITY" },
  { label: "Industrial", value: "INDUSTRIAL" },
  { label: "Facility Management", value: "FACILITY MANAGEMENT" },
]

const faqsList = [
  {
    q: "What is included in Euro Edge's annual maintenance contract (AMC) for offices & commercial properties?",
    a: "Euro Edge AMCs cover comprehensive preventive and corrective maintenance across MEP systems, HVAC climate control, electrical panels, plumbing fixtures, emergency callouts, and 24/7 technical helpdesk support tailored for commercial towers, villas, and retail sites in Dubai.",
  },
  {
    q: "How fast is Euro Edge's emergency technical support response time in Dubai?",
    a: "Our 24/7 rapid response dispatch teams are stationed across Dubai and aim to arrive on-site within 60 to 90 minutes for emergency callouts regarding power outages, major plumbing leaks, or AC failures.",
  },
  {
    q: "Are your engineers and technicians certified by DEWA & Dubai Municipality?",
    a: "Yes. All Euro Edge engineers, electricians, and technicians hold DEWA, Dubai Municipality, and civil defense compliance certifications, ensuring all technical scopes strictly adhere to UAE safety codes.",
  },
  {
    q: "Can Euro Edge handle custom interior fit-out, civil works and renovation works?",
    a: "Absolutely. We specialize in commercial office fit-outs, luxury villa MEP overhauls, acoustic glass partitions, tile laying, false ceiling installations, and industrial epoxy floor coatings with dedicated project managers.",
  },
]

export function ProjectsPortfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const featuredProject = exampleScopes[0]
  const gridProjects = exampleScopes.slice(1)

  const filteredProjects = activeFilter === "ALL"
    ? gridProjects
    : exampleScopes.filter(p => p.filterCategory === activeFilter)

  return (
    <div className="space-y-16 lg:space-y-20">

      {/* =========================================
          TECHNICAL SOLUTIONS INTRO & CATEGORY FILTER
      ========================================= */}
      <section className="pt-10 pb-4 px-4 lg:px-12 bg-background text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
            OUR EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Technical Solutions Built Around Real Project Requirements
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans max-w-3xl mx-auto">
            Every technical requirement is different. Euro Edge approaches each scope by understanding the site, identifying the technical requirements, coordinating the required trades and executing the work with attention to quality, safety and reliability.
          </p>

          {/* Category Filter Pills (Scrollable Row on Mobile) */}
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 pt-6 overflow-x-auto no-scrollbar max-w-full px-1 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeFilter === cat.value
                    ? "bg-[#0a2540] text-white shadow-sm"
                    : "bg-white text-foreground hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED PROJECT (Shown when ALL or RESIDENTIAL active)
      ========================================= */}
      {(activeFilter === "ALL" || activeFilter === "RESIDENTIAL") && (
        <section className="px-4 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              {/* Left Image */}
              <div className="lg:col-span-6 relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a2540] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  FEATURED PROJECT
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#fbb03b] block">
                    {featuredProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mt-1 group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0a2540]" />
                      {featuredProject.location}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a2540]" />
                      {featuredProject.estimatedTimeline}
                    </span>
                    <span>|</span>
                    <span className="text-[11px] text-muted-foreground/80">Representative Timeline</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {featuredProject.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground block">
                    KEY DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground font-sans">
                    {featuredProject.technicalHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {featuredProject.services.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 border border-slate-200"
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-2"
                  >
                    <span>DISCUSS A SIMILAR PROJECT</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-foreground font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
                  >
                    <span>VIEW SERVICES</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          PROJECT GRID (3 Columns Top, 2 Cards + Special CTA Card Bottom)
      ========================================= */}
      <section className="px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-4 p-5 sm:p-6">
                  {/* Image */}
                  <div className="relative h-[200px] w-full rounded-xl overflow-hidden border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#fbb03b] block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors tracking-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0a2540]" />
                        {item.location}
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#0a2540]" />
                        {item.estimatedTimeline}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-600 border border-slate-200"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>DISCUSS PROJECT</span>
                    <Plus className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* SPECIAL DARK BLUE CTA CARD (6th Card in Grid) */}
            {activeFilter === "ALL" && (
              <div className="rounded-2xl bg-[#0a2540] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md border border-white/10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                    Have a Similar Project Requirement?
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    Our team can help identify the right technical scope and service approach for your project.
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full py-3 px-5 rounded-xl bg-transparent border border-white/30 hover:border-white text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>CONTACT EURO EDGE</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          6. WHY EURO EDGE (Single Row 6 Features)
      ========================================= */}
      <section className="py-14 px-4 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              WHY EURO EDGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              From Technical Scope to Reliable Execution
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 space-y-2 border-r last:border-r-0 border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Quality Workmanship
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Attention to quality in every technical detail.
              </p>
            </div>

            <div className="p-4 space-y-2 border-r last:border-r-0 border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Safety First
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Safety is integrated into our process and execution.
              </p>
            </div>

            <div className="p-4 space-y-2 border-r last:border-r-0 border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Technical Expertise
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Skilled team with strong technical capabilities.
              </p>
            </div>

            <div className="p-4 space-y-2 border-r last:border-r-0 border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Coordinated Execution
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Well-planned, coordinated and on-time delivery.
              </p>
            </div>

            <div className="p-4 space-y-2 border-r last:border-r-0 border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Responsive Support
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                We are available when you need us.
              </p>
            </div>

            <div className="p-4 space-y-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a2540] mx-auto flex items-center justify-center border border-slate-200">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                Customer-Focused Service
              </h3>
              <p className="text-[10px] text-muted-foreground leading-tight">
                We focus on long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. CLIENT EXPERIENCE (Elevated Corporate Standard Cards)
      ========================================= */}
      <section className="py-16 px-4 lg:px-12 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              CLIENT EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Built Around Quality &amp; Customer Confidence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0a2540]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#fbb03b] uppercase tracking-widest block">
                    STANDARD 01
                  </span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Responsive Communication
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Clear communication throughout the service process.
                </p>
              </div>
              <div className="w-full h-1 bg-[#0a2540]/10 group-hover:bg-[#0a2540] transition-colors mt-6 rounded-full" />
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0a2540]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#fbb03b] uppercase tracking-widest block">
                    STANDARD 02
                  </span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Quality-Focused Execution
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Attention to workmanship and technical requirements.
                </p>
              </div>
              <div className="w-full h-1 bg-[#0a2540]/10 group-hover:bg-[#0a2540] transition-colors mt-6 rounded-full" />
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0a2540]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#fbb03b] uppercase tracking-widest block">
                    STANDARD 03
                  </span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Safety Consciousness
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Safety considered throughout planning and execution.
                </p>
              </div>
              <div className="w-full h-1 bg-[#0a2540]/10 group-hover:bg-[#0a2540] transition-colors mt-6 rounded-full" />
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0a2540]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#fbb03b] uppercase tracking-widest block">
                    STANDARD 04
                  </span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Long-Term Support
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Maintenance and technical support beyond the initial requirement.
                </p>
              </div>
              <div className="w-full h-1 bg-[#0a2540]/10 group-hover:bg-[#0a2540] transition-colors mt-6 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. OUR PROJECT CAPABILITY (Structured Sector Matrix)
      ========================================= */}
      <section className="py-16 px-4 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              OUR PROJECT CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Multidisciplinary Engineering Coverage Across UAE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <HomeIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Residential
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Villa MEP, HVAC, electrical, plumbing and fit-out requirements.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Commercial
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Office fit-outs, MEP integration and technical maintenance.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <Utensils className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Hospitality
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Resort, pool, kitchen and guest-facility technical requirements.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Industrial
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Industrial maintenance, electrical systems and facility upgrades.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Facility Management
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Preventive maintenance, technical support and building services.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-l-4 hover:border-l-[#0a2540] hover:shadow-md transition-all duration-300 flex items-start gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center flex-shrink-0">
                <Hammer className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Fit-Out &amp; Renovation
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Interior technical coordination and installation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          9. FREQUENTLY ASKED QUESTIONS ACCORDION
      ========================================= */}
      <section className="py-14 px-4 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#fbb03b] block">
              PROJECT &amp; SERVICE FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
              Find answers to common questions about technical scopes, maintenance requirements and project enquiries.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>VIEW ALL FAQS</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-sans font-bold text-foreground">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-muted-foreground font-sans leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          10. BOTTOM DARK BLUE FOOTER BANNER
      ========================================= */}
      <section className="py-8 px-4 lg:px-12 bg-[#071927] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Ready to Build, Maintain &amp; Improve?
            </h3>
            <p className="text-xs text-white/80 max-w-xl leading-relaxed font-sans">
              Share your project requirements with Euro Edge and our team can help identify the appropriate technical scope and service approach.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:border-white text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>CONTACT EURO EDGE</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
