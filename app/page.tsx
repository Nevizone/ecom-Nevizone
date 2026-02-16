import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import ProductCarousel, { Product } from "@/components/product-carousel"
import AgeBasedShopping from "@/components/age-based-shopping"
import PromoSection from "@/components/promo-section"
import BenefitsSection from "@/components/benefits-section"
import Footer from "@/components/footer"
import { supabase } from "@/lib/supabase"

// Revalidate every hour
export const revalidate = 3600

export default async function Home() {

  // 1. Fetch New Arrivals
  const { data: newArrivals } = await supabase
    .from('products')
    .select('*, category:categories(name)')
    .order('created_at', { ascending: false })
    .limit(8)

  // 2. Fetch Best Sellers (Using Featured Flag)
  let { data: bestSellers } = await supabase
    .from('products')
    .select('*, category:categories(name)')
    .eq('is_featured', true)
    .limit(8)

  // Fallback: If no featured items, show any products to avoid empty section
  if (!bestSellers || bestSellers.length === 0) {
    const { data: fallback } = await supabase
      .from('products')
      .select('*, category:categories(name)')
      .limit(8)
      .order('price', { ascending: false }) // Expensive items as 'premium/best' fallback
    bestSellers = fallback
  }

  // 3. Fetch Categories
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name, slug, image_url')
    .limit(6)

  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection categories={categories || []} />
      <ProductCarousel title="Best Sellers" products={(bestSellers as unknown as Product[]) || []} />
      <ProductCarousel title="New Arrivals" isNew={true} products={(newArrivals as unknown as Product[]) || []} />
      <AgeBasedShopping />
      <PromoSection />
      <BenefitsSection />
      <Footer />
    </div>
  )
}

