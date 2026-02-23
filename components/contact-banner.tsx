import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile - Compact card */}
      <div className="md:hidden px-3 py-4">
        <div className="bg-card border border-border/40 rounded-2xl p-5 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
            <MessageCircle className="w-5 h-5 text-accent" />
          </div>
          <h2 className="font-serif text-lg text-foreground tracking-tight">
            Need Help?
          </h2>
          <p className="mt-1 text-muted-foreground text-[11px] font-sans leading-relaxed max-w-[220px]">
            Questions about sizing, orders, or fabrics? We are here for you.
          </p>
          <div className="flex items-center gap-2.5 mt-4">
            <Link
              href="/contact"
              className="px-5 py-2 bg-primary text-primary-foreground text-[10px] tracking-[0.12em] uppercase font-medium font-sans rounded-full"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 bg-[#25d366] text-white text-[10px] tracking-[0.1em] uppercase font-medium font-sans rounded-full"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Desktop - Split layout */}
      <div className="hidden md:grid grid-cols-2 min-h-[40vh] lg:min-h-[45vh]">
        <div className="relative min-h-[30vh] lg:min-h-full">
          <Image
            src="/images/product-5.png"
            alt="JOOHAA LUXE - Contact us"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-secondary px-8 lg:px-16 py-12 lg:py-20">
          <div className="w-8 h-px bg-accent mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground tracking-tight text-balance">
            We are here to help.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm font-sans leading-relaxed max-w-md">
            Have questions about sizing, orders, or our fabrics? Our team is just a message away.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25d366] text-white text-xs tracking-[0.15em] uppercase font-medium font-sans rounded-full hover:bg-[#1ebe5a] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
