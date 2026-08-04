"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Building } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] lg:h-[50vh] flex items-center overflow-hidden bg-background text-foreground border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dubai.png"
            alt="Contact Euro Edge Technical Services L.L.C."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 w-full text-center px-4 max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans font-bold">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground mt-3 tracking-tight italic">
            Contact Euro Edge
          </h1>
          <p className="mt-4 text-muted-foreground text-sm font-sans max-w-lg mx-auto leading-relaxed">
            Reach out for project inquiries, technical evaluations, MEP consultations, or emergency facility support in Dubai.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Details */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans font-bold">
              Engineering Assistance
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mt-3 tracking-tight">
              We are ready to assist your projects
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed font-sans max-w-md">
              Whether you need project estimations, technical consultations, or facility management support, our engineering team is ready to assist.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-sans">Phone / WhatsApp</h3>
                  <a href="tel:+9710543909946" className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-primary transition-colors">
                    +971 054 390 9946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-sans">General & Operations Email</h3>
                  <a href="mailto:info@euroedgets.com" className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-primary transition-colors block">
                    info@euroedgets.com
                  </a>
                  <a href="mailto:pranoy@euroedgets.com" className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors block">
                    pranoy@euroedgets.com (Operations)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-sans">Official Website</h3>
                  <a href="https://www.euroedgets.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-primary transition-colors">
                    www.euroedgets.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-sans">Location</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 font-sans">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-sans">Working Hours</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 font-sans">Mon - Sat, 8:00 AM - 6:00 PM GST</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/9710543909946?text=Hi%20Euro%20Edge%2C%20I%20would%20like%20to%20inquire%20about%20your%20technical%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-[#25d366] text-white text-xs tracking-[0.15em] uppercase font-bold font-sans rounded-xl hover:bg-[#1ebe5a] transition-all duration-300 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Direct WhatsApp Inquiry
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-foreground font-bold">Thank You!</h3>
                <p className="mt-3 text-muted-foreground text-sm font-sans max-w-sm leading-relaxed">
                  Your project inquiry has been received by Euro Edge Technical Services L.L.C. Our engineering team will contact you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
                  }}
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-primary hover:underline font-sans font-semibold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-foreground font-bold">Send Us a Technical Inquiry</h3>
                <p className="mt-2 text-muted-foreground text-sm font-sans">
                  Fill in the details below and our technical team will respond with a quotation.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
                        Full Name / Company
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your name or company"
                      />
                    </div>
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
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="+971 00 000 0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
                        Select Service Line
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      >
                        <option value="">Choose a Service Line</option>
                        <option value="electrical">Electrical Works</option>
                        <option value="plumbing">Plumbing & Sanitary</option>
                        <option value="hvac">HVAC & Air-Conditioning</option>
                        <option value="ceiling">False Ceiling & Partitions</option>
                        <option value="tiling">Floor & Wall Tiling</option>
                        <option value="carpentry">Carpentry & Wood Flooring</option>
                        <option value="pool">Swimming Pool Maintenance</option>
                        <option value="kitchen">Kitchen Installation</option>
                        <option value="glass">Aluminium & Glass</option>
                        <option value="building">Building Maintenance</option>
                        <option value="mep">MEP Contracting</option>
                        <option value="civil">Civil Maintenance</option>
                        <option value="facility">Facility Management</option>
                        <option value="industrial">Industrial Maintenance</option>
                        <option value="other">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs tracking-[0.1em] uppercase text-foreground/80 font-sans font-semibold mb-2 block">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Specify project scope, location, and technical requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-bold font-sans rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Technical Inquiry
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
