"use client"

import { useState } from "react"
import { Facebook, Instagram, Youtube, Loader2, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.from('subscribers').insert({ email })

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast({ title: "Already Subscribed", description: "You are already on our list!" })
        } else {
          throw error
        }
      } else {
        toast({ title: "Subscribed!", description: "Thank you for joining our newsletter." })
        setEmail("")
      }
    } catch (error: any) {
      console.error(error)
      toast({ title: "Error", description: "Failed to subscribe. Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-background border-t border-border pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter text-foreground">
              NEVIZON<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Redefining the shopping experience for the next generation.
              Premium quality, exclusive designs, and unparalleled service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Collection</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Latest Drops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Premium Toys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stationery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Stay Ahead</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for exclusive access to new releases and member-only offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary/30 border border-white/5 focus:border-primary text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="px-4 py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Nevizon Retail Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
