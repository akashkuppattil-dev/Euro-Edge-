import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

const shopLinks = [
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Best Sellers", href: "/shop?sort=popular" },
  { label: "Maxi Nighties", href: "/shop?category=maxi" },
  { label: "Kaftans", href: "/shop?category=kaftan" },
  { label: "Pajama Sets", href: "/shop?category=sets" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Return Policy", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-4 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="JOOHAA LUXE"
              width={140}
              height={56}
              className="h-14 w-auto object-contain brightness-200 mb-5"
            />
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-sans max-w-xs">
              Premium nightwear crafted with the finest imported rayon.
              Designed for the modern woman who values comfort and elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/joohaa__luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/80 font-sans">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/80 font-sans">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/80 font-sans">
              Stay Connected
            </h3>
            <p className="text-sm text-primary-foreground/50 mb-5 font-sans leading-relaxed">
              Subscribe for early access to new collections and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/10 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-accent/90 transition-colors font-sans"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 px-4 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-sans">
            2026 JOOHAA LUXE Clothing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors font-sans">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors font-sans">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
