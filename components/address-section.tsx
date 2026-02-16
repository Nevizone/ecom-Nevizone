"use client"

import { useState } from "react"
import { Plus, Trash2, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface Address {
    id: number
    name: string
    phone: string
    addressLine: string
    city: string
    state: string
    pincode: string
    type: "Home" | "Office" | "Other"
    isDefault?: boolean
}

interface AddressSectionProps {
    onAddressSelect: (addressId: number) => void
    onContinue: () => void
}

export default function AddressSection({ onAddressSelect, onContinue }: AddressSectionProps) {
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            name: "John Doe",
            phone: "+91 98765 43210",
            addressLine: "123, Green Park Residency, Sector 4",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560001",
            type: "Home",
            isDefault: true,
        },
        {
            id: 2,
            name: "John Doe (Office)",
            phone: "+91 98765 43210",
            addressLine: "Tech Park, Building B, 4th Floor",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560103",
            type: "Office",
        },
    ])

    const [selectedAddressId, setSelectedAddressId] = useState<number>(1)
    const [isAddingNew, setIsAddingNew] = useState(false)

    const handleSelect = (id: number) => {
        setSelectedAddressId(id)
        onAddressSelect(id)
    }

    return (
        <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Delivery Address</h2>

            {!isAddingNew ? (
                <div className="space-y-4">
                    <RadioGroup
                        value={selectedAddressId.toString()}
                        onValueChange={(val) => handleSelect(parseInt(val))}
                    >
                        {addresses.map((addr) => (
                            <div
                                key={addr.id}
                                className={`relative flex items-start space-x-4 border rounded-lg p-4 cursor-pointer transition ${selectedAddressId === addr.id
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                onClick={() => handleSelect(addr.id)}
                            >
                                <RadioGroupItem value={addr.id.toString()} id={`addr-${addr.id}`} className="mt-1" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">{addr.name}</span>
                                            <span className="text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground uppercase">
                                                {addr.type}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="text-muted-foreground hover:text-primary transition">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="text-muted-foreground hover:text-destructive transition">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground mb-1">{addr.addressLine}</p>
                                    <p className="text-sm text-foreground mb-1">
                                        {addr.city}, {addr.state} - {addr.pincode}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Phone: {addr.phone}</p>
                                </div>
                            </div>
                        ))}
                    </RadioGroup>

                    <button
                        onClick={() => setIsAddingNew(true)}
                        className="flex items-center gap-2 text-primary font-medium hover:underline mt-4"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Address
                    </button>

                    <div className="pt-4">
                        <Button onClick={onContinue} className="w-full sm:w-auto px-8">
                            Continue to Payment
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="address">Address Line 1</Label>
                            <Input id="address" placeholder="House No, Building, Street" />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                            <Input id="address2" placeholder="Landmark, Area" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Bangalore" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="Karnataka" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input id="pincode" placeholder="560001" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="default" />
                        <Label htmlFor="default" className="font-normal">
                            Set as default address
                        </Label>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button onClick={() => setIsAddingNew(false)}>Save Address</Button>
                        <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
