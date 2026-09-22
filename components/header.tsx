"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Zap,
  Droplet,
  Fan,
  Grid,
  Lightbulb,
  Square,
  Maximize,
  Hammer,
  Waves,
  Utensils,
  Building,
  Building2,
  Cog,
  Compass,
  Boxes,
  Headphones,
  Factory,
  Instagram,
} from "lucide-react"
import { servicesData } from "@/lib/services-data"

const iconMap: Record<string, any> = {
  Zap,
  Droplet,
  Fan,
  Grid,
  Lightbulb,
  Square,
  Maximize,
  Hammer,
  Waves,
  Utensils,
  Building,
  Building2,
  Cog,
  Compass,
  Boxes,
  Headphones,
  Factory,
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY > lastScrollRef.current + 6 && currentY > 80) {
        setVisible(false)
        setServicesDropdownOpen(false)
      } else if (currentY < lastScrollRef.current - 4) {
        setVisible(true)
      }
      lastScrollRef.current = currentY
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <>
      {/* Spacer only on non-home pages so homepage hero sits seamlessly behind header */}
      {!isHome && <div className="h-[77px] w-full bg-[#0a2540]" />}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a2540]/95 backdrop-blur-md shadow-xl border-b border-white/10"
            : isHome
              ? "bg-gradient-to-b from-[#0a2540]/90 via-[#0a2540]/40 to-transparent border-b border-white/10"
              : "bg-[#0a2540] border-b border-white/10"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div>
          <div className="px-4 lg:px-12 py-3.5 sm:py-4">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
              {/* Brand Logo */}
              <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center p-1.5 group-hover:border-white transition-colors">
                  <Image
                    src="/images/logo.png"
                    alt="Euro Edge"
                    width={38}
                    height={38}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl sm:text-2xl leading-none text-white tracking-tight group-hover:opacity-95 transition-opacity">
                    Euro Edge
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold text-slate-300 uppercase block mt-1">
                    TECHNICAL SERVICES L.L.C.
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links (Centered in Middle Space) */}
              <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 flex-1">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors relative py-2 ${pathname === "/" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                >
                  <span>Home</span>
                  {pathname === "/" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full" />
                  )}
                </Link>

                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors relative py-2 ${pathname === "/about" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                >
                  <span>About Us</span>
                  {pathname === "/about" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full" />
                  )}
                </Link>

                {/* Services Dropdown Trigger */}
                <div
                  className="relative py-2"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${pathname.startsWith("/services") ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#38bdf8]" : ""}`} />
                  </Link>
                  {pathname.startsWith("/services") && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full" />
                  )}

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-[300px] max-h-[80vh] overflow-y-auto bg-[#0a2540] border border-white/10 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex flex-col">
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="px-6 py-3 text-[14px] font-medium text-slate-200 hover:text-white hover:bg-white/10 hover:pl-7 transition-all duration-200 border-b border-white/5 last:border-0"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 mt-2 mb-2">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center justify-between w-full px-4 py-2.5 text-[13px] font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors group"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className={`text-sm font-medium transition-colors relative py-2 ${pathname === "/projects" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                >
                  <span>Projects</span>
                  {pathname === "/projects" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full" />
                  )}
                </Link>

                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors relative py-2 ${pathname === "/contact" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                >
                  <span>Contact</span>
                  {pathname === "/contact" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full" />
                  )}
                </Link>
              </nav>

              {/* Right CTA Buttons (Far Right) */}
              <div className="hidden sm:flex lg:flex items-center gap-3.5 flex-shrink-0">
                <Link
                  href="/contact"
                  className="pl-5 pr-2 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-3 group shadow-sm"
                >
                  <span>Make an Enquiry</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#0a2540] flex items-center justify-center shadow-sm group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>

                <a
                  href="tel:+971543909946"
                  className="pl-2.5 pr-5 py-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 shadow-md group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 fill-white stroke-none" />
                  </div>
                  <span>+971 54 390 9946</span>
                </a>
              </div>

              {/* Mobile Right Quick Action Icons & Hamburger Toggle */}
              <div className="flex lg:hidden items-center gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="pl-3 pr-1.5 py-1.5 rounded-full border border-white/30 bg-white/10 text-white flex items-center gap-2 shrink-0 group"
                  aria-label="Make an Enquiry"
                >
                  <span className="text-xs font-medium">Enquiry</span>
                  <div className="w-6 h-6 rounded-full bg-white text-[#0a2540] flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </Link>

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-2 sm:p-2.5 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-b border-border px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-foreground border-b border-border/40"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-foreground border-b border-border/40"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-foreground border-b border-border/40 text-left"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-2">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xs font-bold text-primary py-1 uppercase tracking-wider"
                  >
                    → View All Services Page
                  </Link>
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs text-muted-foreground hover:text-foreground py-1.5"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-foreground border-b border-border/40"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-foreground border-b border-border/40"
            >
              Contact Us
            </Link>

            <div className="pt-4 space-y-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full pl-6 pr-3 py-3 rounded-xl bg-white border border-gray-200 text-foreground font-semibold text-sm flex items-center justify-between shadow-sm group active:scale-[0.99] transition-transform"
              >
                <span>Make an Enquiry</span>
                <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>

              <a
                href="tel:+971543909946"
                className="w-full pl-6 pr-3 py-3 rounded-xl bg-[#0a2540] text-white font-semibold text-sm flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
              >
                <span>Call Now: +971 54 390 9946</span>
                <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-[#0a2540] flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/euro_edge?stkn=Zno1OGRpZjVpdGMw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full pl-6 pr-3 py-3 rounded-xl bg-white border border-gray-200 text-slate-800 font-semibold text-sm flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
              >
                <span>Follow on Instagram</span>
                <div className="w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center shadow-sm">
                  <Instagram className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
