"use client"

import AdminPageHeader from "@/components/admin-page-header"
import AdminDataTable from "@/components/admin-data-table"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

export default function AdminOrdersPage() {
    const orders = [
        { id: "TN-8742", customer: "John Doe", date: "Oct 24, 2023", total: "₹1,299", status: "Delivered" },
        { id: "TN-8741", customer: "Sarah Smith", date: "Oct 24, 2023", total: "₹899", status: "Processing" },
        { id: "TN-8740", customer: "Mike Johnson", date: "Oct 23, 2023", total: "₹2,499", status: "Pending" },
        { id: "TN-8739", customer: "Emily Davis", date: "Oct 23, 2023", total: "₹599", status: "Delivered" },
    ]

    const columns = [
        { key: "id", label: "Order ID" },
        { key: "customer", label: "Customer" },
        { key: "date", label: "Date" },
        { key: "total", label: "Total" },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === "Delivered" ? "bg-green-100 text-green-800" :
                        row.status === "Processing" ? "bg-blue-100 text-blue-800" :
                            "bg-yellow-100 text-yellow-800"
                    }`}>
                    {row.status}
                </span>
            )
        },
    ]

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <AdminPageHeader
                            title="Orders"
                            description="Manage customer orders"
                        />
                        <AdminDataTable
                            columns={columns}
                            data={orders}
                            viewLink={(id) => `/admin/orders/${id}`}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
