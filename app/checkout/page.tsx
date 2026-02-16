"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/components/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "COD"
  })

  // Pre-fill user data
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        email: user.email || "",
        name: user.user_metadata?.full_name || ""
      }))
    }
  }, [user])

  // Redirect if not logged in and show guest checkout banner
  const isGuestCheckout = !user

  // Calculations
  const shipping = subtotal > 999 ? 0 : 99
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax // + discount if any

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      toast({ title: "Cart is empty", variant: "destructive" })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price
          })),
          user_id: user?.id,
          customer_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip
          },
          total_amount: total,
          payment_method: formData.paymentMethod
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Checkout failed')
      }

      // Success
      clearCart()
      toast({ title: "Order Placed Successfully! 🎉" })
      router.push(`/checkout/success/${result.orderId}`)

    } catch (error: any) {
      console.error("Checkout Error:", error)
      toast({
        title: "Order Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link href="/">
          <Button>Go Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>

        {/* Guest Checkout Banner */}
        {isGuestCheckout && (
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              You're checking out as a guest. <Link href="/login" className="font-medium underline">Log in</Link> for a faster checkout with saved addresses and order tracking.
            </p>
          </div>
        )}

        {/* Logged In Banner */}
        {!isGuestCheckout && (
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-900 dark:text-green-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              You're logged in. Your order will be saved to your account.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Billing & Shipping Form */}
          <div className="lg:col-span-2 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Info */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name" name="name" required
                      value={formData.name} onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone" name="phone" type="tel" required
                      value={formData.phone} onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address Line 1</Label>
                    <Input
                      id="address" name="address" required
                      value={formData.address} onChange={handleInputChange}
                      placeholder="123 Main St, Apt 4B"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city" name="city" required
                        value={formData.city} onChange={handleInputChange}
                        placeholder="Mumbai"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state" name="state" required
                        value={formData.state} onChange={handleInputChange}
                        placeholder="Maharashtra"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP / Pincode</Label>
                      <Input
                        id="zip" name="zip" required
                        value={formData.zip} onChange={handleInputChange}
                        placeholder="400001"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-secondary/50">
                    <input
                      type="radio" id="cod" name="paymentMethod" value="COD"
                      checked={formData.paymentMethod === "COD"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer font-medium">Cash on Delivery (COD)</Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-secondary/50 opacity-50">
                    <input
                      type="radio" id="online" name="paymentMethod" value="Online"
                      checked={formData.paymentMethod === "Online"}
                      onChange={handleInputChange}
                      disabled
                      className="w-4 h-4 text-primary"
                    />
                    <div className="flex-1">
                      <Label htmlFor="online" className="cursor-not-allowed font-medium">Online Payment</Label>
                      <p className="text-xs text-muted-foreground">Temporarily unavailable</p>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-secondary rounded flex-shrink-0 flex items-center justify-center text-xl relative overflow-hidden">
                      {item.image && (item.image.startsWith('/') || item.image.startsWith('http')) ? (
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      ) : (
                        item.image || "📦"
                      )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-semibold">₹{item.price * item.quantity}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border mt-2">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <Button
                type="submit"
                form="checkout-form"
                className="w-full mt-6 h-12 text-base"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Processing..." : "Place Order"}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By placing this order, you agree to our <a href="#" className="underline">Terms of Service</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
