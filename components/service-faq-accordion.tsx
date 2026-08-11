"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  q: string
  a: string
}

export function ServiceFaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const additionalFaqs: FAQItem[] = [
    {
      q: "How do I request a technical site inspection & formal quotation for Euro Edge services in Dubai?",
      a: "You can request a free technical consultation by submitting our fast quote form, calling +971 054 390 9946 directly, or messaging us on WhatsApp. Our engineers conduct initial site evaluations across Dubai to provide transparent, itemized proposals with zero hidden fees.",
    },
    {
      q: "Does Euro Edge provide Annual Maintenance Contracts (AMC) with 24/7 emergency response?",
      a: "Yes. We offer customized Annual Maintenance Contracts (AMC) for residential villas, commercial offices, retail shops, and facilities across Dubai. Our AMC packages cover bi-annual preventive maintenance audits, priority 30-minute emergency callouts, and discounted replacement parts.",
    },
  ]

  const displayFaqs = faqs ? [...faqs, ...additionalFaqs.slice(0, Math.max(0, 5 - faqs.length))] : additionalFaqs

  if (!displayFaqs || displayFaqs.length === 0) return null

  return (
    <section className="py-12 sm:py-16 px-4 lg:px-12 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Centered Header */}
        <div className="text-center space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Got questions? Here are clear technical answers directly from our engineering operations in Dubai.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
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
                  <span className="font-serif font-bold text-sm sm:text-base text-foreground pr-2 leading-snug">
                    {faq.q}
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
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pt-3 sm:pt-4">
                      {faq.a}
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
