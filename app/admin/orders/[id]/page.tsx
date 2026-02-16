"use client"

import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Truck, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function OrderDetailsPage() {
    const params = useParams()

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <Link href="/admin/orders">
                                    <Button variant="ghost" size="icon">
                                        <ArrowLeft className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <div>
                                    <h1 className="text-2xl font-bold">Order #{params.id}</h1>
                                    <p className="text-muted-foreground">Placed on Oct 24, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline">Download Invoice</Button>
                                <Button>Update Status</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Order Items */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h2 className="text-lg font-bold mb-4">Order Items</h2>
                                    <div className="space-y-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                                                <div className="w-16 h-16 bg-secondary rounded-md"></div>
                                                <div className="flex-1">
                                                    <p className="font-medium">Product Name {item}</p>
                                                    <p className="text-sm text-muted-foreground">Qty: 1</p>
                                                </div>
                                                <p className="font-bold">₹599</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-border flex justify-between items-center font-bold text-lg">
                                        <span>Total</span>
                                        <span>₹1,198</span>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h2 className="text-lg font-bold mb-4">Order Timeline</h2>
                                    <div className="space-y-6 relative pl-4 border-l-2 border-border ml-2">
                                        <div className="relative">
                                            <div className="absolute -left-[21px] bg-green-500 rounded-full p-1 text-white">
                                                <CheckCircle className="w-3 h-3" />
                                            </div>
                                            <p className="font-medium">Order Delivered</p>
                                            <p className="text-sm text-muted-foreground">Oct 26, 2023, 10:30 AM</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[21px] bg-blue-500 rounded-full p-1 text-white">
                                                <Truck className="w-3 h-3" />
                                            </div>
                                            <p className="font-medium">Shipped</p>
                                            <p className="text-sm text-muted-foreground">Oct 25, 2023, 05:00 PM</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[21px] bg-gray-500 rounded-full p-1 text-white">
                                                <Package className="w-3 h-3" />
                                            </div>
                                            <p className="font-medium">Order Placed</p>
                                            <p className="text-sm text-muted-foreground">Oct 24, 2023, 02:15 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="space-y-6">
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h2 className="text-lg font-bold mb-4">Customer Details</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Name</p>
                                            <p className="font-medium">John Doe</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <p className="font-medium">john@example.com</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <p className="font-medium">+91 98765 43210</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
                                    <p className="text-sm leading-relaxed">
                                        123, Green Park Residency,<br />
                                        Sector 4, Bangalore,<br />
                                        Karnataka - 560001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
