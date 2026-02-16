"use client"

import { LayoutDashboard, Package, MapPin, Heart, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-provider"

interface AccountSidebarProps {
    activeView: string
    onChangeView: (view: string) => void
    profile?: any
}

export default function AccountSidebar({ activeView, onChangeView, profile }: AccountSidebarProps) {
    const { signOut, user } = useAuth()

    // Fallback name logic: Profile Name -> Meta Name -> "Valued Customer"
    const displayName = profile?.full_name || user?.user_metadata?.full_name || "Valued Customer"

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "orders", label: "My Orders", icon: Package },
        { id: "addresses", label: "Addresses", icon: MapPin },
        { id: "wishlist", label: "Wishlist", icon: Heart },
        { id: "profile", label: "Profile", icon: User },
    ]

    return (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Hello,</p>
                        <p className="font-bold text-foreground">{displayName}</p>
                    </div>
                </div>
            </div>

            <nav className="p-2">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <button
                            key={item.id}
                            onClick={() => onChangeView(item.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                                activeView === item.id
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    )
                })}

                <div className="my-2 border-t border-border"></div>

                <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </nav>
        </div>
    )
}
