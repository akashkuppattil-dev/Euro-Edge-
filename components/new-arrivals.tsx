import { ProductCard } from "./product-card"
import Link from "next/link"

const products = [
  {
    id: "1",
    name: "Blue Gingham Bow Print Pajama Set",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    badge: "New",
    slug: "blue-gingham-bow-pajama-set",
    rating: 4.6,
  },
  {
    id: "2",
    name: "Teal Floral Kaftan - Feeding Friendly",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    badge: "New",
    slug: "teal-floral-kaftan-feeding",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Blue Rose V Neck Full Length Nighty",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    badge: "New",
    slug: "blue-rose-v-neck-full-length",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Navy Floral Round Neck Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    badge: "New",
    slug: "navy-floral-round-neck-maxi",
    rating: 4.9,
  },
]

export function NewArrivals() {
  return (
    <section className="py-6 md:py-16 lg:py-24 px-3 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Header - compact on mobile */}
        <div className="flex items-center justify-between mb-4 md:mb-12">
          <div>
            <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Fresh This Week
            </span>
            <h2 className="font-serif text-lg md:text-3xl lg:text-5xl md:mt-3 text-foreground tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop?sort=newest"
            className="text-[11px] md:text-xs text-accent md:text-foreground/70 font-sans font-medium md:font-normal md:tracking-[0.15em] md:uppercase md:hover:text-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
