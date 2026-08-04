import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import { ShieldCheck, Target, Sparkles, Award, Scale, Shield, Users } from "lucide-react"

export const metadata = {
  title: "About Euro Edge Technical Services L.L.C.",
  description: "Learn about Euro Edge Technical Services L.L.C., our mission, vision, core values, and dedicated team in Dubai, UAE.",
}

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dubai.png"
            alt="About Euro Edge Technical Services L.L.C."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 w-full text-center px-4 max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80 font-sans font-bold">
            Company Overview
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground mt-3 tracking-tight italic">
            About Euro Edge
          </h1>
          <p className="mt-4 text-primary-foreground/90 text-lg font-serif italic">
            "The Edge of Quality Built on Trust"
          </p>
        </div>
      </section>

      {/* Story & Description */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight leading-snug">
            Delivering Reliable & Excellence-Driven Technical Solutions
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed font-sans">
            We are committed to delivering reliable, efficient, and professional services with a strong focus on quality, safety, and customer satisfaction. Our experienced team and customer-centric approach enable us to build lasting relationships and create value for every project we undertake.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 px-4 lg:px-12 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif">OUR MISSION</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              To deliver reliable, innovative, and high-quality technical services that fulfill our clients' needs through excellence, professionalism, safety, and long-term value.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif">OUR VISION</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              To become one of the UAE's most trusted technical service providers by delivering next-generation solutions that drive customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans font-bold">Guiding Principles</span>
            <h2 className="font-serif text-2xl lg:text-4xl text-foreground tracking-tight mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Quality",
                desc: "We deliver superior quality in everything we do.",
                icon: Award,
              },
              {
                title: "Integrity",
                desc: "We conduct our business with honesty and transparency.",
                icon: Scale,
              },
              {
                title: "Reliability",
                desc: "We are dependable and committed to delivering on our promises.",
                icon: ShieldCheck,
              },
              {
                title: "Safety",
                desc: "We prioritize the safety of our people, clients, and the community.",
                icon: Shield,
              },
              {
                title: "Customer Focus",
                desc: "We focus on understanding and exceeding our customers' expectations.",
                icon: Target,
              },
            ].map((item) => (
              <div key={item.title} className="text-center bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary mb-3">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
