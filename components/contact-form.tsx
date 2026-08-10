"use client"

import React, { useState } from "react"
import { Send, CheckCircle2, Loader2, Lock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    contactMethod: "Phone / WhatsApp",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields marked with *.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    // Simulate backend submission to info@euroedgets.com
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className="w-16 h-16 bg-[#0a2540] text-[#fbb03b] rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-white/10">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl text-foreground font-bold">Inquiry Received</h3>
        <p className="mt-3 text-muted-foreground text-sm font-sans max-w-md leading-relaxed">
          Thank you for reaching out to Euro Edge Technical Services L.L.C. Your project enquiry has been logged and sent to <span className="font-bold text-foreground">info@euroedgets.com</span>. Our Operations team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              service: "",
              location: "",
              contactMethod: "Phone / WhatsApp",
              message: "",
            })
          }}
          className="mt-6 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:underline transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">
          Send Us a Technical Inquiry
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm font-sans mt-1.5 leading-relaxed">
          Tell us about your requirement and our team will get back to you.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-5 p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="company" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Company or organization (optional)"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="+971 054 390 9946"
            />
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="service" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          >
            <option value="">Select a Service</option>
            <option value="electrical">Electrical Works</option>
            <option value="hvac">HVAC Installation &amp; Maintenance</option>
            <option value="plumbing">Plumbing &amp; Sanitary</option>
            <option value="glass">Glass &amp; Aluminum Works</option>
            <option value="ceiling">False Ceiling &amp; Light Partitions</option>
            <option value="painting">Painting Works</option>
            <option value="kitchen">Kitchen Installation</option>
            <option value="tiling">Floor &amp; Wall Tiling</option>
            <option value="facility">Facility Management</option>
            <option value="general">General Technical Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Location & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Project Location
            </label>
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="e.g., Dubai Marina, Business Bay..."
            />
          </div>

          <div>
            <label htmlFor="contactMethod" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            >
              <option value="Phone / WhatsApp">Phone / WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Any">Any Method</option>
            </select>
          </div>
        </div>

        {/* Project Details / Requirements */}
        <div>
          <label htmlFor="message" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
            Project Details / Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            placeholder="Describe your location, technical requirements, project timeline, or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 mt-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SUBMITTING INQUIRY...</span>
            </>
          ) : (
            <>
              <span>SUBMIT INQUIRY</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-sans">
          <Lock className="w-3.5 h-3.5 text-muted-foreground/70" />
          <span>Your information will only be used to respond to your enquiry.</span>
        </div>
      </form>
    </>
  )
}
