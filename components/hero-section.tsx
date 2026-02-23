import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Hero - Compact promo card like reference */}
      <div className="md:hidden px-4 pt-3 pb-1">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
          <Image
            src="/images/product-2.png"
            alt="JOOHAA LUXE - Premium Nightwear Collection"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/45 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-5 py-4">
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary-foreground/50 font-sans">
              New Collection
            </span>
            <h1 className="font-serif text-[22px] text-primary-foreground mt-1 tracking-tight leading-tight">
              Up to <span className="text-accent font-semibold">40% OFF</span>
            </h1>
            <p className="text-[10px] text-primary-foreground/50 font-sans mt-1 max-w-[150px] leading-relaxed">
              Premium rayon nightwear for everyday elegance
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center mt-3 px-4 py-1.5 bg-accent text-accent-foreground text-[10px] tracking-[0.12em] uppercase font-semibold font-sans rounded-full w-fit"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block">
        <div className="bg-primary min-h-[85vh]">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 min-h-[85vh]">
            <div className="flex flex-col justify-center px-12 lg:px-20 py-20">
              <div className="w-8 h-px bg-accent mb-6" />
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-sans mb-4">
                Premium Nightwear Collection
              </span>
              <h1 className="font-serif text-4xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.08] tracking-tight text-balance">
                Elegance You
                <br />
                <em className="italic">Deserve</em>
              </h1>
              <p className="mt-6 text-primary-foreground/60 text-base lg:text-lg font-sans leading-relaxed max-w-md">
                Luxurious maxi nighties crafted from premium imported rayon.
                Where comfort meets sophistication.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary-foreground/5 transition-all duration-300"
                >
                  Collections
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/product-2.png"
                alt="JOOHAA LUXE premium kaftan nightwear"
                fill
                className="object-cover object-top"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
