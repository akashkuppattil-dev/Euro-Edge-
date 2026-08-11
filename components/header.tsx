"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
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

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-card"
          } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="border-b border-border/40">
          <div className="px-4 lg:px-12 py-3.5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Brand Logo */}
              <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Euro Edge"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
                  priority
                />
                <div>
                  <span className="font-serif font-bold text-xl leading-tight text-[#0a2540] dark:text-[#38bdf8] block tracking-tight group-hover:opacity-90 transition-opacity">
                    Euro Edge
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links (Centered in Middle Space) */}
              <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 flex-1">
                <Link
                  href="/"
                  className="text-sm font-medium text-slate-700 hover:text-[#0a2540] transition-colors relative py-2"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-sm font-medium text-slate-700 hover:text-[#0a2540] transition-colors relative py-2"
                >
                  About Us
                </Link>

                {/* Services Dropdown Trigger */}
                <div
                  className="relative py-2"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#0a2540] transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                  </Link>

                  {/* Mega Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] max-h-[78vh] overflow-y-auto bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="pb-3 mb-4 border-b border-slate-100 flex items-center justify-end">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-4 gap-x-6 gap-y-3.5">
                        {servicesData.map((s) => {
                          const IconComponent = iconMap[s.iconName] || Wrench
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-slate-100/80 transition-all group"
                            >
                              <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-primary flex-shrink-0 transition-colors" />
                              <span className="text-xs font-medium text-slate-700 group-hover:text-primary group-hover:font-semibold transition-colors truncate">
                                {s.title}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="text-sm font-medium text-slate-700 hover:text-[#0a2540] transition-colors relative py-2"
                >
                  Projects
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-medium text-slate-700 hover:text-[#0a2540] transition-colors relative py-2"
                >
                  Contact
                </Link>
              </nav>

              {/* Right CTA Buttons (Far Right) */}
              <div className="hidden sm:flex lg:flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="pl-4 pr-1.5 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200/90 text-[#0a2540] font-semibold text-xs transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2.5 group"
                >
                  <span>Make an Enquiry</span>
                  <div className="w-6.5 h-6.5 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>

                <a
                  href="tel:+9710543909946"
                  className="pl-4 pr-1.5 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200/90 text-[#0a2540] font-semibold text-xs transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2.5 group"
                >
                  <span>+971 054 390 9946</span>
                  <div className="w-6.5 h-6.5 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </a>
              </div>

              {/* Mobile Right Quick Action Icons & Hamburger Toggle */}
              <div className="flex lg:hidden items-center gap-2">
                <a
                  href="tel:+9710543909946"
                  className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Call Euro Edge Technical Services"
                >
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="https://wa.me/9710543909946?text=Hi%20Euro%20Edge%2C%20I%20need%20technical%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#25d366]/15 text-[#25d366] hover:bg-[#25d366] hover:text-white transition-colors"
                  aria-label="WhatsApp Euro Edge Technical Services"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </a>

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
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
              Projects
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
                href="tel:+9710543909946"
                className="w-full pl-6 pr-3 py-3 rounded-xl bg-[#0a2540] text-white font-semibold text-sm flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
              >
                <span>Call Now: +971 054 390 9946</span>
                <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-[#0a2540] flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
