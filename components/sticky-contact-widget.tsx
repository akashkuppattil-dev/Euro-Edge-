"use client"

import { Phone, MessageCircle, ShieldAlert } from "lucide-react"

export function StickyContactWidget() {
  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {/* 24/7 Emergency Call Button */}
      <a
        href="tel:+9710543909946"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all duration-200"
        aria-label="24/7 Emergency Technical Support Dubai"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 whitespace-nowrap bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          24/7 Emergency Support: +971 054 390 9946
        </span>
      </a>

      {/* Instant WhatsApp Chat */}
      <a
        href="https://wa.me/9710543909946?text=Hi%20Euro%20Edge%2C%20I%20need%20urgent%20technical%20assistance%2Fquotation%20in%20Dubai."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25d366] text-white shadow-lg hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp with Euro Edge"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          Instant WhatsApp Support
        </span>
      </a>
    </div>
  )
}
