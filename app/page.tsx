import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { QuoteEstimator } from "@/components/quote-estimator"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FeaturedServicesCarousel } from "@/components/featured-services-carousel"
import { CoreServicePillarsCarousel } from "@/components/core-service-pillars-carousel"
import { servicesData } from "@/lib/services-data"
import {
  Wrench,
  ShieldCheck,
  Award,
  Cog,
  ClipboardCheck,
  Users,
  PenTool,
  Handshake,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
  Building,
  Building2,
  Home,
  Hotel,
  Utensils,
  ShoppingBag,
  Warehouse,
  Factory,
  Briefcase,
  Waves,
  Boxes,
  Hospital,
  Hammer,
  Shield,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
  Scale,
  Search,
  Eye,
  Settings,
  HelpCircle,
  Headphones,
  Zap,
  Droplet,
  Fan,
  Grid,
  Lightbulb,
  Maximize,
  Compass,
  Square,
  Globe,
} from "lucide-react"

const iconMap: Record<string, any> = {
  Zap,
  Droplet,
  Fan,
  Grid,
  Lightbulb,
  Square,
  Maximize,
  Hammer,
  Waves,
  Utensils,
  Building,
  Building2,
  Cog,
  Compass,
  Boxes,
  Headphones,
  Factory,
}

export const metadata = {
  title: "Euro Edge Technical Services L.L.C. | MEP, HVAC & Contracting Dubai",
  description:
    "The Edge of Quality Built on Trust. Professional MEP engineering, HVAC maintenance, civil contracting, fit-out, and facility management services in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com",
  },
  openGraph: {
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional MEP engineering, HVAC maintenance, civil contracting, and facility management services in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description:
      "The Edge of Quality Built on Trust. Professional MEP engineering, HVAC maintenance, civil contracting, and facility management services in Dubai, UAE.",
  },
}

const servicesList = [
  {
    title: "Electrical Works",
    desc: "Installation, testing, commissioning, and maintenance of electrical systems and equipment.",
    icon: Zap,
  },
  {
    title: "Plumbing & Sanitary",
    desc: "Complete plumbing and sanitary installation, maintenance, and repair solutions.",
    icon: Droplet,
  },
  {
    title: "HVAC Systems",
    desc: "Supply, installation, maintenance, and repair of all types of AC, ventilation & air filtration systems.",
    icon: Fan,
  },
  {
    title: "False Ceiling & Light Partitions",
    desc: "Design and installation of false ceilings and light partitions.",
    icon: Grid,
  },
  {
    title: "Electrical Fittings & Fixtures",
    desc: "Repairing and maintenance of all types of electrical fittings and fixtures.",
    icon: Lightbulb,
  },
  {
    title: "Floor & Wall Tiling Works",
    desc: "Professional floor and wall tiling with a high-quality finish.",
    icon: Square,
  },
  {
    title: "Plaster Works",
    desc: "Internal and external plastering with a smooth, durable finish.",
    icon: Maximize,
  },
  {
    title: "Carpentry & Wood Flooring",
    desc: "Custom carpentry and wood flooring solutions.",
    icon: Hammer,
  },
  {
    title: "Swimming Pool Maintenance",
    desc: "Cleaning, maintenance, and repair of swimming pools and related systems.",
    icon: Waves,
  },
  {
    title: "Kitchen Installation",
    desc: "Complete kitchen installation with modern, functional designs.",
    icon: Utensils,
  },
  {
    title: "Aluminium & Glass Installation",
    desc: "Installation of aluminium doors, windows, and glass partitions.",
    icon: Building,
  },
  {
    title: "Building Maintenance",
    desc: "General upkeep and structural maintenance to keep buildings running smoothly.",
    icon: Building2,
  },
  {
    title: "MEP Services",
    desc: "Integrated mechanical, electrical and plumbing systems for new builds and retrofits.",
    icon: Cog,
  },
  {
    title: "Civil Maintenance",
    desc: "Structural and civil upkeep for lasting, safe buildings.",
    icon: Compass,
  },
  {
    title: "Facility Management",
    desc: "End-to-end operational support to keep properties running efficiently.",
    icon: Boxes,
  },
  {
    title: "Technical Support",
    desc: "On-demand technical assistance across all service lines.",
    icon: Headphones,
  },
  {
    title: "Industrial Maintenance",
    desc: "Maintenance and technical support for industrial facilities and equipment.",
    icon: Factory,
  },
  {
    title: "Kitchen Equipment Maintenance",
    desc: "Preventative and corrective servicing of commercial and heavy-duty kitchen equipment.",
    icon: Utensils,
  },
]

export default function EuroEdgePage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans">
      <Header />

      {/* =========================================
          HERO SECTION (Left-Aligned with Background Image)
      ========================================= */}
      <section className="relative overflow-hidden pb-8 sm:pb-24 lg:pb-32 pt-40 sm:pt-[40vh] border-b border-border flex items-end min-h-[90vh] sm:min-h-screen">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <Image
            src="/images/hero-bg.jpg"
            alt="Euro Edge Technical Services Professional - Desktop"
            fill
            className="hidden sm:block object-cover object-[center_top] sm:object-center"
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/images/hero-mobile.png"
            alt="Euro Edge Technical Services Professional - Mobile"
            fill
            className="block sm:hidden object-cover object-center"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/70 to-transparent sm:bg-gradient-to-r sm:from-[#0a2540]/90 sm:via-[#0a2540]/50" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col items-center sm:items-start text-center sm:text-left mt-auto pb-4 sm:pb-16">
          <div className="max-w-4xl space-y-6 sm:space-y-8 flex flex-col items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight">
              The Edge of Quality <br /> Built on Trust.
            </h1>

            <div className="pt-2 sm:pt-4 flex w-full sm:w-auto">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-xl bg-[#fbb03b] hover:bg-[#fbb03b]/90 text-[#0a2540] font-display font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-5 h-5 text-[#0a2540] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE ABOUT US SECTION - Unboxed Clean Layout */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Euro Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Delivering Engineering Excellence Across Dubai
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-5xl mx-auto">
            Euro Edge Technical Services L.L.C. is a premier technical contracting company in Dubai, specialized in MEP installations, HVAC climate engineering, civil maintenance, interior fit-outs, and total facility upkeep. Built on a foundation of technical precision, safety compliance, and client trust, our experienced engineering team delivers seamless solutions tailored for private villas, commercial towers, hospitality venues, and industrial complexes.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
            >
              <span>Learn More About Our Team &amp; Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 CORE SERVICE PILLARS SECTION - Modern Premium Cards */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-[1600px] mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5" />
              <span>Specialized Technical Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              CORE SERVICE PILLARS
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
              Discover our four primary engineering divisions delivering complete end-to-end property care in Dubai.
            </p>
          </div>

          {/* Core Service Pillars Carousel (Mobile) & Grid (Desktop) */}
          <CoreServicePillarsCarousel
            pillars={[
              {
                num: "01",
                tag: "End-to-End Care",
                title: "Facility Management",
                desc: "Comprehensive property upkeep, planned preventive maintenance (PPM), and building system management.",
                href: "/services/facility-management",
                img: "/images/services/facility-management.jpg",
                iconName: "Building2",
              },
              {
                num: "02",
                tag: "Interior Excellence",
                title: "Fit-Out & Renovation",
                desc: "Turnkey interior fit-out, partition installations, joinery, and architectural restoration.",
                href: "/services/carpentry-flooring",
                img: "/images/services/fit-out-renovation.jpg",
                iconName: "Hammer",
              },
              {
                num: "03",
                tag: "Core Engineering",
                title: "MEP & HVAC Systems",
                desc: "Electrical distribution, plumbing & sanitary works, AC ducting, chillers, and climate control.",
                href: "/services/mep-services",
                img: "/images/services/mep-services.jpg",
                iconName: "Zap",
              },
              {
                num: "04",
                tag: "Structural Care",
                title: "Civil Maintenance",
                desc: "Masonry, tile fixing, painting, plastering, waterproofing, and structural upkeep.",
                href: "/services/civil-maintenance",
                img: "/images/services/civil-maintenance.jpg",
                iconName: "ShieldCheck",
              },
            ]}
          />
        </div>
      </section>

      {/* FEATURED TOP 6 SERVICES SECTION (Alternating Zigzag Layout) */}
      <section id="services" className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-t border-border">
        <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-5xl mx-auto space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Core Engineering Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              FEATURED TECHNICAL SERVICES
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
              Explore our 6 most requested engineering, MEP, civil maintenance, and facility service lines in Dubai.
            </p>
          </div>

          {/* Alternating Zigzag Stack Layout & Mobile Carousel */}
          <FeaturedServicesCarousel services={servicesData.slice(0, 6)} />

          {/* Bottom Button to View All 18 Services */}
          <div className="text-center pt-2 sm:pt-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 pl-6 pr-2 py-2 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 text-foreground font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <span>View All Specialized Services</span>
              <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Premium Grid Layout */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 lg:px-12 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#fbb03b]/10 blur-[100px]" />
        </div>

        <div className="max-w-[1600px] mx-auto space-y-12 sm:space-y-16 relative z-10">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[#0a2540] text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-[#fbb03b]" />
              <span>Our Competitive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0a2540] tracking-tight uppercase">
              Why Choose Euro Edge
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-sans max-w-4xl mx-auto">
              We stand out by delivering excellence, reliability, and precision tailored to every client project across Dubai and the UAE.
            </p>
          </div>

          {/* Premium Cards Grid Layout (2x4 on Desktop, Swipe on Mobile) */}
          <div className="relative">
            <div className="flex sm:grid gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden touch-pan-x sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 hide-scrollbar sm:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
              {
                num: "01",
                tag: "Certified Engineers",
                title: "Skilled Professionals",
                desc: "Our team consists of highly trained and experienced professionals dedicated to delivering top-quality services.",
                icon: Users,
              },
              {
                num: "02",
                tag: "Premium Grade",
                title: "Quality Materials",
                desc: "We use premium quality materials from trusted suppliers to ensure durability, reliability, and long-lasting results.",
                icon: ShieldCheck,
              },
              {
                num: "03",
                tag: "Strict SLA",
                title: "Timely Delivery",
                desc: "We value your time and ensure every project is completed on schedule without compromising on quality.",
                icon: Clock,
              },
              {
                num: "04",
                tag: "Transparent Rates",
                title: "Competitive Pricing",
                desc: "We offer cost-effective solutions with transparent pricing to ensure maximum value for your investment.",
                icon: Scale,
              },
              {
                num: "05",
                tag: "Zero Violations",
                title: "Safety Compliance",
                desc: "Safety is our top priority. We strictly adhere to industry standards and regulations.",
                icon: Award,
              },
              {
                num: "06",
                tag: "Client First",
                title: "Customer Satisfaction",
                desc: "We are committed to exceeding client expectations through reliable service, open communication, and attention to detail.",
                icon: Handshake,
              },
              {
                num: "07",
                tag: "State-of-the-Art",
                title: "Modern Equipment",
                desc: "We utilize advanced tools and modern equipment to deliver efficient, precise, and high-quality workmanship.",
                icon: Settings,
              },
              {
                num: "08",
                tag: "Tailored Scope",
                title: "Customized Solutions",
                desc: "Every project is unique; our solutions are tailored to meet specific needs and requirements.",
                icon: Target,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0a2540]/30 hover:shadow-2xl transition-all duration-300 flex flex-col space-y-6 overflow-hidden w-[85vw] max-w-[340px] sm:w-auto shrink-0 snap-center sm:shrink-1 transform-gpu"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#fbb03b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                
                <div className="flex items-start justify-between relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#0a2540] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm text-[#0a2540]">
                    <item.icon className="w-6 h-6 transition-colors" />
                  </div>
                  <span className="text-5xl font-display font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none -mr-2 -mt-2">
                    {item.num}
                  </span>
                </div>

                <div className="space-y-3 relative z-10">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#0a2540] group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            </div>
            
            {/* Swipe Indicator (Mobile Only) */}
            <div className="flex sm:hidden items-center justify-end gap-2 text-xs font-semibold text-muted-foreground pt-1 pr-2">
              <span>Swipe to explore</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </div>
          </div>

          {/* Guarantee Banner - Premium Edition */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0a2540] relative overflow-hidden shadow-2xl border border-[#0a2540]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbb03b]/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-4xl">
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                  Our Guarantee to Every Client in Dubai
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Guaranteed Precision, Uncompromising Safety, and Complete Peace of Mind on Every Technical Project. Partner with a company that delivers on its promises.
                </p>
              </div>
              
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#fbb03b] hover:bg-[#fbb03b]/90 text-[#0a2540] font-display font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group shrink-0"
              >
                <span>Partner With Euro Edge</span>
                <ArrowRight className="w-5 h-5 text-[#0a2540] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK PROCESS — 5-STEP HORIZONTAL TIMELINE */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border">
        <div className="max-w-[1600px] mx-auto space-y-14">
          {/* Header */}
          <ScrollReveal animation="fade-up" delay={0} className="text-center max-w-5xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              OUR WORK PROCESS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              A simple, transparent 5-step process — from first contact to final handover.
            </p>
          </ScrollReveal>

          {/* 5-Step Horizontal Timeline */}
          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-border z-0 overflow-hidden rounded-full">
              {/* Animated Light Pass Through */}
              <div className="absolute top-1/2 -translate-y-1/2 w-24 h-4 bg-gradient-to-r from-transparent via-[#fbb03b] to-transparent animate-timeline-light blur-[2px]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  num: "01",
                  icon: HelpCircle,
                  title: "Enquiry",
                  desc: "Reach out by phone, WhatsApp, or email. Tell us your property type and technical requirement.",
                },
                {
                  num: "02",
                  icon: Search,
                  title: "Site Assessment",
                  desc: "Our engineer visits your site for a detailed inspection and technical evaluation — free of charge.",
                },
                {
                  num: "03",
                  icon: FileText,
                  title: "Quotation",
                  desc: "We prepare a detailed, itemized quotation with timeline, scope, and transparent pricing.",
                },
                {
                  num: "04",
                  icon: Hammer,
                  title: "Execution",
                  desc: "Our certified crews carry out the work with precision, using quality materials and strict safety standards.",
                },
                {
                  num: "05",
                  icon: Handshake,
                  title: "Handover",
                  desc: "Final quality inspection, client walkthrough, documentation, and ongoing after-service support.",
                },
              ].map((step, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150} className="flex flex-col items-center text-center group">
                  {/* Number Icon Node */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-border group-hover:border-primary transition-all duration-300 flex flex-col items-center justify-center shadow-sm group-hover:shadow-lg">
                      <step.icon className="w-6 h-6 text-primary mb-0.5" />
                      <span className="text-[10px] font-black font-mono text-primary/60 tracking-widest">{step.num}</span>
                    </div>
                    {/* Active dot */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-foreground text-base font-serif group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <ScrollReveal animation="fade-up" delay={800} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-secondary border border-border">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Transparent Process, Guaranteed Quality</h4>
                <p className="text-xs text-muted-foreground">Every project is fully documented and verified to Dubai engineering standards.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto pl-6 pr-2 py-2 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 text-foreground font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-4 flex-shrink-0 group"
            >
              <span>Start Your Enquiry</span>
              <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>



      {/* Frequently Asked Questions (FAQ) Accordion */}
      <FAQSection />

      <Footer />
            <StickyContactWidget />
    </main>
  )
}
