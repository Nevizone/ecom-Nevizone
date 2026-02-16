"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"

export default function FilterSidebar() {
    const [priceRange, setPriceRange] = useState([0, 5000])

    return (
        <div className="w-full space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Filters</h3>
                <button className="text-sm text-primary hover:underline">Clear all</button>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
                <h4 className="font-semibold text-sm">Price Range</h4>
                <Slider
                    defaultValue={[0, 5000]}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}+</span>
                </div>
            </div>

            {/* Age Group */}
            <div className="space-y-3">
                <h4 className="font-semibold text-sm">Age Group</h4>
                <div className="space-y-2">
                    {["3–5 Years", "6–9 Years", "10–13 Years", "14+ Years"].map((age) => (
                        <div key={age} className="flex items-center space-x-2">
                            <Checkbox id={`age-${age}`} />
                            <Label htmlFor={`age-${age}`} className="text-sm font-normal cursor-pointer">
                                {age}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Category */}
            <div className="space-y-3">
                <h4 className="font-semibold text-sm">Category</h4>
                <div className="space-y-2">
                    {["Educational Toys", "Puzzles & Games", "Soft Toys", "Outdoor Play"].map((cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                            <Checkbox id={`cat-${cat}`} />
                            <Label htmlFor={`cat-${cat}`} className="text-sm font-normal cursor-pointer">
                                {cat}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brand */}
            <div className="space-y-3">
                <h4 className="font-semibold text-sm">Brand</h4>
                <div className="space-y-2">
                    {["Lego", "Barbie", "Hot Wheels", "Fisher-Price", "Nerf"].map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                            <Checkbox id={`brand-${brand}`} />
                            <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                                {brand}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="space-y-3">
                <h4 className="font-semibold text-sm">Rating</h4>
                <div className="space-y-2">
                    {[4, 3].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <Label htmlFor={`rating-${rating}`} className="text-sm font-normal cursor-pointer flex items-center gap-1">
                                {rating}+ <Star className="w-3 h-3 fill-accent text-accent" />
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
