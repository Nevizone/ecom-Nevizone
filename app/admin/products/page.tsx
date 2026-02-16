"use client"

import AdminPageHeader from "@/components/admin-page-header"
import AdminDataTable from "@/components/admin-data-table"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

export default function AdminProductsPage() {
    const products = [
        {
            id: 1,
            name: "Plush Teddy Bear",
            price: "₹599",
            stock: 12,
            category: "Soft Toys",
            status: "Active",
        },
        {
            id: 2,
            name: "Remote Control Car",
            price: "₹1,299",
            stock: 5,
            category: "Electronics",
            status: "Active",
        },
        {
            id: 3,
            name: "Building Blocks Set",
            price: "₹899",
            stock: 0,
            category: "Educational",
            status: "Out of Stock",
        },
    ]

    const columns = [
        { key: "name", label: "Product Name" },
        { key: "category", label: "Category" },
        { key: "price", label: "Price" },
        {
            key: "stock",
            label: "Stock",
            render: (row: any) => (
                <span className={row.stock === 0 ? "text-destructive font-bold" : ""}>
                    {row.stock}
                </span>
            )
        },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
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
                            title="Products"
                            description="Manage your product catalog"
                            actionLabel="Add Product"
                            actionLink="/admin/products/new"
                        />
                        <AdminDataTable
                            columns={columns}
                            data={products}
                            editLink={(id) => `/admin/products/${id}`}
                            onDelete={(id) => alert(`Delete product ${id}`)}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
