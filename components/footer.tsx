"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronUp,
  Building2,
  Instagram,
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <footer className="bg-[#0a2540] text-white relative font-sans pt-16 pb-8 border-t-[4px] border-[#fbb03b] overflow-hidden">
      {/* Architectural Sketch Background (Euro Edge 'EE' Logo Structure) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none select-none z-0 flex items-center justify-center w-full overflow-hidden">
        <svg 
          viewBox="0 0 800 800" 
          className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] text-[#fbb03b]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Blueprint Grid Lines */}
          <g strokeWidth="0.5" opacity="0.4">
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="400" x2="800" y2="400" />
            <line x1="0" y1="600" x2="800" y2="600" />
            <line x1="200" y1="0" x2="200" y2="800" />
            <line x1="400" y1="0" x2="400" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            {/* Diagonal perspective lines */}
            <line x1="0" y1="800" x2="800" y2="0" />
            <line x1="0" y1="0" x2="800" y2="800" />
          </g>

          {/* Main Structure: The E and E (Euro Edge) */}
          <g strokeWidth="2.5" opacity="0.8">
            {/* First E (Euro) - Built like a 3D structural frame */}
            <path d="M 150 150 L 150 650 L 350 650" /> {/* Back and bottom spine */}
            <path d="M 150 150 L 350 150" /> {/* Top beam */}
            <path d="M 150 400 L 300 400" /> {/* Middle beam */}
            
            {/* Inner scaffolding for first E */}
            <path d="M 170 170 L 170 630" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />
            <line x1="150" y1="150" x2="200" y2="200" strokeWidth="1" />
            <line x1="150" y1="400" x2="200" y2="450" strokeWidth="1" />
            <line x1="150" y1="650" x2="200" y2="600" strokeWidth="1" />

            {/* Second E (Edge) - Built like a 3D structural frame */}
            <path d="M 450 150 L 450 650 L 650 650" /> {/* Back and bottom spine */}
            <path d="M 450 150 L 650 150" /> {/* Top beam */}
            <path d="M 450 400 L 600 400" /> {/* Middle beam */}
            
            {/* Inner scaffolding for second E */}
            <path d="M 470 170 L 470 630" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />
            <line x1="450" y1="150" x2="500" y2="200" strokeWidth="1" />
            <line x1="450" y1="400" x2="500" y2="450" strokeWidth="1" />
            <line x1="450" y1="650" x2="500" y2="600" strokeWidth="1" />
          </g>

          {/* Construction details / Crossbeams connecting the Es structurally */}
          <g strokeWidth="1" opacity="0.5">
            <line x1="350" y1="150" x2="450" y2="150" strokeDasharray="6 6" />
            <line x1="300" y1="400" x2="450" y2="400" strokeDasharray="6 6" />
            <line x1="350" y1="650" x2="450" y2="650" strokeDasharray="6 6" />
            
            {/* Grid points / nodes */}
            <circle cx="150" cy="150" r="4" fill="currentColor" />
            <circle cx="150" cy="400" r="4" fill="currentColor" />
            <circle cx="150" cy="650" r="4" fill="currentColor" />
            <circle cx="450" cy="150" r="4" fill="currentColor" />
            <circle cx="450" cy="400" r="4" fill="currentColor" />
            <circle cx="450" cy="650" r="4" fill="currentColor" />
          </g>

          {/* Measurement lines */}
          <g strokeWidth="1" opacity="0.6">
            <line x1="120" y1="650" x2="120" y2="150" />
            <path d="M110 650 L130 650 M110 150 L130 150" />
            
            <line x1="680" y1="650" x2="680" y2="150" />
            <path d="M670 650 L690 650 M670 150 L690 150" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {/* Column 1: Logo & Info */}
          <div className="space-y-4">
             <div className="flex items-center gap-3">
               <div className="bg-white p-1.5 rounded-lg">
                 <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
               </div>
               <div className="flex flex-col">
                 <span className="font-serif font-bold text-lg leading-tight text-white">EURO EDGE</span>
                 <span className="text-[8px] uppercase tracking-widest text-[#fbb03b]">Technical Services L.L.C</span>
               </div>
             </div>
             
             <div className="text-xs text-white/60 font-light space-y-1.5 mt-6">
               <p>Euro Edge Technical Services L.L.C</p>
               <p>Dubai, United Arab Emirates</p>
               <p>Established 2012</p>
             </div>
             
             <p className="text-xs text-white/40 pt-4">© 2026 Euro Edge Technical Services L.L.C.</p>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Sitemap</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60 font-light">
              <li><Link href="/" className="hover:text-[#fbb03b] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#fbb03b] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#fbb03b] transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#fbb03b] transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#fbb03b] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Services</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60 font-light">
              <li><Link href="/services/hvac-systems" className="hover:text-[#fbb03b] transition-colors">Air-Conditioning & HVAC</Link></li>
              <li><Link href="/services/plumbing-sanitary" className="hover:text-[#fbb03b] transition-colors">Plumbing & Sanitary</Link></li>
              <li><Link href="/services/electrical-works" className="hover:text-[#fbb03b] transition-colors">Electrical Works</Link></li>
              <li><Link href="/services/building-maintenance" className="hover:text-[#fbb03b] transition-colors">Building Maintenance</Link></li>
              <li><Link href="/services/false-ceiling" className="hover:text-[#fbb03b] transition-colors">Fit-Out & Renovation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60 font-light">
              <li>Email: <a href="mailto:info@euroedgets.com" className="hover:text-[#fbb03b] transition-colors">info@euroedgets.com</a></li>
              <li>Phone: <a href="tel:+971543909946" className="hover:text-[#fbb03b] transition-colors">+971 54 390 9946</a></li>
              <li>WhatsApp: <a href="https://wa.me/971543909946" className="hover:text-[#fbb03b] transition-colors">+971 54 390 9946</a></li>
              <li>Instagram: <a href="https://www.instagram.com/euro_edge?stkn=Zno1OGRpZjVpdGMw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbb03b] transition-colors">@euro_edge</a></li>
              <li>Address: Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Middle Big Text */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-[80px] leading-none font-serif tracking-[0.1em] text-white/90 mb-4">EURO EDGE</h1>
          <p className="text-xs md:text-lg tracking-[0.4em] font-light text-white/50 uppercase">Technical Services L.L.C</p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-2 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="tracking-[0.2em] text-[10px] md:text-xs font-light text-white/60 uppercase">Quality. Safety. Client Satisfaction.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/80 mr-2 hidden sm:inline-block">Request a site visit</span>
            <div className="flex gap-2.5">
              <a 
                href="https://www.instagram.com/euro_edge?stkn=Zno1OGRpZjVpdGMw&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#E1306C] hover:-translate-y-1 transition-all group"
                aria-label="Euro Edge Instagram"
              >
                 <Instagram className="w-4 h-4 text-[#0a2540] group-hover:text-white" />
              </a>
              <a href="https://wa.me/971543909946" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#25D366] hover:-translate-y-1 transition-all group">
                 <Phone className="w-4 h-4 text-[#0a2540] group-hover:text-white" />
              </a>
              <a href="mailto:info@euroedgets.com" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#fbb03b] hover:-translate-y-1 transition-all group">
                 <Mail className="w-4 h-4 text-[#0a2540] group-hover:text-white" />
              </a>
              <a href="tel:+971543909946" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#fbb03b] hover:-translate-y-1 transition-all group">
                 <Phone className="w-4 h-4 text-[#0a2540] group-hover:text-white" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="ml-4 w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbb03b] flex items-center justify-center text-white transition-all shadow-sm group"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
