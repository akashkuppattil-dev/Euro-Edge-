import { Gem, Wind, RotateCcw, Truck } from "lucide-react"

const trustItems = [
  { icon: Gem, label: "Premium Cotton & Linen" },
  { icon: Wind, label: "Soft & Hypoallergenic" },
  { icon: RotateCcw, label: "Easy Sizing Exchanges" },
  { icon: Truck, label: "Pan India Shipping" },
]

export function TrustStrip() {
  return (
    <section className="py-5 md:py-10 lg:py-14 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile - Horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-3 pb-1">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex-shrink-0 flex items-center gap-2.5 bg-card border border-border/50 rounded-xl px-4 py-3"
              >
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-[11px] font-sans text-foreground/70 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="bg-card border border-border rounded-2xl px-6 py-8 lg:py-10">
            <div className="grid grid-cols-4 gap-4">
              {trustItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
