"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Home,
  Hammer,
  Zap,
  Waves,
  Compass,
  ShieldCheck,
  Building2,
} from "lucide-react"
import { servicesData } from "@/lib/services-data"

const serviceIconMap: Record<string, any> = {
  Hammer,
  Zap,
  Waves,
  Compass,
  ShieldCheck,
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 30)
      if (currentY > lastScrollRef.current + 8 && currentY > 120) {
        setVisible(false)
        setServicesDropdownOpen(false)
      } else if (currentY < lastScrollRef.current - 6) {
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

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 200)
  }

  return (
    <>
      {/* Spacer for non-home pages so content starts with a comfortable gap below the floating navbar */}
      {pathname !== "/" && <div className="h-20 sm:h-24 lg:h-28 w-full" />}

      {/* Floating Pill Navbar Positioned at Top of the Hero Section */}
      <header
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1300px] z-50 transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-white shadow-[0_12px_36px_-8px_rgba(0,0,0,0.12),0_4px_14px_rgba(0,0,0,0.04)] border-slate-200/90"
              : "bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.03)] border-slate-200/80"
          } px-5 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-4 sm:gap-6`}
        >
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <Image
                  src="/images/logo-footer.png"
                  alt="Euro Edge Technical Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base text-[#0a2540] tracking-tight group-hover:text-primary transition-colors">
                Euro Edge
              </span>
            </Link>

            {/* Vertical Divider */}
            <div className="h-5 w-px bg-slate-200 mx-4 sm:mx-6 hidden lg:block" />
          </div>

          {/* Center: Desktop Navigation Links with Generous Gaps & Spacing */}
          <nav className="hidden lg:flex items-center gap-2 sm:gap-3 xl:gap-5">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                pathname === "/"
                  ? "bg-[#eef6ff] text-[#0066cc] shadow-2xs"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/70"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#0066cc] font-semibold bg-slate-50"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/60"
              }`}
            >
              About Us
            </Link>

            {/* Services Link */}
            <Link
              href="/services"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                pathname === "/services"
                  ? "text-[#0066cc] font-semibold bg-slate-50"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/60"
              }`}
            >
              Services
            </Link>

            {/* Industries */}
            <Link
              href="/industries"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                pathname === "/industries" || pathname === "/projects"
                  ? "text-[#0066cc] font-semibold bg-slate-50"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/60"
              }`}
            >
              Industries
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-[#0066cc] font-semibold bg-slate-50"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Make an Enquiry Button */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="pl-3.5 pr-1 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-semibold text-xs transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2.5 group flex-shrink-0"
            >
              <span>Make an Enquiry</span>
              <div className="w-6 h-6 rounded-full bg-[#fbb03b] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
          </div>

          {/* Mobile Right Action & Hamburger */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link
              href="/contact"
              className="pl-3.5 pr-1 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-2"
            >
              <span className="hidden sm:inline">Enquire</span>
              <div className="w-6 h-6 rounded-full bg-[#fbb03b] text-white flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-5 space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === "/" ? "bg-[#eef6ff] text-[#0066cc]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === "/about" ? "bg-[#eef6ff] text-[#0066cc]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === "/services" ? "bg-[#eef6ff] text-[#0066cc]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Services
              </Link>

              <Link
                href="/industries"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === "/industries" || pathname === "/projects" ? "bg-[#eef6ff] text-[#0066cc]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === "/contact" ? "bg-[#eef6ff] text-[#0066cc]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 rounded-full bg-[#fbb03b] text-[#0a2540] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>Make an Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
