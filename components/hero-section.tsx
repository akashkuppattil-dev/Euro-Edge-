import Image from "next/image"
import Link from "next/link"

const heroImages = [
  { src: "/images/product-2.png", alt: "Teal Floral Kaftan" },
  { src: "/images/product-3.png", alt: "Blue Rose Maxi Nighty" },
  { src: "/images/product-6.png", alt: "Black Dahlia Nighty" },
]

export function HeroSection() {
  return (
    <section className="bg-card">
      {/* ---- MOBILE ---- */}
      <div className="md:hidden px-4 pt-4 pb-2">
        {/* Brand tagline */}
        <div className="text-center mb-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-sans font-semibold">
            Joohaa Luxe
          </p>
          <h1 className="font-serif text-xl text-foreground mt-1 text-balance">
            Everyday Wear, Made Beautiful
          </h1>
          <p className="text-muted-foreground text-[11px] font-sans mt-1">
            Premium imported ladies wear &middot; Shipping all over India
          </p>
        </div>

        {/* 3-image row */}
        <div className="grid grid-cols-3 gap-2">
          {heroImages.map((img, i) => (
            <Link key={i} href="/shop" className="block group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top group-active:scale-105 transition-transform duration-300"
                  sizes="33vw"
                  priority
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-3 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-[10px] tracking-[0.18em] uppercase font-sans font-medium rounded-full active:scale-95 transition-transform"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* ---- DESKTOP ---- */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 min-h-[560px] lg:min-h-[640px]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 py-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans font-semibold">
                Joohaa Luxe Clothing
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mt-4 leading-[1.1] text-balance">
                Everyday Wear, Made Beautiful
              </h1>
              <p className="mt-4 text-muted-foreground text-sm lg:text-base font-sans leading-relaxed max-w-md">
                Premium imported ladies wear crafted for everyday elegance. Discover kaftans, maxi nighties, and sleepwear designed for comfort and style.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Shop Collection
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center px-8 py-3.5 border border-border text-foreground text-[11px] tracking-[0.18em] uppercase font-sans font-medium rounded-full hover:bg-secondary transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Right: 3-image grid */}
            <div className="grid grid-cols-3 gap-3 p-6 lg:p-10">
              {heroImages.map((img, i) => (
                <Link key={i} href="/shop" className="block group">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-secondary">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="17vw"
                      priority
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
