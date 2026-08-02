import Image from "next/image"
import Link from "next/link"

export function EditorialSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile - Compact card */}
      <div className="md:hidden py-4">
        <div className="relative overflow-hidden aspect-[4/5]">
          <Image
            src="/images/product-6.png"
            alt="Bespoke kids suspender clothing set - Tiny Trends"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="w-6 h-px bg-accent mb-3" />
            <h2 className="font-serif text-xl text-primary-foreground tracking-tight leading-tight">
              Bespoke Designs for <em className="italic">Little Milestones</em>
            </h2>
            <p className="mt-2 text-primary-foreground/50 text-[11px] font-sans leading-relaxed max-w-[240px]">
              Every button and playful print is crafted with care and intention.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-3 px-5 py-2 border border-primary-foreground/25 text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-medium font-sans rounded-full"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop - Split layout */}
      <div className="hidden md:grid grid-cols-2 min-h-[60vh] lg:min-h-[70vh]">
        <div className="relative min-h-[45vh] lg:min-h-full">
          <Image
            src="/images/product-6.png"
            alt="Bespoke kids suspender clothing set - Tiny Trends"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-primary px-8 lg:px-16 py-16 lg:py-24">
          <div className="w-8 h-px bg-accent mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 font-sans">
            The Tiny Trends Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-4 tracking-tight leading-tight text-balance">
            Bespoke Designs for
            <br />
            <em className="italic">Little Milestones</em>
          </h2>
          <p className="mt-5 text-primary-foreground/50 text-base font-sans max-w-md leading-relaxed">
            Every stitch, every pattern, and every fabric selection is made with love. Our garments are designed to keep your little ones looking picture-perfect while enjoying absolute, breezy comfort all day long.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-8 px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary-foreground/5 transition-all duration-300 w-fit"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
