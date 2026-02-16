"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductImageGalleryProps {
    images: string[]
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden border border-border flex items-center justify-center group">
                <div className="text-9xl transition-transform duration-500 group-hover:scale-110">
                    {images[selectedImage]}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative w-20 h-20 flex-shrink-0 bg-secondary rounded-lg border-2 flex items-center justify-center text-3xl transition-all",
                            selectedImage === index
                                ? "border-primary shadow-sm"
                                : "border-transparent hover:border-primary/50",
                        )}
                    >
                        {image}
                    </button>
                ))}
            </div>
        </div>
    )
}
