"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, MessageCircle, Award, HeartHandshake, BadgePercent, Sparkles } from "lucide-react"

/* ─── Polaroid card config ───────────────────────────────────────────────── */
const polaroids = [
  // LEFT SIDE
  {
    label: "Girls Collection",
    image: "/images/product-1.png",
    href: "/shop?category=girls+collection",
    style: {
      position: "absolute" as const,
      top: "2%",
      left: "2%",
      width: "clamp(130px, 14vw, 200px)",
      transform: "rotate(-6deg)",
      zIndex: 3,
    },
  },
  {
    label: "Party Wear",
    image: "/images/product-3.png",
    href: "/shop?category=party+wear",
    style: {
      position: "absolute" as const,
      top: "50%",
      left: "14%",
      width: "clamp(120px, 12vw, 180px)",
      transform: "translateY(-50%) rotate(-2deg)",
      zIndex: 4,
    },
  },
  {
    label: "Daily Wear",
    image: "/images/product-6.png",
    href: "/shop?category=daily+wear",
    style: {
      position: "absolute" as const,
      bottom: "2%",
      left: "3%",
      width: "clamp(115px, 12vw, 175px)",
      transform: "rotate(-3deg)",
      zIndex: 2,
    },
  },

  // RIGHT SIDE
  {
    label: "Boys Collection",
    image: "/images/product-2.png",
    href: "/shop?category=boys+collection",
    style: {
      position: "absolute" as const,
      top: "2%",
      right: "2%",
      width: "clamp(130px, 14vw, 200px)",
      transform: "rotate(5deg)",
      zIndex: 3,
    },
  },
  {
    label: "Baby Collection",
    image: "/images/product-4.png",
    href: "/shop?category=baby+collection",
    style: {
      position: "absolute" as const,
      top: "50%",
      right: "14%",
      width: "clamp(125px, 13vw, 190px)",
      transform: "translateY(-50%) rotate(2deg)",
      zIndex: 4,
    },
  },
  {
    label: "Nightwear",
    image: "/images/product-5.png",
    href: "/shop?category=nightwear",
    style: {
      position: "absolute" as const,
      bottom: "2%",
      right: "2%",
      width: "clamp(115px, 12vw, 175px)",
      transform: "rotate(4deg)",
      zIndex: 2,
    },
  },
]

/* ─── Mobile card order (left→right, top→bottom) ────────────────────────── */
const mobileCards = [
  { label: "Girls Collection", image: "/images/product-1.png", href: "/shop?category=girls+collection", rotate: "-3deg" },
  { label: "Boys Collection",  image: "/images/product-2.png", href: "/shop?category=boys+collection",  rotate: "3deg"  },
  { label: "Party Wear",       image: "/images/product-3.png", href: "/shop?category=party+wear",       rotate: "2deg"  },
  { label: "Baby Collection",  image: "/images/product-4.png", href: "/shop?category=baby+collection",  rotate: "-2deg" },
  { label: "Daily Wear",       image: "/images/product-6.png", href: "/shop?category=daily+wear",       rotate: "-4deg" },
  { label: "Nightwear",        image: "/images/product-5.png", href: "/shop?category=nightwear",        rotate: "3deg"  },
]

/* ─── Feature badges ─────────────────────────────────────────────────────── */
const features = [
  { Icon: Award,          label: "Premium\nQuality",    color: "#c9894f" },
  { Icon: HeartHandshake, label: "Comfort\nFirst",      color: "#c4717e" },
  { Icon: BadgePercent,   label: "Affordable\nPrices",  color: "#7e9e7a" },
  { Icon: Sparkles,       label: "Latest\nCollections", color: "#9b82c4" },
]

/* ─── Decorative flower positions ────────────────────────────────────────── */
const flowers = [
  { top: "10%", left: "18%",  size: 28, rotate: -20, opacity: 0.7 },
  { top: "70%", left: "16%",  size: 22, rotate: 30,  opacity: 0.6 },
  { top: "18%", right: "17%", size: 26, rotate: 15,  opacity: 0.7 },
  { top: "65%", right: "16%", size: 24, rotate: -10, opacity: 0.65 },
  { top: "45%", left: "19%",  size: 16, rotate: 5,   opacity: 0.5 },
  { top: "48%", right: "18%", size: 18, rotate: -25, opacity: 0.55 },
]

/* ─── Component ──────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          DESKTOP HERO  (lg and above)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="hidden lg:block relative w-full overflow-hidden border-b border-border/30"
        style={{
          background: "linear-gradient(160deg, #fdf6ef 0%, #faf0eb 40%, #f9ede8 100%)",
          minHeight: "clamp(560px, 88vh, 720px)",
        }}
      >
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 55% at 50% 48%, rgba(255,220,210,0.38) 0%, transparent 75%)" }}
        />

        {/* Flowers */}
        {flowers.map((f, i) => (
          <span key={i} className="pointer-events-none absolute select-none" style={{ top: f.top, left: (f as any).left, right: (f as any).right, fontSize: f.size, transform: `rotate(${f.rotate}deg)`, opacity: f.opacity, lineHeight: 1 }}>🌸</span>
        ))}
        <span className="pointer-events-none absolute select-none" style={{ top:"5%",  left:"25%",  fontSize:18, opacity:0.5, transform:"rotate(-40deg)" }}>🌿</span>
        <span className="pointer-events-none absolute select-none" style={{ top:"8%",  right:"23%", fontSize:16, opacity:0.5, transform:"rotate(30deg)"  }}>🌿</span>
        <span className="pointer-events-none absolute select-none" style={{ bottom:"12%", left:"22%",  fontSize:14, opacity:0.45 }}>✦</span>
        <span className="pointer-events-none absolute select-none" style={{ bottom:"10%", right:"22%", fontSize:14, opacity:0.45, color:"#d49b91" }}>✦</span>
        <span className="pointer-events-none absolute select-none" style={{ top:"28%",  left:"20%",  fontSize:11, opacity:0.4, color:"#d49b91" }}>✦</span>
        <span className="pointer-events-none absolute select-none" style={{ top:"25%",  right:"19%", fontSize:11, opacity:0.4, color:"#d49b91" }}>✦</span>

        {/* Polaroid cards */}
        {polaroids.map((card) => (
          <Link key={card.label} href={card.href} className="group block" style={card.style}>
            <div
              className="relative flex flex-col bg-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              style={{ padding: "6px 6px 28px 6px", boxShadow: "0 4px 18px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.08)", borderRadius: "3px" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: "2px" }}>
                <Image src={card.image} alt={card.label} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="15vw" />
              </div>
              <div className="flex items-center justify-center" style={{ height: "28px" }}>
                <span className="font-script text-center leading-none" style={{ fontSize: "clamp(11px, 1vw, 14px)", color: "#5a4a47" }}>{card.label}</span>
              </div>
            </div>
          </Link>
        ))}

        {/* Centre content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16" style={{ minHeight: "clamp(560px, 88vh, 720px)" }}>
          <div className="flex flex-col items-center gap-1 mb-3">
            <span style={{ fontSize: 14, color: "#d49b91" }}>❤</span>
            <span className="font-sans font-bold tracking-[0.22em] uppercase" style={{ fontSize: "11px", color: "#9c7e7a" }}>Premium Children&apos;s Apparel</span>
          </div>
          <h1 className="font-serif font-normal leading-[1.15] tracking-tight" style={{ fontSize: "clamp(30px, 4.2vw, 58px)", color: "#1c2b38" }}>Beautiful Styles</h1>
          <p className="font-script font-semibold tracking-normal mt-1" style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#d49b91", lineHeight: 1.2 }}>for Every Little Moment&nbsp;💕</p>
          <p className="font-sans leading-relaxed mt-4 max-w-sm" style={{ fontSize: "13px", color: "#9c7e7a" }}>
            Discover thoughtfully curated collections for Babies, Girls &amp; Boys.<br />
            From everyday essentials to festive outfits,<br />
            we bring comfort, quality &amp; timeless style for your little ones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            <Link href="/shop" className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-white transition-all duration-200 active:scale-95 hover:brightness-95"
              style={{ fontSize: "11px", padding: "13px 28px", borderRadius: "999px", background: "#d49b91", boxShadow: "0 4px 16px rgba(212,155,145,0.45)" }}>
              <span>SHOP COLLECTIONS</span><ShoppingBag className="w-3.5 h-3.5" />
            </Link>
            <a href="https://wa.me/918129780324?text=Hi%20Tiny%20Trends%2C%20I%27d%20like%20to%20enquire%20about%20your%20apparel%20collections." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-widest transition-all duration-200 active:scale-95 hover:brightness-95"
              style={{ fontSize: "11px", padding: "13px 28px", borderRadius: "999px", background: "rgba(234,227,217,0.85)", border: "1.5px solid #e0d0cc", color: "#3d2f2c", boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}>
              <MessageCircle className="w-4 h-4" style={{ color: "#25d366" }} /><span>CONTACT ON WHATSAPP</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ width: 44, height: 44, background: `${f.color}18`, border: `1.5px solid ${f.color}40`, boxShadow: `0 2px 10px ${f.color}22` }}>
                  <f.Icon strokeWidth={1.6} style={{ width: 20, height: 20, color: f.color }} />
                </div>
                <span className="font-sans font-bold uppercase tracking-wider text-center whitespace-pre-line" style={{ fontSize: "10px", color: "#9c7e7a", lineHeight: 1.4 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE HERO  (below lg)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="lg:hidden relative overflow-hidden border-b border-border/30"
        style={{ background: "linear-gradient(160deg, #fdf6ef 0%, #faf0eb 50%, #f9ede8 100%)" }}
      >
        {/* Decorative flowers */}
        <span className="pointer-events-none absolute top-3 right-3 select-none" style={{ fontSize: 16, opacity: 0.45 }}>🌸</span>
        <span className="pointer-events-none absolute top-3 left-3 select-none"  style={{ fontSize: 12, opacity: 0.35 }}>🌸</span>

        <div className="px-3 pt-4 pb-5 flex flex-col gap-3">

          {/* ── Row 1: first 3 photos ── */}
          <div className="grid grid-cols-3 gap-2">
            {mobileCards.slice(0, 3).map((card) => (
              <Link key={card.label} href={card.href} className="group block" style={{ transform: `rotate(${card.rotate})` }}>
                <div className="bg-white flex flex-col" style={{ padding: "4px 4px 18px 4px", boxShadow: "0 3px 14px rgba(0,0,0,0.12)", borderRadius: "2px" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image src={card.image} alt={card.label} fill className="object-cover object-top transition-transform duration-500 group-active:scale-105" sizes="30vw" />
                  </div>
                  <div className="flex items-center justify-center" style={{ height: "18px" }}>
                    <span className="font-script text-center leading-none truncate px-1" style={{ fontSize: "9px", color: "#5a4a47" }}>{card.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Centre text block (between the two rows) ── */}
          <div className="flex flex-col items-center text-center px-2 py-2">
            <h1 className="font-serif font-normal leading-tight" style={{ fontSize: "24px", color: "#1c2b38" }}>
              Beautiful Styles
            </h1>
            <p className="font-script font-semibold mt-0.5" style={{ fontSize: "22px", color: "#d49b91", lineHeight: 1.2 }}>
              for Every Little Moment 💕
            </p>
            <p className="font-sans leading-relaxed mt-2 max-w-[260px]" style={{ fontSize: "10px", color: "#9c7e7a" }}>
              Curated collections for Babies, Girls &amp; Boys —<br />comfort, quality &amp; timeless style.
            </p>
          </div>

          {/* ── Row 2: last 3 photos ── */}
          <div className="grid grid-cols-3 gap-2">
            {mobileCards.slice(3).map((card) => (
              <Link key={card.label} href={card.href} className="group block" style={{ transform: `rotate(${card.rotate})` }}>
                <div className="bg-white flex flex-col" style={{ padding: "4px 4px 18px 4px", boxShadow: "0 3px 14px rgba(0,0,0,0.12)", borderRadius: "2px" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image src={card.image} alt={card.label} fill className="object-cover object-top transition-transform duration-500 group-active:scale-105" sizes="30vw" />
                  </div>
                  <div className="flex items-center justify-center" style={{ height: "18px" }}>
                    <span className="font-script text-center leading-none truncate px-1" style={{ fontSize: "9px", color: "#5a4a47" }}>{card.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
