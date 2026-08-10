import React from "react"
import Image from "next/image"
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-option-1.png"
            alt="About Euro Edge Technical Services L.L.C. Dubai"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

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
          STORY & OVERVIEW
      ========================================= */}
      <section className="py-14 sm:py-18 px-4 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
            EXCELLENCE &amp; RELIABILITY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-foreground tracking-tight leading-snug font-bold">
            Delivering Reliable &amp; Excellence-Driven Technical Solutions
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base leading-relaxed font-sans">
            We are committed to delivering reliable, efficient, and professional services with a strong focus on quality, safety, and customer satisfaction. Our experienced team and customer-centric approach enable us to build lasting relationships and create value for every project we undertake in Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          MISSION & VISION
      ========================================= */}
      <section className="py-14 sm:py-18 px-4 lg:px-12 bg-slate-50/70 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-[#fbb03b] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif tracking-tight">OUR MISSION</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              To deliver reliable, innovative, and high-quality technical services that fulfill our clients' needs through excellence, professionalism, safety, and long-term value.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-[#fbb03b] flex items-center justify-center shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif tracking-tight">OUR VISION</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              To become one of the UAE's most trusted technical service providers by delivering next-generation solutions that drive customer satisfaction and asset longevity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CORE VALUES
      ========================================= */}
      <section className="py-16 px-4 lg:px-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-foreground tracking-tight font-bold">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Quality",
                desc: "We deliver superior quality in everything we do.",
                icon: Award,
              },
              {
                title: "Integrity",
                desc: "We conduct our business with honesty and transparency.",
                icon: Scale,
              },
              {
                title: "Reliability",
                desc: "We are dependable and committed to delivering on our promises.",
                icon: ShieldCheck,
              },
              {
                title: "Safety",
                desc: "We prioritize the safety of our people, clients, and community.",
                icon: Shield,
              },
              {
                title: "Customer Focus",
                desc: "We focus on understanding and exceeding customer expectations.",
                icon: Target,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0a2540]/30 transition-all duration-300 flex flex-col items-center justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono font-bold text-foreground text-xs uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-[#0a2540]/10 group-hover:bg-[#0a2540] transition-colors mt-6 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE EURO EDGE
      ========================================= */}
      <section className="py-16 px-4 lg:px-12 bg-slate-50/70 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              COMPETITIVE EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
              WHY CHOOSE EURO EDGE
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              We stand out by delivering precision engineering, rapid response, and transparent contracting across Dubai and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                tag: "Certified Engineers",
                title: "Skilled Professionals",
                desc: "Our team consists of highly trained engineers and skilled technicians dedicated to top-quality execution.",
                icon: Users,
              },
              {
                num: "02",
                tag: "Premium Grade",
                title: "Quality Materials",
                desc: "We utilize premium grade materials and parts from trusted suppliers to ensure long-lasting operational results.",
                icon: Award,
              },
              {
                num: "03",
                tag: "Strict SLA",
                title: "Timely Delivery",
                desc: "We value client schedules and ensure every project is delivered on time without compromising on quality.",
                icon: Clock,
              },
              {
                num: "04",
                tag: "Transparent Rates",
                title: "Competitive Pricing",
                desc: "Cost-effective technical solutions with completely transparent quotations to ensure maximum value.",
                icon: Sparkles,
              },
              {
                num: "05",
                tag: "Safety Standard",
                title: "Safety Compliance",
                desc: "Safety is our top priority. We strictly adhere to industry safety guidelines and operational protocols.",
                icon: ShieldCheck,
              },
              {
                num: "06",
                tag: "Client First",
                title: "Customer Satisfaction",
                desc: "Committed to exceeding expectations through reliable service, open communication, and careful attention to detail.",
                icon: Handshake,
              },
              {
                num: "07",
                tag: "State-of-the-Art",
                title: "Modern Equipment",
                desc: "Utilizing advanced diagnostic tools and modern technical equipment for high-precision workmanship.",
                icon: Cog,
              },
              {
                num: "08",
                tag: "Tailored Scope",
                title: "Customized Solutions",
                desc: "Every property is unique; our engineering scopes are customized to match specific technical requirements.",
                icon: Settings,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-l-4 hover:border-l-[#0a2540] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shadow-xs">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60">
                      {item.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a2540] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 inline-block mb-3">
                    {item.tag}
                  </span>

                  <h3 className="font-mono font-bold text-foreground text-xs uppercase tracking-wider group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          OPERATIONAL LEADERSHIP TEAM
      ========================================= */}
      <section className="py-16 px-4 lg:px-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fbb03b]">
              OPERATIONAL LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
              OUR TECHNICAL MANAGEMENT TEAM
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
              Dedicated engineering managers and site supervisors driving operational excellence across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Operations Manager */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#0a2540] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                <UserCheck className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">Pranoydas Mullasseri</h3>
              <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mt-1">Operations Manager</p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-muted-foreground font-sans">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href="tel:+9710543909946" className="hover:text-foreground transition-colors">+971 054 390 9946</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:info@euroedgets.com" className="hover:text-foreground transition-colors">info@euroedgets.com</a>
                </div>
              </div>
            </div>

            {/* Technical Lead */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#0a2540] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                <UserCog className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">Sanal Ponnakkan</h3>
              <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mt-1">MEP &amp; HVAC Lead Engineer</p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-muted-foreground font-sans">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href="tel:+9710507860995" className="hover:text-foreground transition-colors">+971 050 786 0995</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:info@euroedgets.com" className="hover:text-foreground transition-colors">info@euroedgets.com</a>
                </div>
              </div>
            </div>

            {/* Site Supervisor */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#0a2540] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                <Wrench className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">Sanal N.</h3>
              <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mt-1">Senior Site Supervisor</p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-muted-foreground font-sans">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href="tel:+9710543909946" className="hover:text-foreground transition-colors">+971 054 390 9946</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:info@euroedgets.com" className="hover:text-foreground transition-colors">info@euroedgets.com</a>
                </div>
              </div>
            </div>
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
