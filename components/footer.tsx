"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronUp,
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card text-foreground relative overflow-hidden border-t border-border font-sans">
      {/* Main 5-Column Standard Enterprise Footer Grid */}
      <div className="px-4 lg:px-12 py-14 lg:py-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Euro Edge Technical Services L.L.C."
                width={48}
                height={48}
                className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-serif font-bold text-lg leading-tight text-foreground block">
                  Euro Edge
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block font-sans">
                  Technical Services L.L.C.
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-xs leading-relaxed font-sans pr-4">
              "The Edge of Quality Built on Trust" — Delivering premier technical contracting, MEP engineering, civil maintenance, and facility management across Dubai and the UAE.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-5 text-foreground font-bold font-sans">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground font-sans">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Euro Edge
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact &amp; Location Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-5 text-foreground font-bold font-sans">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground font-sans">
              <li>
                <Link href="/services/hvac-systems" className="hover:text-primary transition-colors">
                  Air-Conditioning &amp; HVAC
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-sanitary" className="hover:text-primary transition-colors">
                  Plumbing &amp; Sanitary
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-works" className="hover:text-primary transition-colors">
                  Electrical Works
                </Link>
              </li>
              <li>
                <Link href="/services/building-maintenance" className="hover:text-primary transition-colors">
                  Building Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/false-ceiling" className="hover:text-primary transition-colors">
                  Fit-Out &amp; Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/swimming-pool" className="hover:text-primary transition-colors">
                  Swimming Pool Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/test-service" className="hover:text-primary transition-colors">
                  Test Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Office Details */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-bold font-sans">
              Dubai Headquarters
            </h4>

            <div className="space-y-3 text-xs text-muted-foreground font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground block">Office Location</span>
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground block">Phone / WhatsApp</span>
                  <a href="tel:+9710543909946" className="hover:text-primary transition-colors">
                    +971 054 390 9946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground block">Official Email</span>
                  <a href="mailto:info@euroedgets.com" className="hover:text-primary transition-colors block">
                    info@euroedgets.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground block">Official Portal</span>
                  <a href="https://www.euroedgets.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    www.euroedgets.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Bottom Sub-Footer Bar */}
      <div className="border-t border-border px-4 lg:px-12 py-6 text-xs text-muted-foreground font-sans bg-secondary/50">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p>© 2026 Euro Edge Technical Services L.L.C. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
            <span className="text-muted-foreground/70">
              Privacy &amp; Terms available on request
            </span>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services Scope
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Support Desk
            </Link>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center text-foreground transition-all ml-2 shadow-sm"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
