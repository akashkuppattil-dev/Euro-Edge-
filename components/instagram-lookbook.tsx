import Image from "next/image"
import { Instagram } from "lucide-react"

const lookbookImages = [
  { src: "/images/product-1.png", alt: "Floral hand-embroidered party frock" },
  { src: "/images/product-2.png", alt: "Boys casual blazer suit set" },
  { src: "/images/product-3.png", alt: "Girls ethnic lehenga choli set" },
  { src: "/images/product-5.png", alt: "Kids soft cloud night suit" },
  { src: "/images/product-6.png", alt: "Linen suspender shorts set" },
  { src: "/images/product-4.png", alt: "Organic cotton baby onesie" },
]

export function InstagramLookbook() {
  const socialUrl = "https://www.facebook.com/share/1Epwasev5t/"
  const handle = "tinytrends_apparel"

  return (
    <section className="py-5 md:py-16 lg:py-24 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 md:mb-10 lg:mb-14">
          <a
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground font-sans hover:text-foreground transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
            @{handle}
          </a>
          <h2 className="font-serif text-lg md:text-3xl lg:text-5xl mt-1.5 md:mt-3 text-foreground tracking-tight">
            The Lookbook
          </h2>
        </div>

        {/* Mobile - 3x2 compact grid */}
        <div className="md:hidden grid grid-cols-3 gap-0.5">
          {lookbookImages.map((img, i) => (
            <a
              key={i}
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-active:bg-primary/30 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4 text-primary-foreground opacity-0 group-active:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Desktop - 6 column */}
        <div className="hidden md:grid grid-cols-6 gap-2 lg:gap-3">
          {lookbookImages.map((img, i) => (
            <a
              key={i}
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="16vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-5 md:mt-10">
          <a
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 md:px-8 py-2.5 md:py-3.5 bg-primary text-primary-foreground text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  )
}
