"use client"

import AdminPageHeader from "@/components/admin-page-header"
import AdminDataTable from "@/components/admin-data-table"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

export default function AdminCategoriesPage() {
    const categories = [
        { id: 1, name: "Soft Toys", products: 45, status: "Active" },
        { id: 2, name: "Electronics", products: 28, status: "Active" },
        { id: 3, name: "Educational", products: 32, status: "Active" },
        { id: 4, name: "Arts & Crafts", products: 15, status: "Active" },
    ]

    const columns = [
        { key: "name", label: "Category Name" },
        { key: "products", label: "Products Count" },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
                            title="Categories"
                            description="Manage product categories"
                            actionLabel="Add Category"
                            actionLink="/admin/categories/new"
                        />
                        <AdminDataTable
                            columns={columns}
                            data={categories}
                            editLink={(id) => `/admin/categories/${id}`}
                            onDelete={(id) => alert(`Delete category ${id}`)}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
