"use client"

import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewCategoryPage() {
    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <Link href="/admin/categories">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="w-4 h-4" />
                                </Button>
                            </Link>
                            <h1 className="text-2xl font-bold">Add New Category</h1>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Category Name</Label>
                                <Input id="name" placeholder="e.g. Action Figures" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Category details..." />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Cover Image URL</Label>
                                <Input id="image" placeholder="https://..." />
                            </div>

                            <div className="pt-4 flex justify-end gap-4">
                                <Link href="/admin/categories">
                                    <Button variant="outline">Cancel</Button>
                                </Link>
                                <Button onClick={() => alert("Category Created!")}>Create Category</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
