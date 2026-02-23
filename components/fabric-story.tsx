import Image from "next/image"
import { Droplets, Wind, Sparkles } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Ultra Soft Touch",
    description: "Premium imported rayon that feels like silk against your skin.",
  },
  {
    icon: Wind,
    title: "Breathable Comfort",
    description: "Lightweight and airy fabric perfect for all seasons.",
  },
  {
    icon: Sparkles,
    title: "Lasting Elegance",
    description: "Color-fast prints that stay vibrant wash after wash.",
  },
]

export function FabricStory() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/product-4.png"
                alt="Premium rayon kaftan fabric detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-card border border-border rounded-xl p-4 lg:p-5 shadow-lg max-w-[200px]">
              <p className="text-xs tracking-[0.1em] uppercase text-accent font-sans font-medium">100% Imported</p>
              <p className="text-sm text-foreground font-serif mt-1">Premium Rayon Fabric</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="w-8 h-px bg-accent mb-6" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              The Fabric Difference
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight text-balance">
              Why Premium Rayon?
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed font-sans max-w-md">
              We source only the finest imported rayon to create nightwear 
              that drapes beautifully and feels incredibly soft. 
              A fabric that understands the art of rest.
            </p>

            <div className="mt-10 flex flex-col gap-7">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground font-sans">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-sans leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
