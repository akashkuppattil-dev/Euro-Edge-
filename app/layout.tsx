import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "Tiny Trends | Premium Children's Apparel",
  description: "Discover premium children's fashion, frocks, boy suits, and organic baby onesies. Elegant boutique apparel crafted with love. Shipping across India.",
  keywords: ["children's apparel", "kids clothing", "baby onesie", "girls frock", "boys suit", "Tiny Trends"],
  openGraph: {
    title: "Tiny Trends | Premium Children's Apparel",
    description: "Discover premium children's fashion, frocks, boy suits, and organic baby onesies.",
    type: 'website',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8f6f3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
