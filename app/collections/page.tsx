import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Floral Kaftans",
    subtitle: "Effortless drape, timeless prints",
    description: "Our kaftan collection brings together premium imported rayon with hand-selected floral prints. Designed for everyday elegance.",
    image: "/images/product-2.png",
    href: "/shop?category=kaftan",
    count: "18 Styles",
  },
  {
    title: "Maxi Nighties",
    subtitle: "Full-length comfort",
    description: "Floor-length maxi nighties crafted from ultra-soft rayon. From delicate florals to bold botanicals, find your perfect match.",
    image: "/images/product-3.png",
    href: "/shop?category=maxi",
    count: "24 Styles",
  },
  {
    title: "Dark Florals",
    subtitle: "Bold elegance after dark",
    description: "Rich, moody florals on deep backgrounds. A sophisticated choice for those who love bold, dramatic prints.",
    image: "/images/product-6.png",
    href: "/shop?category=dark-florals",
    count: "15 Styles",
  },
  {
    title: "Pajama Sets",
    subtitle: "Co-ord sets for cozy nights",
    description: "Button-down tops paired with matching pants. Our pajama sets combine classic tailoring with playful prints.",
    image: "/images/product-1.png",
    href: "/shop?category=sets",
    count: "12 Styles",
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh this week",
    description: "Be the first to shop our latest drops. New styles added every week with seasonal prints and trending designs.",
    image: "/images/product-5.png",
    href: "/shop?sort=newest",
    count: "8 Styles",
  },
  {
    title: "Teal Collection",
    subtitle: "The colour of calm",
    description: "Deep teal paired with soft florals and intricate borders. A curated selection of our most relaxing pieces.",
    image: "/images/product-4.png",
    href: "/shop?color=teal",
    count: "10 Styles",
  },
]

export default function CollectionsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-[45vh] lg:h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/product-5.png"
            alt="JOOHAA LUXE Collections"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <div className="relative z-10 w-full text-center px-4">
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
      </section>

      {/* Collections Grid - Alternating Layout */}
      <section className="py-16 lg:py-24 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/5] rounded-xl overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-5 left-5">
                  <span className="inline-block bg-card/90 backdrop-blur-sm text-foreground text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-full font-sans font-medium">
                    {collection.count}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
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
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 px-4 lg:px-12 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground tracking-tight italic">
            Cannot decide? Start with our best sellers.
          </h2>
          <p className="mt-4 text-primary-foreground/50 text-sm font-sans leading-relaxed">
            Our most-loved pieces chosen by thousands of happy customers.
          </p>
          <Link
            href="/shop?sort=popular"
            className="inline-flex items-center mt-8 px-8 py-3.5 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Shop Best Sellers
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
