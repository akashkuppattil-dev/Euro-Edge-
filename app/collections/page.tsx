import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Round Neck Collection",
    subtitle: "Classic comfort",
    description: "Timeless round neck nighties in premium rayon. Soft, breathable, and effortlessly elegant for everyday comfort.",
    image: "/images/product-5.png",
    href: "/shop?category=round+neck",
    count: "12 Styles",
  },
  {
    title: "Pajama Sets",
    subtitle: "Co-ord comfort",
    description: "Button-down tops paired with matching pants. Our pajama sets combine classic tailoring with playful prints.",
    image: "/images/product-1.png",
    href: "/shop?category=pajama+set",
    count: "8 Styles",
  },
  {
    title: "V Neck - Full Length",
    subtitle: "Floor-length elegance",
    description: "Graceful V neck full length nighties with stunning floral prints. Designed to drape beautifully.",
    image: "/images/product-6.png",
    href: "/shop?category=v+neck+-+full+length",
    count: "15 Styles",
  },
  {
    title: "Normal Nighty",
    subtitle: "Everyday essentials",
    description: "Simple, comfortable nighties for daily wear. Premium fabric with easy-care prints that stay vibrant.",
    image: "/images/product-3.png",
    href: "/shop?category=normal+nighty",
    count: "10 Styles",
  },
  {
    title: "Full Sleeves",
    subtitle: "All-season warmth",
    description: "Full sleeve nightwear in breathable rayon for cooler nights. Elegant prints with cozy coverage.",
    image: "/images/product-4.png",
    href: "/shop?category=full+sleeves",
    count: "9 Styles",
  },
  {
    title: "Feeding Friendly",
    subtitle: "Designed for new moms",
    description: "Thoughtfully designed nightwear with easy access for nursing mothers. Comfort meets functionality.",
    image: "/images/product-2.png",
    href: "/shop?category=feeding+friendly",
    count: "14 Styles",
  },
  {
    title: "V Neck - Ankle Length",
    subtitle: "Modern cut",
    description: "Ankle-length V neck nighties for a modern, flattering fit. Perfect for those who prefer a shorter hemline.",
    image: "/images/product-5.png",
    href: "/shop?category=v+neck+-+ankle",
    count: "11 Styles",
  },
  {
    title: "Lace Detailed",
    subtitle: "Luxury accents",
    description: "Nightwear adorned with delicate lace details. A touch of luxury for those special moments of rest.",
    image: "/images/product-1.png",
    href: "/shop?category=lace+detailed",
    count: "7 Styles",
  },
]

export default function CollectionsPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Mobile Hero */}
        <div className="md:hidden px-4 pt-3 pb-4">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
            <Image
              src="/images/product-5.png"
              alt="JOOHAA LUXE Collections"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-5">
              <span className="text-[9px] tracking-[0.2em] uppercase text-primary-foreground/50 font-sans">
                Curated With Care
              </span>
              <h1 className="font-serif text-xl text-primary-foreground mt-1 tracking-tight italic">
                Our Collections
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden md:block relative h-[45vh] lg:h-[55vh]">
          <Image
            src="/images/product-5.png"
            alt="JOOHAA LUXE Collections"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">
                Curated With Care
              </span>
              <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground mt-3 tracking-tight italic text-balance">
                Our Collections
              </h1>
              <p className="mt-4 text-primary-foreground/60 text-sm font-sans max-w-md mx-auto leading-relaxed">
                Browse our thoughtfully curated collections, each designed around a distinct mood and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-4 md:py-16 lg:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile - Compact list */}
          <div className="md:hidden flex flex-col gap-4">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                href={collection.href}
                className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border/40 active:bg-secondary transition-colors"
              >
                <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-sans font-semibold text-foreground">
                    {collection.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground font-sans mt-0.5 line-clamp-2 leading-relaxed">
                    {collection.description}
                  </p>
                  <span className="text-[10px] text-accent font-sans font-medium mt-1 inline-block">
                    {collection.count}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/25 flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Desktop - Alternating editorial */}
          <div className="hidden md:flex flex-col gap-16 lg:gap-24">
            {collections.map((collection, index) => (
              <div
                key={collection.title}
                className="grid grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className={`relative aspect-[4/5] rounded-xl overflow-hidden ${index % 2 !== 0 ? "order-2" : ""}`}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block bg-card/90 backdrop-blur-sm text-foreground text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-full font-sans font-medium">
                      {collection.count}
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 !== 0 ? "order-1" : ""}`}>
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-sans">
                    {collection.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl lg:text-5xl text-foreground mt-3 tracking-tight">
                    {collection.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground text-base leading-relaxed font-sans max-w-md">
                    {collection.description}
                  </p>
                  <Link
                    href={collection.href}
                    className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-foreground font-sans font-medium group"
                  >
                    <span className="border-b border-foreground/30 pb-0.5 group-hover:border-foreground transition-colors">
                      Explore Collection
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 md:py-16 lg:py-20 px-4 md:px-12 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl text-primary-foreground tracking-tight italic">
            Cannot decide? Start with our best sellers.
          </h2>
          <p className="mt-2 md:mt-4 text-primary-foreground/50 text-xs md:text-sm font-sans leading-relaxed">
            Our most-loved pieces chosen by thousands of happy customers.
          </p>
          <Link
            href="/shop?sort=popular"
            className="inline-flex items-center mt-5 md:mt-8 px-6 md:px-8 py-2.5 md:py-3.5 bg-accent text-accent-foreground text-[11px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Shop Best Sellers
          </Link>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
