import Image from "next/image"
import { Instagram } from "lucide-react"

const images = [
  "/images/product-1.png",
  "/images/product-2.png",
  "/images/product-3.png",
  "/images/product-5.png",
  "/images/product-6.png",
  "/images/product-4.png",
]

export function InstagramLookbook() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            @joohaa__luxe
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl mt-3 text-foreground tracking-tight">
            The Lookbook
          </h2>
          <p className="mt-3 text-muted-foreground text-sm font-sans">
            Follow us on Instagram for daily inspiration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/joohaa__luxe"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={img}
                alt={`JOOHAA LUXE lookbook image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/joohaa__luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-full hover:bg-primary/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  )
}
