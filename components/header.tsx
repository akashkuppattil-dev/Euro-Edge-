"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-xs tracking-[0.2em] uppercase font-sans">
      Free Shipping Across India &nbsp;|&nbsp; COD Available &nbsp;|&nbsp; New Arrivals Live
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-4 lg:px-12 h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center lg:flex-none">
            <Image
              src="/images/logo.png"
              alt="JOOHAA LUXE"
              width={120}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <Link
              href="/account"
              className="hidden lg:flex p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Account"
            >
              <User className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/wishlist"
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/cart"
              className="p-2 text-foreground/70 hover:text-foreground transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border/50 px-4 lg:px-12 py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-11 pr-4 py-3 bg-secondary rounded-full text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col py-4 px-4" role="navigation" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground border-b border-border/30 last:border-0 font-sans transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground font-sans flex items-center gap-3 transition-colors"
              >
                <User className="w-4 h-4" />
                Account
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
