import Link from "next/link"
import { Sparkles } from "lucide-react"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-secondary/30 flex flex-col items-center justify-center p-4">
            {/* Logo Area */}
            <div className="mb-8 text-center">
                <Link href="/" className="flex items-center justify-center gap-2 text-2xl font-bold text-primary mb-2">
                    <Sparkles className="w-8 h-8 fill-primary" />
                    Nevizon
                </Link>
                <p className="text-muted-foreground">Your kid's favorite store</p>
            </div>

            <LoginForm />
        </div>
    )
}
