"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Minus, HelpCircle, Phone, ArrowRight, MessageCircle } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is included in Euro Edge's Annual Maintenance Contract (AMC) for villas & commercial properties?",
    answer:
      "Our Annual Maintenance Contracts (AMC) cover bi-annual comprehensive HVAC/AC servicing, electrical distribution panel audits, plumbing and drainage inspections, emergency leak and power callouts, priority 30-minute response guarantees, and discounts on replacement parts. Packages can be tailored for private residential villas, corporate offices, or entire facility complexes in Dubai.",
  },
  {
    id: 2,
    question: "How fast is Euro Edge's emergency technical callout response time in Dubai?",
    answer:
      "For urgent technical emergencies such as power trips, water pipe bursts, or central AC failures, our emergency rapid response crews arrive on-site within 30 to 45 minutes anywhere in Dubai, 24 hours a day, 7 days a week.",
  },
  {
    id: 3,
    question: "Are your engineers and technicians certified by DEWA & Dubai Municipality?",
    answer:
      "Yes, 100%. All Euro Edge engineers, electricians, plumbers, HVAC specialists, and site supervisors are certified, highly experienced, and operate strictly in accordance with DEWA (Dubai Electricity and Water Authority), Dubai Municipality, and Civil Defense safety standards.",
  },
  {
    id: 4,
    question: "Can Euro Edge handle custom interior fit-out, false ceiling, and renovation works?",
    answer:
      "Yes. In addition to hard facility maintenance, we deliver complete interior fit-outs including gypsum false ceiling installation, acoustic light partitions, marble and porcelain floor tiling, custom wooden carpentry, kitchen fitting, and MEP integration for villas, retail shops, and corporate suites.",
  },
  {
    id: 5,
    question: "How do I request a technical site inspection or get a customized quotation?",
    answer:
      "You can request a free technical consultation by filling out our online contact form, calling us directly at +971 054 390 9946, or sending us a message on WhatsApp. Our engineering team conducts initial site evaluations across Dubai to provide transparent, detailed proposals.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-10 sm:py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
            Find answers to common questions about our technical services, AMC maintenance packages, emergency callouts, and local UAE regulatory compliance.
          </p>
        </div>

        {/* 5 Interactive Accordion Questions */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/40 shadow-md ring-1 ring-primary/20"
                    : "bg-card border-border hover:border-border/80 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-lg text-foreground pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 border-t border-border/40 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pt-3 sm:pt-4">
                      {faq.answer}
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
