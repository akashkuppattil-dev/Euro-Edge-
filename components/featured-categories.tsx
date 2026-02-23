import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Round Neck",
    image: "/images/product-5.png",
    href: "/shop?category=round+neck",
    count: "12 Styles",
  },
  {
    title: "Pajama Set",
    image: "/images/product-1.png",
    href: "/shop?category=pajama+set",
    count: "8 Styles",
  },
  {
    title: "V Neck - Full Length",
    image: "/images/product-6.png",
    href: "/shop?category=v+neck+-+full+length",
    count: "15 Styles",
  },
  {
    title: "Normal Nighty",
    image: "/images/product-3.png",
    href: "/shop?category=normal+nighty",
    count: "10 Styles",
  },
  {
    title: "Full Sleeves",
    image: "/images/product-4.png",
    href: "/shop?category=full+sleeves",
    count: "9 Styles",
  },
  {
    title: "Feeding Friendly",
    image: "/images/product-2.png",
    href: "/shop?category=feeding+friendly",
    count: "14 Styles",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-6 md:py-16 lg:py-24 px-3 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-12 md:justify-center md:flex-col md:text-center">
          <h2 className="font-serif text-lg md:text-3xl lg:text-5xl text-foreground tracking-tight">
            Shop by Category
          </h2>
          <Link href="/shop" className="text-[11px] text-accent font-sans font-medium md:hidden">
            View All
          </Link>
          <p className="hidden md:block mt-3 text-muted-foreground text-sm font-sans">
            Find your perfect nightwear style
          </p>
        </div>

        {/* Mobile - 2 column compact grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-active:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-[11px] font-sans font-semibold text-primary-foreground tracking-wide uppercase">
                  {cat.title}
                </h3>
                <p className="text-[9px] text-primary-foreground/50 font-sans mt-0.5">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop - Large editorial grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 font-sans">
                    {cat.count}
                  </p>
                  <h3 className="font-serif text-lg text-primary-foreground mt-1">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-8 h-8 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
