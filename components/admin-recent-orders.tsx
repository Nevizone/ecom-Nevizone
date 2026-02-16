import { MoreHorizontal } from "lucide-react"

export default function AdminRecentOrders() {
    const orders = [
        { id: "#TN-8742", customer: "John Doe", date: "Oct 24, 2023", total: "₹1,299", status: "Delivered", payment: "Paid" },
        { id: "#TN-8741", customer: "Sarah Smith", date: "Oct 24, 2023", total: "₹899", status: "Processing", payment: "Paid" },
        { id: "#TN-8740", customer: "Mike Johnson", date: "Oct 23, 2023", total: "₹2,499", status: "Pending", payment: "Unpaid" },
        { id: "#TN-8739", customer: "Emily Davis", date: "Oct 23, 2023", total: "₹599", status: "Delivered", payment: "Paid" },
        { id: "#TN-8738", customer: "Alex Wilson", date: "Oct 22, 2023", total: "₹1,599", status: "Cancelled", payment: "Refunded" },
    ]

    return (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-bold">Recent Orders</h3>
                <button className="text-sm text-primary hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-secondary/50 text-muted-foreground">
                        <tr>
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Customer</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Total</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Payment</th>
                            <th className="px-6 py-3 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-secondary/20">
                                <td className="px-6 py-4 font-medium">{order.id}</td>
                                <td className="px-6 py-4">{order.customer}</td>
                                <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                                <td className="px-6 py-4 font-medium">{order.total}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" :
                                            order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                                                order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                                    "bg-red-100 text-red-800"
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.payment === "Paid" ? "bg-green-100 text-green-800" :
                                            order.payment === "Unpaid" ? "bg-yellow-100 text-yellow-800" :
                                                "bg-gray-100 text-gray-800"
                                        }`}>
                                        {order.payment}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-foreground">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
