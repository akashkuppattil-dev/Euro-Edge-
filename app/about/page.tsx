import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { AboutScrollAnimations } from "@/components/about-scroll-animations"
import {
  ShieldCheck,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Hammer,
  Zap,
  Waves,
  Sprout,
  Settings,
  Award,
  Building2,
  MapPin,
  MessageSquare,
  FileSpreadsheet,
  Cog,
  Headphones,
  Phone,
  Clock,
  ChevronRight,
  ChevronLeft,
  HardHat,
  FileText,
} from "lucide-react"

export const metadata = {
  title: "About Us | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Building better spaces for a brighter tomorrow. Euro Edge Technical Services L.L.C. delivers certified civil, MEP, swimming pool, landscaping, and maintenance contracting in Dubai and across the UAE.",
  alternates: {
    canonical: "https://euroedgets.com/about",
  },
  openGraph: {
    title: "About Us | Euro Edge Technical Services L.L.C.",
    description:
      "Building better spaces for a brighter tomorrow. Certified civil, MEP, swimming pool, landscaping, and maintenance contracting across Dubai and the UAE.",
    type: "website",
    url: "https://euroedgets.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Euro Edge Technical Services L.L.C.",
    description:
      "Building better spaces for a brighter tomorrow. Certified civil, MEP, swimming pool, landscaping, and maintenance contracting across Dubai and the UAE.",
  },
}

export default function AboutPage() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen overflow-x-clip">
      <Header />
      <AboutScrollAnimations />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Exact Match to User Reference Mockup)
      ========================================================================= */}
      <section data-section="about-hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="container-wide max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <span data-anim="about-hero-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                ABOUT EURO EDGE
              </span>

              <h1 data-anim="about-hero-heading" className="font-editorial-h1 text-4xl sm:text-5xl lg:text-[3.8rem] text-[#0a2540] font-medium leading-[1.06] tracking-tight">
                Building Better Spaces for a{" "}
                <span className="text-[#c8924b] block sm:inline font-normal">
                  Brighter Tomorrow.
                </span>
              </h1>

              <p data-anim="about-hero-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Euro Edge Technical Services L.L.C. is a Dubai-based technical
                services company delivering high-quality civil, MEP, maintenance
                and specialist solutions for residential, commercial and
                industrial spaces across the UAE.
              </p>

              {/* 3 Core Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div data-anim="about-hero-badge" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Quality Workmanship
                    </h4>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      Built to Last
                    </p>
                  </div>
                </div>

                <div data-anim="about-hero-badge" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Reliable &amp; Professional
                    </h4>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      Technical Team
                    </p>
                  </div>
                </div>

                <div data-anim="about-hero-badge" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-editorial-nav text-xs font-semibold text-[#0a2540] leading-snug">
                      Serving All
                    </h4>
                    <p className="font-editorial-body text-[11px] text-slate-500">
                      7 Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image with Floating Quality Badge */}
            <div className="lg:col-span-6 relative">
              <div data-anim="about-hero-image" className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/about-hero-engineer.jpg"
                  alt="Euro Edge Technical Engineer Reviewing Construction Blueprint Dubai"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Quality Card */}
                <div data-anim="about-hero-float" className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#0a2540]/95 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 max-w-[210px] text-left">
                  <span className="font-editorial-eyebrow text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 block leading-tight">
                    Licensed Technical Contractor
                  </span>
                  <div className="font-editorial-h1 text-4xl sm:text-5xl font-medium text-[#fbb03b] my-1">
                    100%
                  </div>
                  <span className="font-editorial-body text-xs text-slate-300 block">
                    Certified In-House Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Engineering Excellence with a People-First Approach)
      ========================================================================= */}
      <section data-section="who-we-are" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white border-b border-slate-200">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Collage Layout */}
          <div data-anim="who-images" className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Main Top/Left Team Photo */}
              <div className="col-span-8 relative">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/images/about-team-inspection.jpg"
                    alt="Euro Edge Engineering Team Site Review Dubai"
                    fill
                    className="object-cover object-center"
                    sizes="40vw"
                  />
                </div>

                {/* Floating "From Concept to Completion" Card */}
                <div className="absolute -bottom-8 left-4 right-4 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-editorial-h2 text-sm sm:text-base font-medium text-[#0a2540] leading-tight">
                      From Concept to Completion
                    </h4>
                    <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                      Reliable technical solutions for every space.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-9 h-9 rounded-full bg-[#c8924b] text-white flex items-center justify-center shrink-0 hover:bg-[#0a2540] transition-colors shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Vertical Burj Sunset Image on Right */}
              <div className="col-span-4 relative mt-12 sm:mt-16">
                <div className="relative h-64 sm:h-84 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/images/about-burj-sunset.jpg"
                    alt="Burj Khalifa Dubai Sunset Architecture"
                    fill
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span data-anim="who-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                WHO WE ARE
              </span>
              <h2 data-anim="who-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                Engineering Excellence with a People-First Approach
              </h2>
            </div>

            <p data-anim="who-desc" className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              At Euro Edge, we combine technical expertise, practical experience
              and a commitment to quality to deliver spaces that are
              functional, beautiful and built for the future. Our
              multidisciplinary team works closely with clients, consultants and
              facility owners to ensure every project exceeds expectations.
            </p>

            {/* Checklist with Golden Checks */}
            <div className="space-y-3 pt-1">
              {[
                "Experienced and skilled technical team",
                "Quality materials and proven methods",
                "On-time project delivery",
                "Solutions tailored to your requirements",
              ].map((item, idx) => (
                <div key={idx} data-anim="who-list-item" className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-editorial-body text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill CTA Button */}
            <div data-anim="who-cta" className="pt-3">
              <Link
                href="/services"
                className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
              >
                <span>More About Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MISSION & VISION (Side-by-side Horizontal Cards)
      ========================================================================= */}
      <section data-section="mission-vision" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <div data-anim="mv-card" className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-[#0066cc]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-editorial-eyebrow text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0a2540]">
                OUR MISSION
              </h3>
              <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver reliable, high-quality technical services that enhance
                the value, safety and functionality of every space we work on,
                while building long-term relationships with our clients across the
                UAE.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div data-anim="mv-card" className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-[#0a2540] flex items-center justify-center shrink-0">
              <Eye className="w-6 h-6 text-[#c8924b]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-editorial-eyebrow text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0a2540]">
                OUR VISION
              </h3>
              <p className="font-editorial-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be a trusted and preferred technical services partner in the
                UAE, recognized for our quality, integrity, innovation and
                commitment to creating better spaces for communities and
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FIVE SPECIALIZED DIVISIONS (5 Cards in a Row)
      ========================================================================= */}
      <section data-section="divisions" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white border-b border-slate-200">
        <div className="container-wide max-w-[1800px] mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span data-anim="divisions-label" className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              OUR EXPERTISE
            </span>
            <h2 data-anim="divisions-heading" className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-bold tracking-tight">
              Five Specialized Divisions
            </h2>
            <p data-anim="divisions-desc" className="font-editorial-body text-sm sm:text-base text-slate-600 leading-relaxed">
              We offer a complete range of technical services, allowing us to
              support your project from initial works to ongoing maintenance —
              all under one team.
            </p>
          </div>

          {/* 5 Cards Grid matching reference design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {[
              {
                id: "facility",
                title: "Facility Management",
                image: "/images/services/facility-management.jpg",
                slug: "general-maintenance-amc",
              },
              {
                id: "fitout",
                title: "Fit-Out & Renovation",
                image: "/images/services/fit-out-renovation.jpg",
                slug: "civil-finishing-works",
              },
              {
                id: "mep",
                title: "MEP & HVAC Systems",
                image: "/images/services/mep-technical.jpg",
                slug: "mep-technical-works",
              },
              {
                id: "civil",
                title: "Civil Maintenance",
                image: "/images/services/civil-maintenance.jpg",
                slug: "civil-finishing-works",
              },
              {
                id: "pool-landscaping",
                title: "Pool & Landscaping",
                image: "/images/services/swimming-pool.jpg",
                slug: "swimming-pool-works",
              },
            ].map((division) => (
              <Link
                key={division.id}
                href={`/services/${division.slug}`}
                data-anim="divisions-card"
                className="group relative h-[340px] sm:h-[380px] lg:h-[420px] rounded-2xl sm:rounded-[26px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-6 border border-slate-200/60 block hover:-translate-y-1"
              >
                {/* Full Card Background Image */}
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                {/* Dark Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-colors" />

                {/* Card Content at bottom: Service Name and Button Only */}
                <div className="relative z-10 space-y-3">
                  {/* Service Name */}
                  <h3 className="font-editorial-h2 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#fbb03b] transition-colors">
                    {division.title}
                  </h3>

                  {/* Button */}
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 group-hover:bg-[#0a2540] border border-white/25 group-hover:border-[#fbb03b] text-white text-xs font-semibold backdrop-blur-sm transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#fbb03b]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div data-anim="divisions-cta" className="text-center pt-4">
            <Link
              href="/services"
              className="font-editorial-nav inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR IMPACT (Dark Blue Strip with 4 Metrics)
      ========================================================================= */}
      <section data-section="impact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#071a2e] text-white">
        <div className="container-wide max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div data-anim="impact-heading" className="lg:col-span-4 space-y-1.5">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#fbb03b] tracking-[0.2em] uppercase block">
                OUR IMPACT
              </span>
              <h2 className="font-editorial-h1 text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight tracking-tight">
                Numbers That <br className="hidden sm:inline" />
                Reflect Our Commitment
              </h2>
            </div>

            {/* Right 4 Stats */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <ShieldCheck className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  100%
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Certified In-House Team
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <Building2 className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  5
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Specialized Divisions
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  24/7
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Dedicated Support &amp; SLA
                </div>
              </div>

              <div data-anim="impact-metric" className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-6 h-6 text-[#fbb03b]" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-medium text-white">
                  7
                </div>
                <div className="font-editorial-body text-xs text-slate-300">
                  Emirates Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR WORK PROCESS - A SIMPLE & RELIABLE PROCESS (TIMELINE FLOW)
      ========================================================================= */}
      <section data-section="work-process" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#fbfcfe] border-b border-slate-200/80">
        <div className="relative z-10 container-wide max-w-[1800px] mx-auto space-y-12 sm:space-y-16">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-xl">
              <div data-anim="process-label" className="flex items-center gap-3">
                <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase">
                  OUR WORK PROCESS
                </span>
                <span className="w-8 h-[2px] bg-[#fbb03b] inline-block" />
              </div>
              <h2 data-anim="process-heading" className="font-editorial-h2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight">
                A Simple &amp; Reliable Process
              </h2>
              <p data-anim="process-desc" className="font-editorial-body text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed pt-1">
                We follow a clear and structured process to ensure every project is
                delivered smoothly, on time and to the highest standards.
              </p>
            </div>

            {/* Top-Right Commitment Badge */}
            <div data-anim="process-commitment" className="flex items-center gap-4">
              <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0a2540] leading-snug">
                    Our Commitment
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 leading-tight max-w-[220px]">
                    Clear communication, professional execution and reliable support at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline Flow */}
          <div className="relative">
            {/* Smooth Connecting Line SVG (Visible on lg+ desktop view) */}
            <div className="hidden lg:block absolute top-[88px] xl:top-[96px] left-0 right-0 w-full h-[60px] pointer-events-none z-0">
              <svg
                viewBox="0 0 1000 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Curve 1 -> 2 (Blue) */}
                <path
                  d="M 195 24 C 235 44, 265 44, 305 24"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Curve 2 -> 3 (Amber/Gold with central node) */}
                <path
                  d="M 445 24 C 475 42, 490 42, 500 42 C 510 42, 525 42, 555 24"
                  stroke="#fbb03b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="500" cy="42" r="4.5" fill="#fbb03b" />
                {/* Curve 3 -> 4 (Amber/Gold) */}
                <path
                  d="M 695 24 C 735 44, 765 44, 805 24"
                  stroke="#fbb03b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 4 Process Step Circular Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "We discuss your requirements and site conditions to understand your goals clearly.",
                  image: "/images/process/process-01-square.jpg",
                  icon: MessageSquare,
                  accentColor: "blue",
                },
                {
                  step: "02",
                  title: "Plan",
                  desc: "We evaluate the scope and site details, then propose the best solution with a clear timeline.",
                  image: "/images/process/process-02-square.jpg",
                  icon: FileText,
                  accentColor: "blue",
                },
                {
                  step: "03",
                  title: "Execute",
                  desc: "Our team carries out the work with quality materials, safety and attention to detail.",
                  image: "/images/process/process-03-square.jpg",
                  icon: Cog,
                  accentColor: "gold",
                },
                {
                  step: "04",
                  title: "Support",
                  desc: "We remain available for ongoing support, maintenance and future requirements.",
                  image: "/images/process/process-04-square.jpg",
                  icon: Headphones,
                  accentColor: "blue",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  data-anim="process-step"
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Image Node with Floating Badges */}
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 lg:w-48 lg:h-48 xl:w-52 xl:h-52">
                    {/* Ring Halo Container */}
                    <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-br from-white via-slate-100 to-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-200/70 transition-transform duration-500 group-hover:scale-105">
                      <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-100">
                        <Image
                          src={p.image}
                          alt={`${p.step} - ${p.title}`}
                          fill
                          sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>

                    {/* Step Number Badge (Bottom-Left) */}
                    <div className="absolute -bottom-1 left-2 sm:bottom-0 sm:left-2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0a2540] font-serif font-bold text-sm sm:text-base flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-slate-100 transition-transform group-hover:scale-110">
                      {p.step}
                    </div>

                    {/* Category Icon Badge (Top-Right) */}
                    <div className="absolute -top-1 right-2 sm:top-0 sm:right-2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0066cc] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-slate-100 transition-transform group-hover:scale-110">
                      <p.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Below Circle */}
                  <div className="space-y-2 mt-5 sm:mt-6">
                    <h3 className="font-editorial-h2 font-serif text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight group-hover:text-[#0066cc] transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-editorial-body text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                      {p.desc}
                    </p>
                  </div>

                  {/* Bottom Circular Chevron Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mt-4 transition-all duration-300 shadow-2xs ${
                      p.accentColor === "gold"
                        ? "bg-amber-50 text-amber-600 border border-amber-200/80 group-hover:bg-[#fbb03b] group-hover:text-[#0a2540]"
                        : "bg-blue-50 text-[#0066cc] border border-blue-200/70 group-hover:bg-[#0066cc] group-hover:text-white"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: READY TO GET STARTED? (Sunset Skyline Banner)
      ========================================================================= */}
      <section data-section="about-cta" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white">
        {/* Background Dubai Sunset Skyline Image */}
        <div data-anim="about-cta-bg" className="absolute inset-0 z-0">
          <Image
            src="/images/about-bottom-banner.jpg"
            alt="Dubai Skyline Sunset Burj Khalifa Silhouette"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
          />
          {/* Deep Navy/Black Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/95 via-[#071a2e]/85 to-[#071a2e]/70" />
        </div>

        <div data-anim="about-cta-content" className="relative z-10 container-wide max-w-[1800px] mx-auto space-y-6">
          <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#fbb03b] tracking-[0.2em] uppercase block">
            READY TO GET STARTED?
          </span>

          <h2 className="font-editorial-h1 text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight max-w-2xl">
            Let&apos;s Build Something Great Together
          </h2>

          <p className="font-editorial-body text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Talk to our team today and get the right technical solution for your
            project.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="font-editorial-nav inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg group"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+971543909946"
              className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#fbb03b]" />
              <span>+971 54 390 9946</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
