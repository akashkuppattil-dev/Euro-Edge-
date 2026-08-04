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
  CheckCircle2,
  Clock,
  MessageCircle,
  ChevronUp,
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden border-t border-primary-foreground/10 font-sans">
      {/* Main 5-Column Standard Enterprise Footer Grid */}
      <div className="px-4 lg:px-12 py-14 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Euro Edge Technical Services L.L.C."
                width={48}
                height={48}
                className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-serif font-bold text-lg leading-tight text-primary-foreground block">
                  Euro Edge
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70 block font-sans">
                  Technical Services L.L.C.
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/70 text-xs leading-relaxed font-sans">
              "The Edge of Quality Built on Trust" — Delivering premier technical contracting, MEP engineering, civil maintenance, and facility management across Dubai and the UAE.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>DEWA &amp; Dubai Municipality Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO Certified Operations</span>
              </div>
            </div>
          </div>

          {/* Column 2: MEP & Mechanical Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-5 text-primary-foreground font-bold font-sans">
              MEP &amp; HVAC Care
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-primary-foreground/70 font-sans">
              <li>
                <Link href="/services/hvac-systems" className="hover:text-primary-foreground transition-colors">
                  Air-Conditioning &amp; Ventilation
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-sanitary" className="hover:text-primary-foreground transition-colors">
                  Plumbing &amp; Sanitary Contracting
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-works" className="hover:text-primary-foreground transition-colors">
                  Electrical Fittings &amp; Rewiring
                </Link>
              </li>
              <li>
                <Link href="/services/mep-services" className="hover:text-primary-foreground transition-colors">
                  Full MEP Services &amp; Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/swimming-pool-maintenance" className="hover:text-primary-foreground transition-colors">
                  Swimming Pool Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Civil & Fit-Out Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-5 text-primary-foreground font-bold font-sans">
              Civil &amp; Fit-Out Works
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-primary-foreground/70 font-sans">
              <li>
                <Link href="/services/building-maintenance" className="hover:text-primary-foreground transition-colors">
                  Building Maintenance &amp; Upkeep
                </Link>
              </li>
              <li>
                <Link href="/services/false-ceiling" className="hover:text-primary-foreground transition-colors">
                  False Ceiling &amp; Light Partitions
                </Link>
              </li>
              <li>
                <Link href="/services/floor-wall-tiling" className="hover:text-primary-foreground transition-colors">
                  Floor &amp; Wall Tiling Works
                </Link>
              </li>
              <li>
                <Link href="/services/plaster-works" className="hover:text-primary-foreground transition-colors">
                  Internal &amp; External Plastering
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-wood-flooring" className="hover:text-primary-foreground transition-colors">
                  Carpentry &amp; Wood Flooring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 mt-1">
                  <span>View All 17 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Governance */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-5 text-primary-foreground font-bold font-sans">
              Company Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-primary-foreground/70 font-sans">
              <li>
                <Link href="/" className="hover:text-primary-foreground transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About Euro Edge
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  Technical Services Directory
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary-foreground transition-colors">
                  Completed Projects &amp; Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-foreground transition-colors">
                  Careers &amp; Engineering Hiring
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact &amp; Location Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Office Details */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground font-bold font-sans">
              Dubai Headquarters
            </h4>

            <div className="space-y-3 text-xs text-primary-foreground/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary-foreground block">Office Location</span>
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary-foreground block">Phone / WhatsApp</span>
                  <a href="tel:+9710543909946" className="hover:text-primary-foreground transition-colors">
                    +971 054 390 9946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary-foreground block">Official Emails</span>
                  <a href="mailto:info@euroedgets.com" className="hover:text-primary-foreground transition-colors block">
                    info@euroedgets.com
                  </a>
                  <a href="mailto:pranoy@euroedgets.com" className="hover:text-primary-foreground transition-colors block text-[11px]">
                    pranoy@euroedgets.com (Operations)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary-foreground block">Official Portal</span>
                  <a href="https://www.euroedgets.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    www.euroedgets.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Bottom Sub-Footer Bar */}
      <div className="border-t border-primary-foreground/10 px-4 lg:px-12 py-6 text-xs text-primary-foreground/60 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Euro Edge Technical Services L.L.C. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-primary-foreground transition-colors">
              Terms &amp; Governance
            </Link>
            <Link href="/services" className="hover:text-primary-foreground transition-colors">
              Services Scope
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground transition-colors">
              Support Desk
            </Link>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-all ml-2"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
