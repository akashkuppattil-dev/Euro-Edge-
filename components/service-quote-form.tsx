"use client"

import { useState } from "react"
import { Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react"

export function ServiceQuoteForm({ serviceTitle }: { serviceTitle: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Villa / Residential",
    location: "Dubai",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 sticky top-28">
      <div className="space-y-1">
        <h3 className="text-xl font-serif font-bold text-foreground tracking-tight">
          Inquire About {serviceTitle}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Request a free technical site inspection and official quotation across Dubai.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-serif font-bold text-emerald-900 text-base">Inquiry Received!</h4>
          <p className="text-xs text-emerald-700 leading-relaxed font-sans">
            Thank you! Our engineering team will contact you back within 30 minutes regarding your {serviceTitle} project.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono font-bold text-emerald-800 underline hover:text-emerald-950 pt-2 block mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mohammed Al-Maktoum"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="+971 54 390 9946"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Property Type
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-slate-50/50"
            >
              <option>Villa / Residential</option>
              <option>Commercial / Office</option>
              <option>Retail / Shop</option>
              <option>Warehouse / Industrial</option>
              <option>Building / Facility Complex</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Area / Location
            </label>
            <input
              type="text"
              placeholder="e.g. Dubai Marina, Business Bay, Al Quoz..."
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Scope Details (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your requirements..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-slate-50/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
          >
            {loading ? (
              <span>Sending Request...</span>
            ) : (
              <>
                <span>Submit Technical Inquiry</span>
                <Send className="w-4 h-4 text-[#fbb03b]" />
              </>
            )}
          </button>
        </form>
      )}

      {/* Direct WhatsApp Link & Trust Badges */}
      <div className="pt-4 border-t border-slate-200/80 space-y-3 text-xs">
        <a
          href={`https://wa.me/9710543909946?text=Hi%20Euro%20Edge%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(serviceTitle)}%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-[#25d366] hover:bg-[#1ebe5a] text-white font-mono font-bold text-xs uppercase tracking-wider text-center block transition-colors shadow-xs"
        >
          WhatsApp Rapid Inquiry
        </a>

        <div className="space-y-2 pt-2 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#0a2540]" />
            <span>30-Minute Turnaround Response</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>DEWA &amp; Dubai Municipality Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
