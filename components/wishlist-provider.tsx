"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/hooks/use-toast"

interface WishlistItem {
    id: string
    product_id: string
    created_at: string
    products: {
        id: string
        name: string
        price: number
        sale_price: number | null
        images: string[]
        category: { name: string } | null
    }
}

interface WishlistContextType {
    wishlist: WishlistItem[]
    isInWishlist: (productId: string) => boolean
    toggleWishlist: (productId: string) => Promise<void>
    loading: boolean
    refreshWishlist: () => Promise<void>
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const { toast } = useToast()

    // Fetch wishlist on mount and when user changes
    useEffect(() => {
        if (user) {
            refreshWishlist()
        } else {
            setWishlist([])
        }
    }, [user])

    const refreshWishlist = async () => {
        if (!user) return

        setLoading(true)
        try {
            const response = await fetch(`/api/wishlist?userId=${user.id}`)
            const data = await response.json()

            if (response.ok) {
                setWishlist(data.wishlist || [])
            } else {
                console.error('Failed to fetch wishlist:', data.error)
            }
        } catch (error) {
            console.error('Error fetching wishlist:', error)
        } finally {
            setLoading(false)
        }
    }

    const isInWishlist = (productId: string): boolean => {
        return wishlist.some(item => item.product_id === productId)
    }

    const toggleWishlist = async (productId: string) => {
        if (!user) {
            toast({
                title: "Login Required",
                description: "Please login to add items to your wishlist",
                variant: "destructive"
            })
            return
        }

        const inWishlist = isInWishlist(productId)

        try {
            if (inWishlist) {
                // Remove from wishlist
                const response = await fetch(
                    `/api/wishlist?userId=${user.id}&productId=${productId}`,
                    { method: 'DELETE' }
                )

                if (response.ok) {
                    setWishlist(prev => prev.filter(item => item.product_id !== productId))
                    toast({
                        title: "Removed from Wishlist",
                        description: "Item has been removed from your wishlist"
                    })
                } else {
                    throw new Error('Failed to remove from wishlist')
                }
            } else {
                // Add to wishlist
                const response = await fetch('/api/wishlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user.id, productId })
                })

                if (response.ok) {
                    // Refresh to get full product details
                    await refreshWishlist()
                    toast({
                        title: "Added to Wishlist ❤️",
                        description: "Item has been added to your wishlist"
                    })
                } else {
                    throw new Error('Failed to add to wishlist')
                }
            }
        } catch (error: any) {
            console.error('Error toggling wishlist:', error)
            toast({
                title: "Error",
                description: error.message || "Something went wrong",
                variant: "destructive"
            })
        }
    }

    return (
        <WishlistContext.Provider
            value={{ wishlist, isInWishlist, toggleWishlist, loading, refreshWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    const context = useContext(WishlistContext)
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider")
    }
    return context
}
