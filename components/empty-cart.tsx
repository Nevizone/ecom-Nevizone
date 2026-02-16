import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
                Looks like you haven't added anything to your cart yet. Explore our collection and find
                something you'll love.
            </p>
            <Link href="/toys">
                <Button size="lg">Continue Shopping</Button>
            </Link>
        </div>
    )
}
