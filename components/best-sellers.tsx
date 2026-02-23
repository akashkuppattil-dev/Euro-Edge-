import { ProductCard } from "./product-card"
import Link from "next/link"

const products = [
  {
    id: "5",
    name: "Black Dahlia V Neck Full Length Nighty",
    price: 1699,
    originalPrice: 2499,
    image: "/images/product-6.png",
    hoverImage: "/images/product-5.png",
    badge: "Best Seller",
    slug: "black-dahlia-v-neck-full-length",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Blue Rose Full Sleeves Kaftan",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-4.png",
    hoverImage: "/images/product-3.png",
    badge: "Best Seller",
    slug: "blue-rose-full-sleeves-kaftan",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Teal Feeding Friendly Kaftan Maxi",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    badge: "Popular",
    slug: "teal-feeding-friendly-kaftan",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Blue Gingham Pajama Set - Lace Detailed",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    badge: "Popular",
    slug: "blue-gingham-pajama-lace",
    rating: 4.6,
  },
]

export function BestSellers() {
  return (
    <section className="py-6 md:py-16 lg:py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header - compact on mobile */}
        <div className="flex items-center justify-between mb-4 md:mb-12">
          <div>
            <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Customer Favourites
            </span>
            <h2 className="font-serif text-lg md:text-3xl lg:text-5xl md:mt-3 text-foreground tracking-tight">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop?sort=popular"
            className="text-[11px] md:text-xs text-accent md:text-foreground/70 font-sans font-medium md:font-normal md:tracking-[0.15em] md:uppercase md:hover:text-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
