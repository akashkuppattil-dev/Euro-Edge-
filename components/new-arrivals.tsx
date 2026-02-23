import { ProductCard } from "./product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Blue Gingham Bow Print Pajama Set",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    badge: "Just In",
    slug: "blue-gingham-bow-pajama-set",
  },
  {
    id: "2",
    name: "Teal Floral Kaftan Maxi Nighty",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    badge: "Just In",
    slug: "teal-floral-kaftan-maxi",
  },
  {
    id: "3",
    name: "Blue Rose Print Kaftan Maxi",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    badge: "Just In",
    slug: "blue-rose-kaftan-maxi",
  },
  {
    id: "4",
    name: "Navy Floral Bouquet Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    badge: "Just In",
    slug: "navy-floral-bouquet-maxi",
  },
]

export function NewArrivals() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Fresh This Week
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop?sort=newest"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/shop?sort=newest"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
          >
            View All New Arrivals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
