"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard, Wallet, Banknote, Building } from "lucide-react"

interface PaymentSectionProps {
    onPlaceOrder: () => void
}

export default function PaymentSection({ onPlaceOrder }: PaymentSectionProps) {
    const [paymentMethod, setPaymentMethod] = useState("upi")

    return (
        <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Payment & Delivery</h2>

            {/* Delivery Summary */}
            <div className="bg-secondary/30 rounded-lg p-4 mb-6 flex justify-between items-center">
                <div>
                    <p className="text-sm font-medium">Estimated Delivery</p>
                    <p className="text-lg font-bold text-primary">Dec 5 - Dec 7</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium">Shipping</p>
                    <p className="text-green-600 font-bold">Free</p>
                </div>
            </div>

            <h3 className="font-semibold mb-4">Select Payment Method</h3>

            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                {/* UPI */}
                <div
                    className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition ${paymentMethod === "upi"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                    onClick={() => setPaymentMethod("upi")}
                >
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer flex items-center gap-3">
                        <div className="p-2 bg-white rounded border border-border">
                            <Wallet className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">UPI (Google Pay, PhonePe, Paytm)</span>
                    </Label>
                </div>

                {/* Card */}
                <div
                    className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition ${paymentMethod === "card"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                    onClick={() => setPaymentMethod("card")}
                >
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-3">
                        <div className="p-2 bg-white rounded border border-border">
                            <CreditCard className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">Credit / Debit Card</span>
                    </Label>
                </div>

                {/* Net Banking */}
                <div
                    className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition ${paymentMethod === "netbanking"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                    onClick={() => setPaymentMethod("netbanking")}
                >
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex-1 cursor-pointer flex items-center gap-3">
                        <div className="p-2 bg-white rounded border border-border">
                            <Building className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">Net Banking</span>
                    </Label>
                </div>

                {/* COD */}
                <div
                    className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition ${paymentMethod === "cod"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                    onClick={() => setPaymentMethod("cod")}
                >
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer flex items-center gap-3">
                        <div className="p-2 bg-white rounded border border-border">
                            <Banknote className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium">Cash on Delivery</span>
                    </Label>
                </div>
            </RadioGroup>

            <div className="pt-8">
                <Button onClick={onPlaceOrder} className="w-full h-12 text-lg font-semibold">
                    Place Order
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                    By placing this order, you agree to our Terms of Use and Privacy Policy.
                </p>
            </div>
        </div>
    )
}
