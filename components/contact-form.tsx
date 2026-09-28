"use client"

import React, { useState } from "react"
import { Send, CheckCircle2, Loader2, Lock } from "lucide-react"

interface ContactFormProps {
  showHeading?: boolean
}

export function ContactForm({ showHeading = true }: ContactFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general",
    location: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    // Basic Validation — Only Name and Phone/WhatsApp (or Email) required
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      setErrorMsg("Please enter your name and phone/WhatsApp number or email.")
      return
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setErrorMsg("Please enter a valid email address.")
        return
      }
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xanwzowr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitted(true)
      } else {
        const data = await response.json()
        const serverError =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Submission failed. Please try again or contact us directly."
        setErrorMsg(serverError)
        setIsSubmitting(false)
      }
    } catch {
      setErrorMsg(
        "Network error — please check your connection and try again, or contact us directly at info@euroedgets.com"
      )
      setIsSubmitting(false)
    }
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
              email: "",
              phone: "",
              service: "general",
              location: "",
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
      {showHeading && (
        <div className="mb-6">
          <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">
            Send Us a Technical Inquiry
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm font-sans mt-1.5 leading-relaxed">
            Tell us about your requirement and our team will get back to you.
          </p>
        </div>
      )}

      {errorMsg && (
        <div className="mb-5 p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
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

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
              Email Address (Optional)
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              placeholder="+971 54 390 9946"
            />
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="service" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
            Service Required (Optional)
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          >
            <option value="general">General Technical Inquiry</option>

            <optgroup label="Our Main Services">
              <option value="Painting – Interior & Exterior">Painting – Interior & Exterior</option>
              <option value="Wall & Floor Tiling">Wall & Floor Tiling</option>
              <option value="Plastering">Plastering</option>
              <option value="False Ceiling & Gypsum Partitions">False Ceiling & Gypsum Partitions</option>
              <option value="Carpentry & Wood Flooring">Carpentry & Wood Flooring</option>

              <option value="Electrical Works">Electrical Works</option>
              <option value="Plumbing & Sanitary Works">Plumbing & Sanitary Works</option>
              <option value="AC & HVAC Works">AC & HVAC Works</option>
              <option value="Ventilation & Air Filtration">Ventilation & Air Filtration</option>
              <option value="Electromechanical Works">Electromechanical Works</option>

              <option value="Pool Construction">Pool Construction</option>
              <option value="Waterproofing">Waterproofing</option>
              <option value="Pool Tiling & Finishing">Pool Tiling & Finishing</option>
              <option value="Pool Equipment Installation">Pool Equipment Installation</option>
              <option value="Pool Maintenance">Pool Maintenance</option>

              <option value="Soft & Hard Landscaping">Soft & Hard Landscaping</option>
              <option value="Paving & Interlock">Paving & Interlock</option>
              <option value="Irrigation">Irrigation</option>
              <option value="Garden & Outdoor Works">Garden & Outdoor Works</option>
              <option value="Landscape Maintenance">Landscape Maintenance</option>

              <option value="Building & Villa Maintenance">Building & Villa Maintenance</option>
              <option value="Renovation & Repair Works">Renovation & Repair Works</option>
            </optgroup>

            <option value="other">Other / Custom Technical Solution</option>
          </select>
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
            Project Location (Optional)
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="e.g., Dubai Marina, Business Bay, Al Quoz..."
          />
        </div>

        {/* Project Details / Requirements */}
        <div>
          <label htmlFor="message" className="text-[11px] font-bold text-foreground font-sans block mb-1.5">
            Project Details / Requirements (Optional)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-xs font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            placeholder="Describe your location, technical requirements, project timeline, or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 mt-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
