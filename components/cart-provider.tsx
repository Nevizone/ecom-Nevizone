"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
    category?: string
    maxQuantity?: number // Optional: constrain by stock
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    cartCount: number
    subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isInitialized, setIsInitialized] = useState(false)
    const { toast } = useToast()

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart", e)
            }
        }
        setIsInitialized(true)
    }, [])

    // Save to LocalStorage on change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart", JSON.stringify(items))
        }
    }, [items, isInitialized])

    const addItem = (newItem: CartItem) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === newItem.id)
            if (existing) {
                return prev.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
                        : item
                )
            }
            return [...prev, { ...newItem, quantity: newItem.quantity || 1 }]
        })

        // Toast feedback (outside state updater)
        const existingInCurrentRender = items.find((item) => item.id === newItem.id)
        if (existingInCurrentRender) {
            toast({ title: "Updated Cart", description: `Increased quantity of ${newItem.name}` })
        } else {
            toast({ title: "Added to Cart", description: `${newItem.name} added to your cart.` })
        }
    }

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
        toast({ title: "Removed from Cart", description: "Item removed." })
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        )
    }

    const clearCart = () => {
        setItems([])
        localStorage.removeItem("cart")
    }

    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                cartCount,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
