import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { AMCPackages } from "@/components/amc-packages"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { servicesData } from "@/lib/services-data"
import {
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata = {
  title: "17 Technical Services | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Explore all 17 engineering, maintenance, installation, MEP, civil, and facility management services provided by Euro Edge in Dubai, UAE.",
}

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

export default function ServicesPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Complete Engineering & Contracting Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-3">
            Our 17 Specialized Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Euro Edge Technical Services L.L.C. delivers comprehensive, high-precision technical services across Dubai and the UAE. Select any service below to explore detailed specifications and capabilities.
          </p>
        </div>
      </section>

      {/* 17 Services Grid with Visual Images */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((srv, idx) => {
              const IconComponent = iconMap[srv.iconName] || Wrench
              return (
                <div
                  key={srv.slug}
                  className="rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Service Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-secondary">
                      <Image
                        src={srv.imageUrl}
                        alt={srv.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-md text-foreground text-xs font-mono font-bold border border-border">
                        #{String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                        {srv.title}
                      </h2>

                      <p className="mt-2.5 text-muted-foreground text-xs leading-relaxed">
                        {srv.shortDesc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-border/60 space-y-2">
                        {srv.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="w-full py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground">Need Custom Technical Solutions?</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Our engineering team is ready to evaluate your requirements, conduct site inspections, and provide detailed technical proposals for projects of any scale in Dubai.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
            >
              Contact Our Engineers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AMC Packages Section */}
      <AMCPackages />

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
