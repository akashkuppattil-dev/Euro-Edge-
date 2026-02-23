import Image from "next/image"
import Link from "next/link"

export function EditorialSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-[70vh]">
        {/* Image Left */}
        <div className="relative min-h-[45vh] lg:min-h-full">
          <Image
            src="/images/product-6.png"
            alt="Black dahlia floral maxi nighty - JOOHAA LUXE"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Right */}
        <div className="flex flex-col justify-center bg-primary px-6 lg:px-16 py-16 lg:py-24">
          <div className="w-8 h-px bg-accent mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 font-sans">
            The JOOHAA LUXE Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-4 tracking-tight leading-tight text-balance">
            Crafted for
            <br />
            <em className="italic">Everyday Elegance</em>
          </h2>
          <p className="mt-5 text-primary-foreground/50 text-base font-sans max-w-md leading-relaxed">
            Every stitch, every print, every fabric choice is made with intention. 
            Our pieces are designed to make you feel beautiful, from sunrise to starlight.
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
