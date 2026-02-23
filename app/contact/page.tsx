"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { Instagram, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] lg:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/product-3.png"
            alt="Contact JOOHAA LUXE"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <div className="relative z-10 w-full text-center px-4">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground mt-3 tracking-tight italic">
            Contact Us
          </h1>
          <p className="mt-4 text-primary-foreground/60 text-sm font-sans max-w-md mx-auto leading-relaxed">
            We would love to hear from you. Reach out for orders, queries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Details */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-sans">
              Reach Out
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mt-3 tracking-tight">
              We are here to help
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed font-sans max-w-md">
              Whether you need help choosing the right size, have questions about our fabrics, 
              or want to place a bulk order, our team is ready to assist.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground font-sans">Phone / WhatsApp</h3>
                  <a href="tel:+919876543210" className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-foreground transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground font-sans">Email</h3>
                  <a href="mailto:hello@joohaaluxe.com" className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-foreground transition-colors">
                    hello@joohaaluxe.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground font-sans">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/joohaa__luxe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground mt-0.5 font-sans hover:text-foreground transition-colors"
                  >
                    @joohaa__luxe
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground font-sans">Location</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 font-sans">India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground font-sans">Working Hours</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 font-sans">Mon - Sat, 10 AM - 7 PM IST</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20JOOHAA%20LUXE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-[#25d366] text-white text-xs tracking-[0.15em] uppercase font-medium font-sans rounded-full hover:bg-[#1ebe5a] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Thank You!</h3>
                <p className="mt-3 text-muted-foreground text-sm font-sans max-w-sm leading-relaxed">
                  Your message has been received. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                  }}
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-accent hover:text-accent/80 font-sans font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-foreground">Send Us a Message</h3>
                <p className="mt-2 text-muted-foreground text-sm font-sans">
                  Fill in the form below and we will respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans mb-2 block">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans mb-2 block">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans mb-2 block">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans mb-2 block">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="order">Order Enquiry</option>
                        <option value="size">Size Guide Help</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="return">Return / Exchange</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans mb-2 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-12 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight">
            Frequently Asked
          </h2>
          <div className="mt-10 flex flex-col gap-6 text-left">
            {[
              {
                q: "What is your return policy?",
                a: "We offer a 7-day easy return policy. If you are not satisfied with your purchase, simply reach out to us and we will arrange a return or exchange.",
              },
              {
                q: "Do you ship across India?",
                a: "Yes! We offer pan-India shipping. Orders are dispatched within 24-48 hours and typically delivered within 5-7 business days.",
              },
              {
                q: "Is COD available?",
                a: "Absolutely. Cash on Delivery is available for orders across India. We also accept UPI, card payments, and net banking.",
              },
              {
                q: "How do I choose the right size?",
                a: "All our maxi nighties and kaftans come in free size that fits most body types comfortably. For pajama sets, please refer to our size guide on each product page.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-5 lg:p-6">
                <h3 className="text-sm font-medium text-foreground font-sans">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
