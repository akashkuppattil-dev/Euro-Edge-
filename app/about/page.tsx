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
            src="/images/product-1.png"
            alt="About Tiny Trends"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 w-full text-center px-4">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">
            Our Story
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground mt-3 tracking-tight italic">
            About Tiny Trends
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight leading-snug text-balance">
            Dressing Childhood in Premium Comfort
          </h2>
          <p className="mt-6 text-muted-foreground text-base leading-relaxed font-sans">
            Tiny Trends was born out of a simple promise: to dress your children in premium apparel that combines boutique elegance with everyday comfort. We carefully craft children's garments that are gentle on skin, durable for playtime, and beautiful for making lifelong memories.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed font-sans">
            Each piece in our collection—from hand-embroidered girls frocks to sharp casual boy suits and organic baby onesies—is thoughtfully designed with parents and children in mind. We prioritize breathable fabrics, neat tailoring, and simple fits that grow comfortably with your child.
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
                title: "Premium Fabrics",
                desc: "We select only the finest organic cotton, premium linen, and soft fabrics that are hypoallergenic and gentle on young skin.",
              },
              {
                title: "Playful Boutique Style",
                desc: "Our apparel balances classic, elegant boutique aesthetics with comfortable, flexible fits that don't restrict your child's playtime.",
              },
              {
                title: "Parent-Friendly Ordering",
                desc: "Shopping for kids should be stress-free. Our easy WhatsApp enquiry and ordering flow saves you time and ensures personal service.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center bg-card p-6 rounded-xl border border-border/30 shadow-sm">
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
          <Image src="/images/product-2.png" alt="Tiny Trends kids collection" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/product-5.png" alt="Tiny Trends kids collection" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/product-6.png" alt="Tiny Trends kids collection" fill className="object-cover" sizes="33vw" />
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
