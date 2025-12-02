import HeroSection from "@/components/home/HeroSection"
import FeaturedVillas from "@/components/home/FeaturedVillas"
import FeaturedTours from "@/components/home/FeaturedTours"
import Testimonials from "@/components/home/Testimonials"
import AboutTeaser from "@/components/home/AboutTeaser"

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* About Kurdistan Teaser */}
      <AboutTeaser />

      {/* Featured Tours */}
      <FeaturedTours />

      {/* Featured Villas */}
      <FeaturedVillas />

      {/* Testimonials */}
      <Testimonials />
    </main>
  )
}
