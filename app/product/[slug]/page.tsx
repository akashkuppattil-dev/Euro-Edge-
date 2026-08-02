"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { allProducts } from "@/lib/products"
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronDown, MessageCircle } from "lucide-react"

export default function ProductDetailPage({ params }: { params: any }) {
  // Safe resolution for both Promise params (Next 15+) and plain object params (Next 13/14)
  const resolvedParams = params && typeof params.then === "function" ? use(params) : params
  const slug = resolvedParams?.slug

  const product = allProducts.find((p) => p.slug === slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>("description")

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background">
          <h1 className="font-serif text-3xl text-foreground">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground text-sm font-sans">
            The children's apparel collection item you are looking for does not exist.
          </p>
          <Link
            href="/shop"
            className="mt-6 px-6 py-2.5 bg-primary text-primary-foreground text-xs tracking-wider uppercase font-sans font-medium rounded-full"
          >
            Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert("Please select a size first.")
      return
    }

    const message = `Hello Tiny Trends,

I'm interested in the following product:

• Product: ${product.name}
• Category: ${product.category}
• Size: ${selectedSize}
• Colour: Standard

Please let me know its availability.`

    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/918129780324?text=${encoded}`
    window.open(url, "_blank")
  }

  // Get related products from the same section, excluding current product
  const relatedProducts = allProducts
    .filter((p) => p.section === product.section && p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Breadcrumb */}
      <div className="px-4 lg:px-12 py-4 border-b border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground font-sans">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            {" / "}
            <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            {" / "}
            <span className="text-foreground">{product.name}</span>
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-12 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? "border-accent"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - view ${i + 1}`}
                      width={80}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary group">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-4">
              <span className="text-xs tracking-[0.2em] uppercase text-accent font-sans font-bold">
                {product.section} Collection
              </span>
              <h1 className="font-serif text-2xl lg:text-4xl text-foreground mt-2 tracking-tight leading-snug">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mt-5">
                <span className="text-2xl font-serif text-foreground font-semibold">
                  Rs. {product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-base text-muted-foreground line-through font-sans">
                  Rs. {product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="bg-accent/15 text-accent text-xs font-semibold px-2.5 py-1 rounded-full font-sans">
                  {discount}% OFF
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-sans mt-2">
                Inclusive of all taxes. Confirm price on WhatsApp.
              </p>

              {/* Size Selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans">
                    Select Size
                  </span>
                  <span className="text-xs text-muted-foreground font-sans">
                    Age Group
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-sans font-medium transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:border-foreground/20 border border-border"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <span className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans block mb-3">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-border rounded-lg bg-card">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-sans font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions - WhatsApp Ordering */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs tracking-[0.2em] uppercase font-bold font-sans rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Order on WhatsApp
                </button>
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`w-14 flex items-center justify-center border rounded-lg transition-colors ${
                    wishlisted
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-foreground/20"
                  }`}
                  aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlisted ? "fill-accent text-accent" : "text-foreground/60"
                    }`}
                  />
                </button>
              </div>

              {/* Trust/Delivery Info */}
              <div className="mt-8 flex flex-col gap-4 p-5 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    Fast Shipping Across India (Kerala/Malappuram local delivery available)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    Flexible Exchanges for Sizing Issues
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    Direct Cash/Transfer on Delivery
                  </span>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-8 border-t border-border">
                {[
                  {
                    id: "description",
                    title: "Description",
                    content: product.description,
                  },
                  {
                    id: "details",
                    title: "Product Details",
                    content: (
                      <ul className="flex flex-col gap-2">
                        {product.details.map((d) => (
                          <li key={d} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    id: "fabric",
                    title: "Fabric & Care",
                    content: (
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground font-sans">
                          <strong className="text-foreground">Material:</strong> Premium breathable poly-cotton / organic cotton.
                        </p>
                        <p className="text-sm text-muted-foreground font-sans">
                          <strong className="text-foreground">Care:</strong> Hand wash or gentle machine wash inside out. Dry in shade.
                        </p>
                      </div>
                    ),
                  },
                ].map((section) => (
                  <div key={section.id} className="border-b border-border">
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === section.id ? null : section.id
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-sm font-sans font-medium text-foreground"
                    >
                      {section.title}
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          openAccordion === section.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openAccordion === section.id && (
                      <div className="pb-4">
                        {typeof section.content === "string" ? (
                          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                            {section.content}
                          </p>
                        ) : (
                          section.content
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 lg:mt-32">
              <div className="text-center mb-10 lg:mb-14">
                <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight">
                  You May Also Like
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} {...p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Add to Cart -> Replaced with WhatsApp */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground font-sans truncate max-w-[150px]">
              {product.name}
            </p>
            <p className="text-sm font-serif text-foreground font-semibold">
              Rs. {product.price.toLocaleString("en-IN")}
            </p>
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="flex-[2] py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs tracking-wider uppercase font-bold font-sans rounded-lg flex items-center justify-center gap-1.5 shadow"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp Order
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
