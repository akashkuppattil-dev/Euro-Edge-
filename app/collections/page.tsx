import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Girls Collection",
    subtitle: "Boutique elegance",
    description: "Beautiful hand-embroidered party frocks, festive lehenga cholis, tops, tunics, and daily wear dresses crafted with soft and graceful details.",
    image: "/images/product-1.png",
    href: "/shop?category=girls+collection",
    count: "24 Styles",
  },
  {
    title: "Boys Collection",
    subtitle: "Sharp & playful",
    description: "Dapper suit sets, casual matching sets, comfortable jeans, and traditional kurta sets designed for active play and celebratory events.",
    image: "/images/product-2.png",
    href: "/shop?category=boys+collection",
    count: "18 Styles",
  },
  {
    title: "Baby Collection",
    subtitle: "Pure & gentle comfort",
    description: "100% organic cotton onesies, rompers, baby frocks, and daily sleepwear with flat seams and nickel-free snaps for delicate newborn skin.",
    image: "/images/product-4.png",
    href: "/shop?category=baby+collection",
    count: "16 Styles",
  },
  {
    title: "Baby Footwear",
    subtitle: "Tiny steps",
    description: "Soft-sole shoes, adorable booties, and lightweight sandals designed to protect tiny feet while supporting their first steps.",
    image: "/images/product-2.png",
    href: "/shop?category=footwear",
    count: "8 Styles",
  },
  {
    title: "Baby Accessories",
    subtitle: "Boutique details",
    description: "From matching hairbows and headbands to organic bibs, socks, and cozy caps to complete your little one's boutique look.",
    image: "/images/product-5.png",
    href: "/shop?category=accessories",
    count: "12 Styles",
  },
  {
    title: "Toys & Soft Play",
    subtitle: "Safe play",
    description: "Hypoallergenic plush toys, soft cotton playthings, and sensory items made with child-safe materials for comfort and early development.",
    image: "/images/product-6.png",
    href: "/shop?category=toys",
    count: "10 Styles",
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
              src="/images/product-1.png"
              alt="Tiny Trends Collections"
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
            src="/images/product-1.png"
            alt="Tiny Trends Collections"
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
                Browse our curated boutique ranges for girls, boys, and newborns, crafted with premium fabrics and delightful designs.
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
            Need sizing advice? Reach out on WhatsApp.
          </h2>
          <p className="mt-2 md:mt-4 text-primary-foreground/50 text-xs md:text-sm font-sans leading-relaxed">
            Our team will guide you to select the perfect fit for your growing child.
          </p>
          <a
            href="https://wa.me/918129780324?text=Hi%20Tiny%20Trends%2C%20I%20would%20like%20to%20get%20some%20help%20with%20sizing%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-5 md:mt-8 px-6 md:px-8 py-2.5 md:py-3.5 bg-accent text-accent-foreground text-[11px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Chat with Size Advisor
          </a>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
