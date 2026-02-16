"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export default function OrderSuccessPage() {
    const params = useParams()
    const orderId = params.id as string
    const [order, setOrder] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchOrder() {
            if (!orderId) return

            try {
                const { data, error } = await supabase
                    .from('orders')
                    .select('*, items:order_items(*)')
                    .eq('id', orderId)
                    .single()

                if (data) setOrder(data)
            } catch (error) {
                console.error("Error fetching order:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchOrder()
    }, [orderId])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                    <p className="text-muted-foreground mb-6">
                        Thank you for your purchase. Your order has been received and is being processed.
                    </p>

                    <div className="bg-secondary/30 rounded-lg p-4 mb-8 text-sm">
                        <p className="text-muted-foreground mb-1">Order ID</p>
                        <p className="font-mono font-bold text-foreground">{orderId}</p>
                        {loading ? (
                            <div className="h-4 bg-secondary animate-pulse rounded mt-2 w-1/2 mx-auto"></div>
                        ) : order ? (
                            <p className="mt-2 text-xs text-muted-foreground">
                                Total: <span className="font-bold text-foreground">₹{order.total_amount}</span>
                            </p>
                        ) : null}
                    </div>

                    <div className="space-y-3">
                        <Link href="/account?view=orders" className="block w-full">
                            <Button variant="outline" className="w-full gap-2">
                                View Order Details
                            </Button>
                        </Link>
                        <Link href="/" className="block w-full">
                            <Button className="w-full gap-2">
                                <ShoppingBag className="w-4 h-4" />
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
