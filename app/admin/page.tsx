import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"
import AdminStats from "@/components/admin-stats"
import AdminChart from "@/components/admin-chart"
import AdminRecentOrders from "@/components/admin-recent-orders"
import AdminLowStock from "@/components/admin-low-stock"

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Stats */}
                        <AdminStats />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Chart */}
                            <div className="lg:col-span-2">
                                <AdminChart />
                            </div>

                            {/* Low Stock */}
                            <div className="lg:col-span-1">
                                <AdminLowStock />
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <AdminRecentOrders />
                    </div>
                </main>
            </div>
        </div>
    )
}
