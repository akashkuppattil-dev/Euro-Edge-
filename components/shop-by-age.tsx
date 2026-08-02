"use client"

import { useState } from "react"
import Link from "next/link"

const ageGroups = {
  Girls: [
    "3-4 Years",
    "5-6 Years",
    "7-8 Years",
    "9-10 Years",
    "11-12 Years",
    "13-14 Years",
  ],
  Boys: [
    "3-4 Years",
    "5-6 Years",
    "7-8 Years",
    "9-10 Years",
    "11-12 Years",
    "13-14 Years",
  ],
  Babies: [
    "1-2 Months",
    "3-4 Months",
    "5-6 Months",
    "7-8 Months",
    "9-10 Months",
    "11-12 Months",
    "1-2 Years",
  ],
}

type TabType = "Girls" | "Boys" | "Babies"

export function ShopByAge() {
  const [activeTab, setActiveTab] = useState<TabType>("Girls")

  return (
    <section className="py-5 md:py-16 lg:py-24 px-4 md:px-12 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-accent-foreground/60 font-sans font-bold">
          Quick Finder
        </span>
        <h2 className="font-serif text-xl md:text-3xl lg:text-5xl mt-3 text-foreground tracking-tight">
          Shop by Age
        </h2>
        <p className="mt-2 text-muted-foreground text-sm font-sans">
          Find the perfect fit for your child's growth stage
        </p>

        {/* Tab Switchers */}
        <div className="flex items-center justify-center gap-4 mt-8 pb-3 border-b border-border/50 max-w-md mx-auto">
          {(["Girls", "Boys", "Babies"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs md:text-sm font-sans font-semibold tracking-wider uppercase transition-all border-b-2 ${
                activeTab === tab
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pills Grid */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-in fade-in duration-300">
          {ageGroups[activeTab].map((age) => (
            <Link
              key={age}
              href={`/shop?section=${activeTab.toLowerCase()}&size=${encodeURIComponent(
                age
              )}`}
              className="px-6 py-3 bg-card border border-border/40 hover:border-accent hover:bg-accent/5 rounded-full text-xs font-sans font-medium text-foreground/80 shadow-sm transition-all duration-200 active:scale-95"
            >
              {age}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
