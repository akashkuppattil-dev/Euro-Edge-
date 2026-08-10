import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ContactForm } from "@/components/contact-form"
import {
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Headphones,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Euro Edge Technical Services L.L.C.",
  description:
    "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, maintenance and facility management enquiries.",
  alternates: {
    canonical: "https://euroedgets.com/contact",
  },
  openGraph: {
    title: "Contact Us | Euro Edge Technical Services L.L.C.",
    description:
      "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, maintenance and facility management enquiries.",
    type: "website",
    url: "https://euroedgets.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Euro Edge Technical Services L.L.C.",
    description:
      "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, maintenance and facility management enquiries.",
  },
}

export default function ContactPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* =========================================
          1. HERO SECTION (Clean Light Style - No Image)
      ========================================= */}
      <section className="py-14 sm:py-18 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 lg:px-12 max-w-7xl mx-auto space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
            Contact Us
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-xl leading-relaxed font-medium">
            Have a technical requirement, MEP project, maintenance request, or service enquiry? Our team is ready to discuss your requirements and provide professional technical support across Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          2 & 3 & 4. CONTACT INFORMATION + FORM + WHATSAPP CTA
      ========================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN (Contact Info & WhatsApp CTA) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                REACH OUR TEAM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Let's Talk About Your Project
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
                Whether you need technical contracting, MEP installation, HVAC maintenance, electrical works, plumbing, civil works, or facility support, Euro Edge is ready to assist.
              </p>
            </div>

            {/* Contact Information Rows */}
            <div className="space-y-5 pt-1 border-t border-border/80">

              {/* Contact Person */}
              <div className="flex items-start gap-4 pt-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    CONTACT PERSON
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Pranoydas Mullasseri
                  </span>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    Operations Manager
                  </span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    PHONE / WHATSAPP
                  </span>
                  <a
                    href="tel:+9710543909946"
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                  >
                    +971 054 390 9946
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:info@euroedgets.com"
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                  >
                    info@euroedgets.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    LOCATION
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    WORKING HOURS
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Mon – Sat, 8:00 AM – 6:00 PM GST
                  </span>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    24/7 Emergency Dispatch Available
                  </span>
                </div>
              </div>

            </div>

            {/* 3. FEATURED WHATSAPP CTA BLOCK */}
            <div className="p-6 rounded-2xl bg-[#0a2540] text-white space-y-4 border border-white/10 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25d366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </div>
                <h3 className="text-base font-serif font-bold text-white">
                  Need a Quick Response?
                </h3>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                For urgent enquiries and service requirements, contact Euro Edge directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/971543909946"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-[#25d366] hover:bg-[#1ebe5a] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN (ENQUIRY FORM CARD) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-sm">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          6. MAP / LOCATION SECTION
      ========================================= */}
      <section className="py-12 sm:py-16 px-4 lg:px-12 bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
              OUR SERVICE AREA
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Serving Dubai &amp; the UAE
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Euro Edge Technical Services L.L.C. proudly provides technical contracting, MEP installation, and facility maintenance throughout Dubai and all Emirates.
            </p>
          </div>

          {/* Architectural Location Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground mt-0.5">
                  Dubai, United Arab Emirates
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Deploying certified technical crews across all major commercial and residential districts in Dubai.
                </p>
              </div>
            </div>

            <a
              href="tel:+9710543909946"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Operations (+971 054 390 9946)</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          7. TRUST / SERVICE CTA
      ========================================= */}
      <section className="py-14 sm:py-18 px-4 lg:px-12 bg-background border-t border-border text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Ready to Build, Maintain &amp; Improve?
          </h2>
          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed font-sans">
            From technical installations to ongoing maintenance, Euro Edge delivers dependable solutions built around quality, safety and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#service"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-card border border-border text-foreground hover:text-primary font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>VIEW OUR SERVICES</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}