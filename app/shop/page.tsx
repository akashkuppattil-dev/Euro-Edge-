"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { ProductCard } from "@/components/product-card"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"

const allProducts = [
  {
    id: "1",
    name: "Blue Gingham Bow Print Pajama Set",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    badge: "New",
    slug: "blue-gingham-bow-pajama-set",
    category: "Pajama Set",
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
    category: "Feeding Friendly",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Blue Rose V Neck Full Length Nighty",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    slug: "blue-rose-v-neck-full-length",
    category: "V Neck - Full Length",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Blue Rose Full Sleeves Kaftan",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-4.png",
    slug: "blue-rose-full-sleeves-kaftan",
    category: "Full Sleeves",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Navy Floral Round Neck Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    badge: "Best Seller",
    slug: "navy-floral-round-neck-maxi",
    category: "Round Neck",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Black Dahlia V Neck Full Length Nighty",
    price: 1699,
    originalPrice: 2499,
    image: "/images/product-6.png",
    badge: "Best Seller",
    slug: "black-dahlia-v-neck-full-length",
    category: "V Neck - Full Length",
    rating: 4.9,
  },
  {
    id: "7",
    name: "Teal Floral Normal Nighty",
    price: 1249,
    originalPrice: 1799,
    image: "/images/product-2.png",
    slug: "teal-floral-normal-nighty",
    category: "Normal Nighty",
    rating: 4.4,
  },
  {
    id: "8",
    name: "Navy V Neck Ankle Length Nighty",
    price: 1349,
    originalPrice: 1899,
    image: "/images/product-5.png",
    slug: "navy-v-neck-ankle-nighty",
    category: "V Neck - Ankle",
    rating: 4.6,
  },
  {
    id: "9",
    name: "Blue Gingham Lace Detailed Set",
    price: 1599,
    originalPrice: 2199,
    image: "/images/product-1.png",
    badge: "New",
    slug: "blue-gingham-lace-detailed",
    category: "Lace Detailed",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Black Floral Full Sleeves Nighty",
    price: 1499,
    originalPrice: 2099,
    image: "/images/product-6.png",
    slug: "black-floral-full-sleeves",
    category: "Full Sleeves",
    rating: 4.5,
  },
]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
]

const categoryFilters = [
  "All",
  "Round Neck",
  "Pajama Set",
  "V Neck - Full Length",
  "Normal Nighty",
  "Full Sleeves",
  "V Neck - Ankle",
  "Feeding Friendly",
  "Lace Detailed",
]

const sizeFilters = ["All", "S", "M", "L", "XL", "XXL"]

export default function ShopPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState("featured")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeSize, setActiveSize] = useState("All")

  const filtered = allProducts.filter((p) => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false
    return true
  })

  const hasFilters = activeCategory !== "All" || activeSize !== "All"

  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Mobile Category Chips - Horizontal scroll */}
      <div className="md:hidden border-b border-border/40">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Page Header */}
      <div className="px-4 md:px-12 py-4 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-xl md:text-3xl lg:text-5xl text-foreground tracking-tight text-center md:text-center">
            Shop All
          </h1>
          <p className="mt-1 md:mt-3 text-muted-foreground text-xs md:text-sm font-sans text-center">
            {filtered.length} products
          </p>
        </div>
      </div>

      <div className="px-4 md:px-12 pb-10 md:pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 md:mb-8 pb-3 md:pb-6 border-b border-border/50">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Filters
              {hasFilters && (
                <span className="bg-primary text-primary-foreground text-[9px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                  {(activeCategory !== "All" ? 1 : 0) + (activeSize !== "All" ? 1 : 0)}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1.5 text-[11px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
              >
                <span className="hidden md:inline">Sort By: </span>
                {sortOptions.find((s) => s.value === activeSort)?.label}
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg py-1.5 min-w-[170px] z-20">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setActiveSort(opt.value)
                        setSortOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-sans transition-colors ${
                        activeSort === opt.value
                          ? "text-foreground bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filter Tags */}
          {hasFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
              {activeCategory !== "All" && (
                <button
                  onClick={() => setActiveCategory("All")}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-[11px] text-foreground/70 font-sans rounded-full"
                >
                  {activeCategory}
                  <X className="w-3 h-3" />
                </button>
              )}
              {activeSize !== "All" && (
                <button
                  onClick={() => setActiveSize("All")}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-[11px] text-foreground/70 font-sans rounded-full"
                >
                  Size: {activeSize}
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setActiveSize("All")
                }}
                className="text-[11px] text-muted-foreground hover:text-foreground font-sans underline transition-colors"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className={`${filterOpen ? "block" : "hidden"} md:block w-full md:w-52 flex-shrink-0`}>
              <div className="md:sticky md:top-28 flex flex-col gap-7">
                {/* Category */}
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-3">
                    Category
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {categoryFilters.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left text-sm font-sans py-1.5 transition-colors ${
                          activeCategory === cat
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-3">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizeFilters.map((size) => (
                      <button
                        key={size}
                        onClick={() => setActiveSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-colors ${
                          activeSize === size
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground/60 hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground font-sans text-sm">
                    No products found. Try adjusting your filters.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("All")
                      setActiveSize("All")
                    }}
                    className="mt-4 text-accent text-sm font-sans font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  )
}
