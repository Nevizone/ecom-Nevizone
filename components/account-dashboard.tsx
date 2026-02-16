import { useEffect, useState } from "react"
import { Package, MapPin, Heart, Coins, Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase"

interface AccountDashboardProps {
    onChangeView: (view: string) => void
}

export default function AccountDashboard({ onChangeView }: AccountDashboardProps) {
    const { user } = useAuth()
    const [recentOrders, setRecentOrders] = useState<any[]>([])
    const [stats, setStats] = useState({ orders: 0, addresses: 0, wishlist: 0, coins: 0 })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            if (!user) return
            try {
                // 1. Fetch Orders (Recent & Count)
                const { data: orders, count: ordersCount } = await supabase
                    .from('orders')
                    .select('*', { count: 'exact' })
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false })
                    .limit(3)

                // 2. Fetch Profile for Coins (and addresses if we had them)
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('coins')
                    .eq('id', user.id)
                    .single()

                setRecentOrders(orders || [])
                setStats({
                    orders: ordersCount || 0,
                    addresses: 0, // Placeholder until address system is built
                    wishlist: 0, // Placeholder until wishlist system is built
                    coins: profile?.coins || 0
                })
            } catch (error) {
                console.error("Error fetching dashboard data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [user])

    if (loading) {
        return <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
                <p className="text-muted-foreground">
                    From your account dashboard, you can easily check & view your recent orders, manage your
                    shipping and billing addresses and edit your password and account details.
                </p>
            </div>

            {/* Loyalty Banner */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-yellow-700 flex items-center gap-2">
                        <Coins className="w-5 h-5" /> Nevizon Club
                    </h3>
                    <p className="text-sm text-muted-foreground">You have <span className="font-bold text-foreground">{stats.coins} Coins</span>. Redeem them on your next order!</p>
                </div>
                <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-bold rounded-lg hover:bg-yellow-700 transition">
                    View History
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                    onClick={() => onChangeView("orders")}
                    className="bg-card border border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{stats.orders}</p>
                            <p className="text-sm text-muted-foreground">Total Orders</p>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => onChangeView("addresses")}
                    className="bg-card border border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{stats.addresses}</p>
                            <p className="text-sm text-muted-foreground">Saved Addresses</p>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => onChangeView("wishlist")}
                    className="bg-card border border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                            <Heart className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{stats.wishlist}</p>
                            <p className="text-sm text-muted-foreground">Wishlist Items</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Recent Orders</h3>
                    <button
                        onClick={() => onChangeView("orders")}
                        className="text-sm text-primary hover:underline"
                    >
                        View All
                    </button>
                </div>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-secondary/50 text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Order ID</th>
                                    <th className="px-6 py-3 font-medium">Date</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium">Total</th>
                                    <th className="px-6 py-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {recentOrders.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                                            No recent orders
                                        </td>
                                    </tr>
                                ) : recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-secondary/20">
                                        <td className="px-6 py-4 font-medium">#{order.id.slice(0, 8).toUpperCase()}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" :
                                                    order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                                        order.status === "Cancelled" ? "bg-red-100 text-red-800" :
                                                            "bg-blue-100 text-blue-800"
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium">₹{order.total_amount}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => onChangeView("orders")}
                                                className="text-primary hover:underline"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
