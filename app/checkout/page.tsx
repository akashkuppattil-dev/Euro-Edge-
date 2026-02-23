"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ShieldCheck } from "lucide-react"

const orderItems = [
  {
    id: "1",
    name: "Teal Floral Kaftan Maxi Nighty",
    size: "L",
    price: 1499,
    quantity: 1,
    image: "/images/product-2.png",
  },
  {
    id: "2",
    name: "Black Dahlia Floral Maxi Nighty",
    size: "M",
    price: 1699,
    quantity: 1,
    image: "/images/product-6.png",
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("online")

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const total = subtotal + shipping

  return (
    <main>
      <Header />

      <div className="px-4 lg:px-12 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-4xl text-foreground tracking-tight mb-10 text-center lg:text-left">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Contact */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-5">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-5">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="md:col-span-2 w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="PIN code"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    defaultValue="India"
                    className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-5">
                  Payment Method
                </h2>
                <div className="flex flex-col gap-3">
                  <label
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "online"
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-foreground/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-accent"
                    />
                    <div>
                      <span className="text-sm font-sans text-foreground font-medium">
                        Online Payment
                      </span>
                      <p className="text-xs text-muted-foreground font-sans mt-0.5">
                        UPI, Cards, Netbanking, Wallets
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "cod"
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-foreground/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-accent"
                    />
                    <div>
                      <span className="text-sm font-sans text-foreground font-medium">
                        Cash on Delivery
                      </span>
                      <p className="text-xs text-muted-foreground font-sans mt-0.5">
                        Pay when you receive your order
                      </p>
                    </div>
                  </label>
                </div>
              </section>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h2 className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans mb-6">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-sans text-foreground leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-sans mt-0.5">
                          Size: {item.size}
                        </p>
                        <p className="text-sm font-sans text-foreground mt-1">
                          Rs. {item.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 flex flex-col gap-3">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">Rs. {subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-accent font-medium">Free</span>
                  </div>
                  <div className="border-t border-border my-1" />
                  <div className="flex justify-between">
                    <span className="text-base font-medium font-sans text-foreground">Total</span>
                    <span className="font-serif text-lg text-foreground">
                      Rs. {total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-primary/90 transition-colors">
                  Place Order
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground font-sans">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
