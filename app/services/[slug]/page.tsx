import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
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
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ShieldCheck,
  Award,
} from "lucide-react"

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

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.iconName] || Wrench

  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Breadcrumb & Navigation */}
      <div className="bg-secondary py-4 px-4 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
          <span className="text-muted-foreground">Euro Edge Technical Services L.L.C.</span>
        </div>
      </div>

      {/* Service Header */}
      <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary flex-shrink-0">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Technical Service Line
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-1">
                {service.title}
              </h1>
              <p className="mt-3 text-base text-muted-foreground max-w-3xl leading-relaxed">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description & Capabilities */}
          <div className="lg:col-span-2 space-y-12">
            {/* Service Visual Image */}
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-border shadow-md">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border text-foreground text-xs font-semibold">
                {service.title} • Euro Edge Technical Services L.L.C. Dubai
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Service Overview</h2>
              <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Deliverables & Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Key Deliverables & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Applications */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Industry Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.applications.map((app, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-secondary border border-border flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact & Service Inquiry */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-md space-y-6 sticky top-28">
              <h3 className="text-xl font-serif font-bold text-foreground">Inquire About {service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Contact Euro Edge Technical Services L.L.C. for site visits, technical assessments, and cost estimates in Dubai.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+9710543909946" className="text-foreground font-semibold hover:underline">
                    +971 054 390 9946
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@euroedgets.com" className="text-foreground font-semibold hover:underline">
                    info@euroedgets.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href={`https://wa.me/9710543909946?text=Hi%20Euro%20Edge%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25d366] text-white font-semibold text-xs uppercase tracking-wider text-center block hover:bg-[#1ebe5a] transition-colors"
                >
                  WhatsApp Inquiry
                </a>

                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider text-center block hover:bg-primary/90 transition-colors"
                >
                  Request Detailed Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
