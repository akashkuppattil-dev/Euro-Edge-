import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { QuoteEstimator } from "@/components/quote-estimator"
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
  title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
  description:
    "The Edge of Quality Built on Trust. Professional engineering, maintenance, installation, and facility management services in Dubai, UAE.",
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

function EuroEdgePage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans">
      <Header />

      {/* =========================================
          SIMPLE CLEAN HERO SECTION (No Color Shades / Overlays)
      ========================================= */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32 border-b border-border flex items-center min-h-[480px] lg:min-h-[540px]">
        {/* Full-Width Background Image Only */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-dubai-skyline.jpg"
            alt="Dubai Skyline Euro Edge Technical Services"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl space-y-5 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#0a2540] leading-[1.06]">
              Engineering That Keeps <br />
              <span className="text-[#0a2540]">Buildings Moving.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-display italic font-bold text-[#0a2540] tracking-wide">
              "The Edge of Quality Built on Trust"
            </p>

            <p className="text-sm sm:text-base text-slate-900 font-sans font-medium leading-relaxed max-w-xl">
              Reliable technical contracting, MEP installations, HVAC climate control, civil maintenance, interior fit-outs, and facility management solutions across Dubai and the UAE.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5 group"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 text-[#fbb03b] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0a2540] border border-slate-300 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 group"
              >
                <span>CONTACT ENGINEERING TEAM</span>
                <ArrowUpRight className="w-4 h-4 text-[#0a2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE ABOUT US SECTION - Unboxed Clean Layout */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Euro Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Delivering Engineering Excellence Across Dubai
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-3xl mx-auto">
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

      {/* 4 CORE SERVICE PILLARS SECTION (Elite Living Inspired Vertical Image Cards) */}
      <section className="py-16 sm:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5" />
              <span>Specialized Technical Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              CORE SERVICE PILLARS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Discover our four primary engineering divisions delivering complete end-to-end property care in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="relative h-[380px] rounded-3xl overflow-hidden border border-border group shadow-md hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/services/facility-management.jpg"
                alt="Facility Management & Upkeep"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-3">
                <h3 className="text-2xl font-serif font-bold text-white">Facility Management</h3>
                <Link
                  href="/services/facility-management"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fbb03b] hover:underline pt-1"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative h-[380px] rounded-3xl overflow-hidden border border-border group shadow-md hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/services/fit-out-renovation.jpg"
                alt="Fit-Out & Renovation Works"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-3">
                <h3 className="text-2xl font-serif font-bold text-white">Fit-Out &amp; Renovation</h3>
                <Link
                  href="/services/carpentry-flooring"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fbb03b] hover:underline pt-1"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative h-[380px] rounded-3xl overflow-hidden border border-border group shadow-md hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/services/mep-services.jpg"
                alt="MEP & HVAC Climate Engineering"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-3">
                <h3 className="text-2xl font-serif font-bold text-white">MEP &amp; HVAC Systems</h3>
                <Link
                  href="/services/mep-services"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fbb03b] hover:underline pt-1"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="relative h-[380px] rounded-3xl overflow-hidden border border-border group shadow-md hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/services/civil-maintenance.jpg"
                alt="Technical Support & Civil Upkeep"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-3">
                <h3 className="text-2xl font-serif font-bold text-white">Civil Maintenance</h3>
                <Link
                  href="/services/civil-maintenance"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fbb03b] hover:underline pt-1"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TOP 6 SERVICES SECTION (Alternating Zigzag Layout) */}
      <section id="services" className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
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

          {/* Alternating Zigzag Stack Layout for 6 Top Services */}
          <div className="space-y-8 sm:space-y-12">
            {servicesData.slice(0, 6).map((srv, i) => {
              const IconComponent = iconMap[srv.iconName] || Wrench
              const isEven = i % 2 === 0

              return (
                <div
                  key={srv.slug}
                  className="rounded-3xl bg-card border border-border/80 p-4 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center group overflow-hidden"
                >
                  {/* Image Column (Left if even, Right if odd) */}
                  <div
                    className={`lg:col-span-5 relative h-[200px] sm:h-[300px] w-full rounded-2xl overflow-hidden border border-border shadow-sm ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <Image
                      src={srv.imageUrl}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-card/90 backdrop-blur-md text-foreground text-[10px] sm:text-xs font-mono font-bold border border-border">
                      FEATURED #{String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Text Description Column (Right if even, Left if odd) */}
                  <div className={`lg:col-span-7 space-y-3.5 sm:space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary flex items-center justify-center text-primary border border-border flex-shrink-0">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="text-xl sm:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans">
                      {srv.fullDesc || srv.shortDesc}
                    </p>

                    {/* Scope Bullets */}
                    {srv.keyFeatures && srv.keyFeatures.length > 0 && (
                      <div className="pt-1 sm:pt-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                          Key Service Highlights:
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {srv.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="px-2.5 py-1 rounded-lg bg-secondary border border-border text-[11px] sm:text-xs font-medium text-foreground flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 sm:pt-3">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm group/btn"
                      >
                        <span>View Service Details &amp; Scope</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Button to View All 17 Services */}
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

      {/* WHY CHOOSE US SECTION - Premium 8-Pillar Competitive Advantage Grid */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Our Competitive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              WHY CHOOSE EURO EDGE
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We stand out by delivering excellence, reliability, and precision tailored to every client project across Dubai and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                icon: Award,
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
                icon: Sparkles,
              },
              {
                num: "05",
                tag: "Zero Violations",
                title: "Safety Compliance",
                desc: "Safety is our top priority. We strictly adhere to industry standards and regulations.",
                icon: ShieldCheck,
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
                icon: Cog,
              },
              {
                num: "08",
                tag: "Tailored Scope",
                title: "Customized Solutions",
                desc: "Every project is unique; our solutions are tailored to meet specific needs and requirements.",
                icon: Settings,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60">
                      {item.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-secondary px-2.5 py-1 rounded-full border border-border/60 inline-block mb-3">
                    {item.tag}
                  </span>

                  <h3 className="font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs font-semibold text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>Guaranteed Excellence</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-secondary border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-base sm:text-lg font-serif font-bold text-foreground">
                Our Guarantee to Every Client in Dubai
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Guaranteed Precision, Uncompromising Safety, and Complete Peace of Mind on Every Technical Project.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto pl-6 pr-2 py-2 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 text-foreground font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-4 flex-shrink-0 group"
            >
              <span>Partner With Euro Edge</span>
              <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* OUR WORK PROCESS — 5-STEP HORIZONTAL TIMELINE */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
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
          </div>

          {/* 5-Step Horizontal Timeline */}
          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-border z-0" />

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
                <div key={i} className="flex flex-col items-center text-center group">
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
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-secondary border border-border">
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
          </div>

        </div>
      </section>




      {/* CLIENT LOGOS SECTION (Placeholder-Ready Grid) */}
      <section className="py-12 sm:py-16 px-4 lg:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary bg-secondary px-3 py-1 rounded-full border border-border">
              Commercial Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              OUR CLIENTS &amp; TRUSTED PARTNERS
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Delivering specialized technical engineering and facility contracts across commercial real estate, hospitality, and residential developments in Dubai.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: "/images/client-logo-1.png", alt: "Al Barsha Properties" },
              { src: "/images/client-logo-2.png", alt: "Emirates Facility Group" },
              { src: "/images/client-logo-3.png", alt: "Gulf Commercial Holdings" },
              { src: "/images/client-logo-4.png", alt: "Palm Estate Management" },
              { src: "/images/client-logo-5.png", alt: "Marina Bay Hospitality" },
              { src: "/images/client-logo-6.png", alt: "Desert Logistics Hub" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="h-24 rounded-2xl bg-card border border-border flex items-center justify-center p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="object-contain max-h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Frequently Asked Questions (FAQ) Accordion */}
      <FAQSection />

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  );
}
export default EuroEdgePage;

