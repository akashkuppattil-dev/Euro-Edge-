"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const categories = [
  "Round Neck",
  "Pajama Set",
  "V Neck - Full Length",
  "Normal Nighty",
  "Full Sleeves",
  "V Neck - Ankle",
  "Feeding Friendly",
  "Lace Detailed",
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
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
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-[10px] md:text-xs tracking-wider font-sans">
          Free Shipping on orders above Rs. 999 &nbsp;|&nbsp; COD Available
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-card"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="px-6 lg:px-12 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">
              <nav className="flex items-center gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs tracking-[0.12em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                <Image
                  src="/images/logo.png"
                  alt="JOOHAA LUXE"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>

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
                  placeholder="Search for nightwear, kaftans, pajama sets..."
                  className="w-full pl-11 pr-4 py-3 bg-secondary border-none rounded-full text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Header - App Style */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-2.5">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-foreground p-1.5 -ml-1.5"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="JOOHAA LUXE"
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-foreground/70 p-1.5"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <Link href="/cart" className="relative text-foreground/70 p-1.5" aria-label="Cart">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent text-accent-foreground text-[8px] font-semibold rounded-full flex items-center justify-center font-sans">
                  0
                </span>
              </Link>
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
          <div className="absolute left-0 top-0 bottom-0 w-[82%] max-w-[300px] bg-card shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
              <Image src="/images/logo.png" alt="JOOHAA LUXE" width={80} height={32} className="h-7 w-auto object-contain" />
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
