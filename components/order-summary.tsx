import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface OrderSummaryProps {
    subtotal: number
    shipping: number
    discount: number
    tax: number
    total: number
}

export default function OrderSummary({
    subtotal,
    shipping,
    discount,
    tax,
    total,
}: OrderSummaryProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-green-600">
                        {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="font-medium text-green-600">-₹{discount}</span>
                    </div>
                )}
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">₹{tax}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>
            </div>

            <Link href="/checkout" className="block">
                <Button className="w-full h-12 text-base font-semibold mb-4 gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </Link>

            <div className="text-center">
                <button className="text-sm text-primary hover:underline">
                    Have a coupon? Apply it at checkout
                </button>
            </div>
        </div>
    )
}
