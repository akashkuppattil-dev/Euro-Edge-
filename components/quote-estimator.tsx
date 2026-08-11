"use client"

import React, { useState } from "react"
import { ServiceItem } from "@/lib/services-data"
import {
  Wrench,
  Building2,
  Home,
  Hotel,
  Warehouse,
  Zap,
  Droplet,
  Fan,
  Hammer,
  Boxes,
  CheckCircle2,
  Clock,
  Send,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Calculator,
  ShieldCheck,
} from "lucide-react"

const propertyTypes = [
  { id: "villa", name: "Residential Villa", icon: Home, desc: "Private villas, townhouses" },
  { id: "commercial", name: "Commercial Office / Tower", icon: Building2, desc: "Corporate suites & towers" },
  { id: "hospitality", name: "Hotel / Restaurant / F&B", icon: Hotel, desc: "Hotels, dining & retail" },
  { id: "warehouse", name: "Warehouse / Industrial", icon: Warehouse, desc: "Logistics & factories" },
]

const serviceCategories = [
  { id: "hvac", name: "HVAC & AC Maintenance", icon: Fan, estRange: "AED 350 - 1,500" },
  { id: "electrical", name: "Electrical Contracting & DEWA", icon: Zap, estRange: "AED 450 - 2,200" },
  { id: "plumbing", name: "Plumbing & Sanitary Works", icon: Droplet, estRange: "AED 300 - 1,200" },
  { id: "fitout", name: "Civil & Interior Fit-Out", icon: Hammer, estRange: "Custom Scope" },
  { id: "amc", name: "Annual Maintenance (AMC)", icon: Boxes, estRange: "From AED 2,400/yr" },
]

const urgencyOptions = [
  { id: "emergency", name: "Emergency Dispatch (15-30 mins)", badge: "24/7 Priority" },
  { id: "today", name: "Same Day Inspection", badge: "Fast Track" },
  { id: "scheduled", name: "Scheduled Project (Next 7 Days)", badge: "Standard" },
  { id: "amc_quote", name: "Annual Facility Contract (B2B)", badge: "Contract" },
]

interface QuoteEstimatorProps { servicesData: ServiceItem[] }
export function QuoteEstimator({ servicesData }: QuoteEstimatorProps) {
  const [step, setStep] = useState(1)
  const [selectedProperty, setSelectedProperty] = useState("villa")
  const [selectedService, setSelectedService] = useState("hvac")
  const [selectedUrgency, setSelectedUrgency] = useState("emergency")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const activeServiceObj = serviceCategories.find((s) => s.id === selectedService)
  const activePropertyObj = propertyTypes.find((p) => p.id === selectedProperty)

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const text = encodeURIComponent(
      `Hello Euro Edge Technical Services!\n\nI would like an instant technical quote:\n- *Property:* ${activePropertyObj?.name}\n- *Service:* ${activeServiceObj?.name}\n- *Urgency:* ${selectedUrgency}\n- *Name:* ${name}\n- *Phone:* ${phone}\n- *Location:* ${location}`
    )
    window.open(`https://wa.me/9710543909946?text=${text}`, "_blank")
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-2xl relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Technical Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            Calculate Project Scope &amp; Quote
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Get an instant estimated scope range for your property in Dubai &amp; the UAE.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === s
                  ? "bg-primary text-primary-foreground shadow-md scale-110"
                  : step > s
                  ? "bg-emerald-500 text-white"
                  : "bg-secondary text-muted-foreground border border-border"
              }`}
            >
              {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: Select Property & Service */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
              1. Select Property Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {propertyTypes.map((p) => {
                const Icon = p.icon
                const isSelected = selectedProperty === p.id
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setSelectedProperty(p.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-primary/10 border-primary shadow-md text-foreground"
                        : "bg-secondary/50 border-border hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-primary" : ""}`} />
                    <div className="font-bold text-sm text-foreground">{p.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{p.desc}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
              2. Select Required Technical Service:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceCategories.map((s) => {
                const Icon = s.icon
                const isSelected = selectedService === s.id
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-primary/10 border-primary shadow-md text-foreground"
                        : "bg-secondary/50 border-border hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : ""}`} />
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border">
                        {s.estRange}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-foreground">{s.name}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
            >
              <span>Next: Service Urgency</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Urgency & Estimated Budget */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
              3. Service Urgency &amp; Response Requirement:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {urgencyOptions.map((u) => {
                const isSelected = selectedUrgency === u.id
                return (
                  <button
                    type="button"
                    key={u.id}
                    onClick={() => setSelectedUrgency(u.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-primary/10 border-primary shadow-md text-foreground"
                        : "bg-secondary/50 border-border hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="font-bold text-sm text-foreground">{u.name}</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {u.badge}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Estimate summary banner */}
          <div className="p-5 rounded-2xl bg-secondary border border-border space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <span>Estimated Scope Summary:</span>
              <span className="text-primary font-mono">{activeServiceObj?.estRange}</span>
            </div>
            <div className="text-sm font-semibold text-foreground">
              {activePropertyObj?.name} &bull; {activeServiceObj?.name}
            </div>
            <p className="text-xs text-muted-foreground">
              Includes initial engineering inspection, DEWA standard compliance check, and certified technical team dispatch.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-xl border border-border text-foreground font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
            >
              <span>Next: Request Priority Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Contact & Direct Dispatch */}
      {step === 3 && (
        <form onSubmit={handleWhatsAppSend} className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ahmed Al-Maktoum"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                WhatsApp / Mobile Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                Dubai Area / Location *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Dubai Marina, Business Bay"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-600 dark:text-emerald-400 text-xs">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <span>
              Direct line to Operations Manager (Pranoydas Mullasseri). 100% confidential &amp; zero obligation.
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-5 py-2.5 rounded-xl border border-border text-foreground font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Request Quote on WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
