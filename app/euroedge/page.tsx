import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
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
]

export default function EuroEdgePage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans">
      <Header />

      {/* HERO SECTION - Direct Text over Background Image */}
      <section className="relative overflow-hidden bg-background py-12 sm:py-20 lg:py-28 border-b border-border min-h-[520px] flex items-center">
        {/* Full-Width Technical Service Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/building-maintenance.jpg"
            alt="Euro Edge Technical Services Background"
            fill
            className="object-cover opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl space-y-5 sm:space-y-6 text-left">
            {/* Company Title & Motto */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.15]">
                Euro Edge <br />
                <span className="italic text-primary">Technical Services L.L.C.</span>
              </h1>

              <div className="inline-block px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/80 border border-border/80 text-foreground font-serif italic text-sm sm:text-lg shadow-sm">
                "The Edge of Quality Built on Trust"
              </div>
            </div>

            {/* Standard Corporate Company Message */}
            <p className="text-sm sm:text-lg text-muted-foreground font-sans leading-relaxed">
              We deliver reliable technical contracting, MEP installations, HVAC systems, civil maintenance, interior fit-outs, and facility management services across Dubai and the UAE.
            </p>

            {/* Primary Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US: MISSION & VISION - Premium Redesign */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Text & Mission/Vision Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Company Identity &amp; Excellence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                  ABOUT EURO EDGE
                </h2>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-primary/80 font-sans">
                We are committed to delivering reliable, efficient, and professional technical services with a strong focus on quality, safety, and customer satisfaction. Our experienced engineering team and customer-centric approach enable us to build lasting relationships and create value for every project we undertake across Dubai and the UAE.
              </p>

              {/* Mission & Vision Premium Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Mission Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        OUR MISSION
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      To deliver reliable, innovative, and high-quality technical services that fulfill our clients' needs through excellence, professionalism, safety, and long-term value.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-semibold text-muted-foreground">Safety First</span>
                    <span className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-semibold text-muted-foreground">Quality Guarantee</span>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        OUR VISION
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      To become one of the UAE's most trusted technical service providers by delivering next-generation solutions that drive customer satisfaction and asset longevity.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-semibold text-muted-foreground">UAE Industry Leader</span>
                    <span className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-semibold text-muted-foreground">Next-Gen Contracting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right About Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl h-[300px] sm:h-[400px] w-full group">
                <Image
                  src="/images/about-team.png"
                  alt="Euro Edge Technical Management Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Professional Engineering &amp; Operations</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    Dedicated technical management team executing high-standard MEP, HVAC, and civil projects in Dubai.
                  </p>
                </div>
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
                    className={`lg:col-span-5 relative h-[200px] sm:h-[300px] w-full rounded-2xl overflow-hidden border border-border shadow-sm ${
                      isEven ? "lg:order-1" : "lg:order-2"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-card border border-border text-foreground hover:text-primary font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
            >
              <span>View All 17 Specialized Services</span>
              <ArrowRight className="w-4 h-4 text-primary" />
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
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm flex-shrink-0"
            >
              <span>Partner With Euro Edge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* OUR WORK PROCESS SECTION (10 STEPS DUAL-PHASE PIPELINE) */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Step-by-Step Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              OUR WORK PROCESS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              A streamlined 10-step process engineered for precision, total transparency, and guaranteed on-time delivery.
            </p>
          </div>

          {/* PHASE 01: EVALUATION & PLANNING */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border/80">
              <span className="text-xs font-bold font-mono tracking-widest text-primary bg-secondary px-3 py-1 rounded-full border border-border">
                PHASE 01
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground tracking-tight">
                EVALUATION &amp; PROJECT PLANNING (STEPS 01 - 05)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { num: "01", title: "Enquiry", desc: "Understand client requirements & goals.", icon: HelpCircle },
                { num: "02", title: "Site Visit", desc: "Site inspection and data collection.", icon: MapPin },
                { num: "03", title: "Technical Assessment", desc: "Engineering evaluation & review.", icon: Search },
                { num: "04", title: "Quotation", desc: "Detailed proposal & cost estimation.", icon: FileText },
                { num: "05", title: "Project Planning", desc: "Resource, schedule & SLA planning.", icon: Settings },
              ].map((step, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-primary group-hover:scale-110 transition-transform">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <step.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-bold text-foreground text-sm tracking-wide group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-border/40 flex items-center text-[10px] font-bold text-primary uppercase tracking-wider">
                    <span>Phase 01 Prep</span>
                    <ChevronRight className="w-3 h-3 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHASE 02: EXECUTION & QUALITY HANDOVER */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border/80">
              <span className="text-xs font-bold font-mono tracking-widest text-primary bg-secondary px-3 py-1 rounded-full border border-border">
                PHASE 02
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground tracking-tight">
                PRECISION EXECUTION &amp; QUALITY HANDOVER (STEPS 06 - 10)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { num: "06", title: "Execution", desc: "Precision work using skilled crews.", icon: Hammer },
                { num: "07", title: "Quality Inspection", desc: "Stage-by-stage quality checks.", icon: ClipboardCheck },
                { num: "08", title: "Quality Verification", desc: "Testing & final verification.", icon: ShieldCheck },
                { num: "09", title: "Handover", desc: "Client orientation & handover.", icon: Handshake },
                { num: "10", title: "After-Sales Support", desc: "Continuous maintenance support.", icon: Headphones },
              ].map((step, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-primary group-hover:scale-110 transition-transform">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <step.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-bold text-foreground text-sm tracking-wide group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-border/40 flex items-center text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                    <span>Phase 02 Delivery</span>
                    <ChevronRight className="w-3 h-3 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Guarantee Footer */}
          <div className="p-5 sm:p-6 rounded-2xl bg-secondary border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-foreground">100% Quality Assurance &amp; Transparent Communication</h4>
                <p className="text-xs text-muted-foreground">Every step is documented and verified according to Dubai engineering standards.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Initiate Step 01 Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION - Premium Multi-Sector Showcase */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Multi-Sector Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
              Providing comprehensive technical solutions tailored to diverse commercial, residential, and industrial environments across Dubai and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-4">
            {[
              { name: "Residential Villas", tag: "Villas & Homes", icon: Home },
              { name: "Apartments", tag: "High-Rise Units", icon: Building },
              { name: "Commercial Buildings", tag: "Towers & Hubs", icon: Building2 },
              { name: "Offices", tag: "Corporate Suites", icon: Briefcase },
              { name: "Hotels", tag: "Hospitality", icon: Hotel },
              { name: "Restaurants", tag: "F&B Outlets", icon: Utensils },
              { name: "Retail Shops", tag: "Malls & Stores", icon: ShoppingBag },
              { name: "Warehouses", tag: "Logistics Hubs", icon: Warehouse },
              { name: "Industrial Facilities", tag: "Plants & Factories", icon: Factory },
              { name: "Property Management", tag: "Real Estate FM", icon: Boxes },
              { name: "Swimming Pools", tag: "Leisure Assets", icon: Waves },
              { name: "Prefab Institutions", tag: "Modular Units", icon: Building },
              { name: "Healthcare Facilities", tag: "Clinics & Labs", icon: Hospital },
              { name: "Fit-Out & Renovation", tag: "Turnkey Interiors", icon: Hammer },
            ].map((ind, i) => (
              <div
                key={i}
                className="p-3.5 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-between text-center min-h-[110px] sm:min-h-[140px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm mb-2 sm:mb-3">
                  <ind.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] sm:text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight uppercase tracking-wider">
                    {ind.name}
                  </h3>
                  <span className="text-[8px] sm:text-[9px] font-semibold text-muted-foreground block mt-0.5 sm:mt-1">
                    {ind.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sector Coverage Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-left">
              <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Custom Technical Scope for Any Property Type</h4>
                <p className="text-xs text-muted-foreground">Operating across Dubai and all 7 Emirates with specialized technical teams.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-sm"
            >
              <span>Consult Our Sector Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Leadership & Professionals</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">OUR TEAM</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Dedicated professionals committed to operational excellence and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pranoydas Mullasseri */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center text-primary text-2xl font-bold mb-4 group-hover:scale-105 transition-transform">
                PM
              </div>
              <h3 className="text-lg font-bold text-foreground">Pranoydas Mullasseri</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Operations Manager</p>
              <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href="tel:+9710543909946" className="hover:text-foreground transition-colors">+971 054 390 9946</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:pranoy@euroedgets.com" className="hover:text-foreground transition-colors">pranoy@euroedgets.com</a>
                </div>
              </div>
            </div>

            {/* Sanal Ponnakkan */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-border flex items-center justify-center text-primary text-2xl font-bold mb-4 group-hover:scale-105 transition-transform">
                SP
              </div>
              <h3 className="text-lg font-bold text-foreground">Sanal Ponnakkan</h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Technical Team</p>
              <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:sanal@euroedgets.com" className="hover:text-foreground transition-colors">sanal@euroedgets.com</a>
                </div>
              </div>
            </div>

            {/* Sreerag Neerepurath */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-border flex items-center justify-center text-primary text-2xl font-bold mb-4 group-hover:scale-105 transition-transform">
                SN
              </div>
              <h3 className="text-lg font-bold text-foreground">Sreerag Neerepurath</h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Technical Team</p>
              <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:sreerag@euroedgets.com" className="hover:text-foreground transition-colors">sreerag@euroedgets.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Frequently Asked Questions (FAQ) Accordion */}
      <FAQSection />

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
