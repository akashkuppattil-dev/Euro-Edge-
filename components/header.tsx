"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Home,
  Hammer,
  Zap,
  Waves,
  Compass,
  ShieldCheck,
  Building2,
  Phone,
} from "lucide-react"
import { servicesData } from "@/lib/services-data"

const serviceIconMap: Record<string, any> = {
  Hammer,
  Zap,
  Waves,
  Compass,
  ShieldCheck,
}

// WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}



export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 30)
      if (currentY > lastScrollRef.current + 8 && currentY > 120) {
        setVisible(false)
        if (mobileOpen) setMobileOpen(false)
      } else if (currentY < lastScrollRef.current - 6) {
        setVisible(true)
      }
      lastScrollRef.current = currentY
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [mobileOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [mobileOpen])

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <>
      {/* Spacer for non-hero pages so content starts below the fixed navbar */}
      {pathname !== "/" &&
        pathname !== "/about" &&
        pathname !== "/contact" &&
        pathname !== "/industries" &&
        pathname !== "/services" && (
          <div className="h-20 sm:h-24 lg:h-28 w-full" />
        )}

      {/* Floating Pill Navbar */}
      <header
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1300px] z-50 transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
          }`}
        role="banner"
      >
        <div
          className={`rounded-full transition-all duration-300 border ${scrolled
              ? "bg-white shadow-[0_12px_36px_-8px_rgba(0,0,0,0.12),0_4px_14px_rgba(0,0,0,0.04)] border-slate-200/90"
              : "bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.03)] border-slate-200/80"
            } px-4 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6`}
        >
          {/* Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 select-none" aria-label="Euro Edge - Home">
              <div
                className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src="/images/logo-footer.png"
                  alt="Euro Edge Technical Services"
                  fill
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="object-contain pointer-events-none select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
                  priority
                />
              </div>
              <span className="font-editorial-h1 font-serif text-lg sm:text-xl text-[#0a2540] font-bold tracking-tight group-hover:text-primary transition-colors">
                Euro Edge
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 sm:gap-3 xl:gap-5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${isActive(link.href)
                    ? "bg-[#eef6ff] text-[#0066cc] font-semibold shadow-2xs"
                    : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100/70"
                  }`}
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
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

          {/* Mobile Right: Enquiry Arrow Button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Round gold button with white arrow inside (old design) */}
            <Link
              href="/contact"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbb03b] text-white hover:bg-[#e09b2d] transition-colors shadow-xs flex-shrink-0"
              aria-label="Make an Enquiry"
            >
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.4]" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="mobile-menu-overlay lg:hidden mt-2 bg-white border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Nav Links */}
            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-colors min-h-[52px] ${isActive(link.href)
                      ? "bg-[#eef6ff] text-[#0066cc]"
                      : "text-slate-800 hover:bg-slate-50"
                    }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.icon && <link.icon className="w-4 h-4 flex-shrink-0" />}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="px-4 pb-5 pt-2 border-t border-slate-100 space-y-2.5 bg-slate-50/60">
              {/* Primary CTA — Enquiry */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#fbb03b] text-[#0a2540] font-bold text-sm flex items-center justify-center gap-2.5 min-h-[52px]"
                aria-label="Make an Enquiry with Euro Edge"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Quick Action Row: Call + WhatsApp */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+971543909946"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#0a2540] text-white font-semibold text-xs min-h-[48px] transition-colors hover:bg-[#0d3060]"
                  aria-label="Call Euro Edge: +971 54 390 9946"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/971543909946"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#25d366] text-white font-semibold text-xs min-h-[48px] transition-colors hover:bg-[#1db954]"
                  aria-label="Chat on WhatsApp with Euro Edge"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
