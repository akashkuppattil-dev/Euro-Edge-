import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
    <main>
      <Header />
      <HeroSection />
      <CategoryChips />
      <FeaturedCategories />
      <NewArrivals />
      <EditorialSection />
      <BestSellers />
      <FabricStory />
      <TrustStrip />
      <InstagramLookbook />
      <ContactBanner />
      <Footer />
    </main>
  )
}
