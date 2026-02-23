import { Gem, Wind, RotateCcw, Truck } from "lucide-react"

const trustItems = [
  {
    icon: Gem,
    label: "Premium Imported Fabric",
  },
  {
    icon: Wind,
    label: "Soft & Breathable",
  },
  {
    icon: RotateCcw,
    label: "7-Day Easy Returns",
  },
  {
    icon: Truck,
    label: "Pan India Shipping",
  },
]

export function TrustStrip() {
  return (
    <section className="py-10 lg:py-14 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-2xl px-6 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
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
    </section>
  )
}
