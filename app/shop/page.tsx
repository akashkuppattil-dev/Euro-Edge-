"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { ProductCard } from "@/components/product-card"
import { allProducts } from "@/lib/products"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"

const categoryFilters = [
  "All",
  "Girls Collection",
  "Boys Collection",
  "Baby Collection",
  "Footwear",
  "Accessories",
  "Toys",
]

const sizeFilters = [
  "All",
  "3-4 Years",
  "5-6 Years",
  "7-8 Years",
  "9-10 Years",
  "11-12 Years",
  "13-14 Years",
  "1-2 Months",
  "3-4 Months",
  "5-6 Months",
  "7-8 Months",
  "9-10 Months",
  "11-12 Months",
  "1-2 Years",
]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
]

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const sectionParam = searchParams.get("section")
  const sortParam = searchParams.get("sort")
  const sizeParam = searchParams.get("size")

  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState("featured")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeSize, setActiveSize] = useState("All")

  // Initialize filters from URL parameters
  useEffect(() => {
    if (categoryParam) {
      const matched = categoryFilters.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      )
      if (matched) setActiveCategory(matched)
    } else if (sectionParam) {
      if (sectionParam.toLowerCase() === "girls") setActiveCategory("Girls Collection")
      else if (sectionParam.toLowerCase() === "boys") setActiveCategory("Boys Collection")
      else if (sectionParam.toLowerCase() === "babies") setActiveCategory("Baby Collection")
    }

    if (sizeParam) {
      const matchedSize = sizeFilters.find(
        (s) => s.toLowerCase() === sizeParam.toLowerCase()
      )
      if (matchedSize) setActiveSize(matchedSize)
    }

    if (sortParam) {
      const matchedSort = sortOptions.find((s) => s.value === sortParam)
      if (matchedSort) setActiveSort(matchedSort.value)
    }
  }, [categoryParam, sectionParam, sortParam, sizeParam])

  // Filter and Sort Logic
  const filtered = allProducts
    .filter((p) => {
      // Category / Section Filtering
      if (activeCategory !== "All") {
        const catLower = activeCategory.toLowerCase()
        if (catLower.includes("girls")) {
          if (p.section !== "Girls") return false
        } else if (catLower.includes("boys")) {
          if (p.section !== "Boys") return false
        } else if (catLower.includes("baby")) {
          if (p.section !== "Babies") return false
        } else {
          // generic categories (footwear, accessories, toys)
          if (p.category.toLowerCase() !== catLower) return false
        }
      }

      // Size Filtering
      if (activeSize !== "All") {
        if (!p.sizes.includes(activeSize)) return false
      }

      return true
    })
    .sort((a, b) => {
      if (activeSort === "price-asc") return a.price - b.price
      if (activeSort === "price-desc") return b.price - a.price
      if (activeSort === "popular") return b.rating - a.rating
      if (activeSort === "newest") return b.badge === "New" ? 1 : -1
      return 0 // default featured
    })

  const hasFilters = activeCategory !== "All" || activeSize !== "All"

  return (
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
  )
}

export default function ShopPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Page Header */}
      <div className="px-4 md:px-12 py-6 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-xl md:text-3xl lg:text-5xl text-foreground tracking-tight text-center">
            Shop All Collections
          </h1>
          <p className="mt-1 md:mt-3 text-muted-foreground text-xs md:text-sm font-sans text-center">
            Premium boutique children's apparel
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 font-sans text-sm">Loading shop...</div>}>
        <ShopContent />
      </Suspense>

      <Footer />
      <BottomNav />
    </main>
  )
}
