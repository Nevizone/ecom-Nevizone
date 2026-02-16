"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface ProfileCompletionProps {
    userId: string
    email?: string
    phone?: string
    onComplete: () => void
}

export default function ProfileCompletion({ userId, email, phone, onComplete }: ProfileCompletionProps) {
    const [fullName, setFullName] = useState("")
    // If email auth, ask for phone. If phone auth, ask for email. 
    // But user verification gives one.
    // Let's assume we ask for what's missing, or just Full Name as primary.
    const [loading, setLoading] = useState(false)
    const [missingPhone, setMissingPhone] = useState(!phone)
    const [phoneInput, setPhoneInput] = useState("")

    const { toast } = useToast()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const updates: any = {
                full_name: fullName,
            }

            if (missingPhone && phoneInput) {
                updates.phone = phoneInput
            }

            const { error } = await supabase
                .from('profiles')
                .update(updates)
                .eq('id', userId)

            if (error) throw error

            toast({
                title: "Profile Updated",
                description: "Welcome to Nevizon!",
            })
            onComplete()

        } catch (error: any) {
            console.error("Profile update error:", error)
            toast({
                title: "Error",
                description: "Failed to update profile.",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={true} onOpenChange={() => { }}>
            <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Complete Your Profile</DialogTitle>
                    <DialogDescription>
                        Please provide a few more details to finish setting up your account.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name</Label>
                        <Input
                            id="full_name"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    {missingPhone && (
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center border border-border rounded-md px-3 bg-secondary/50 text-sm font-medium text-muted-foreground w-16">
                                    +91
                                </div>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="98765 43210"
                                    value={phoneInput}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, "")
                                        if (val.length <= 10) setPhoneInput(val)
                                    }}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Complete Setup"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
