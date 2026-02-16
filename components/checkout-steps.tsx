import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckoutStepsProps {
    currentStep: number
}

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
    return (
        <div className="flex items-center justify-center mb-8">
            {/* Step 1 */}
            <div className="flex items-center">
                <div
                    className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                        currentStep > 1
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary text-primary-foreground",
                    )}
                >
                    {currentStep > 1 ? <Check className="w-4 h-4" /> : "1"}
                </div>
                <span
                    className={cn(
                        "ml-2 text-sm font-medium",
                        currentStep >= 1 ? "text-foreground" : "text-muted-foreground",
                    )}
                >
                    Delivery Address
                </span>
            </div>

            {/* Separator */}
            <div className="w-12 h-[1px] bg-border mx-4"></div>

            {/* Step 2 */}
            <div className="flex items-center">
                <div
                    className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                        currentStep === 2
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground",
                    )}
                >
                    2
                </div>
                <span
                    className={cn(
                        "ml-2 text-sm font-medium",
                        currentStep === 2 ? "text-foreground" : "text-muted-foreground",
                    )}
                >
                    Review & Payment
                </span>
            </div>
        </div>
    )
}
