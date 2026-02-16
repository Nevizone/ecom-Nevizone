import { useState, useEffect } from "react"
import { Plus, Edit2, Trash2, MapPin, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function AccountAddresses() {
    const [addresses, setAddresses] = useState<any[]>([])
    const [showForm, setShowForm] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        type: "Home"
    })

    useEffect(() => {
        const saved = localStorage.getItem("user_addresses")
        if (saved) {
            setAddresses(JSON.parse(saved))
        }
    }, [])

    const saveAddresses = (newAddresses: any[]) => {
        setAddresses(newAddresses)
        localStorage.setItem("user_addresses", JSON.stringify(newAddresses))
    }

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        const newAddr = {
            id: Date.now(),
            ...formData,
            isDefault: addresses.length === 0 // First one is default
        }
        const updated = [...addresses, newAddr]
        saveAddresses(updated)
        setFormData({ name: "", phone: "", address: "", type: "Home" })
        setShowForm(false)
        toast({ title: "Address added successfully" })
    }

    const handleDelete = (id: number) => {
        const updated = addresses.filter(a => a.id !== id)
        saveAddresses(updated)
        toast({ title: "Address removed" })
    }

    const handleSetDefault = (id: number) => {
        const updated = addresses.map(a => ({
            ...a,
            isDefault: a.id === id
        }))
        saveAddresses(updated)
        toast({ title: "Default address updated" })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Addresses</h2>
                {!showForm && (
                    <Button size="sm" className="gap-2" onClick={() => setShowForm(true)}>
                        <Plus className="w-4 h-4" /> Add New
                    </Button>
                )}
            </div>

            {showForm && (
                <div className="bg-card border border-border rounded-xl p-6 animate-in slide-in-from-top-4">
                    <h3 className="font-bold mb-4">Add New Address</h3>
                    <form onSubmit={handleAdd} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Name</Label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label>Phone</Label>
                                <Input required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Full Address</Label>
                            <Input required value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Flat, Building, Street, City - Pincode" />
                        </div>
                        <div className="space-y-2">
                            <Label>Type (Home/Office)</Label>
                            <Input required value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} placeholder="Home" />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button type="submit">Save Address</Button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.length === 0 && !showForm && (
                    <div className="col-span-full text-center py-12 border border-dashed rounded-xl text-muted-foreground">
                        No addresses saved yet.
                    </div>
                )}

                {addresses.map((addr) => (
                    <div key={addr.id} className={`bg-card border rounded-xl p-6 relative group transition-all ${addr.isDefault ? 'border-primary ring-1 ring-primary/20' : 'border-border'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <span className="font-bold">{addr.type}</span>
                                {addr.isDefault && (
                                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-medium">
                                        Default
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {!addr.isDefault && (
                                    <button
                                        onClick={() => handleSetDefault(addr.id)}
                                        className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-green-600 transition"
                                        title="Set as Default"
                                    >
                                        <Check className="w-4 h-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(addr.id)}
                                    className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-destructive transition"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm">
                            <p className="font-medium">{addr.name}</p>
                            <p className="text-muted-foreground line-clamp-2">{addr.address}</p>
                            <p className="text-muted-foreground">Phone: {addr.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
