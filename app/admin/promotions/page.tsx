"use client"

import AdminPageHeader from "@/components/admin-page-header"
import AdminDataTable from "@/components/admin-data-table"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

export default function AdminPromotionsPage() {
    const promotions = [
        { id: 1, title: "Summer Sale Banner", type: "Banner", status: "Active", dates: "Jun 1 - Jun 30" },
        { id: 2, title: "New Arrivals Slider", type: "Slider", status: "Active", dates: "Ongoing" },
        { id: 3, title: "Diwali Offer", type: "Popup", status: "Scheduled", dates: "Nov 1 - Nov 15" },
    ]

    const columns = [
        { key: "title", label: "Title" },
        { key: "type", label: "Type" },
        { key: "dates", label: "Duration" },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
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
                            title="Promotions"
                            description="Manage banners and offers"
                            actionLabel="Add Promotion"
                            actionLink="#"
                        />
                        <AdminDataTable
                            columns={columns}
                            data={promotions}
                            onDelete={(id) => alert(`Delete promotion ${id}`)}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
