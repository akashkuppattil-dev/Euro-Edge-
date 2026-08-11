import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import {
  ShieldCheck,
  Target,
  Sparkles,
  Award,
  Scale,
  Shield,
  Users,
  Clock,
  Handshake,
  Cog,
  Settings,
  Phone,
  Mail,
  UserCheck,
  Wrench,
  UserCog,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "About Us | Euro Edge Technical Services L.L.C.",
  description:
    "Learn about Euro Edge Technical Services L.L.C., our mission, vision, core values, and dedicated engineering team in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com/about",
  },
  openGraph: {
    title: "About Us | Euro Edge Technical Services L.L.C.",
    description:
      "Learn about Euro Edge Technical Services L.L.C., our mission, vision, core values, and dedicated engineering team in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Euro Edge Technical Services L.L.C.",
    description:
      "Learn about Euro Edge Technical Services L.L.C., our mission, vision, core values, and dedicated engineering team in Dubai, UAE.",
  },
}

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* =========================================
          HERO BANNER (Simple Clean Light Style)
      ========================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 flex items-center bg-background text-foreground border-b border-border overflow-hidden">


        <div className="relative z-10 w-full px-4 lg:px-12 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
            COMPANY OVERVIEW
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
            About Euro Edge
          </h1>

          <p className="text-sm sm:text-base text-foreground/90 font-sans max-w-2xl leading-relaxed font-medium">
            "The Edge of Quality Built on Trust" — Premier MEP engineering, civil maintenance, and technical contracting across Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          EXCELLENCE & RELIABILITY (Overview + Mission & Vision)
      ========================================= */}
      <section className="py-14 sm:py-18 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl text-foreground tracking-tight leading-snug font-bold">
              Delivering Reliable &amp; Excellence-Driven Technical Solutions
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans max-w-3xl mx-auto pt-1">
              We are committed to delivering reliable, efficient, and professional services with a strong focus on quality, safety, and customer satisfaction. Our experienced team and customer-centric approach enable us to build lasting relationships and create value for every project we undertake in Dubai and the UAE.
            </p>
          </div>

          {/* Mission & Vision Cards — Clean Icon-Free Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0a2540]/40 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-3 border-l-4 border-l-[#0a2540]">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif tracking-tight">
                OUR MISSION
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans pt-1">
                To deliver reliable, innovative, and high-quality technical services that fulfill our clients' needs through excellence, professionalism, safety, and long-term value.
              </p>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0a2540]/40 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-3 border-l-4 border-l-[#0a2540]">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif tracking-tight">
                OUR VISION
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans pt-1">
                To become one of the UAE's most trusted technical service providers by delivering next-generation solutions that drive customer satisfaction and asset longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CORE VALUES
      ========================================= */}
      <section className="py-14 sm:py-20 px-4 lg:px-12 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight font-bold">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans">
              The fundamental standards that drive our engineering team, site operations, and client relationships across Dubai.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                num: "01",
                title: "Quality Excellence",
                tagline: "Uncompromising standards on every technical scope",
                desc: "We deliver superior engineering quality across every project. From selecting certified, high-grade materials to conducting multi-stage quality inspections, we ensure every installation and repair stands the test of time.",
              },
              {
                num: "02",
                title: "Unwavering Integrity",
                tagline: "Transparent contracting & honest communication",
                desc: "Integrity is the cornerstone of Euro Edge. We operate with complete financial and technical transparency — offering clear, itemized quotations, honest site assessments, and fair rates with zero hidden charges.",
              },
              {
                num: "03",
                title: "Dependable Reliability",
                tagline: "SLA compliance & rapid response",
                desc: "We respect your time and property operations. Our 24/7 technical teams are committed to strict SLA turnarounds, on-time project completion, and dependable emergency callout response across Dubai.",
              },
              {
                num: "04",
                title: "Strict Safety Compliance",
                tagline: "Zero compromise on occupational & building safety",
                desc: "Safety is our top priority. We strictly enforce UAE Civil Defense, DEWA, and Dubai Municipality safety protocols, equipping our field engineers with certified PPE and safety tools for every task.",
              },
              {
                num: "05",
                title: "Client-Centric Focus",
                tagline: "Customized technical solutions tailored for you",
                desc: "We listen, assess, and adapt to your specific property requirements. Whether managing a single villa or an entire commercial tower, our scopes are customized to maximize value, comfort, and asset longevity.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0a2540]/40 hover:bg-white hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center group border-l-4 border-l-[#0a2540]"
              >
                {/* Left Number Column */}
                <div className="sm:col-span-2 flex items-center justify-start sm:justify-center border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-3 sm:pb-0 sm:pr-4">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-[#0a2540] group-hover:scale-110 transition-transform">
                    {item.num}
                  </span>
                </div>

                {/* Right Content Column */}
                <div className="sm:col-span-10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0a2540] bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 w-fit">
                      {item.tagline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE EURO EDGE (Matching FAQSection Structure)
      ========================================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border relative">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPETITIVE EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              WHY CHOOSE EURO EDGE
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              We stand out by delivering precision engineering, rapid response, and transparent contracting across Dubai and the UAE.
            </p>
          </div>

          {/* Cards Vertical Stack (One After Another Down by Down) */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {[
              {
                num: "01",
                tag: "Certified Engineers",
                title: "Skilled Professionals",
                desc: "Our team consists of highly trained engineers and skilled technicians dedicated to top-quality execution.",
              },
              {
                num: "02",
                tag: "Premium Grade",
                title: "Quality Materials",
                desc: "We utilize premium grade materials and parts from trusted suppliers to ensure long-lasting operational results.",
              },
              {
                num: "03",
                tag: "Strict SLA",
                title: "Timely Delivery",
                desc: "We value client schedules and ensure every project is delivered on time without compromising on quality.",
              },
              {
                num: "04",
                tag: "Transparent Rates",
                title: "Competitive Pricing",
                desc: "Cost-effective technical solutions with completely transparent quotations to ensure maximum value.",
              },
              {
                num: "05",
                tag: "Safety Standard",
                title: "Safety Compliance",
                desc: "Safety is our top priority. We strictly adhere to industry safety guidelines and operational protocols.",
              },
              {
                num: "06",
                tag: "Client First",
                title: "Customer Satisfaction",
                desc: "Committed to exceeding expectations through reliable service, open communication, and careful attention to detail.",
              },
              {
                num: "07",
                tag: "State-of-the-Art",
                title: "Modern Equipment",
                desc: "Utilizing advanced diagnostic tools and modern technical equipment for high-precision workmanship.",
              },
              {
                num: "08",
                tag: "Tailored Scope",
                title: "Customized Solutions",
                desc: "Every property is unique; our engineering scopes are customized to match specific technical requirements.",
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
          BOTTOM DARK BLUE FOOTER BANNER
      ========================================= */}
      <section className="py-8 px-4 lg:px-12 bg-[#071927] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Ready to Partner With Euro Edge?
            </h3>
            <p className="text-xs text-white/80 max-w-xl leading-relaxed font-sans">
              Contact our engineering team to discuss your technical contracting, MEP installation, or facility management requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#fbb03b] hover:bg-[#e09b2d] text-[#0a2540] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
