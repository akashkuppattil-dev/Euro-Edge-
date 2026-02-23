"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
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
  rating?: number
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  badge,
  slug,
  rating = 4.5,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false)
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className="group relative">
      <Link href={`/product/${slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-xl bg-secondary">
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

          {/* Badges - top left */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5">
            {badge && (
              <span className="bg-primary text-primary-foreground text-[9px] md:text-[10px] tracking-[0.12em] uppercase px-2 md:px-3 py-1 md:py-1.5 rounded-full font-sans font-medium">
                {badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-accent text-accent-foreground text-[9px] md:text-[10px] tracking-wider uppercase px-2 md:px-2.5 py-1 md:py-1.5 rounded-full font-sans font-medium">
                -{discount}%
              </span>
            )}
          </div>

          {/* Desktop Quick View */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-card/90 backdrop-blur-sm text-foreground text-center py-2.5 rounded-lg text-xs tracking-[0.15em] uppercase font-sans font-medium">
              Quick View
            </div>
          </div>
        </div>
      </Link>

      {/* Heart - Always visible on mobile, hover on desktop */}
      <button
        onClick={(e) => {
          e.preventDefault()
          setWishlisted(!wishlisted)
        }}
        className={`absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-9 md:h-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 md:opacity-0 md:group-hover:opacity-100 active:scale-90 ${
          wishlisted ? "md:opacity-100" : ""
        }`}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${
            wishlisted ? "fill-red-500 text-red-500" : "text-foreground/50"
          }`}
        />
      </button>

      {/* Product Info */}
      <div className="mt-2.5 md:mt-4 px-0.5">
        <Link href={`/product/${slug}`}>
          <h3 className="text-xs md:text-sm font-sans text-foreground/90 leading-snug group-hover:text-foreground transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating - mobile inline */}
        <div className="flex items-center gap-1 mt-1 md:mt-1.5">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-[10px] md:text-xs text-foreground/50 font-sans">{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1.5 md:gap-2 mt-1 md:mt-2">
          <span className="text-sm md:text-sm font-semibold text-foreground font-sans">
            Rs. {price.toLocaleString("en-IN")}
          </span>
          {originalPrice && (
            <span className="text-[10px] md:text-xs text-muted-foreground line-through font-sans">
              Rs. {originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
