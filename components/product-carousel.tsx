import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export interface Product {
  id: string
  name: string
  category: { name: string } | null
  price: number
  sale_price?: number | null
  rating?: number
  reviews?: number
  images: string[]
  is_new?: boolean
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  isNew?: boolean
}

export default function ProductCarousel({ title, products, isNew = false }: ProductCarouselProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{title}</h2>
        <Link href="/products" className="group flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              category: product.category?.name || "Toy",
              price: product.sale_price || product.price,
              originalPrice: product.sale_price ? product.price : undefined,
              image: product.images?.[0] || "",
              rating: product.rating || 4.5,
              reviews: product.reviews || 0,
              isNew: isNew || product.is_new,
            }}
          />
        ))}
      </div>
    </section>
  )
}
