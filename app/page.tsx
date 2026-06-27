"use client"
import { Header } from "@/app/components/header"
import { HeroSection } from "@/app/components/HeroSection"
import { FeaturedProducts } from "@/app/components/FeaturedProduction"
import { CollectionStrip } from "@/app/components/CollectionStrip"
import { MaterialsSection } from "@/app/components/MaterialSection"
import { NewsletterSection } from "@/app/components/NewsletterSection"
import { Footer } from "@/app/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CollectionStrip />
      <MaterialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
