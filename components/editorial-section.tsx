import Image from "next/image"
import Link from "next/link"

export function EditorialSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/product-6.png"
          alt="Crafted for everyday elegance"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="relative z-10 w-full px-4 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">
            The JOOHAA LUXE Promise
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 tracking-tight text-balance italic leading-tight">
            Crafted for
            <br />
            Everyday Elegance
          </h2>
          <p className="mt-5 text-primary-foreground/70 text-base lg:text-lg font-sans max-w-md mx-auto leading-relaxed">
            Every stitch, every print, every fabric choice made with intention.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-8 px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
