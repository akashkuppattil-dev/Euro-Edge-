"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Shop", href: "/shop", icon: Search },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
  { label: "Account", href: "/account", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/50 safe-area-bottom" aria-label="Mobile navigation">
      <div className="flex items-center justify-around px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))]">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-foreground/40 active:text-foreground/70"
              }`}
              aria-label={item.label}
            >
              <div className="relative">
                <item.icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
                {item.label === "Cart" && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-accent text-accent-foreground text-[7px] font-bold rounded-full flex items-center justify-center font-sans">
                    0
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-sans ${isActive ? "font-medium" : ""}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
