import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/product-4.png"
            alt="About JOOHAA LUXE"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative z-10 w-full text-center px-4">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">
            Our Story
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground mt-3 tracking-tight italic">
            About JOOHAA LUXE
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight leading-snug text-balance">
            Where Comfort Meets Elegance
          </h2>
          <p className="mt-6 text-muted-foreground text-base leading-relaxed font-sans">
            JOOHAA LUXE was born from a simple belief: every woman deserves to feel 
            beautiful, even in the quiet moments of her day. We create premium nightwear 
            that blends luxurious imported rayon with timeless design, offering pieces that 
            are as elegant as they are comfortable.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed font-sans">
            Each piece in our collection is thoughtfully designed with attention to detail -- 
            from the softness of the fabric to the beauty of every print. Our maxi nighties 
            and kaftans are more than sleepwear; they are a statement of self-care and 
            refined taste.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Premium Quality",
                desc: "We use only the finest imported rayon, ensuring every piece feels luxurious against your skin.",
              },
              {
                title: "Thoughtful Design",
                desc: "Every print, every cut, every stitch is carefully considered to create pieces you will love.",
              },
              {
                title: "Everyday Luxury",
                desc: "We believe luxury should be accessible. Premium comfort for every day, not just special occasions.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="grid grid-cols-3 h-[30vh] lg:h-[40vh]">
        <div className="relative overflow-hidden">
          <Image src="/images/product-2.png" alt="JOOHAA LUXE collection" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/product-5.png" alt="JOOHAA LUXE collection" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/product-6.png" alt="JOOHAA LUXE collection" fill className="object-cover" sizes="33vw" />
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
