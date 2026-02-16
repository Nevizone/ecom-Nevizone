"use client"

import { useState } from "react"
import { Star, Heart, Minus, Plus, ShoppingCart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PincodeCheck from "@/components/pincode-check"
import { useCart } from "@/components/cart-provider"

interface ProductInfoProps {
    product: {
        id: string
        name: string
        category: string
        ageGroup: string
        rating: number
        reviews: number
        price: number
        originalPrice: number | null
        discount: number
        availability: string
        inventoryCount: number
        isLowStock: boolean
        isNew: boolean
        brand: string
        material: string
        inTheBox: string
        images: string[]
    }
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const { addItem } = useCart()
    const [quantity, setQuantity] = useState(1)

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increaseQuantity = () => {
        if (quantity < product.inventoryCount) {
            setQuantity(quantity + 1)
        }
    }

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.images?.[0] || "",
            category: product.category
        })
    }

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
                {/* Badges */}
                <div className="flex gap-2 mb-3">
                    {product.isNew && <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full">New Arrival</span>}
                    {product.discount > 0 && <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full">Sale {product.discount}% Off</span>}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                        {product.category}
                    </span>
                    <span>·</span>
                    <span>Age {product.ageGroup}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"
                                    }`}
                            />
                        ))}
                    </div>
                    <a href="#reviews" className="text-sm text-primary hover:underline">
                        {product.reviews} reviews
                    </a>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                )}
            </div>

            {/* Availability */}
            <div className={`flex items-center gap-2 text-sm font-medium ${product.inventoryCount > 0 ? "text-green-600" : "text-red-600"}`}>
                <CheckCircle className="w-4 h-4" />
                {product.availability}
                {product.isLowStock && (
                    <span className="text-orange-600 animate-pulse ml-2">
                        (Hurry! Only {product.inventoryCount} left)
                    </span>
                )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
                {/* Quantity */}
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg">
                        <button
                            onClick={decreaseQuantity}
                            className="p-2 hover:bg-secondary transition disabled:opacity-50"
                            disabled={quantity <= 1}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="p-2 hover:bg-secondary transition disabled:opacity-50"
                            disabled={quantity >= product.inventoryCount}
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 h-12 text-base gap-2" onClick={handleAddToCart} disabled={product.inventoryCount === 0}>
                        <ShoppingCart className="w-5 h-5" />
                        {product.inventoryCount > 0 ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Link href="/checkout" className="flex-1">
                        <Button variant="outline" className="w-full h-12 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground" disabled={product.inventoryCount === 0}>
                            Buy Now
                        </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="h-12 w-12 flex-shrink-0">
                        <Heart className="w-5 h-5" />
                    </Button>
                </div>

                {/* Pincode Check */}
                <PincodeCheck />
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 text-sm border-t border-border pt-6">
                <div>
                    <span className="text-muted-foreground block mb-1">Brand</span>
                    <span className="font-medium">{product.brand || "Generic"}</span>
                </div>
                <div>
                    <span className="text-muted-foreground block mb-1">Material</span>
                    <span className="font-medium">{product.material || "N/A"}</span>
                </div>
                <div>
                    <span className="text-muted-foreground block mb-1">Age Group</span>
                    <span className="font-medium">{product.ageGroup}</span>
                </div>
                <div>
                    <span className="text-muted-foreground block mb-1">In the box</span>
                    <span className="font-medium">{product.inTheBox}</span>
                </div>
            </div>
        </div>
    )
}
