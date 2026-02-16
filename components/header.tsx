"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingCart, Heart, User, Menu, X, Coins } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { useCart } from "@/components/cart-provider"
import { supabase } from "@/lib/supabase"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [coins, setCoins] = useState(0)
  const { user } = useAuth()
  const { cartCount } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data } = await supabase.from('profiles').select('coins').eq('id', user.id).single()
        if (data) setCoins(data.coins || 0)
      }
      fetchProfile()
    } else {
      setCoins(0)
    }
  }, [user])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Toys", href: "/products?category=Toys" },
    { label: "Stationery", href: "/products?category=Stationery" },
    { label: "Age 3–5", href: "/products?age=3-5" },
    { label: "Age 6–9", href: "/products?age=6-9" },
    { label: "Study Essentials", href: "/products?category=Study" },
    { label: "Offers", href: "/products?sale=true" },
  ]

  return (
    <div className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40">
      {/* Top Info Bar - Premium Minimalist */}
      <div className="bg-primary/5 text-primary-foreground/80 text-[10px] uppercase tracking-widest py-1.5 px-4 text-center">
        <span>Nevizon Exclusive • Free Global Shipping Orders Over ₹999</span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
              NEVIZON<span className="text-primary">.</span>
            </div>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search toys, games, and stationery..."
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/account" className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition">
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className="hidden sm:inline">Account</span>
              </Link>
            ) : (
              <Link href="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}

            {/* Loyalty Coins - Dynamic */}
            {user && (
              <div className="hidden sm:flex items-center gap-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20">
                <Coins className="w-4 h-4 text-yellow-600" />
                <span className="text-xs font-bold text-yellow-700">{coins}</span>
              </div>
            )}

            <button className="relative p-2 hover:bg-muted rounded-lg transition" onClick={() => router.push('/account?tab=wishlist')}>
              <Heart className="w-5 h-5 text-foreground hover:text-accent" />
            </button>

            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar Mobile */}
        <div className="md:hidden mb-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-lg text-foreground hover:bg-secondary hover:text-secondary-foreground transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
