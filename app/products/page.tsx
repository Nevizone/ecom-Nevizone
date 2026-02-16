"use client"

import { useState, useEffect, Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, ShoppingCart, Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import Pagination from "@/components/pagination"
import ProductCard from "@/components/product-card"

interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  ageGroup?: string
}

function ProductsContent() {
  const searchParams = useSearchParams()
  const urlSearch = searchParams.get("search") || ""

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popular")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [totalItems, setTotalItems] = useState(0)

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAge, setSelectedAge] = useState<string | null>(null)
  const [showSaleOnly, setShowSaleOnly] = useState(false)

  const [categoriesList, setCategoriesList] = useState<string[]>(["All"])

  // Sync URL Params to State
  useEffect(() => {
    const catParam = searchParams.get("category")
    const ageParam = searchParams.get("age")
    const saleParam = searchParams.get("sale")

    if (catParam) setSelectedCategory(catParam)
    else setSelectedCategory("All")

    setSelectedAge(ageParam) // null if not present
    setShowSaleOnly(saleParam === "true")
  }, [searchParams])

  // Fetch Categories for Sidebar
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from('categories').select('name')
      if (data) {
        setCategoriesList(["All", ...data.map(c => c.name)])
      }
    }
    fetchCategories()
  }, [])

  // Fetch Products with Pagination
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)

      // Build base query for counting
      let countQuery = supabase
        .from('products')
        .select('id', { count: 'exact', head: true })

      // Build base query for data
      let dataQuery = supabase
        .from('products')
        .select('*, category:categories(name)')

      // Apply filters to both queries
      if (urlSearch) {
        countQuery = countQuery.ilike('name', `%${urlSearch}%`)
        dataQuery = dataQuery.ilike('name', `%${urlSearch}%`)
      }

      if (selectedCategory !== "All") {
        // Get category ID first for filtering
        const { data: categoryData } = await supabase
          .from('categories')
          .select('id')
          .eq('name', selectedCategory)
          .single()

        if (categoryData) {
          countQuery = countQuery.eq('category_id', categoryData.id)
          dataQuery = dataQuery.eq('category_id', categoryData.id)
        }
      }

      if (selectedAge) {
        countQuery = countQuery.ilike('age_group', `%${selectedAge}%`)
        dataQuery = dataQuery.ilike('age_group', `%${selectedAge}%`)
      }

      if (showSaleOnly) {
        countQuery = countQuery.not('sale_price', 'is', null)
        dataQuery = dataQuery.not('sale_price', 'is', null)
      }

      // Apply Sort (Server-side)
      switch (sortBy) {
        case 'price-low':
          dataQuery = dataQuery.order('price', { ascending: true })
          break
        case 'price-high':
          dataQuery = dataQuery.order('price', { ascending: false })
          break
        case 'newest':
          dataQuery = dataQuery.order('created_at', { ascending: false })
          break
        default:
          dataQuery = dataQuery.order('created_at', { ascending: false })
      }

      // Apply pagination
      const from = (currentPage - 1) * itemsPerPage
      const to = from + itemsPerPage - 1
      dataQuery = dataQuery.range(from, to)

      // Execute queries
      const [{ data, error }, { count, error: countError }] = await Promise.all([
        dataQuery,
        countQuery
      ])

      if (error || countError) {
        console.error('Error fetching products:', error || countError)
        setLoading(false)
        return
      }

      if (data) {
        // Map to UI Model
        const mappedProducts = data.map((p: any) => ({
          id: p.id,
          name: p.name,
          category: p.category?.name || "General",
          price: p.price,
          originalPrice: p.sale_price || undefined,
          image: p.images?.[0] || "",
          rating: 4.5, // Placeholder
          reviews: 0,
          badge: p.is_new ? "New" : (p.sale_price ? "Sale" : undefined),
          ageGroup: p.age_group
        }))

        setProducts(mappedProducts)
        setTotalItems(count || 0)
      }
      setLoading(false)
    }

    fetchProducts()
  }, [selectedCategory, selectedAge, showSaleOnly, sortBy, urlSearch, currentPage, itemsPerPage])

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />

      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">
            {urlSearch
              ? `Search Results for "${urlSearch}"`
              : selectedCategory !== "All"
                ? selectedCategory
                : showSaleOnly
                  ? "Exclusive Offers"
                  : selectedAge
                    ? `Shop by Age: ${selectedAge}`
                    : "Shop All Products"
            }
          </h1>
          <p className="text-primary-foreground/80">Discover our complete collection of toys, games, and stationery</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-48">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Show Per Page</h3>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1) // Reset to first page
                }}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="12">12 Products</option>
                <option value="24">24 Products</option>
                <option value="36">36 Products</option>
                <option value="48">48 Products</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No products found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {!loading && products.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalItems / itemsPerPage)}
                onPageChange={(page) => {
                  setCurrentPage(page)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>}>
      <ProductsContent />
    </Suspense>
  )
}
