"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, Loader2 } from "lucide-react"
import OtpInput from "@/components/otp-input"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { sendOtp } from "@/actions/auth"
import ProfileCompletion from "@/components/auth/profile-completion"

export default function LoginForm() {
    const [method, setMethod] = useState<"email" | "phone">("email")
    const [step, setStep] = useState<"input" | "otp">("input")
    const [loading, setLoading] = useState(false)
    const [identifier, setIdentifier] = useState("")
    const [timer, setTimer] = useState(30)
    const router = useRouter()
    const { toast } = useToast()

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (step === "otp" && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [step, timer])

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!identifier) return

        setLoading(true)
        try {
            // Use Server Action to send OTP via Resend
            // Dynamic import to avoid server-action issues if not set up perfectly? No, standard import.
            const result = await sendOtp(identifier)

            if (result?.error) {
                throw new Error(result.error)
            }

            setStep("otp")
            setTimer(30)
            toast({
                title: "Login Code Sent",
                description: `We've emailed a 6-digit code to ${identifier}.`,
            })

        } catch (error: any) {
            console.error("Auth error:", error)
            toast({
                title: "Error",
                description: error.message || "Failed to send OTP",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    const [showProfileCompletion, setShowProfileCompletion] = useState(false)
    const [verifiedUserId, setVerifiedUserId] = useState<string | null>(null)

    // ... existing timer logic ...

    const handleVerifyOtp = async (otp: string) => {
        setLoading(true)
        try {
            let error
            let data
            if (method === "email") {
                const { data: d, error: err } = await supabase.auth.verifyOtp({
                    email: identifier,
                    token: otp,
                    type: 'email'
                })
                error = err
                data = d
            } else {
                const { data: d, error: err } = await supabase.auth.verifyOtp({
                    phone: "+91" + identifier,
                    token: otp,
                    type: 'sms'
                })
                error = err
                data = d
            }

            if (error) throw error

            // Check if profile is complete
            if (data?.user) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('full_name')
                    .eq('id', data.user.id)
                    .single()

                if (!profile?.full_name) {
                    setVerifiedUserId(data.user.id)
                    setShowProfileCompletion(true)
                    setLoading(false)
                    return
                }
            }

            toast({
                title: "Welcome Back!",
                description: "You have successfully logged in.",
            })
            router.push("/")
            router.refresh()

        } catch (error: any) {
            console.error("Verify error:", error)
            toast({
                title: "Invalid OTP",
                description: error.message || "Please check the code and try again.",
                variant: "destructive"
            })
        } finally {
            if (!showProfileCompletion) setLoading(false)
        }
    }

    // ... existing resend ...

    if (showProfileCompletion && verifiedUserId) {
        return (
            <ProfileCompletion
                userId={verifiedUserId}
                email={method === 'email' ? identifier : undefined}
                phone={method === 'phone' ? identifier : undefined}
                onComplete={() => {
                    router.push("/")
                    router.refresh()
                }}
            />
        )
    }



    const handleResend = async () => {
        setTimer(30)
        await handleSendOtp({ preventDefault: () => { } } as any)
    }

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                    {step === "input" ? "Sign in or Create Account" : "Enter OTP"}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {step === "input"
                        ? "Use your email or mobile number. We’ll send you a one-time password (OTP)."
                        : `OTP sent to ${identifier}.`}
                </p>
            </div>

            {step === "input" ? (
                <form onSubmit={handleSendOtp} className="space-y-6">
                    <Tabs
                        defaultValue="email"
                        onValueChange={(val) => {
                            setMethod(val as "email" | "phone")
                            setIdentifier("")
                        }}
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="email" className="gap-2">
                                <Mail className="w-4 h-4" /> Email
                            </TabsTrigger>
                            <TabsTrigger value="phone" className="gap-2">
                                <Phone className="w-4 h-4" /> Phone
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="email" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    required
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="phone" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Mobile Number</Label>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center border border-border rounded-md px-3 bg-secondary/50 text-sm font-medium text-muted-foreground w-16">
                                        +91
                                    </div>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="98765 43210"
                                        value={identifier}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, "")
                                            if (val.length <= 10) setIdentifier(val)
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <Button type="submit" className="w-full h-11 text-base" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                            </>
                        ) : (
                            "Send OTP"
                        )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                        By continuing, you agree to our{" "}
                        <a href="#" className="underline hover:text-primary">
                            Terms
                        </a>{" "}
                        &{" "}
                        <a href="#" className="underline hover:text-primary">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </form>
            ) : (
                <div className="space-y-8">
                    <OtpInput length={8} onComplete={(otp) => handleVerifyOtp(otp)} />

                    <Button
                        onClick={() => { }} // Remove manual Verify button, rely on onComplete or just text
                        className="w-full h-11 text-base hidden" // Hide button as OtpInput triggers autcomplete usually, or keep it as backup?
                        disabled={loading}
                    >
                        Verify & Continue
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                        Enter the code sent to you.
                    </p>

                    <div className="text-center space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Didn't receive code?{" "}
                            {timer > 0 ? (
                                <span className="font-medium text-foreground">Resend in {timer}s</span>
                            ) : (
                                <button
                                    onClick={handleResend}
                                    className="text-primary font-medium hover:underline"
                                >
                                    Resend OTP
                                </button>
                            )}
                        </p>

                        <button
                            onClick={() => {
                                setStep("input")
                                setIdentifier("")
                            }}
                            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground mx-auto transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Use a different {method}
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-8 pt-6 border-t border-border text-center">
                <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
                    Need help? Contact support.
                </a>
            </div>
        </div>
    )
}
