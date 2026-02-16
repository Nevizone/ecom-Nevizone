"use client"

import { Heart, ShoppingBag, Trash2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useWishlist } from "@/components/wishlist-provider"
import { useCart } from "@/components/cart-provider"

export default function AccountWishlist() {
    const { wishlist, loading, toggleWishlist } = useWishlist()
    const { addItem } = useCart()

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        )
    }

    if (wishlist.length === 0) {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">My Wishlist</h2>

                <div className="flex flex-col items-center justify-center py-20 text-center bg-card border border-dashed border-border rounded-xl">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                        <Heart className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Your wishlist is empty</h3>
                    <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                        Heart items you love to save them for later. They will appear here.
                    </p>
                    <Link href="/products">
                        <Button size="lg" className="gap-2">
                            <ShoppingBag className="w-5 h-5" />
                            Start Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Wishlist</h2>
                <p className="text-sm text-muted-foreground">
                    {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                    >
                        <Link href={`/products/${item.product_id}`} className="block relative h-48 bg-secondary/30 overflow-hidden">
                            {item.products.images?.[0] ? (
                                <Image
                                    src={item.products.images[0]}
                                    alt={item.products.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-6xl">
                                    🧸
                                </div>
                            )}
                        </Link>

                        <div className="p-4 space-y-3">
                            <div>
                                <p className="text-xs text-primary font-semibold uppercase">
                                    {item.products.category?.name || 'General'}
                                </p>
                                <Link href={`/products/${item.product_id}`}>
                                    <h3 className="font-bold text-base line-clamp-2 hover:text-primary transition-colors">
                                        {item.products.name}
                                    </h3>
                                </Link>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-black">
                                    ₹{item.products.sale_price || item.products.price}
                                </span>
                                {item.products.sale_price && item.products.sale_price < item.products.price && (
                                    <span className="text-sm line-through text-muted-foreground">
                                        ₹{item.products.price}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    onClick={() => {
                                        addItem({
                                            id: item.product_id,
                                            name: item.products.name,
                                            price: item.products.sale_price || item.products.price,
                                            quantity: 1,
                                            image: item.products.images?.[0] || ''
                                        })
                                    }}
                                    className="flex-1 gap-2"
                                    size="sm"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    Add to Cart
                                </Button>
                                <Button
                                    onClick={() => toggleWishlist(item.product_id)}
                                    variant="outline"
                                    size="sm"
                                    className="gap-2"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
