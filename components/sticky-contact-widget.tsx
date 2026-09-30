"use client"

import { useState } from "react"
import { Phone, X, Send, ChevronDown } from "lucide-react"
import { servicesData } from "@/lib/services-data"

// WhatsApp SVG icon
function WAIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

export function StickyContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [enquiryType, setEnquiryType] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")

  const handleWhatsAppSend = () => {
    const phoneNumber = "971543909946"
    let message = "Hi Euro Edge, "

    if (enquiryType === "service") {
      message += `I would like to enquire about your service: ${selectedService || "General Services"}.`
    } else if (enquiryType === "general") {
      message += "I have a general enquiry about your company."
    } else if (enquiryType === "other") {
      message += "I have some other questions and need assistance."
    } else {
      message += "I need some technical assistance/quotation in Dubai."
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const canSend = enquiryType && !(enquiryType === "service" && !selectedService)

  return (
    <div className="fixed bottom-[max(24px,env(safe-area-inset-bottom,24px))] right-4 z-50 flex flex-col items-end gap-2.5 sm:gap-3 sm:right-6 sm:bottom-6">

      {/* ── WhatsApp Chat Popup (Normal Clean Chat Card) ── */}
      {isOpen && (
        <div className="mb-2 animate-in slide-in-from-bottom-3 fade-in duration-200 origin-bottom-right">
          <div className="w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col">
            {/* Header bar */}
            <div className="bg-[#128C7E] px-4 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#075E54] border border-white/20 flex items-center justify-center shrink-0">
                  <WAIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">Euro Edge Support</p>
                  <p className="text-[11px] text-white/85 flex items-center gap-1.5 leading-tight mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#25d366] inline-block" />
                    <span>Online • Instant Reply</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/15 transition-colors text-white"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body (Clean normal background) */}
            <div className="bg-[#f8fafc] p-4 flex flex-col gap-3">
              {/* Date chip */}
              <div className="flex justify-center">
                <span className="bg-white text-slate-500 text-[10px] px-3 py-0.5 rounded-full font-medium border border-slate-200/70 shadow-2xs">
                  Today
                </span>
              </div>

              {/* Message Bubble */}
              <div className="flex items-start gap-2 max-w-[90%]">
                <div className="w-6 h-6 rounded-full bg-[#075E54] flex items-center justify-center shrink-0 mt-0.5">
                  <WAIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-xs p-3 border border-slate-200/80 shadow-2xs">
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    👋 Hello! How can Euro Edge assist your project today?
                  </p>
                  <span className="text-[10px] text-slate-400 float-right mt-1">Just now</span>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs space-y-2 mt-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  I need assistance with:
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#128C7E]/30 cursor-pointer"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                  >
                    <option value="" disabled>Select inquiry option...</option>
                    <option value="service">Specific Service Inquiry</option>
                    <option value="general">General Commercial Inquiry</option>
                    <option value="other">Request a Free Site Quote</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                </div>

                {enquiryType === "service" && (
                  <div className="pt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Select Division / Service:
                    </label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#128C7E]/30 cursor-pointer"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="" disabled>Select service...</option>
                        {servicesData.map((srv) => (
                          <option key={srv.slug} value={srv.title}>{srv.title}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input & Send Bar */}
            <div className="bg-white px-3.5 py-3 flex items-center gap-2 border-t border-slate-200/90">
              <div className="flex-1 bg-slate-100 rounded-full px-3.5 py-2 text-xs text-slate-700 truncate">
                {canSend
                  ? enquiryType === "service"
                    ? `Service: ${selectedService}`
                    : enquiryType === "general"
                    ? "General Enquiry"
                    : "Request a Free Site Quote"
                  : "Select an option above to chat..."}
              </div>
              <button
                onClick={handleWhatsAppSend}
                disabled={!canSend}
                className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all duration-200 ${
                  canSend
                    ? "bg-[#25d366] hover:bg-[#128C7E] text-white shadow-md active:scale-95 cursor-pointer"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
                aria-label="Start WhatsApp Chat"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FAB Buttons ── */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {/* Phone Call Button */}
        <a
          href="tel:+971543909946"
          className="group relative items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all duration-200 flex"
          aria-label="Call Euro Edge Technical Services: +971 54 390 9946"
        >
          <Phone className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
          <span className="absolute right-[4.5rem] whitespace-nowrap bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
            Call: +971 54 390 9946
          </span>
        </a>

        {/* WhatsApp Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full text-white shadow-xl hover:scale-105 transition-all duration-300 ${
            isOpen ? "bg-slate-700 scale-90" : "bg-[#25d366] hover:bg-[#128C7E]"
          }`}
          aria-label="Chat on WhatsApp with Euro Edge"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <WAIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          )}
          {!isOpen && (
            <span className="absolute right-[5rem] whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden sm:block">
              Chat on WhatsApp
            </span>
          )}
          {/* Pulse ring when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20 pointer-events-none" />
          )}
        </button>
      </div>
    </div>
  )
}
