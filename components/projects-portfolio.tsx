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
  Building,
  Factory,
  Utensils,
  Layers,
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
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
            OUR EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Technical Solutions Built Around Real Project Requirements
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans max-w-5xl mx-auto">
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
          <div className="max-w-[1600px] mx-auto">
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
        <div className="max-w-[1600px] mx-auto">
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

            {/* LIGHT STYLED CTA CARD (6th Card in Grid) */}
            {activeFilter === "ALL" && (
              <div className="rounded-2xl bg-slate-50 text-foreground p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b] block">
                    TAILORED TECHNICAL CONTRACTING
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                    Have a Similar Project Requirement?
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    Our team can help identify the right technical scope and service approach for your project.
                  </p>
                </div>

                {/* Centered Euro Edge Company Logo (Large Size) */}
                <div className="py-2 flex items-center justify-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white p-4 shadow-lg border border-slate-200/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image
                      src="/images/logo.png"
                      alt="Euro Edge Technical Services L.L.C."
                      width={180}
                      height={180}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight className="w-4 h-4 text-[#fbb03b]" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-foreground font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
          6. WHY EURO EDGE (Matching FAQSection Structure)
      ========================================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border relative">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPETITIVE EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              WHY CHOOSE EURO EDGE
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
              We stand out by delivering excellence, reliability, and precision tailored to every client project across Dubai and the UAE.
            </p>
          </div>

          {/* Cards Vertical Stack (One After Another Down by Down) */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {[
              {
                num: "01",
                tag: "Certified Engineers",
                title: "Quality Workmanship",
                desc: "Attention to quality in every technical detail and engineering execution.",
              },
              {
                num: "02",
                tag: "Safety Standard",
                title: "Safety First",
                desc: "Safety is integrated into our site planning, tools, and project execution.",
              },
              {
                num: "03",
                tag: "Skilled Teams",
                title: "Technical Expertise",
                desc: "Skilled certified engineers and technicians with strong capabilities.",
              },
              {
                num: "04",
                tag: "Multi-Trade",
                title: "Coordinated Execution",
                desc: "Well-planned, multi-trade coordination and on-time project delivery.",
              },
              {
                num: "05",
                tag: "24/7 Response",
                title: "Responsive Support",
                desc: "Available 24/7 when you need urgent site technical support in Dubai.",
              },
              {
                num: "06",
                tag: "Client First",
                title: "Customer-Focused Service",
                desc: "Dedicated to building long-term, trusted client relationships.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-muted-foreground/60">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors pt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. FREQUENTLY ASKED QUESTIONS ACCORDION
      ========================================= */}
      <section className="py-8 sm:py-12 lg:py-14 px-4 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          {/* Top Centered Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b] block">
              PROJECT &amp; SERVICE FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed font-sans max-w-4xl mx-auto">
              Find answers to common questions about technical scopes, maintenance requirements and project enquiries.
            </p>
          </div>

          {/* Full-Width Stacked Accordions */}
          <div className="space-y-3 sm:space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#0a2540]/40 shadow-md ring-1 ring-[#0a2540]/10"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-foreground pr-2 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#0a2540] text-white rotate-180"
                          : "bg-slate-100 text-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pt-3 sm:pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>VIEW ALL FAQS &amp; INQUIRE</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          10. BOTTOM DARK BLUE FOOTER BANNER
      ========================================= */}
      <section className="py-8 px-4 lg:px-12 bg-[#071927] text-white">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
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
