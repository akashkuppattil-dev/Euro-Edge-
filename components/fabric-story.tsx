import Image from "next/image"
import { ShieldAlert, Wind, Sparkles } from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "100% Skin-Safe Materials",
    description: "Premium cotton and linen that are completely hypoallergenic and gentle on young skin.",
  },
  {
    icon: Wind,
    title: "Breathable & Play-Friendly",
    description: "Lightweight, stretch-comfortable fabrics that let active children move and play freely.",
  },
  {
    icon: Sparkles,
    title: "Durable Boutique Finish",
    description: "Reinforced seams and color-fast prints that look premium even after endless wash cycles.",
  },
]

export function FabricStory() {
  return (
    <section className="py-6 md:py-16 lg:py-24 px-3 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Mobile - Compact stacked */}
        <div className="md:hidden">
          <div className="text-center mb-5">
            <h2 className="font-serif text-lg text-foreground tracking-tight">
              Why Choose Tiny Trends?
            </h2>
            <p className="mt-1 text-muted-foreground text-[11px] font-sans leading-relaxed max-w-[260px] mx-auto">
              We source only the gentlest, premium fabrics to keep your children looking sharp and feeling cozy.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5">
            <Image
              src="/images/product-4.png"
              alt="Premium skin-safe fabrics for kids"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="flex flex-col gap-4">
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-3 bg-card rounded-xl p-3.5 border border-border/40">
                <div className="flex-shrink-0 w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center">
                  <feat.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-[13px] font-medium text-foreground font-sans">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop - Side by side */}
        <div className="hidden md:grid grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/product-4.png"
                alt="Premium skin-safe fabrics for kids"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-card border border-border rounded-xl p-4 lg:p-5 shadow-lg max-w-[200px]">
              <p className="text-xs tracking-[0.1em] uppercase text-accent font-sans font-medium">Boutique Grade</p>
              <p className="text-sm text-foreground font-serif mt-1">Hypoallergenic Fabrics</p>
            </div>
          </div>

          <div>
            <div className="w-8 h-px bg-accent mb-6" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              The Quality Difference
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight text-balance">
              Why Choose Tiny Trends?
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed font-sans max-w-md">
              We select fabrics that support your child's daily adventures while remaining incredibly gentle on sensitive skin.
            </p>
            <div className="mt-10 flex flex-col gap-7">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground font-sans">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 font-sans leading-relaxed">{feat.description}</p>
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
