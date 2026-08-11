import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { WhyChooseUsAccordion } from "@/components/why-choose-us-accordion"
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


        <div className="relative z-10 w-full px-4 lg:px-12 max-w-[1600px] mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
            COMPANY OVERVIEW
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
            About Euro Edge
          </h1>

          <p className="text-sm sm:text-base text-foreground/90 font-sans max-w-4xl leading-relaxed font-medium">
            "The Edge of Quality Built on Trust" — Premier MEP engineering, civil maintenance, and technical contracting across Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          EXCELLENCE & RELIABILITY (Overview + Mission & Vision)
      ========================================= */}
      <section className="py-14 sm:py-18 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-[1600px] mx-auto space-y-10">
          <div className="max-w-6xl mx-auto text-center space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl text-foreground tracking-tight leading-snug font-bold">
              Delivering Reliable &amp; Excellence-Driven Technical Solutions
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans max-w-5xl mx-auto pt-1">
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
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-4xl mx-auto space-y-2.5">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight font-bold">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans">
              The fundamental standards that drive our engineering team, site operations, and client relationships across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                icon: Award,
                title: "Quality Excellence",
                desc: "We deliver superior engineering quality across every project. From selecting certified materials to multi-stage inspections, we ensure every installation stands the test of time.",
              },
              {
                num: "02",
                icon: Scale,
                title: "Unwavering Integrity",
                desc: "Integrity is the cornerstone of Euro Edge. We operate with complete financial and technical transparency — offering honest site assessments and fair rates with zero hidden charges.",
              },
              {
                num: "03",
                icon: Clock,
                title: "Dependable Reliability",
                desc: "We respect your time. Our 24/7 technical teams are committed to strict SLA turnarounds, on-time project completion, and dependable emergency callout response across Dubai.",
              },
              {
                num: "04",
                icon: Shield,
                title: "Strict Safety Compliance",
                desc: "Safety is our top priority. We strictly enforce UAE Civil Defense, DEWA, and Dubai Municipality protocols, equipping our engineers with certified PPE for every task.",
              },
              {
                num: "05",
                icon: Users,
                title: "Client-Centric Focus",
                desc: "We listen, assess, and adapt to your property requirements. Whether managing a single villa or a commercial tower, our scopes are customized to maximize value and asset longevity.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-mono font-black text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE EURO EDGE
      ========================================= */}
      <WhyChooseUsAccordion />



      {/* =========================================
          BOTTOM DARK BLUE FOOTER BANNER
      ========================================= */}
      <section className="py-8 px-4 lg:px-12 bg-[#071927] text-white">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
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
            <StickyContactWidget />
    </main>
  )
}
