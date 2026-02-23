"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, X, ShoppingBag } from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  slug: string
}

const initialItems: WishlistItem[] = [
  {
    id: "1",
    name: "Teal Floral Kaftan Maxi Nighty",
    price: 1499,
    originalPrice: 2199,
    image: "/images/product-2.png",
    slug: "teal-floral-kaftan-maxi",
  },
  {
    id: "2",
    name: "Blue Rose Print Kaftan Maxi",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    slug: "blue-rose-kaftan-maxi",
  },
  {
    id: "3",
    name: "Navy Floral Bouquet Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    slug: "navy-floral-bouquet-maxi",
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(initialItems)

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <main>
      <Header />

      <div className="px-4 lg:px-12 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <h1 className="font-serif text-3xl lg:text-5xl text-foreground tracking-tight">
              Wishlist
            </h1>
            <p className="text-muted-foreground text-sm font-sans mt-2">
              {items.length} {items.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          {items.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl text-foreground">
                Your wishlist is empty
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-sans max-w-sm mx-auto">
                Save your favourite pieces here. Tap the heart icon on any product to add it.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center mt-6 px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-colors"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {items.map((item) => (
                <div key={item.id} className="group relative">
                  <Link href={`/product/${item.slug}`}>
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </Link>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X className="w-4 h-4 text-foreground/60" />
                  </button>

                  <div className="mt-4 px-0.5">
                    <Link href={`/product/${item.slug}`}>
                      <h3 className="text-sm font-sans text-foreground/90 leading-snug">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-sm font-medium text-foreground font-sans">
                        Rs. {item.price.toLocaleString("en-IN")}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through font-sans">
                          Rs. {item.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <button className="mt-3 w-full py-2.5 border border-border text-foreground text-xs tracking-[0.1em] uppercase font-sans rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Move to Cart
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
