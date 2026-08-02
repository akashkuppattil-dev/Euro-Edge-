import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Girls Collection",
    image: "/images/product-1.png",
    href: "/shop?category=girls+collection",
    count: "24 Styles",
  },
  {
    title: "Boys Collection",
    image: "/images/product-2.png",
    href: "/shop?category=boys+collection",
    count: "18 Styles",
  },
  {
    title: "Baby Collection",
    image: "/images/product-4.png",
    href: "/shop?category=baby+collection",
    count: "16 Styles",
  },
  {
    title: "Baby Footwear",
    image: "/images/product-2.png",
    href: "/shop?category=footwear",
    count: "8 Styles",
  },
  {
    title: "Baby Accessories",
    image: "/images/product-5.png",
    href: "/shop?category=accessories",
    count: "12 Styles",
  },
  {
    title: "Toys & Soft Play",
    image: "/images/product-6.png",
    href: "/shop?category=toys",
    count: "10 Styles",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-6 md:py-16 lg:py-24 px-3 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-12 md:justify-center md:flex-col md:text-center">
          <h2 className="font-serif text-xl md:text-3xl lg:text-5xl text-foreground tracking-tight">
            Featured Categories
          </h2>
          <Link href="/shop" className="text-[11px] text-accent-foreground font-sans font-semibold md:hidden">
            View All
          </Link>
          <p className="hidden md:block mt-3 text-muted-foreground text-sm font-sans">
            Shop premium handpicked collections for your little ones
          </p>
        </div>

        {/* Mobile - 2 column grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-border/30">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-active:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-2 border border-dashed border-white/30 rounded-xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-[11px] font-sans font-bold text-primary-foreground tracking-wide uppercase">
                  {cat.title.replace(" Collection", "")}
                </h3>
                <p className="text-[9px] text-primary-foreground/60 font-sans mt-0.5">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop - 3 column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-border/30 shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="33vw"
              />
              <div className="absolute inset-3 border border-dashed border-white/20 rounded-xl group-hover:border-accent/40 transition-colors pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 font-sans">
                    {cat.count}
                  </p>
                  <h3 className="font-serif text-xl text-primary-foreground mt-1">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-9 h-9 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
