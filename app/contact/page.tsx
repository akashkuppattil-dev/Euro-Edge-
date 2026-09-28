import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ContactForm } from "@/components/contact-form"
import {
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Briefcase,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Euro Edge Technical Services L.L.C.",
  description:
    "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, civil finishing, and facility maintenance enquiries.",
  alternates: {
    canonical: "https://euroedgets.com/contact",
  },
  openGraph: {
    title: "Contact Us | Euro Edge Technical Services L.L.C.",
    description:
      "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, civil finishing, and facility maintenance enquiries.",
    type: "website",
    url: "https://euroedgets.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Euro Edge Technical Services L.L.C.",
    description:
      "Contact Euro Edge Technical Services L.L.C. in Dubai, UAE for technical services, MEP, HVAC, electrical, plumbing, civil finishing, and facility maintenance enquiries.",
  },
}

export default function ContactPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* =========================================
          1. HERO SECTION (Panoramic Wallpaper Background - Bottom-Aligned Text)
      ========================================= */}
      <section className="relative overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-end pb-8 sm:pb-12 lg:pb-14 pt-32 sm:pt-40 lg:pt-44 border-b border-border">
        {/* Background Wallpaper Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-bg.png"
            alt="Euro Edge Partnership Handshake Wallpaper"
            fill
            priority
            className="object-cover object-[70%_center] sm:object-[68%_center]"
            sizes="100vw"
          />
          {/* Directional and bottom gradient for optimal text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black/95 sm:via-black/60 sm:to-transparent" />
          {/* Subtle top vignette for crystal-clear navbar separation */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full container-wide max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto space-y-2 sm:space-y-3 mt-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-[1.12] sm:leading-[1.08]">
            <span className="block">Let&apos;s Talk About</span>
            <span className="text-[#fbb03b] block mt-1 sm:mt-2">Your Project</span>
          </h1>
          <p className="text-sm sm:text-base text-white/90 font-sans max-w-xl leading-relaxed">
            Tell us about your technical requirements and our engineering team will help identify the right solution across Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          2. CONTACT INFORMATION + ENQUIRY FORM
      ========================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-background">
        <div className="container-wide max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN: Official Euro Edge Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                REACH OUR TEAM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Let&apos;s Talk About Your Project
              </h2>
            </div>

            {/* Official Contact Details */}
            <div className="space-y-4 pt-1 border-t border-border/80">

              {/* 1. Phone / WhatsApp */}
              <div className="flex items-start gap-4 pt-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    PHONE / WHATSAPP
                  </span>
                  <a
                    href="tel:+971543909946"
                    className="text-base font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                  >
                    +971 54 390 9946
                  </a>
                </div>
              </div>

              {/* 2. Email */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
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


              {/* 3. Contact Person & Position */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    CONTACT PERSON
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Pranoydas Mullasser
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Operations Manager
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Location */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    CURRENT WEBSITE LOCATION
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Al Quoz Industrial Area, Dubai, UAE
                  </span>
                </div>
              </div>

              {/* 5. Current Service Area */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    CURRENT SERVICE AREA
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Dubai &amp; UAE / All Emirates
                  </span>
                </div>
              </div>

              {/* 6. Current Working Hours */}
              <div className="flex items-start gap-4 pt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 border border-border">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    CURRENT WORKING HOURS
                  </span>
                  <span className="text-sm font-bold text-foreground block mt-0.5">
                    Mon – Sat, 8:00 AM – 6:00 PM GST
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Enquiry Form (No Company Name, No Preferred Contact Method) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-sm">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. MAP / LOCATION SECTION
      ========================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-secondary/50 border-t border-border">
        <div className="container-wide max-w-[1800px] mx-auto space-y-6">
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              OUR SERVICE AREA
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
              Based in Dubai — Serving All Emirates
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Euro Edge Technical Services L.L.C. is based in Al Quoz Industrial Area, Dubai. We deploy certified technical crews across all major residential and commercial districts throughout Dubai and the UAE.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57754.53168989799!2d55.22048994999999!3d25.163399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e5b7fc7bdf%3A0x45d05b43af72b6f8!2sAl%20Quoz%20Industrial%20Area%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Euro Edge Technical Services – Al Quoz Industrial Area, Dubai"
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactWidget />
    </main>
  )
}