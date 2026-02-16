"use client"

import AdminPageHeader from "@/components/admin-page-header"
import AdminDataTable from "@/components/admin-data-table"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

export default function AdminCustomersPage() {
    const customers = [
        { id: 1, name: "John Doe", email: "john@example.com", orders: 12, spent: "₹15,400" },
        { id: 2, name: "Sarah Smith", email: "sarah@example.com", orders: 5, spent: "₹4,200" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", orders: 2, spent: "₹1,800" },
        { id: 4, name: "Emily Davis", email: "emily@example.com", orders: 8, spent: "₹9,600" },
    ]

    const columns = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "orders", label: "Total Orders" },
        { key: "spent", label: "Total Spent" },
    ]

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <AdminPageHeader
                            title="Customers"
                            description="View and manage customer base"
                        />
                        <AdminDataTable
                            columns={columns}
                            data={customers}
                            onDelete={(id) => alert(`Block customer ${id}`)}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
