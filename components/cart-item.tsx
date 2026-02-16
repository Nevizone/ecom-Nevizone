import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItemProps {
    item: {
        id: string
        name: string
        category?: string
        ageGroup?: string
        price: number
        quantity: number
        image?: string
    }
    onUpdateQuantity: (id: string, newQuantity: number) => void
    onRemove: (id: string) => void
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-xl bg-card">
            {/* Image */}
            <div className="w-full sm:w-24 h-24 bg-secondary rounded-lg flex items-center justify-center text-4xl flex-shrink-0 relative overflow-hidden">
                {item.image && (item.image.startsWith('/') || item.image.startsWith('http')) ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <span>{item.image || "📦"}</span>
                )}
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-foreground line-clamp-2">{item.name}</h3>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="text-muted-foreground hover:text-destructive transition p-1"
                            aria-label="Remove item"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                        {item.category} · {item.ageGroup}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 sm:mt-0">
                    <div className="font-medium text-primary">₹{item.price}</div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-lg h-8">
                            <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2 hover:bg-secondary transition h-full flex items-center disabled:opacity-50"
                                disabled={item.quantity <= 1}
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 hover:bg-secondary transition h-full flex items-center"
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Subtotal */}
                        <div className="font-bold text-foreground w-20 text-right">
                            ₹{item.price * item.quantity}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
