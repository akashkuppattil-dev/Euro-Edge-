"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  quantity: number
  image: string
  slug: string
}

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "Teal Floral Kaftan Maxi Nighty",
    price: 1499,
    size: "L",
    quantity: 1,
    image: "/images/product-2.png",
    slug: "teal-floral-kaftan-maxi",
  },
  {
    id: "2",
    name: "Black Dahlia Floral Maxi Nighty",
    price: 1699,
    size: "M",
    quantity: 1,
    image: "/images/product-6.png",
    slug: "black-dahlia-floral-maxi",
  },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 999 ? 0 : 99
  const total = subtotal + shipping

  return (
    <main className="pb-16 md:pb-0">
      <Header />

      <div className="px-4 lg:px-12 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-5xl text-foreground tracking-tight text-center lg:text-left">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground text-sm font-sans mt-2 text-center lg:text-left">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>

          {items.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl text-foreground">Your cart is empty</h2>
              <p className="mt-2 text-sm text-muted-foreground font-sans">
                Discover our premium collection and add something beautiful.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center mt-6 px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10">
              {/* Items */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 lg:gap-6 p-4 bg-card border border-border/50 rounded-lg"
                  >
                    <Link href={`/product/${item.slug}`} className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={130}
                        className="w-20 h-28 lg:w-28 lg:h-36 rounded-md object-cover"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <Link href={`/product/${item.slug}`}>
                            <h3 className="text-sm lg:text-base font-sans text-foreground leading-snug">
                              {item.name}
                            </h3>
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground font-sans mt-1">
                          Size: {item.size}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-sans text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-medium font-sans text-foreground">
                          Rs. {(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-28 self-start">
                <div className="bg-card border border-border/50 rounded-lg p-6">
                  <h2 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-6">
                    Order Summary
                  </h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">Rs. {subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? "Free" : `Rs. ${shipping}`}
                      </span>
                    </div>
                    <div className="border-t border-border my-2" />
                    <div className="flex justify-between text-base font-sans">
                      <span className="font-medium text-foreground">Total</span>
                      <span className="font-serif text-lg text-foreground">
                        Rs. {total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="mt-6 w-full flex items-center justify-center py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    href="/shop"
                    className="mt-3 w-full flex items-center justify-center py-3 text-xs text-muted-foreground hover:text-foreground font-sans transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky mobile checkout */}
      {items.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 z-40">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground font-sans">
                {items.length} items
              </p>
              <p className="text-base font-serif text-foreground">
                Rs. {total.toLocaleString("en-IN")}
              </p>
            </div>
            <Link
              href="/checkout"
              className="px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium font-sans rounded-lg"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}

      <Footer />
      <BottomNav />
    </main>
  )
}
