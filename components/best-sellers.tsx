import { ProductCard } from "./product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "5",
    name: "Black Dahlia Floral Maxi Nighty",
    price: 1699,
    originalPrice: 2499,
    image: "/images/product-6.png",
    hoverImage: "/images/product-5.png",
    badge: "Best Seller",
    slug: "black-dahlia-floral-maxi",
  },
  {
    id: "6",
    name: "Blue Rose Kaftan Nighty",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-4.png",
    hoverImage: "/images/product-3.png",
    badge: "Best Seller",
    slug: "blue-rose-kaftan-nighty",
  },
  {
    id: "7",
    name: "Teal Garden Kaftan Maxi",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    badge: "Popular",
    slug: "teal-garden-kaftan-maxi",
  },
  {
    id: "8",
    name: "Blue Gingham Bow Pajama Set",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    badge: "Popular",
    slug: "blue-gingham-bow-pajama",
  },
]

export function BestSellers() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Customer Favourites
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop?sort=popular"
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
            href="/shop?sort=popular"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
          >
            View All Best Sellers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
