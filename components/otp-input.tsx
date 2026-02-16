"use client"

import { useRef, useState, KeyboardEvent, ClipboardEvent } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface OtpInputProps {
    length?: number
    onComplete: (otp: string) => void
}

export default function OtpInput({ length = 4, onComplete }: OtpInputProps) {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return

        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        // Trigger onComplete if filled
        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) {
            onComplete(combinedOtp)
        }

        // Move to next input
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text/plain").slice(0, length)
        if (!/^\d+$/.test(pastedData)) return

        const newOtp = [...otp]
        pastedData.split("").forEach((char, index) => {
            newOtp[index] = char
        })
        setOtp(newOtp)

        if (pastedData.length === length) {
            onComplete(pastedData)
            inputRefs.current[length - 1]?.focus()
        } else {
            inputRefs.current[pastedData.length]?.focus()
        }
    }

    return (
        <div className={cn("flex justify-center", length > 6 ? "gap-1 md:gap-2" : "gap-3")}>
            {otp.map((digit, index) => (
                <Input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    ref={(ref) => {
                        inputRefs.current[index] = ref
                    }}
                    className={cn(
                        "text-center font-bold transition-all p-0",
                        length > 6 ? "w-8 h-10 text-base md:w-10 md:h-12 md:text-lg" : "w-12 h-12 text-lg",
                        digit ? "border-primary bg-primary/5" : "border-border"
                    )}
                />
            ))}
        </div>
    )
}
