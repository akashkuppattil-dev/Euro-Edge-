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
      {/* Spacer to prevent content from jumping when header is fixed */}
      <div className="h-[77px] w-full" />
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-card"} ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="border-b border-border/40">
          <div className="px-4 lg:px-12 py-3.5">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1150px] max-h-[85vh] overflow-y-auto bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="pb-4 mb-6 border-b border-slate-100 flex items-center justify-end">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-sm font-bold text-primary hover:underline flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
                        {servicesData.map((s, i) => {
                          const IconComponent = iconMap[s.iconName] || Wrench
                          const colors = [
                            "text-blue-500 bg-blue-50",
                            "text-emerald-500 bg-emerald-50",
                            "text-violet-500 bg-violet-50",
                            "text-amber-500 bg-amber-50",
                            "text-rose-500 bg-rose-50",
                            "text-cyan-500 bg-cyan-50",
                            "text-fuchsia-500 bg-fuchsia-50",
                            "text-orange-500 bg-orange-50",
                            "text-teal-500 bg-teal-50",
                            "text-indigo-500 bg-indigo-50",
                            "text-pink-500 bg-pink-50",
                            "text-lime-600 bg-lime-50"
                          ]
                          const colorClasses = colors[i % colors.length]
                          const [textColor, bgColor] = colorClasses.split(' ')

                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center gap-3.5 py-2.5 px-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                            >
                              <div className={`p-2 rounded-lg ${bgColor} group-hover:scale-110 transition-transform`}>
                                <IconComponent className={`w-5 h-5 ${textColor} flex-shrink-0`} />
                              </div>
                              <span className="text-sm font-medium text-slate-700 group-hover:text-primary group-hover:font-semibold transition-colors truncate">
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
              <div className="flex lg:hidden items-center gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="p-1 sm:p-1.5 pl-3 sm:pl-4 rounded-full border border-border text-foreground hover:bg-secondary transition-colors flex items-center gap-2 shrink-0 group"
                  aria-label="Make an Enquiry"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a2540] dark:text-white" />
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                </Link>

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-2 sm:p-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors shrink-0"
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
