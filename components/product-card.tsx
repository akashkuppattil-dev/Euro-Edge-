"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string
  badge?: string
  slug: string
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  badge,
  slug,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false)
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className="group relative">
      <Link href={`/product/${slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {hoverImage && (
            <Image
              src={hoverImage}
              alt={name}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
          {badge && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-sans font-medium">
              {badge}
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-3 right-12 bg-accent text-accent-foreground text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded-full font-sans font-medium">
              -{discount}%
            </span>
          )}
          {/* Quick add overlay on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-card/90 backdrop-blur-sm text-foreground text-center py-2.5 rounded-lg text-xs tracking-[0.15em] uppercase font-sans font-medium">
              Quick View
            </div>
          </div>
        </div>
      </Link>

      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            wishlisted ? "fill-accent text-accent" : "text-foreground/60"
          }`}
        />
      </button>

      <div className="mt-4 px-0.5">
        <Link href={`/product/${slug}`}>
          <h3 className="text-sm font-sans text-foreground/90 leading-snug group-hover:text-foreground transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-foreground font-sans">
            Rs. {price.toLocaleString("en-IN")}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through font-sans">
              Rs. {originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
