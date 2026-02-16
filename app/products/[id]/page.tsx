import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"
import ProductImageGallery from "@/components/product-image-gallery"
import ProductInfo from "@/components/product-info"
import ProductDetails from "@/components/product-details"
import ProductReviews from "@/components/product-reviews"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const { data: product } = await supabase
    .from('products')
    .select('meta_title, meta_description, name, description, images')
    .eq('id', id)
    .single()

  if (!product) return { title: "Product Not Found" }

  return {
    title: product.meta_title || `${product.name} | Nevizon`,
    description: product.meta_description || product.description?.slice(0, 160),
    openGraph: {
      images: product.images?.[0] ? [product.images[0]] : [],
    }
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: product, error } = await supabase
    .from('products')
    .select('*, category:categories(name)')
    .eq('id', id)
    .single()

  if (error || !product) {
    console.error("Product fetch error:", error)
    notFound()
  }

  // Fetch related products (same category or random)
  let relatedQuery = supabase
    .from('products')
    .select('*, category:categories(name)')
    .neq('id', product.id)
    .limit(4)

  if (product.category_id) {
    relatedQuery = relatedQuery.eq('category_id', product.category_id)
  }

  const { data: relatedProducts } = await relatedQuery

  const staticSpecs = [
    { label: "Brand", value: product.brand },
    { label: "Model / SKU", value: product.sku },
    { label: "Barcode", value: product.barcode },
    { label: "Age Group", value: product.age_group },
    { label: "Material", value: product.material },
    { label: "Dimensions", value: product.dimensions },
    { label: "Weight", value: product.weight },
    { label: "Colors", value: product.colors },
    { label: "Sizes", value: product.sizes },
    { label: "Country of Origin", value: product.origin },
    { label: "Manufacturer", value: product.manufacturer },
    { label: "Warranty", value: product.warranty },
  ].filter(s => s.value && s.value.trim() !== "")

  const formattedSpecs = Array.isArray(product.specs)
    ? product.specs.map((s: any) => ({ label: s.key, value: s.value }))
    : []

  const allSpecs = [...staticSpecs, ...formattedSpecs]

  // Price Logic
  const hasSale = product.sale_price && product.sale_price < product.price
  const displayPrice = hasSale ? product.sale_price : product.price
  const originalPrice = hasSale ? product.price : null
  const discount = hasSale ? Math.round(((product.price - product.sale_price) / product.price) * 100) : 0

  // Inventory Logic
  const isLowStock = product.inventory_count > 0 && product.inventory_count <= (product.low_stock_threshold || 5)

  // Fetch Reviews
  const { data: reviewsData } = await supabase
    .from('reviews')
    .select('*')
    .eq('product_id', id)
    .eq('status', 'Approved')
    .order('created_at', { ascending: false })

  const reviews = (reviewsData || []).map((r: any) => ({
    id: r.id,
    author: r.user_name || "Anonymous",
    date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    rating: r.rating,
    text: r.comment,
    helpful: 0 // Placeholder as schema doesn't have helpful count yet
  }))

  const totalReviews = reviews.length
  const avgRating = totalReviews > 0
    ? Number((reviews.reduce((acc: number, r: any) => acc + r.rating, 0) / totalReviews).toFixed(1))
    : 0

  // Transform Product for Child Components
  const productData = {
    ...product,
    category: product.category?.name || "General",
    rating: avgRating || 0,
    reviews: totalReviews,
    specifications: allSpecs.length > 0 ? allSpecs : [
      { label: "Description", value: "No technical specifications available for this product." }
    ],
    highlights: product.highlights || [],
    images: product.images || [],
    // Mapped for ProductInfo
    ageGroup: product.age_group || "All Ages",
    price: displayPrice,
    originalPrice: originalPrice,
    discount: discount,
    availability: (product.inventory_count || 0) > 0 ? "In Stock" : "Out of Stock",
    inventoryCount: product.inventory_count || 0,
    isLowStock: isLowStock,
    isNew: product.is_new,
    inTheBox: "Product & Manual" // Default as simplified schema
  }


  const transformedRelated = (relatedProducts || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    category: p.category?.name || "General",
    price: p.sale_price || p.price,
    originalPrice: p.sale_price ? p.price : undefined,
    image: p.images?.[0] || "",
    rating: 4.5,
    reviews: 0,
    isNew: p.is_new
  }))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/toys" className="hover:text-primary transition">
                Toys
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium truncate">{productData.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Images */}
            <div>
              <ProductImageGallery images={productData.images} />
            </div>

            {/* Right Column - Info */}
            <div>
              <ProductInfo product={productData} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Details & Reviews */}
            <div className="lg:col-span-2 space-y-16">
              <ProductDetails
                description={productData.description || "No description available."}
                highlights={productData.highlights}
                specifications={productData.specifications}
              />
              <ProductReviews
                productId={productData.id}
                reviews={reviews}
                rating={productData.rating}
                totalReviews={productData.reviews}
              />
            </div>

            {/* Related Products (Desktop Sidebar style or just below on mobile) */}
            <div className="lg:col-span-1">
              {/* Could put something else here, but for now related products are better full width below */}
            </div>
          </div>

          {/* Related Products - Full Width */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {transformedRelated.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
