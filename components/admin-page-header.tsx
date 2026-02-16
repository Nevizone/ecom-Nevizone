import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

interface AdminPageHeaderProps {
    title: string
    description?: string
    actionLabel?: string
    actionLink?: string
}

export default function AdminPageHeader({
    title,
    description,
    actionLabel,
    actionLink,
}: AdminPageHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                {description && (
                    <p className="text-muted-foreground mt-1">{description}</p>
                )}
            </div>
            {actionLabel && actionLink && (
                <Link href={actionLink}>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        {actionLabel}
                    </Button>
                </Link>
            )}
        </div>
    )
}
