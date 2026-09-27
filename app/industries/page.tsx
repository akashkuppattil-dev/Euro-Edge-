import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { IndustriesPortfolio } from "@/components/industries-portfolio"

export const metadata = {
  title: "Industries We Serve | Euro Edge Technical Services L.L.C.",
  description:
    "From private villas and commercial properties to hospitality, industrial and specialized facilities, Euro Edge delivers integrated technical solutions tailored to every environment.",
  alternates: {
    canonical: "https://euroedgets.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | Euro Edge Technical Services L.L.C.",
    description:
      "From private villas and commercial properties to hospitality, industrial and specialized facilities, Euro Edge delivers integrated technical solutions tailored to every environment.",
    type: "website",
    url: "https://euroedgets.com/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Euro Edge Technical Services L.L.C.",
    description:
      "From private villas and commercial properties to hospitality, industrial and specialized facilities, Euro Edge delivers integrated technical solutions tailored to every environment.",
  },
}

export default function IndustriesPage() {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      <IndustriesPortfolio />
      <Footer />
      <StickyContactWidget />
    </main>
  )
}
