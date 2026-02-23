import Image from "next/image"
import Link from "next/link"

export function ContactBanner() {
  return (
    <section className="relative h-[40vh] lg:h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/product-3.png"
          alt="Contact JOOHAA LUXE"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      <div className="relative z-10 w-full text-center px-4">
        <h2 className="font-serif text-3xl lg:text-5xl text-primary-foreground tracking-tight italic">
          We are here to help.
        </h2>
        <p className="mt-3 text-primary-foreground/60 text-sm font-sans">
          Have questions? Our team is just a message away.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center mt-6 px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
