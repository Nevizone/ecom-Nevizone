"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AccountSidebar from "@/components/account-sidebar"
import AccountDashboard from "@/components/account-dashboard"
import AccountOrders from "@/components/account-orders"
import AccountAddresses from "@/components/account-addresses"
import AccountWishlist from "@/components/account-wishlist"
import AccountProfile from "@/components/account-profile"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AccountPage() {
  const [activeView, setActiveView] = useState("dashboard")
  const { user, loading } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    async function getProfile() {
      // This check is now redundant due to the `if (!user) return null` below,
      // but keeping it for safety if component state changes unexpectedly.
      if (!user) return
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (data) setProfile(data)
    }
    getProfile()
  }, [user])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
  }

  if (!user) return null

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <AccountDashboard onChangeView={setActiveView} />
      case "orders":
        return <AccountOrders />
      case "addresses":
        return <AccountAddresses />
      case "wishlist":
        return <AccountWishlist />
      case "profile":
        return <AccountProfile />
      default:
        return <AccountDashboard onChangeView={setActiveView} />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <AccountSidebar
              activeView={activeView}
              onChangeView={setActiveView}
              profile={profile}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {renderView()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
