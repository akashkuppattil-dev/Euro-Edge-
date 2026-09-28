"use client"

import React from "react"
import { ContactForm } from "@/components/contact-form"

interface ConnectSectionProps {
  title?: string
  className?: string
}

export function ConnectSection({
  title,
  className = "",
}: ConnectSectionProps) {
  return (
    <section data-section="connect-form" className={`py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div data-anim="form-card" className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          {/* Heading placed directly on the top of the form (optional) */}
          {title && (
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-editorial-h1 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] tracking-tight">
                {title}
              </h2>
            </div>
          )}

          {/* Form */}
          <ContactForm showHeading={false} />
        </div>
      </div>
    </section>
  )
}

