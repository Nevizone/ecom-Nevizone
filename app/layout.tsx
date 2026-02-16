import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nevizon - Premium Ecommerce for 2026",
  description:
    "Discover the future of shopping with Nevizon. Premium toys, gadgets, and essentials with a sleek, modern shopping experience.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#DC2626", // Approximate red for the premium theme
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import { WishlistProvider } from "@/components/wishlist-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <Toaster />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
