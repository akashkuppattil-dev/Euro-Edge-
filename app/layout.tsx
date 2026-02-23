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
  title: 'JOOHAA LUXE | Premium Nightwear for Women',
  description: 'Discover premium rayon maxi nighties, kaftans, and luxury sleepwear. Crafted for everyday elegance. Free shipping across India.',
  keywords: ['nightwear', 'maxi nighty', 'kaftan', 'premium sleepwear', 'women nightwear', 'JOOHAA LUXE'],
  openGraph: {
    title: 'JOOHAA LUXE | Premium Nightwear for Women',
    description: 'Discover premium rayon maxi nighties, kaftans, and luxury sleepwear.',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1a2b',
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
