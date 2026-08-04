import React from "react"
import Link from "next/link"
import { Check, ShieldCheck, Zap, Fan, Droplet, ArrowRight, Clock, Award } from "lucide-react"

export function AMCPackages() {
  const packages = [
    {
      name: "Essential Villa Maintenance",
      badge: "Popular for Homes",
      desc: "Comprehensive preventative maintenance plan for residential villas & townhouses in Dubai.",
      features: [
        "2 Comprehensive AC Servicing Checks / Year",
        "Bi-annual Electrical Distribution Audit",
        "Plumbing & Drainage Leak Inspections",
        "Unlimited Emergency Callouts (within 1 hr)",
        "10% Discount on Spare Parts & Repairs",
      ],
      popular: false,
      ctaText: "Inquire Villa AMC",
    },
    {
      name: "Premium Commercial AMC",
      badge: "Best Value for Offices",
      desc: "End-to-end facility & MEP maintenance for offices, retail stores & commercial buildings.",
      features: [
        "Quarterly HVAC & Chillers Preventative Care",
        "Complete MEP & Power Panel Thermography",
        "Plumbing, Water Pumps & Tank Inspections",
        "Priority 30-Min Emergency Response",
        "Dedicated Account & Facility Supervisor",
        "Detailed SLA & Compliance Reporting",
      ],
      popular: true,
      ctaText: "Inquire Commercial AMC",
    },
    {
      name: "Full Facility Care Package",
      badge: "For Properties & Complexes",
      desc: "Turnkey hard & soft facility management tailored for towers, warehouses & institutions.",
      features: [
        "24/7 On-Site Maintenance Technicians",
        "HVAC, Electrical, Civil & Plumbing Integrated Care",
        "Swimming Pool & Water Feature Maintenance",
        "False Ceiling, Tiling & Structural Repairs",
        "Custom Energy Audits & Asset Care Plans",
      ],
      popular: false,
      ctaText: "Inquire Facility AMC",
    },
  ]

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Hassle-Free Asset Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Protect your property investment with Euro Edge's customized Annual Maintenance Contracts in Dubai. Guaranteed response times, certified engineers, and zero downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-card border transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? "border-primary shadow-xl ring-2 ring-primary/20 scale-[1.02]"
                  : "border-border shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-[11px] font-bold uppercase tracking-wider mb-4">
                  {pkg.badge}
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{pkg.desc}</p>

                <div className="my-6 pt-6 border-t border-border/60 space-y-3">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <Link
                  href={`/contact?service=amc&package=${encodeURIComponent(pkg.name)}`}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                      : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
