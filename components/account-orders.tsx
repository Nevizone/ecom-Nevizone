import { useEffect, useState } from "react"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase"

export default function AccountOrders() {
    const { user } = useAuth()
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchOrders() {
            if (!user) return
            try {
                // Fetch orders with items count
                const { data, error } = await supabase
                    .from('orders')
                    .select('*, items:order_items(*)')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false })

                if (error) throw error
                setOrders(data || [])
            } catch (error) {
                console.error("Error fetching orders:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])

    if (loading) {
        return <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">My Orders</h2>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search Order ID" className="pl-9" />
                </div>
            </div>

            <div className="space-y-4">
                {orders.length === 0 ? (
                    <div className="text-center py-12 border border-dashed rounded-xl">
                        <p className="text-muted-foreground">No orders found</p>
                    </div>
                ) : orders.map((order) => (
                    <div key={order.id} className="bg-card border border-border rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="font-bold text-lg">#{order.id.slice(0, 8).toUpperCase()}</span>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" :
                                        order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                            order.status === "Cancelled" ? "bg-red-100 text-red-800" :
                                                "bg-blue-100 text-blue-800"
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Placed on {new Date(order.created_at).toLocaleDateString()}
                                </p>
                            </div>
                            <Button variant="outline" size="sm">View Details</Button>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-border text-sm">
                            <span className="text-muted-foreground">
                                {order.items?.length || 0} Items
                            </span>
                            <span className="font-bold">Total: ₹{order.total_amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
