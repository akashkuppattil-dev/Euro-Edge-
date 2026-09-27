import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  Hammer,
  Zap,
  Waves,
  Sprout,
  Settings,
  Building2,
  Award,
  Users,
  MapPin,
  Clock,
  Briefcase,
  Compass,
  MessageSquare,
  FileSpreadsheet,
  Cog,
  Headphones,
  Phone,
  Layers,
  HeartHandshake,
} from "lucide-react"

export const metadata = {
  title: "Euro Edge Technical Services L.L.C. | MEP, HVAC & Contracting Dubai",
  description:
    "The Edge of Quality Built on Trust. Euro Edge Technical Services L.L.C. delivers certified civil, MEP, swimming pool, landscaping, and turnkey technical contracting in Dubai and across the UAE.",
  alternates: {
    canonical: "https://euroedgets.com",
  },
  openGraph: {
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional civil, MEP, swimming pool, landscaping, and facilities maintenance in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional civil, MEP, swimming pool, landscaping, and facilities maintenance in Dubai, UAE.",
  },
}

export default function HomePage() {
  return (
    <main className="bg-[#fafbfc] text-[#0a2540] font-sans min-h-screen">
      <Header />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Wallpaper Background with Smiling Engineer)
      ========================================================================= */}
      <section className="relative min-h-[540px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden text-white bg-[#071a2e]">
        {/* Full-width Hero Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/euro-edge-hero-wallpaper.jpg"
            alt="Euro Edge Technical Services Engineer Overlooking Dubai Skyline"
            fill
            priority
            className="object-cover object-[78%_center] sm:object-right"
            sizes="100vw"
          />
          {/* Deep Navy/Black Gradient Overlay on left for crisp readability while preserving the engineer */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04101e]/98 via-[#04101e]/85 to-transparent sm:from-[#04101e]/90 sm:via-[#04101e]/50 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="font-editorial-h1 text-3xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12] sm:leading-[1.08] tracking-tight">
              The Edge of Quality <br />
              Built on <span className="text-[#fbb03b]">Trust.</span>
            </h1>

            {/* Action Buttons: Stacks neatly on mobile, side-by-side on tablet/desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none">
              <Link
                href="/contact"
                className="font-editorial-nav inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-[#fbb03b]/20 hover:shadow-[#fbb03b]/30 hover:-translate-y-0.5 group text-center"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="font-editorial-nav inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs uppercase tracking-wider font-bold transition-all backdrop-blur-sm hover:-translate-y-0.5 text-center"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT EURO EDGE (Delivering Engineering Excellence Across Dubai)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              ABOUT EURO EDGE
            </span>

            <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
              Delivering Engineering Excellence Across Dubai
            </h2>

            <p className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Euro Edge Technical Services L.L.C. is a Dubai-based technical
              services company delivering reliable and high-quality solutions
              for civil, MEP, maintenance and specialist works. We combine
              technical expertise, skilled teams and a commitment to quality to
              create spaces that are functional, safe and built for the future.
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

            {/* Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="font-editorial-nav inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
              >
                <span>Learn More About Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="font-editorial-nav inline-flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#0a2540] hover:text-[#0066cc] transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#c8924b]" />
                </div>
                <span>Watch Company Profile</span>
              </Link>
            </div>
          </div>

          {/* Right Collage Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Top-right floating stat badge */}
              <div className="absolute -top-6 right-4 sm:right-8 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-editorial-h1 text-2xl font-bold text-[#0a2540] leading-none">
                    100%
                  </div>
                  <div className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Certified Technical Team
                  </div>
                </div>
              </div>

              {/* Background Arched Burj Sunset Photo */}
              <div className="relative h-80 sm:h-96 w-4/5 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/about-burj-sunset.jpg"
                  alt="Burj Khalifa Dubai Sunset Architecture"
                  fill
                  className="object-cover object-center"
                  sizes="40vw"
                />
              </div>

              {/* Overlapping Bottom Team Inspection Photo */}
              <div className="relative -mt-28 ml-auto w-3/4 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="/images/about-team-inspection.jpg"
                  alt="Euro Edge Engineering Team Site Review Dubai"
                  fill
                  className="object-cover object-center"
                  sizes="35vw"
                />

                {/* Floating "From Concept to Completion" pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-md border border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0a2540] text-white flex items-center justify-center shrink-0">
                    <Play className="w-3 h-3 fill-current ml-0.5 text-[#fbb03b]" />
                  </div>
                  <span className="font-editorial-nav text-[11px] font-bold text-[#0a2540] uppercase tracking-wider">
                    From Concept to Completion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR EXPERTISE - FIVE SPECIALIZED DIVISIONS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              OUR EXPERTISE
            </span>
            <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-bold tracking-tight">
              Five Specialized Divisions
            </h2>
            <p className="font-editorial-body text-sm sm:text-base text-slate-600 leading-relaxed">
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
                desc: "Comprehensive property upkeep, planned preventive maintenance (PPM), and building system management.",
                image: "/images/services/facility-management.jpg",
                icon: Building2,
                slug: "general-maintenance-amc",
              },
              {
                id: "fitout",
                title: "Fit-Out & Renovation",
                desc: "Turnkey interior fit-out, partition installations, joinery, and architectural restoration.",
                image: "/images/services/fit-out-renovation.jpg",
                icon: Hammer,
                slug: "civil-finishing-works",
              },
              {
                id: "mep",
                title: "MEP & HVAC Systems",
                desc: "Electrical distribution, plumbing & sanitary works, AC ducting, chillers, and climate control.",
                image: "/images/services/mep-technical.jpg",
                icon: Zap,
                slug: "mep-technical-works",
              },
              {
                id: "civil",
                title: "Civil Maintenance",
                desc: "Masonry, tile fixing, painting, plastering, waterproofing, and structural upkeep.",
                image: "/images/services/civil-maintenance.jpg",
                icon: ShieldCheck,
                slug: "civil-finishing-works",
              },
              {
                id: "pool-landscaping",
                title: "Pool & Landscaping",
                desc: "Custom swimming pools, filtration, hardscaping, softscaping, and automated irrigation.",
                image: "/images/services/swimming-pool.jpg",
                icon: Waves,
                slug: "swimming-pool-works",
              },
            ].map((division) => (
              <Link
                key={division.id}
                href={`/services/${division.slug}`}
                className="group relative h-[380px] sm:h-[420px] lg:h-[460px] rounded-2xl sm:rounded-[26px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-6 border border-slate-200/60 block"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 group-hover:via-black/60 transition-colors" />

                {/* Card Content at bottom */}
                <div className="relative z-10 space-y-2.5">
                  {/* Translucent Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-sm group-hover:bg-[#fbb03b] group-hover:text-[#0a2540] group-hover:border-[#fbb03b] transition-all">
                    <division.icon className="w-5 h-5 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial-h2 text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="font-editorial-body text-xs text-slate-200/90 leading-relaxed line-clamp-3">
                    {division.desc}
                  </p>

                  {/* Explore Pill Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 group-hover:bg-black/70 border border-white/25 text-white text-xs font-semibold backdrop-blur-sm transition-all group-hover:border-white/50">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div className="text-center pt-4">
            <Link
              href="/services"
              className="font-editorial-nav inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
            >
              <span>Explore All Capabilities &amp; Divisions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE EURO EDGE - BUILT FOR EVERY ENVIRONMENT
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Modern Architecture Photo with Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/home-quality-spaces.jpg"
                alt="Quality Modern Architectural Spaces by Euro Edge Dubai"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-editorial-h2 text-sm sm:text-base font-medium text-[#0a2540] leading-snug">
                    Quality Spaces for a Better Tomorrow
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Residential | Commercial | Industrial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Built for Every Environment */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
              WHY CHOOSE EURO EDGE
            </span>

            <h2 className="font-editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] font-medium tracking-tight leading-[1.12]">
              Built for Every Environment.
            </h2>

            <p className="font-editorial-body text-slate-600 text-sm sm:text-base leading-relaxed">
              From residential communities to commercial developments and
              industrial facilities, we deliver reliable technical solutions
              that meet the highest standards of quality, safety and performance.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Quality Workmanship
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Built to Last
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Reliable &amp; Professional
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Technical Team
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Safety &amp; Compliance
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Industry Standards
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial-nav text-xs font-bold text-[#0a2540] uppercase tracking-wide">
                    Client-Focused Approach
                  </h4>
                  <p className="font-editorial-body text-[11px] text-slate-500 mt-0.5">
                    Your Goals, Our Priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR WORK PROCESS - A SIMPLE & RELIABLE PROCESS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Header */}
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
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial-h1 text-2xl font-bold text-[#0a2540]">
                    {p.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0066cc] flex items-center justify-center shadow-2xs">
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
          SECTION 6: READY TO BUILD TOGETHER? (Full-width Sunset Skyline Banner)
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
          {/* Deep Navy/Black Gradient Overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/95 via-[#071a2e]/85 to-[#071a2e]/70" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto space-y-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#fbb03b] tracking-[0.2em] uppercase block">
              READY TO BUILD TOGETHER?
            </span>

            <h2 className="font-editorial-h1 text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              Let&apos;s Build Something Great Together.
            </h2>

            <p className="font-editorial-body text-sm sm:text-base text-slate-300 leading-relaxed">
              Talk to our team today and get the right technical solution for your
              project.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
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

          {/* 3 Trust Badges at bottom of banner */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#fbb03b]" />
              </div>
              <div>
                <h5 className="font-editorial-nav text-xs font-bold text-white uppercase tracking-wider">
                  Quick Response
                </h5>
                <p className="font-editorial-body text-[11px] text-slate-300">
                  We&apos;ll get back to you soon
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#fbb03b]" />
              </div>
              <div>
                <h5 className="font-editorial-nav text-xs font-bold text-white uppercase tracking-wider">
                  Technical Experts
                </h5>
                <p className="font-editorial-body text-[11px] text-slate-300">
                  Dedicated project support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#fbb03b]" />
              </div>
              <div>
                <h5 className="font-editorial-nav text-xs font-bold text-white uppercase tracking-wider">
                  Trusted Partner
                </h5>
                <p className="font-editorial-body text-[11px] text-slate-300">
                  Across all 7 Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR IMPACT - NUMBERS THAT REFLECT OUR COMMITMENT (Light Version)
      ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-2">
              <span className="font-editorial-eyebrow text-xs sm:text-[11px] font-semibold text-[#0066cc] tracking-[0.2em] uppercase block">
                OUR IMPACT
              </span>
              <h2 className="font-editorial-h2 text-3xl sm:text-4xl text-[#0a2540] font-medium leading-tight tracking-tight">
                Numbers That <br className="hidden sm:inline" />
                Reflect Our Commitment
              </h2>
              <div className="w-16 h-0.5 bg-[#c8924b] mt-2" />
            </div>

            {/* Right 4 Metric Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  100%
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Certified In-House Team
                </div>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  5
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Specialized Divisions
                </div>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  24/7
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Rapid Response Hotline
                </div>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#f6ebdc] text-[#c8924b] flex items-center justify-center mx-auto sm:mx-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-editorial-h1 text-3xl sm:text-4xl font-bold text-[#0a2540]">
                  7
                </div>
                <div className="font-editorial-body text-xs text-slate-500">
                  Emirates Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
