import Image from "next/image"
import Link from "next/link"

const heroImages = [
  { src: "/images/product-2.png", alt: "JOOHAA LUXE Teal Floral Kaftan" },
  { src: "/images/product-3.png", alt: "JOOHAA LUXE Blue Rose Maxi Nighty" },
  { src: "/images/product-6.png", alt: "JOOHAA LUXE Black Dahlia Nighty" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Hero */}
      <div className="md:hidden">
        {/* Brand text */}
        <div className="px-4 pt-5 pb-4 text-center">
          <h1 className="font-serif text-2xl tracking-tight text-foreground leading-tight text-balance">
            Everyday Wear, Made Beautiful
          </h1>
          <p className="mt-2 text-xs text-muted-foreground font-sans leading-relaxed">
            Premium imported ladies wear from JOOHAA LUXE
          </p>
        </div>

        {/* 3 images in a row */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {heroImages.map((img) => (
              <Link key={img.src} href="/shop" className="block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="33vw"
                    priority
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center px-7 py-2.5 bg-primary text-primary-foreground text-[11px] tracking-[0.15em] uppercase font-medium font-sans rounded-full"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block py-12 lg:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Brand text above images */}
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-sans">
              JOOHAA LUXE Clothing
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mt-3 tracking-tight leading-tight text-balance">
              Everyday Wear, Made Beautiful
            </h1>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg font-sans leading-relaxed max-w-lg mx-auto">
              Premium imported ladies wear. Shipping all over India.
            </p>
            <div className="flex justify-center gap-4 mt-7">
              <Link
                href="/shop"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-all duration-300"
              >
                Shop Now
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-secondary transition-all duration-300"
              >
                Collections
              </Link>
            </div>
          </div>

          {/* 3 images in a row */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {heroImages.map((img) => (
              <Link key={img.src} href="/shop" className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="33vw"
                    priority
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
