import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Maxi Nighties",
    image: "/images/product-3.png",
    href: "/shop?category=maxi",
    count: "24 Styles",
  },
  {
    title: "Floral Kaftans",
    image: "/images/product-2.png",
    href: "/shop?category=kaftan",
    count: "18 Styles",
  },
  {
    title: "Pajama Sets",
    image: "/images/product-1.png",
    href: "/shop?category=sets",
    count: "12 Styles",
  },
  {
    title: "Dark Florals",
    image: "/images/product-6.png",
    href: "/shop?category=dark-florals",
    count: "15 Styles",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Curated For You
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight text-balance">
            The Boutique Archive
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 font-sans">
                    {cat.count}
                  </p>
                  <h3 className="font-serif text-lg lg:text-xl text-primary-foreground mt-1">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-8 h-8 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
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
