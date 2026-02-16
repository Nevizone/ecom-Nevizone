import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function AccountProfile() {
    const { user } = useAuth()
    const { toast } = useToast()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        phone: ""
    })

    useEffect(() => {
        async function getProfile() {
            if (!user) return
            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single()

                if (error) throw error
                if (data) {
                    setFormData({
                        fullName: data.full_name || "",
                        phone: data.phone || ""
                    })
                }
            } catch (error) {
                console.error("Error fetching profile:", error)
            } finally {
                setLoading(false)
            }
        }
        getProfile()
    }, [user])

    const handleSave = async () => {
        if (!user) return
        setSaving(true)
        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    full_name: formData.fullName,
                    phone: formData.phone
                })
                .eq('id', user.id)

            if (error) throw error

            toast({ title: "Profile updated successfully!" })
        } catch (error: any) {
            console.error("Error updating profile:", error)
            toast({
                title: "Failed to update profile",
                description: error.message,
                variant: "destructive"
            })
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return <div className="flex justify-center p-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <h2 className="text-2xl font-bold">Profile Details</h2>

            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        value={user?.email || ""}
                        disabled
                        className="bg-secondary/50"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div className="pt-4 flex gap-4">
                    <Button onClick={handleSave} disabled={saving}>
                        {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {saving ? "Saving..." : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
