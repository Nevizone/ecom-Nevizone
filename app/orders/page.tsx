"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Package, Truck, CheckCircle2, Clock, AlertCircle, Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface OrderItem {
  id: string
  quantity: number
  price_at_purchase: number
  products: {
    id: string
    name: string
    images: string[]
    slug: string
  }
}

interface Order {
  id: string
  created_at: string
  status: string
  total_amount: number
  payment_method: string
  payment_status: string
  customer_name: string
  shipping_address: any
  order_items: OrderItem[]
}

export default function OrderTrackingPage() {
  const { user, loading: authLoading } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch('/api/orders')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch orders')
        }

        setOrders(data.orders || [])
      } catch (err: any) {
        console.error('Error fetching orders:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (!authLoading) {
      fetchOrders()
    }
  }, [user, authLoading])

  const getStatusInfo = (status: string) => {
    const statusMap: Record<string, { icon: any; label: string; color: string }> = {
      Delivered: { icon: CheckCircle2, label: "Delivered", color: "text-green-600" },
      Shipped: { icon: Truck, label: "Shipped", color: "text-blue-600" },
      Processing: { icon: Package, label: "Processing", color: "text-yellow-600" },
      Pending: { icon: Clock, label: "Pending", color: "text-gray-600" },
      Cancelled: { icon: AlertCircle, label: "Cancelled", color: "text-red-600" },
    }
    return statusMap[status] || { icon: Clock, label: status, color: "text-gray-600" }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="w-full min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    )
  }

  // Not logged in
  if (!user) {
    return (
      <div className="w-full min-h-screen bg-background">
        <Header />
        <div className="bg-gradient-to-r from-primary to-secondary py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-foreground">Order Tracking</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-card rounded-lg p-12 text-center border border-border">
            <Package size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Login Required</h2>
            <p className="text-muted-foreground mb-6">Please log in to view your order history.</p>
            <Link href="/login">
              <Button>Login to Continue</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="w-full min-h-screen bg-background">
        <Header />
        <div className="bg-gradient-to-r from-primary to-secondary py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-foreground">Order Tracking</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-card rounded-lg p-12 text-center border border-border">
            <AlertCircle size={48} className="mx-auto text-destructive mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Error Loading Orders</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <Header />

      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-foreground">Order Tracking</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusInfo = getStatusInfo(order.status)
              const Icon = statusInfo.icon
              const itemCount = order.order_items?.length || 0

              return (
                <div
                  key={order.id}
                  className="bg-card rounded-lg p-6 border border-border shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                      <p className="font-mono font-semibold text-foreground text-xs">
                        {order.id.substring(0, 8)}...
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                      <p className="text-foreground">{formatDate(order.created_at)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Items</p>
                      <p className="text-foreground font-semibold">{itemCount} item(s)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                      <p className="text-primary font-bold text-lg">₹{order.total_amount}</p>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {order.order_items?.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex-shrink-0">
                        <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center relative overflow-hidden">
                          {item.products?.images?.[0] ? (
                            <Image
                              src={item.products.images[0]}
                              alt={item.products.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Package className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    ))}
                    {itemCount > 3 && (
                      <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+{itemCount - 3}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Icon size={24} className={statusInfo.color} />
                      <div>
                        <span className={`font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
                        <p className="text-xs text-muted-foreground">
                          {order.payment_method} • {order.payment_status}
                        </p>
                      </div>
                    </div>
                    <Link href={`/checkout/success/${order.id}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-card rounded-lg p-12 text-center border border-border">
            <Package size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">No Orders Yet</h2>
            <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
            <Link href="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
