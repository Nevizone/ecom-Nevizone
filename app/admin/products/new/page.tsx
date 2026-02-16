"use client"

import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewProductPage() {
    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <Link href="/admin/products">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="w-4 h-4" />
                                </Button>
                            </Link>
                            <h1 className="text-2xl font-bold">Add New Product</h1>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input id="name" placeholder="e.g. Super Robot" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Product details..." className="min-h-[100px]" />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="price">Price (₹)</Label>
                                    <Input id="price" type="number" placeholder="0.00" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="stock">Stock Quantity</Label>
                                    <Input id="stock" type="number" placeholder="0" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    <option>Select Category</option>
                                    <option>Soft Toys</option>
                                    <option>Electronics</option>
                                    <option>Educational</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Image URL</Label>
                                <Input id="image" placeholder="https://..." />
                            </div>

                            <div className="pt-4 flex justify-end gap-4">
                                <Link href="/admin/products">
                                    <Button variant="outline">Cancel</Button>
                                </Link>
                                <Button onClick={() => alert("Product Created!")}>Create Product</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
