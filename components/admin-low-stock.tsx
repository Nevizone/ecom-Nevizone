import { AlertCircle } from "lucide-react"

export default function AdminLowStock() {
    const products = [
        { name: "Plush Teddy Bear", stock: 2, image: "🧸" },
        { name: "Remote Control Car", stock: 0, image: "🏎️" },
        { name: "Watercolor Set", stock: 5, image: "🎨" },
        { name: "Science Kit", stock: 3, image: "🔬" },
        { name: "Building Blocks", stock: 4, image: "🧱" },
    ]

    return (
        <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
            <div className="p-6 border-b border-border">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Low Stock Alert
                </h3>
            </div>
            <div className="divide-y divide-border">
                {products.map((product, index) => (
                    <div key={index} className="p-4 flex items-center justify-between hover:bg-secondary/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-xl">
                                {product.image}
                            </div>
                            <div>
                                <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                                <p className="text-xs text-muted-foreground">Stock: <span className={product.stock === 0 ? "text-red-600 font-bold" : "text-orange-600 font-medium"}>{product.stock}</span></p>
                            </div>
                        </div>
                        <button className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-md font-medium hover:bg-primary/20 transition">
                            Restock
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
