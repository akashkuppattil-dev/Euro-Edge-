"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { Briefcase, Send, CheckCircle2, Mail, Phone, MapPin, Users, Award, ShieldCheck } from "lucide-react"

export default function CareersPage() {
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

  const openPositions = [
    {
      title: "MEP Engineer / Site Supervisor",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Min 3+ years UAE experience in MEP contracting, DEWA regulations knowledge, site management skills.",
    },
    {
      title: "HVAC & AC Senior Technician",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Expertise in Central AC, FCU, AHU, split units troubleshooting, gas charging, and duct repair.",
    },
    {
      title: "Licensed Electrician",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Testing, commissioning, DB panel wiring, lighting fixtures, and DEWA safety standards.",
    },
    {
      title: "Plumbing & Sanitaryware Specialist",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Piping installations, high-pressure pump maintenance, leak diagnostics, and sanitaryware fitting.",
    },
    {
      title: "Tile Setter & Masonry Specialist",
      location: "Dubai, UAE",
      type: "Full-Time",
      reqs: "Precision wall & floor tiling (marble, porcelain), plastering, and civil repair works.",
    },
  ]

  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Join Euro Edge Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-3">
            Careers at Euro Edge
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Build your career with one of Dubai's fastest-growing technical services and facility management companies. We empower skilled professionals, engineers, and technicians.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Culture</span>
            <h2 className="text-3xl font-serif font-bold text-foreground">Why Build Your Career With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Growth",
                desc: "Work on prestigious commercial, residential, and industrial technical contracts across Dubai.",
                icon: Award,
              },
              {
                title: "Safety & Integrity",
                desc: "We follow strict UAE safety guidelines, providing top-grade personal protective equipment and training.",
                icon: ShieldCheck,
              },
              {
                title: "Competitive Rewards",
                desc: "Attractively structured compensation, performance incentives, and comprehensive benefits.",
                icon: Users,
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-card border border-border shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Openings & Application Form */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Active Job Openings */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Opportunities</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mt-1">Open Positions in Dubai</h2>
            </div>

            <div className="space-y-4">
              {openPositions.map((pos, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{pos.title}</h3>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-secondary text-primary">
                      {pos.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pos.reqs}</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pos.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-md">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-foreground font-bold">Application Received!</h3>
                <p className="mt-3 text-muted-foreground text-sm font-sans max-w-sm leading-relaxed">
                  Thank you for applying to Euro Edge Technical Services L.L.C. Our HR team will review your details and contact shortlisted candidates.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: "", email: "", phone: "", role: "", experience: "", message: "" })
                  }}
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-primary hover:underline font-sans font-semibold transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-foreground font-bold">Apply for a Position</h3>
                <p className="mt-2 text-muted-foreground text-sm font-sans">
                  Submit your details below or email your CV directly to <a href="mailto:info@euroedgets.com" className="text-primary underline">info@euroedgets.com</a>.
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
                        <option value="mason">Tile Setter & Mason</option>
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
            )}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
