import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] lg:min-h-[45vh]">
        {/* Image */}
        <div className="relative min-h-[30vh] lg:min-h-full">
          <Image
            src="/images/product-5.png"
            alt="JOOHAA LUXE - Contact us"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center bg-secondary px-6 lg:px-16 py-12 lg:py-20">
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
