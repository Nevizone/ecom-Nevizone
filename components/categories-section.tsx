import Link from "next/link"
import Image from "next/image"

interface Category {
  id: string
  name: string
  slug: string
  image_url?: string | null
}

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Shop by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${encodeURIComponent(category.name)}`}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={category.image_url || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore collection
              </p>
              <span className="text-xs font-bold text-accent mt-4 block tracking-wider uppercase">View Products</span>
            </div>
          </Link>
        ))}

        {categories.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-10">
            No categories found.
          </div>
        )}
      </div>
    </section>
  )
}
