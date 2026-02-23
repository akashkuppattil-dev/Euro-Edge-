"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
    category: "sets",
    neckType: "collar",
  },
  {
    id: "2",
    name: "Teal Floral Kaftan Maxi Nighty",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    badge: "New",
    slug: "teal-floral-kaftan-maxi",
    category: "kaftan",
    neckType: "round",
  },
  {
    id: "3",
    name: "Blue Rose Print Kaftan Maxi",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    slug: "blue-rose-kaftan-maxi",
    category: "kaftan",
    neckType: "v-neck",
  },
  {
    id: "4",
    name: "Blue Rose Kaftan Nighty",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-4.png",
    slug: "blue-rose-kaftan-nighty",
    category: "kaftan",
    neckType: "v-neck",
  },
  {
    id: "5",
    name: "Navy Floral Bouquet Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    badge: "Best Seller",
    slug: "navy-floral-bouquet-maxi",
    category: "maxi",
    neckType: "v-neck",
  },
  {
    id: "6",
    name: "Black Dahlia Floral Maxi Nighty",
    price: 1699,
    originalPrice: 2499,
    image: "/images/product-6.png",
    badge: "Best Seller",
    slug: "black-dahlia-floral-maxi",
    category: "maxi",
    neckType: "v-neck",
  },
  {
    id: "7",
    name: "Teal Garden Print Kaftan",
    price: 1549,
    originalPrice: 2099,
    image: "/images/product-2.png",
    slug: "teal-garden-kaftan",
    category: "kaftan",
    neckType: "round",
  },
  {
    id: "8",
    name: "Classic Blue Gingham Set",
    price: 1199,
    originalPrice: 1799,
    image: "/images/product-1.png",
    slug: "classic-blue-gingham-set",
    category: "sets",
    neckType: "collar",
  },
]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

const filterGroups = [
  {
    label: "Category",
    key: "category",
    options: ["All", "Maxi Nighty", "Kaftan", "Pajama Set"],
  },
  {
    label: "Neck Type",
    key: "neckType",
    options: ["All", "V Neck", "Round Neck", "Collar"],
  },
  {
    label: "Size",
    key: "size",
    options: ["All", "S", "M", "L", "XL", "XXL"],
  },
]

export default function ShopPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState("featured")
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({})

  const activeFilterTags = Object.entries(activeFilters).filter(
    ([, v]) => v && v !== "All"
  )

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="px-4 lg:px-12 py-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground font-sans">
            <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
            {" / "}
            <span className="text-foreground">Shop</span>
          </p>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-4 lg:px-12 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-3xl lg:text-5xl text-foreground tracking-tight">
            Shop All
          </h1>
          <p className="mt-3 text-muted-foreground text-sm font-sans">
            {allProducts.length} products
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterTags.length > 0 && (
                <span className="bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterTags.length}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground font-sans transition-colors"
              >
                Sort By: {sortOptions.find((s) => s.value === activeSort)?.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[180px] z-20">
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
          {activeFilterTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {activeFilterTags.map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    const updated = { ...activeFilters }
                    delete updated[key]
                    setActiveFilters(updated)
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-xs text-foreground/70 font-sans rounded-full hover:bg-secondary/70 transition-colors"
                >
                  {value}
                  <X className="w-3 h-3" />
                </button>
              ))}
              <button
                onClick={() => setActiveFilters({})}
                className="text-xs text-muted-foreground hover:text-foreground font-sans underline transition-colors"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside
              className={`${
                filterOpen ? "block" : "hidden"
              } lg:block w-full lg:w-56 flex-shrink-0`}
            >
              <div className="lg:sticky lg:top-28 flex flex-col gap-8">
                {filterGroups.map((group) => (
                  <div key={group.key}>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-4">
                      {group.label}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {group.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            setActiveFilters((prev) => ({
                              ...prev,
                              [group.key]: opt === "All" ? "" : opt,
                            }))
                          }
                          className={`text-left text-sm font-sans py-1.5 transition-colors ${
                            (activeFilters[group.key] || "") ===
                            (opt === "All" ? "" : opt)
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
