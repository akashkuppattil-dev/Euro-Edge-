import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ProjectsPortfolio } from "@/components/projects-portfolio"

export const metadata = {
  title: "Projects & Technical Capabilities | Euro Edge Technical Services L.L.C.",
  description:
    "Explore representative technical project scopes and capabilities from Euro Edge Technical Services L.L.C., covering MEP, HVAC, electrical, plumbing, fit-out, maintenance and facility management in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com/projects",
  },
  openGraph: {
    title: "Projects & Technical Capabilities | Euro Edge Technical Services L.L.C.",
    description:
      "Explore representative technical project scopes and capabilities from Euro Edge Technical Services L.L.C., covering MEP, HVAC, electrical, plumbing, fit-out, maintenance and facility management in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Technical Capabilities | Euro Edge Technical Services L.L.C.",
    description:
      "Explore representative technical project scopes and capabilities from Euro Edge Technical Services L.L.C., covering MEP, HVAC, electrical, plumbing, fit-out, maintenance and facility management in Dubai, UAE.",
  },
}

export default function ProjectsPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* =========================================
          HERO BANNER (Clean Light Style - No Image)
      ========================================= */}
      <section className="py-14 sm:py-18 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 lg:px-12 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0a2540]">
            EURO EDGE PROJECT EXPERIENCE
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
            Projects &amp; Technical Capabilities
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-2xl leading-relaxed font-medium">
            Supporting technical requirements across residential, commercial, hospitality, industrial, and facility environments in Dubai and the UAE.
          </p>
        </div>
      </section>

      {/* =========================================
          PROJECTS PORTFOLIO CONTENT
      ========================================= */}
      <ProjectsPortfolio />

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
