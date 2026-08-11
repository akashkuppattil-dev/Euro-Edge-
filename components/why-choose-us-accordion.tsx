"use client"

import { useState } from "react"
import { Sparkles, Plus, Minus, UserCheck, Award, Clock, Scale, Shield, Users } from "lucide-react"

export function WhyChooseUsAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const items = [
    {
      num: "01",
      icon: UserCheck,
      title: "Skilled Professionals & Technical Expertise",
      desc: "Our team consists of highly trained engineers and skilled technicians dedicated to top-quality execution. We invest heavily in ongoing training to ensure our staff are up-to-date with the latest engineering practices and Dubai municipality regulations, giving you complete peace of mind that your project is handled by qualified experts.",
    },
    {
      num: "02",
      icon: Award,
      title: "Quality Materials & Workmanship",
      desc: "We utilize premium grade materials and parts from trusted suppliers to ensure long-lasting operational results. Our commitment to quality workmanship means we never cut corners; every installation and repair is executed with precision to maximize durability and reduce future maintenance costs.",
    },
    {
      num: "03",
      icon: Clock,
      title: "Timely Delivery & Project Management",
      desc: "We value client schedules and ensure every project is delivered on time without compromising on quality. Our dedicated project managers oversee every phase of execution, providing regular updates and ensuring that milestones are met efficiently.",
    },
    {
      num: "04",
      icon: Scale,
      title: "Competitive & Transparent Pricing",
      desc: "We offer cost-effective technical solutions with completely transparent quotations to ensure maximum value. There are no hidden fees or surprise charges; we provide a clear, itemized breakdown of costs before any work begins, so you know exactly what you are paying for.",
    },
    {
      num: "05",
      icon: Shield,
      title: "Strict Safety Compliance",
      desc: "Safety is our top priority. We strictly adhere to industry safety guidelines and operational protocols to protect our workers, your property, and the public. Every site is rigorously assessed for risks before execution begins.",
    },
    {
      num: "06",
      icon: Users,
      title: "Dedicated Customer Satisfaction",
      desc: "We are committed to exceeding expectations through reliable service, open communication, and careful attention to detail. We build long-term relationships with our clients by ensuring their complete satisfaction at every step of the journey.",
    }
  ]

  return (
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
            We stand out by delivering excellence, reliability, and precision tailored to every client project across Dubai and the UAE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={item.num}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#0a2540]/40 shadow-md ring-1 ring-[#0a2540]/10"
                    : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-xl transition-colors shrink-0 ${isOpen ? "bg-[#0a2540]/10 text-[#0a2540]" : "bg-slate-100 text-muted-foreground"}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base lg:text-lg text-foreground leading-snug">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs font-mono font-bold text-muted-foreground/50 hidden sm:block">
                      {item.num}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#0a2540] text-white rotate-180"
                          : "bg-slate-100 text-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pt-3 sm:pt-4">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
