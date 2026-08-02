import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Girls Collection",
    image: "/images/product-1.png",
    href: "/shop?category=girls+collection",
  },
  {
    title: "Boys Collection",
    image: "/images/product-2.png",
    href: "/shop?category=boys+collection",
  },
  {
    title: "Baby Collection",
    image: "/images/product-4.png",
    href: "/shop?category=baby+collection",
  },
  {
    title: "Footwear",
    image: "/images/product-2.png",
    href: "/shop?category=footwear",
  },
  {
    title: "Accessories",
    image: "/images/product-5.png",
    href: "/shop?category=accessories",
  },
  {
    title: "Toys",
    image: "/images/product-6.png",
    href: "/shop?category=toys",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-background border-b border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs tracking-[0.25em] uppercase text-accent-foreground/60 font-sans font-bold">
            Explore
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mt-3 text-foreground tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-2 text-muted-foreground text-xs md:text-sm font-sans">
            Find the perfect styles across our collections
          </p>
        </div>

        {/* Circular Chips - Scrollable on mobile, grid of 6 on desktop */}
        <div className="flex md:grid md:grid-cols-6 items-center md:justify-items-center gap-6 overflow-x-auto scrollbar-hide py-4 px-2 md:overflow-visible md:py-0 md:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col items-center flex-shrink-0 text-center cursor-pointer select-none"
            >
              {/* Circle Image Wrapper */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-border/60 hover:border-accent shadow-sm hover:shadow-md transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Category Name Label below */}
              <span className="mt-3 text-[11px] md:text-xs tracking-wider font-sans font-bold text-foreground/75 uppercase group-hover:text-accent-foreground transition-colors max-w-[100px] leading-tight">
                {cat.title.replace(" Collection", "")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
