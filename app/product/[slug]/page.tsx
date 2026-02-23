"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronDown } from "lucide-react"

const product = {
  name: "Teal Floral Kaftan Maxi Nighty",
  price: 1499,
  originalPrice: 2199,
  images: [
    "/images/product-2.png",
    "/images/product-3.png",
    "/images/product-4.png",
    "/images/product-5.png",
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  description:
    "Indulge in ultimate comfort with our Teal Floral Kaftan Maxi Nighty. Crafted from premium imported rayon, this flowing silhouette features an exquisite floral print with gold-trimmed detailing. Perfect for those who appreciate luxury in their everyday routine.",
  details: [
    "Premium imported rayon fabric",
    "All-over floral print",
    "Gold trim detailing at neckline",
    "Relaxed kaftan silhouette",
    "Ankle length",
    "Machine washable",
  ],
  fabric: "100% Premium Imported Rayon",
  care: "Machine wash cold, hang dry. Do not bleach.",
}

const relatedProducts = [
  {
    id: "3",
    name: "Blue Rose Print Kaftan Maxi",
    price: 1399,
    originalPrice: 1999,
    image: "/images/product-3.png",
    slug: "blue-rose-kaftan-maxi",
  },
  {
    id: "5",
    name: "Navy Floral Bouquet Maxi Nighty",
    price: 1599,
    originalPrice: 2299,
    image: "/images/product-5.png",
    slug: "navy-floral-bouquet-maxi",
  },
  {
    id: "6",
    name: "Black Dahlia Floral Maxi Nighty",
    price: 1699,
    originalPrice: 2499,
    image: "/images/product-6.png",
    slug: "black-dahlia-floral-maxi",
  },
  {
    id: "1",
    name: "Blue Gingham Bow Pajama Set",
    price: 1299,
    originalPrice: 1899,
    image: "/images/product-1.png",
    slug: "blue-gingham-bow-pajama-set",
  },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>("description")

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="px-4 lg:px-12 py-4 border-b border-border/50">
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
              <span className="text-xs tracking-[0.2em] uppercase text-accent font-sans">
                Premium Collection
              </span>
              <h1 className="font-serif text-2xl lg:text-4xl text-foreground mt-2 tracking-tight leading-snug">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mt-5">
                <span className="text-2xl font-serif text-foreground">
                  Rs. {product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-base text-muted-foreground line-through font-sans">
                  Rs. {product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full font-sans">
                  {discount}% OFF
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-sans mt-2">
                Inclusive of all taxes
              </p>

              {/* Size Selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs tracking-[0.15em] uppercase text-foreground/80 font-sans">
                    Select Size
                  </span>
                  <button className="text-xs text-accent hover:underline font-sans">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 rounded-lg text-sm font-sans font-medium transition-all ${
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
                <div className="inline-flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-sans font-medium text-foreground">
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

              {/* Actions */}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-primary/90 transition-all duration-300">
                  Add to Cart
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

              {/* Buy Now */}
              <button className="w-full mt-3 py-4 border border-accent text-accent text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Buy Now
              </button>

              {/* Delivery Info */}
              <div className="mt-8 flex flex-col gap-4 p-5 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    Free delivery across India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    7-day easy returns
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-sans">
                    Cash on delivery available
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
                          <strong className="text-foreground">Fabric:</strong> {product.fabric}
                        </p>
                        <p className="text-sm text-muted-foreground font-sans">
                          <strong className="text-foreground">Care:</strong> {product.care}
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
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground font-sans">
              {product.name}
            </p>
            <p className="text-base font-serif text-foreground">
              Rs. {product.price.toLocaleString("en-IN")}
            </p>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium font-sans rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
