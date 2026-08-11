import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ServiceQuoteForm } from "@/components/service-quote-form"
import { ServiceShareButton } from "@/components/share-button"
import { ServiceFaqAccordion } from "@/components/service-faq-accordion"
import { servicesData } from "@/lib/services-data"
import {
  Wrench,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  HelpCircle,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found | Euro Edge Technical Services" }

  const pageTitle = service.titleTag || `${service.title} in Dubai | Euro Edge Technical Services`

  return {
    title: pageTitle,
    description: service.shortDesc,
    keywords: [
      service.title,
      `${service.title} Dubai`,
      "Euro Edge Technical Services",
      "MEP contracting Dubai",
      "Dubai technical services",
    ],
    alternates: {
      canonical: `https://euroedgets.com/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: service.shortDesc,
      type: "website",
      url: `https://euroedgets.com/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: service.shortDesc,
    },
  }
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

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "url": `https://euroedgets.com/services/${service.slug}`,
    "areaServed": {
      "@type": "City",
      "name": "Dubai",
      "sameAs": "https://www.wikidata.org/wiki/Q612"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Euro Edge Technical Services L.L.C.",
      "url": "https://euroedgets.com/",
      "telephone": "+971543909946",
      "email": "info@euroedgets.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Quoz Industrial Area",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "Dubai, UAE",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Euro Edge Technical Services L.L.C."
      }
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://euroedgets.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://euroedgets.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://euroedgets.com/services/${service.slug}`
      }
    ]
  }

  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
      <section className="relative overflow-hidden bg-background text-foreground py-8 sm:py-12 lg:py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed font-sans">
                {service.shortDesc}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1 sm:pt-0">
              <ServiceShareButton slug={service.slug} title={service.title} shortDesc={service.shortDesc} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-8 sm:py-12 lg:py-14 px-4 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Description & Capabilities */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Visual Image */}
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-border shadow-md">
              <Image
                src={service.imageUrl}
                alt={service.imageAlt || `${service.title} — Euro Edge Technical Services L.L.C. Dubai`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Service Overview</h2>
              <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Deliverables & Capabilities */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Key Deliverables &amp; Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Interactive Fast Quote Form */}
          <div>
            <ServiceQuoteForm serviceTitle={service.title} />
          </div>
        </div>
      </section>

      {/* Centered Industry Applications Section */}
      {service.applications && service.applications.length > 0 && (
        <section className="py-10 sm:py-14 px-4 lg:px-12 bg-secondary/40 border-t border-border">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
                Industry Applications
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Proven technical delivery across diverse property sectors in Dubai and the UAE.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card border border-border shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center space-y-3 group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] max-w-xs flex-1 min-w-[220px]"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#0a2540] text-[#fbb03b] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Centered Interactive FAQs Accordion */}
      <ServiceFaqAccordion faqs={service.faqs} />

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
