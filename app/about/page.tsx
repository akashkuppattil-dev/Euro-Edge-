import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
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
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen">
      <Header />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Exact Match to User Reference Mockup)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#fbf8f3] via-[#f7f3ec] to-[#f0e8dc]/60 pt-12 sm:pt-16 pb-16 lg:pb-24 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                ABOUT EURO EDGE
              </span>

              <h1 className="font-editorial-h1 text-4xl sm:text-5xl lg:text-[3.8rem] text-[#0a2540] font-medium leading-[1.06] tracking-tight">
                Building Better Spaces for a{" "}
                <span className="text-[#c8924b] block sm:inline font-normal">
                  Brighter Tomorrow.
                </span>
              </h1>

              <p className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Euro Edge Technical Services L.L.C. is a Dubai-based technical
                services company delivering high-quality civil, MEP, maintenance
                and specialist solutions for residential, commercial and
                industrial spaces across the UAE.
              </p>

              {/* 3 Core Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/20">
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

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/20">
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

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/20">
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
              <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
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
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#0a2540]/95 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 max-w-[210px] text-left">
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Collage Layout */}
          <div className="lg:col-span-6 relative">
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
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                WHO WE ARE
              </span>
              <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
                Engineering Excellence with a People-First Approach
              </h2>
            </div>

            <p className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
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
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0 border border-[#c8924b]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-editorial-body text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill CTA Button */}
            <div className="pt-3">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
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
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              OUR EXPERTISE
            </span>
            <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight">
              Five Specialized Divisions
            </h2>
            <p className="font-editorial-body text-sm text-slate-600 leading-relaxed">
              We offer a complete range of technical services, allowing us to
              support your project from initial works to ongoing maintenance —
              all under one team.
            </p>
          </div>

          {/* 5 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {[
              {
                id: "civil",
                title: "Civil & Finishing Works",
                desc: "High-quality civil construction, finishing and fit-out solutions for residential and commercial projects.",
                image: "/images/services/civil-finishing.jpg",
                icon: Hammer,
                slug: "civil-finishing-works",
              },
              {
                id: "mep",
                title: "MEP & Technical Works",
                desc: "Complete MEP solutions including electrical, plumbing, HVAC, and related technical works.",
                image: "/images/services/mep-technical.jpg",
                icon: Zap,
                slug: "mep-technical-works",
              },
              {
                id: "pool",
                title: "Swimming Pool Works",
                desc: "Design, construction and maintenance of custom swimming pools and water features.",
                image: "/images/services/swimming-pool.jpg",
                icon: Waves,
                slug: "swimming-pool-works",
              },
              {
                id: "landscaping",
                title: "Landscaping Works",
                desc: "Creative and sustainable landscaping solutions for villas, communities and commercial spaces.",
                image: "/images/services/landscaping.jpg",
                icon: Sprout,
                slug: "landscaping-works",
              },
              {
                id: "maintenance",
                title: "General Maintenance",
                desc: "Comprehensive maintenance services to keep your property safe, functional and well-maintained.",
                image: "/images/services/building-maintenance.jpg",
                icon: Settings,
                slug: "general-maintenance-amc",
              },
            ].map((division) => (
              <div
                key={division.id}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    {/* Floating Circle Icon */}
                    <div className="absolute -bottom-4 left-5 w-9 h-9 rounded-full bg-white border border-slate-200 text-[#0066cc] flex items-center justify-center shadow-md">
                      <division.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pt-7 space-y-2">
                    <h3 className="font-editorial-h2 text-base font-medium text-[#0a2540] group-hover:text-[#0066cc] transition-colors leading-snug">
                      {division.title}
                    </h3>
                    <p className="font-editorial-body text-xs text-slate-500 leading-relaxed">
                      {division.desc}
                    </p>
                  </div>
                </div>

                {/* Explore Link at bottom */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/services/${division.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066cc] hover:text-[#0a2540] transition-colors group-hover:underline"
                  >
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR IMPACT (Dark Blue Strip with 4 Metrics)
      ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 bg-[#071a2e] text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-4 space-y-1.5">
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
              <div className="space-y-2 text-center sm:text-left">
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

              <div className="space-y-2 text-center sm:text-left">
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

              <div className="space-y-2 text-center sm:text-left">
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

              <div className="space-y-2 text-center sm:text-left">
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
          SECTION 6: OUR WORK PROCESS (A Simple & Reliable Process)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Header (Left Title + Right Description) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div className="space-y-2 max-w-xl">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                OUR WORK PROCESS
              </span>
              <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight">
                A Simple &amp; Reliable Process
              </h2>
            </div>
            <p className="font-editorial-body text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              We follow a clear and structured process to ensure every project is
              delivered smoothly, on time and to the highest standards.
            </p>
          </div>

          {/* 4 Process Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Understand",
                desc: "We discuss your requirements and site conditions.",
              },
              {
                step: "02",
                icon: FileSpreadsheet,
                title: "Plan",
                desc: "We propose the best solution with clear scope and timeline.",
              },
              {
                step: "03",
                icon: Cog,
                title: "Execute",
                desc: "Our team delivers with quality, safety and precision.",
              },
              {
                step: "04",
                icon: Headphones,
                title: "Support",
                desc: "We provide ongoing support and maintenance.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial-h1 text-2xl font-bold text-[#0a2540]">
                    {p.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0066cc] flex items-center justify-center shadow-2xs">
                    <p.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-editorial-h2 text-base sm:text-lg font-medium text-[#0a2540]">
                    {p.title}
                  </h4>
                  <p className="font-editorial-body text-xs text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: READY TO GET STARTED? (Sunset Skyline Banner)
      ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-10 text-white">
        {/* Background Dubai Sunset Skyline Image */}
        <div className="absolute inset-0 z-0">
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

        <div className="relative z-10 max-w-[1440px] mx-auto space-y-6">
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
