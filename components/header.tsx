"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const categories = [
  "Girls Collection",
  "Boys Collection",
  "Baby Collection",
  "Footwear",
  "Accessories",
  "Toys",
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      // Hide on scroll down, show on scroll up
      if (currentY > lastScrollRef.current + 6 && currentY > 80) {
        setVisible(false)
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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-card"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
        style={{ transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s, box-shadow 0.3s" }}
      >
        {/* Desktop Header */}
        <div className="hidden md:block border-b border-border/30">
          <div className="px-6 lg:px-12 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo - Left */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Tiny Trends"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Nav - Center */}
              <nav className="flex items-center gap-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-script text-[17px] text-[#c4857b]/80 hover:text-[#c4857b] transition-colors duration-200 relative group leading-none"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#d49b91] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              {/* Icons - Right */}
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-[18px] h-[18px]" />
                </button>
                <Link href="/wishlist" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Wishlist">
                  <Heart className="w-[18px] h-[18px]" />
                </Link>
                <Link href="/account" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Account">
                  <User className="w-[18px] h-[18px]" />
                </Link>
                <Link href="/cart" className="relative text-foreground/60 hover:text-foreground transition-colors" aria-label="Cart">
                  <ShoppingBag className="w-[18px] h-[18px]" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[9px] font-medium rounded-full flex items-center justify-center font-sans">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {searchOpen && (
            <div className="border-t border-border/50 px-6 lg:px-12 py-4">
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for frocks, boys suits, onesies, accessories..."
                  className="w-full pl-11 pr-4 py-3 bg-secondary border-none rounded-full text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Header - Logo left, Brand name center (script), icons right */}
        <div className="md:hidden border-b border-border/30">
          <div className="grid grid-cols-3 items-center px-3 py-2">
            {/* Logo - Left */}
            <Link href="/" className="flex-shrink-0 justify-self-start">
              <Image
                src="/images/logo.png"
                alt="Tiny Trends"
                width={56}
                height={28}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Brand name - Center in script font */}
            <Link href="/" className="justify-self-center">
              <span className="font-script text-[22px] leading-none text-[#c4857b] whitespace-nowrap">
                Tiny Trends
              </span>
            </Link>

            {/* Icons - Right */}
            <div className="flex items-center gap-1 justify-self-end">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-foreground/70 p-1.5"
                aria-label="Search"
              >
                <Search className="w-[17px] h-[17px]" />
              </button>
              <Link href="/cart" className="relative text-foreground/70 p-1.5" aria-label="Cart">
                <ShoppingBag className="w-[17px] h-[17px]" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent text-accent-foreground text-[8px] font-semibold rounded-full flex items-center justify-center font-sans">
                  0
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="text-foreground p-1.5"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="px-4 pb-2.5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[82%] max-w-[300px] bg-card shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
              <span className="text-xs tracking-[0.15em] uppercase text-foreground/50 font-sans font-medium">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-foreground/50 p-1" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <div className="py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 text-[13px] font-sans text-foreground/80 hover:bg-secondary/70 active:bg-secondary transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-foreground/25" />
                  </Link>
                ))}
              </div>

              <div className="border-t border-border/30 mx-5 my-1" />

              <div className="px-5 pt-4 pb-2">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans font-medium">
                  Categories
                </p>
              </div>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/shop?category=${encodeURIComponent(cat.toLowerCase())}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-3 text-[13px] font-sans text-foreground/60 hover:text-foreground hover:bg-secondary/50 active:bg-secondary transition-colors"
                >
                  {cat}
                  <ChevronRight className="w-3.5 h-3.5 text-foreground/15" />
                </Link>
              ))}
            </nav>

            <div className="border-t border-border/40 p-5 flex items-center gap-8">
              <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs font-sans text-foreground/60 hover:text-foreground transition-colors">
                <User className="w-4 h-4" /> Account
              </Link>
              <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs font-sans text-foreground/60 hover:text-foreground transition-colors">
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
