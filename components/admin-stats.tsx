import { ShoppingBag, DollarSign, Clock, AlertTriangle } from "lucide-react"

export default function AdminStats() {
    const stats = [
        {
            label: "Today's Orders",
            value: "48",
            change: "+12%",
            trend: "up",
            icon: ShoppingBag,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            label: "Today's Revenue",
            value: "₹24,500",
            change: "+8%",
            trend: "up",
            icon: DollarSign,
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            label: "Pending Orders",
            value: "12",
            change: "-2",
            trend: "down",
            icon: Clock,
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
        {
            label: "Low Stock Items",
            value: "5",
            change: "+1",
            trend: "up",
            icon: AlertTriangle,
            color: "text-red-600",
            bg: "bg-red-100",
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
