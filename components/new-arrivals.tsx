import { ProductCard } from "./product-card"
import { allProducts } from "@/lib/products"
import Link from "next/link"

export function NewArrivals() {
  // Display products marked as New or a slice of first few items
  const newArrivals = allProducts.filter((p) => p.badge === "New" || p.id === "4" || p.id === "5" || p.id === "7" || p.id === "6" || p.id === "8").slice(0, 5)

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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
