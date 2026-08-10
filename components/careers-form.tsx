"use client"

import React, { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function CareersForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl text-foreground font-bold">Application Received!</h3>
        <p className="mt-3 text-muted-foreground text-sm font-sans max-w-sm leading-relaxed">
          Thank you for applying to Euro Edge Technical Services L.L.C. Our HR team will review your details and contact shortlisted candidates.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({ fullName: "", email: "", phone: "", role: "", experience: "", message: "" })
          }}
          className="mt-6 text-xs tracking-[0.15em] uppercase text-primary hover:underline font-sans font-semibold transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <>
      <h3 className="font-serif text-2xl text-foreground font-bold">Apply for a Position</h3>
      <p className="mt-2 text-muted-foreground text-sm font-sans">
        Submit your details below or email your CV directly to{" "}
        <a href="mailto:info@euroedgets.com" className="text-primary underline">
          info@euroedgets.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="fullName" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="Your full name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="+971 50 000 0000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="role" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
              Desired Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            >
              <option value="">Select Position</option>
              <option value="mep-engineer">MEP Engineer / Supervisor</option>
              <option value="hvac-tech">HVAC / AC Senior Technician</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumbing Specialist</option>
              <option value="mason">Tile Setter &amp; Mason</option>
              <option value="other">Other Technical Position</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
              UAE Experience
            </label>
            <select
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            >
              <option value="">Experience Level</option>
              <option value="1-2">1 - 2 Years UAE</option>
              <option value="3-5">3 - 5 Years UAE</option>
              <option value="5+">5+ Years UAE</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
            Summary of Qualifications
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            placeholder="Mention your certifications, visa status, notice period, and key skills..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-bold font-sans rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm"
        >
          <Send className="w-4 h-4" />
          Submit Application
        </button>
      </form>
    </>
  )
}
