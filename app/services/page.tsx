import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AMCPackages } from "@/components/amc-packages"
import { FAQSection } from "@/components/faq-section"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ArrowRight } from "lucide-react"
import { ServicesPortfolio } from "@/components/services-portfolio"

export const metadata = {
  title: "Official Services | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Explore our 5 official service divisions: Civil & Finishing Works, MEP & Technical Works, Swimming Pool Works, Landscaping Works, and General Maintenance in Dubai, UAE.",
  alternates: {
    canonical: "https://euroedgets.com/services",
  },
  openGraph: {
    title: "Official Services | Euro Edge Technical Services L.L.C.",
    description:
      "Explore our 5 official service divisions: Civil & Finishing Works, MEP & Technical Works, Swimming Pool Works, Landscaping Works, and General Maintenance in Dubai, UAE.",
    type: "website",
    url: "https://euroedgets.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Services | Euro Edge Technical Services L.L.C.",
    description:
      "Explore our 5 official service divisions: Civil & Finishing Works, MEP & Technical Works, Swimming Pool Works, Landscaping Works, and General Maintenance in Dubai, UAE.",
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      <ServicesPortfolio />

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
      <StickyContactWidget />
    </main>
  )
}
