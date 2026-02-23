import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { HeroSection } from "@/components/hero-section"
import { CategoryChips } from "@/components/category-chips"
import { FeaturedCategories } from "@/components/featured-categories"
import { NewArrivals } from "@/components/new-arrivals"
import { BestSellers } from "@/components/best-sellers"
import { EditorialSection } from "@/components/editorial-section"
import { FabricStory } from "@/components/fabric-story"
import { TrustStrip } from "@/components/trust-strip"
import { InstagramLookbook } from "@/components/instagram-lookbook"
import { ContactBanner } from "@/components/contact-banner"

export default function HomePage() {
  return (
    <main className="pb-16 md:pb-0">
      <Header />
      <HeroSection />
      <CategoryChips />
      <NewArrivals />
      <FeaturedCategories />
      <BestSellers />
      <EditorialSection />
      <FabricStory />
      <TrustStrip />
      <InstagramLookbook />
      <ContactBanner />
      <Footer />
      <BottomNav />
    </main>
  )
}
