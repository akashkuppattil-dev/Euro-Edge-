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

              {/* Desktop Nav - Extra Spacing & Gaps */}
              <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative py-2"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative py-2"
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
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                  </Link>

                  {/* Mega Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-card border border-border rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="col-span-2 pb-2 mb-1 border-b border-border/50 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          All Technical Services
                        </span>
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                        >
                          View All Services
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {servicesData.map((s) => {
                        const IconComponent = iconMap[s.iconName] || Wrench
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-secondary transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                {s.title}
                              </div>
                              <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                {s.shortDesc}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative py-2"
                >
                  Projects
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative py-2"
                >
                  Contact
                </Link>
              </nav>

              {/* Right CTA Buttons: Make an Enquiry & Direct Phone Call */}
              <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="pl-5 pr-2 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 text-foreground font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-3 group"
                >
                  <span>Make an Enquiry</span>
                  <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </Link>

                <a
                  href="tel:+9710543909946"
                  className="pl-5 pr-2 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 text-foreground font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-3 group"
                >
                  <span>+971 054 390 9946</span>
                  <div className="w-8 h-8 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
