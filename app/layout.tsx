import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display, Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-cormorant',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-playfair',
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-outfit',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: "Euro Edge Technical Services L.L.C. | MEP, HVAC & Contracting Dubai",
  description: "Reliable technical contracting, MEP installations, HVAC systems, civil maintenance, interior fit-outs, and facility management services across Dubai and the UAE.",
  keywords: ["MEP contracting Dubai", "HVAC maintenance UAE", "Euro Edge Technical Services", "electrical contractor Dubai", "plumbing services Dubai", "villa fit-out", "DEWA approved contractor"],
  openGraph: {
    title: "Euro Edge Technical Services L.L.C. | Dubai, UAE",
    description: "Reliable technical contracting, MEP installations, HVAC systems, civil maintenance, and facility management across Dubai and the UAE.",
    type: 'website',
    url: 'https://euroedgets.com/',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
