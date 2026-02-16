"use client"

import { useCart } from "@/components/cart-provider"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartItem from "@/components/cart-item"
import OrderSummary from "@/components/order-summary"
import EmptyCart from "@/components/empty-cart"
import ProductCard from "@/components/product-card"

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeItem, subtotal } = useCart()

  const shipping = subtotal > 999 ? 0 : 99
  const discount = 0
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping - discount + tax

  const recommendedProducts = [
    {
      id: 4,
      name: "Magnetic Building Tiles",
      category: "Toy",
      price: 1899,
      originalPrice: 2499,
      rating: 4.6,
      reviews: 150,
      image: "🧲",
    },
    {
      id: 5,
      name: "Artistic Painting Set",
      category: "Art & Craft",
      price: 799,
      originalPrice: 999,
      rating: 4.5,
      reviews: 80,
      image: "🎨",
    },
    {
      id: 6,
      name: "Solar System Model Kit",
      category: "Educational",
      price: 1599,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 120,
      image: "🪐",
    },
    {
      id: 7,
      name: "Plush Teddy Bear",
      category: "Soft Toy",
      price: 599,
      originalPrice: 799,
      rating: 4.9,
      reviews: 300,
      image: "🧸",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                discount={discount}
                tax={tax}
                total={total}
              />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}

        {/* Recommended Products */}
        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
