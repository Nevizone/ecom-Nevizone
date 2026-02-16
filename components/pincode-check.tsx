"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function PincodeCheck() {
    const [pincode, setPincode] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleCheck = () => {
        if (pincode.length !== 6) {
            setStatus("error")
            setMessage("Please enter a valid 6-digit pincode")
            return
        }

        setStatus("loading")

        // Simulate API call
        setTimeout(() => {
            const validPincodes = ["560001", "110001", "400001", "700001", "600001", "500001"]

            if (validPincodes.includes(pincode) || pincode.startsWith("56")) {
                setStatus("success")
                setMessage(`Delivery by ${getEstimatedDate()}`)
            } else {
                setStatus("error")
                setMessage("Sorry, we do not deliver to this location yet.")
            }
        }, 1000)
    }

    const getEstimatedDate = () => {
        const date = new Date()
        date.setDate(date.getDate() + 3) // 3 days from now
        return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
    }

    return (
        <div className="border border-border rounded-lg p-4 bg-secondary/10">
            <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Check Delivery & Services</span>
            </div>

            <div className="flex gap-2">
                <Input
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "")
                        if (val.length <= 6) setPincode(val)
                        setStatus("idle")
                    }}
                    className="h-10 text-sm"
                />
                <Button
                    onClick={handleCheck}
                    disabled={status === "loading" || !pincode}
                    className="h-10 px-4"
                    variant="secondary"
                >
                    {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Check"}
                </Button>
            </div>

            {status !== "idle" && (
                <div className={`mt-2 flex items-center gap-2 text-sm ${status === "success" ? "text-green-600" : "text-destructive"
                    }`}>
                    {status === "success" ? (
                        <CheckCircle className="w-4 h-4" />
                    ) : status === "error" ? (
                        <XCircle className="w-4 h-4" />
                    ) : null}
                    <span>{message}</span>
                </div>
            )}
        </div>
    )
}
