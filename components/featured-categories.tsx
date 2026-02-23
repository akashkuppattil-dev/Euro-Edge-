import Image from "next/image"
import Link from "next/link"

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70 font-sans">
                  {cat.count}
                </p>
                <h3 className="font-serif text-lg lg:text-xl text-primary-foreground mt-1">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
