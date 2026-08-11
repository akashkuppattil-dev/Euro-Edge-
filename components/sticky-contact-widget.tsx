"use client"

import { useState } from "react"
import { Phone, MessageCircle, X, Send, ChevronDown } from "lucide-react"
import { servicesData } from "@/lib/services-data"

export function StickyContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [enquiryType, setEnquiryType] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")

  const handleWhatsAppSend = () => {
    const phoneNumber = "9710543909946"
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

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
      
      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="w-[320px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-200 origin-bottom-right mb-2">
          {/* Header */}
          <div className="bg-[#128C7E] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Euro Edge Support</h4>
                <p className="text-[10px] text-white/80 uppercase tracking-wider">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-5 bg-slate-50/50 space-y-4">
            <div className="bg-white p-3 rounded-xl rounded-tl-sm border border-slate-100 shadow-sm text-sm text-slate-700 w-[90%]">
              Hello! 👋 How can we help you today? Please let us know below.
            </div>

            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">I need help with:</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#128C7E]/20 focus:border-[#128C7E] transition-all cursor-pointer shadow-sm"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="service">Need a specific Service</option>
                    <option value="general">General Enquiry</option>
                    <option value="other">Something Else</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {enquiryType === "service" && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Which service?</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#128C7E]/20 focus:border-[#128C7E] transition-all cursor-pointer shadow-sm"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" disabled>Select a service...</option>
                      {servicesData.map((srv) => (
                        <option key={srv.slug} value={srv.title}>{srv.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-white border-t border-border">
            <button
              onClick={handleWhatsAppSend}
              disabled={!enquiryType || (enquiryType === "service" && !selectedService)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span>Start Chat</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {/* 24/7 Emergency Call Button - Hidden on Mobile */}
        <a
          href="tel:+9710543909946"
          className="group relative items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all duration-200 hidden sm:flex"
          aria-label="24/7 Emergency Technical Support Dubai"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
          <span className="absolute right-[4.5rem] whitespace-nowrap bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            24/7 Support: +971 054 390 9946
          </span>
        </a>

        {/* WhatsApp Chat Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? "bg-slate-800 scale-90 rotate-90" : "bg-[#25d366]"}`}
          aria-label="Chat on WhatsApp with Euro Edge"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
          )}
          
          {!isOpen && (
            <span className="absolute right-[5rem] whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden sm:block">
              Chat on WhatsApp
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
