"use client"

import { Star, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"

interface Product {
    id: string | number
    name: string
    category: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    isNew?: boolean
    sale_price?: number // Compatible prop
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart()
    const { isInWishlist, toggleWishlist } = useWishlist()
    const inWishlist = isInWishlist(product.id.toString())

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addItem({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
            // category: product.category 
        })
    }

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        toggleWishlist(product.id.toString())
    }

    return (
        <div className="rounded-xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group h-full flex flex-col relative w-full">
            {/* Image Link */}
            <Link href={`/products/${product.id}`} className="block relative bg-secondary/30 h-56 flex items-center justify-center overflow-hidden group-hover:bg-secondary/50 transition-colors">
                {product.image ? (
                    <div className="relative w-full h-full p-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ) : (
                    <span className="text-6xl">🧸</span>
                )}
            </Link>

            {/* Floating Wishlist Button */}
            <button
                className={`absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 transition z-10 ${inWishlist ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
                    }`}
                onClick={handleWishlistToggle}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
            </button>

            {product.isNew && (
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase font-bold px-3 py-1 rounded-full z-10 shadow-lg tracking-wider">
                    New
                </span>
            )}

            {/* Details */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-auto">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/5 px-2 py-1 rounded">
                            {product.category || "General"}
                        </span>
                        <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                            <span className="text-xs font-semibold text-muted-foreground">{product.rating || 4.5}</span>
                        </div>
                    </div>

                    <Link href={`/products/${product.id}`} className="block hover:text-primary transition-colors">
                        <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2 leading-tight">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-black text-foreground">₹{product.price}</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                            <>
                                <span className="text-sm text-muted-foreground line-through decoration-primary/50">
                                    ₹{product.originalPrice}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-primary-foreground font-bold text-sm py-3 rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group/btn"
                >
                    <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}
