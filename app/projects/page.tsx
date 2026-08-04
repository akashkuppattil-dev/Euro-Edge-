import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { StickyContactWidget } from "@/components/sticky-contact-widget"
import {
  Target,
  FileText,
  Users,
  Cog,
  Eye,
  CheckCircle2,
  Award,
  ShieldCheck,
  Search,
  Hammer,
  TrendingUp,
  Building,
  Building2,
  Factory,
  Home,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Quote,
} from "lucide-react"

export const metadata = {
  title: "Completed Projects & Client Reviews | Euro Edge Technical Services L.L.C. Dubai",
  description:
    "Explore featured completed projects with direct client reviews and ratings for Euro Edge Technical Services L.L.C. in Dubai, UAE.",
}

const completedProjects = [
  {
    id: 1,
    title: "Luxury Villa MEP & Fit-Out Overhaul",
    category: "Residential & Villa Care",
    location: "Palm Jumeirah, Dubai",
    duration: "6 Weeks",
    image: "/images/services/hvac-systems.jpg",
    services: ["HVAC Systems", "Electrical Works", "Plumbing & Sanitary", "False Ceiling", "Floor & Wall Tiling"],
    description:
      "Turnkey MEP overhaul for a luxury 6-bedroom villa in Palm Jumeirah. Includes complete central AC duct cleaning, chilled water piping, power distribution panel rewiring, and porcelain tiling installation.",
    stats: { completion: "100% On-Time", approval: "DEWA & Municipality Certified", rating: "5.0 / 5.0" },
    clientReview: {
      name: "Sheikh Mohammed Al-Falasi",
      role: "Villa Owner",
      avatar: "/images/about-team.png",
      rating: 5,
      comment:
        "Euro Edge transformed our villa's entire MEP and AC infrastructure. Their technical team worked with incredible precision and cleanliness, finishing the project ahead of schedule. The quality of work and DEWA compliance was flawless!",
    },
  },
  {
    id: 2,
    title: "Corporate Office Fit-Out & MEP Integration",
    category: "Commercial Fit-Out",
    location: "Business Bay, Dubai",
    duration: "45 Days",
    image: "/images/services/mep-services.jpg",
    services: ["MEP Contracting", "Aluminium & Glass", "Electrical Fittings", "Carpentry & Wood Flooring"],
    description:
      "Comprehensive 12,000 sq. ft. office space fit-out including acoustic glass partition walls, LED architectural lighting, hardwood floor sanding, and high-efficiency FCU climate control units.",
    stats: { completion: "Zero Downtime", approval: "Dubai Civil Defense Approved", rating: "5.0 / 5.0" },
    clientReview: {
      name: "Karen H. Sterling",
      role: "Property & Asset Manager",
      avatar: "/images/hero-dubai.png",
      rating: 5,
      comment:
        "The office fit-out and MEP installation were delivered seamlessly within 45 days. Their attention to detail on glass partitions and energy-efficient lighting saved us significant operational costs!",
    },
  },
  {
    id: 3,
    title: "Commercial High-Rise Annual Facility Contract",
    category: "Facility Management",
    location: "Sheikh Zayed Road, Dubai",
    duration: "Annual Contract",
    image: "/images/services/building-maintenance.jpg",
    services: ["Facility Management", "Building Maintenance", "Civil Maintenance", "Technical Support 24/7"],
    description:
      "Hard and soft facility management contract for a 32-story commercial tower. Managing central chiller plants, emergency electrical backups, facade waterproofing, and round-the-clock maintenance helpdesk.",
    stats: { completion: "99.9% Uptime", response: "<30 Min Emergency Response", rating: "5.0 / 5.0" },
    clientReview: {
      name: "Tariq Mansoor",
      role: "Operations Director",
      avatar: "/images/about-team.png",
      rating: 5,
      comment:
        "The Annual Maintenance Contract with Euro Edge is the best decision we made for our commercial tower. Whenever an emergency electrical or AC issue pops up, their team arrives on-site in under 30 minutes!",
    },
  },
  {
    id: 4,
    title: "Resort Swimming Pool & Kitchen Renovation",
    category: "Hospitality & Leisure",
    location: "Dubai Marina, Dubai",
    duration: "4 Weeks",
    image: "/images/services/swimming-pool.jpg",
    services: ["Swimming Pool Maintenance", "Kitchen Installation", "Plaster Works", "Plumbing & Sanitary"],
    description:
      "Full restoration of a luxury resort infinity pool including underwater LED installation, chemical filtration pump replacement, tile regrouting, and commercial kitchen exhaust hood fitting.",
    stats: { completion: "Defect-Free", quality: "Hygienic Water Certified", rating: "5.0 / 5.0" },
    clientReview: {
      name: "David Miller",
      role: "General Manager",
      avatar: "/images/hero-dubai.png",
      rating: 5,
      comment:
        "Flawless pool maintenance and commercial kitchen installation. Their engineers are knowledgeable, polite, and thorough. We received glowing feedback from our guests on the renovated pool facilities!",
    },
  },
  {
    id: 5,
    title: "Industrial Logistics Warehouse Power & Epoxy Upgrade",
    category: "Industrial Engineering",
    location: "Dubai Industrial City, UAE",
    duration: "3 Weeks",
    image: "/images/services/industrial-maintenance.jpg",
    services: ["Industrial Maintenance", "Electrical Switchgears", "Civil Maintenance", "Epoxy Flooring"],
    description:
      "Heavy industrial power panel installation, heavy-duty ventilation fan fitting, and 45,000 sq. ft. industrial epoxy floor coating for a logistics warehouse.",
    stats: { completion: "Zero Unplanned Downtime", safety: "100% OSHA Safety Compliant", rating: "5.0 / 5.0" },
    clientReview: {
      name: "Rashid Al-Mazrouei",
      role: "Head of Operations",
      avatar: "/images/about-team.png",
      rating: 5,
      comment:
        "Extremely reliable industrial electrical panel installation and warehouse maintenance. Euro Edge delivers on every single promise with total safety compliance, transparent pricing, and zero downtime.",
    },
  },
]

export default function ProjectsPage() {
  return (
    <main className="pb-16 md:pb-0 bg-background text-foreground font-sans min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Proven Track Record & Client Ratings
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-3">
            Projects & Client Reviews
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Explore 5 of our featured completed technical projects across Dubai, featuring direct client reviews and ratings. At Euro Edge Technical Services L.L.C., we deliver quality built on trust.
          </p>
        </div>
      </section>

      {/* 5 COMPLETED PROJECTS WITH DIRECT CLIENT REVIEWS */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Excellence in Execution</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">COMPLETED PROJECTS &amp; CLIENT FEEDBACK</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Real engineering solutions delivered for villas, commercial towers, hospitality resorts, and industrial facilities in Dubai—backed by verified client reviews.
            </p>
          </div>

          <div className="space-y-12">
            {completedProjects.map((project, idx) => (
              <div
                key={project.id}
                className="p-6 lg:p-8 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 space-y-6"
              >
                {/* Upper Project Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Project Visual Image */}
                  <div className="lg:col-span-5 relative h-[280px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-border shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md text-foreground text-xs font-semibold border border-border">
                      {project.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary mb-1">
                        <span>PROJECT #{String(project.id).padStart(2, "0")}</span>
                        <span>•</span>
                        <span className="text-emerald-600 font-sans font-semibold">Handed Over Successfully</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                    {/* Delivered Services Tags */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                        Delivered Services Scope:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-secondary border border-border text-xs font-semibold text-foreground"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Metrics */}
                    <div className="pt-2 grid grid-cols-3 gap-3 text-center">
                      {Object.entries(project.stats).map(([k, v], stIdx) => (
                        <div key={stIdx} className="p-2.5 rounded-xl bg-secondary border border-border/50">
                          <span className="text-xs font-bold text-primary block">{v}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 block">{k}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Client Review Sub-Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-secondary border border-border/70 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(project.clientReview.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                      <span className="text-xs font-bold text-foreground ml-2">5.0 Client Feedback</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Verified Client Review
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground font-serif italic leading-relaxed">
                    "{project.clientReview.comment}"
                  </p>

                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-card flex-shrink-0">
                      <Image
                        src={project.clientReview.avatar}
                        alt={project.clientReview.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs">{project.clientReview.name}</h4>
                      <p className="text-[11px] text-muted-foreground">{project.clientReview.role} • {project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Approach (6 Steps) */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Structured Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">OUR PROJECT MANAGEMENT APPROACH</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Our experienced team combines technical expertise, efficient planning, and strong coordination to successfully manage projects of all sizes and complexities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "01", name: "DEFINE", desc: "We understand your requirements and project goals clearly.", icon: Target },
              { step: "02", name: "PLAN", desc: "Detailed planning and resource allocation for smooth execution.", icon: FileText },
              { step: "03", name: "COORDINATE", desc: "Effective coordination among all stakeholders for seamless progress.", icon: Users },
              { step: "04", name: "EXECUTE", desc: "We execute with precision using skilled teams and modern equipment.", icon: Cog },
              { step: "05", name: "MONITOR", desc: "Continuous monitoring ensures quality, safety, and schedule adherence.", icon: Eye },
              { step: "06", name: "DELIVER", desc: "We deliver successful projects with excellence and client satisfaction.", icon: CheckCircle2 },
            ].map((app, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 group">
                <span className="text-2xl font-black text-primary">{app.step}</span>
                <div className="my-2 flex items-center gap-2">
                  <app.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground text-sm tracking-wide">{app.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-normal">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Uncompromising Standards</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">QUALITY ASSURANCE FRAMEWORK</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Quality is at the core of everything we do. Our Quality Assurance process ensures consistency, reliability, and excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "QUALITY PLANNING",
                desc: "We define quality objectives, standards, and procedures tailored to each project.",
                icon: FileText,
              },
              {
                title: "MATERIAL INSPECTION",
                desc: "All materials are carefully inspected and verified to ensure compliance with specifications.",
                icon: Search,
              },
              {
                title: "WORKMANSHIP CONTROL",
                desc: "Our skilled team follows best practices and industry standards at every stage of execution.",
                icon: Hammer,
              },
              {
                title: "SITE INSPECTIONS",
                desc: "Regular site inspections and quality checks ensure work is on track and up to standard.",
                icon: Eye,
              },
              {
                title: "TESTING & VERIFICATION",
                desc: "We conduct rigorous testing and verification to ensure performance, safety, and reliability.",
                icon: ShieldCheck,
              },
              {
                title: "CONTINUOUS IMPROVEMENT",
                desc: "We continuously review and improve our processes to deliver better results.",
                icon: TrendingUp,
              },
            ].map((qa, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  <qa.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base tracking-wide">{qa.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{qa.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground">Discuss Your Upcoming Project With Us</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Our engineering team is ready to evaluate your requirements, conduct site inspections, and provide detailed technical proposals for projects of any scale in Dubai.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>Get a Technical Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <StickyContactWidget />
    </main>
  )
}
