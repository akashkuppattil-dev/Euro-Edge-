"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right"
  delay?: number
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const baseClasses = "transition-all duration-1000 ease-out"
  
  const animationClasses = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "fade-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
    "fade-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
  }

  return (
    <div
      ref={ref}
      className={cn(baseClasses, animationClasses[animation], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
