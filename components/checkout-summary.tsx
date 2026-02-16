import { ShieldCheck, RefreshCw } from "lucide-react"

interface CheckoutSummaryProps {
    items: {
        id: number
        name: string
        price: number
        quantity: number
        image: string
    }[]
    subtotal: number
    shipping: number
    discount: number
    tax: number
    total: number
    giftWrapFee?: number
    isGiftWrapped?: boolean
    onGiftWrapToggle?: () => void
}

export default function CheckoutSummary({
    items,
    subtotal,
    shipping,
    discount,
    tax,
    total,
    giftWrapFee = 0,
    isGiftWrapped = false,
    onGiftWrapToggle,
}: CheckoutSummaryProps) {
    return (
        <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                            <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-xl flex-shrink-0">
                                {item.image}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <div className="text-sm font-medium">₹{item.price * item.quantity}</div>
                        </div>
                    ))}
                </div>

                {/* Gift Wrapping Toggle */}
                {onGiftWrapToggle && (
                    <div className="mb-4 p-3 bg-secondary/20 rounded-lg flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={isGiftWrapped}
                            onChange={onGiftWrapToggle}
                            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                            id="gift-wrap"
                        />
                        <label htmlFor="gift-wrap" className="text-sm font-medium cursor-pointer flex-1 user-select-none">
                            Add Premium Gift Wrapping (+₹50)
                        </label>
                    </div>
                )}

                <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Items Total</span>
                        <span className="font-medium">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium text-green-600">
                            {shipping === 0 ? "Free" : `₹${shipping}`}
                        </span>
                    </div>
                    {isGiftWrapped && (
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Gift Wrapping</span>
                            <span className="font-medium">₹{giftWrapFee}</span>
                        </div>
                    )}
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
                    <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                        <span>Total Payable</span>
                        <span>₹{total}</span>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-secondary/30 rounded-xl p-4 flex justify-around items-center">
                <div className="flex flex-col items-center gap-1 text-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Secure Payments</span>
                </div>
                <div className="w-[1px] h-8 bg-border"></div>
                <div className="flex flex-col items-center gap-1 text-center">
                    <RefreshCw className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Easy Returns</span>
                </div>
            </div>
        </div>
    )
}
