import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AMCPackages } from "@/components/amc-packages"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ServiceShareButton } from "@/components/share-button"
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
  title: "Specialized Technical Services | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Explore all specialized engineering, maintenance, installation, MEP, civil, and facility management services provided by Euro Edge in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com/services",
  },
  openGraph: {
    title: "Specialized Technical Services | Euro Edge Technical Services L.L.C.",
    description:
      "Explore all specialized engineering, maintenance, installation, MEP, HVAC, civil, and facility management services by Euro Edge in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialized Technical Services | Euro Edge Technical Services L.L.C.",
    description:
      "Explore all specialized engineering, maintenance, installation, MEP, HVAC, civil, and facility management services by Euro Edge in Dubai, UAE.",
  },
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
      <section className="relative overflow-hidden bg-background text-foreground py-8 sm:py-12 lg:py-14 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-5xl">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Complete Engineering &amp; Contracting Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-2 sm:mt-3 tracking-tight">
            Our Specialized Services
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Euro Edge Technical Services L.L.C. delivers comprehensive, high-precision technical services across Dubai and the UAE. Select any service below to explore detailed specifications and capabilities.
          </p>
        </div>
      </section>

      {/* Services Grid with Visual Images */}
      <section className="py-8 sm:py-12 lg:py-14 px-4 lg:px-12 bg-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((srv, idx) => {
              const IconComponent = iconMap[srv.iconName] || Wrench
              return (
                <div
                  key={srv.slug}
                  className="rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Framed Service Image Showcase with Inset Side Padding */}
                    <div className="p-3 sm:p-4 pb-0">
                      <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-xl bg-secondary shadow-xs">
                        <Image
                          src={srv.imageUrl}
                          alt={srv.imageAlt || srv.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20">
                          #{String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="absolute bottom-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0a2540] text-[#fbb03b] flex items-center justify-center shadow-md border border-white/10">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                        {srv.title}
                      </h2>

                      <p className="mt-2 text-muted-foreground text-xs leading-relaxed line-clamp-3 font-sans">
                        {srv.shortDesc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-border/60 space-y-2">
                        {srv.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 stroke-[2.2]" />
                            <span className="line-clamp-1 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 flex items-center gap-2.5">
                    <ServiceShareButton slug={srv.slug} title={srv.title} shortDesc={srv.shortDesc} />

                    <Link
                      href={`/services/${srv.slug}`}
                      className="flex-1 py-2.5 sm:py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Explore Details</span>
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
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
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

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
            <StickyContactWidget />
    </main>
  )
}
