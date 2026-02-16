"use client"

import { useState } from "react"
import { Star, ThumbsUp, User, Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface Review {
    id: string
    author: string
    date: string
    rating: number
    text: string
    helpful: number
}

interface ProductReviewsProps {
    productId: string
    reviews: Review[]
    rating: number
    totalReviews: number
}

export default function ProductReviews({ productId, reviews: initialReviews, rating, totalReviews: initialTotal }: ProductReviewsProps) {
    const { toast } = useToast()
    const [reviews, setReviews] = useState(initialReviews)
    const [totalReviews, setTotalReviews] = useState(initialTotal)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        comment: ""
    })

    // Calculate rating distribution
    const distribution = [5, 4, 3, 2, 1].map(star => {
        const count = reviews.filter(r => r.rating === star).length
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0
        return { star, percentage, count }
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (!formData.name.trim() || !formData.comment.trim()) {
            toast({
                title: "Validation Error",
                description: "Please fill in all fields",
                variant: "destructive"
            })
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId,
                    userName: formData.name,
                    rating: formData.rating,
                    comment: formData.comment
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit review")
            }

            // Success
            toast({
                title: "Review Submitted",
                description: "Thank you! Your review is pending approval.",
            })

            // Reset form
            setFormData({ name: "", rating: 5, comment: "" })

            // Optionally add to list optimistically (marked as pending)
            // For now, we wait for approval so we don't add it to the list immediately

        } catch (error: any) {
            console.error('Error submitting review:', error)
            toast({
                title: "Submission Failed",
                description: error.message,
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="space-y-10" id="reviews">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Summary & Form */}
                <div className="md:col-span-1 space-y-8">
                    {/* Summary */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <div className="text-center mb-6">
                            <div className="text-5xl font-black text-primary mb-2">{rating.toFixed(1)}</div>
                            <div className="flex justify-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-5 h-5 ${star <= Math.round(rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-muted-foreground text-sm">{totalReviews} verified reviews</p>
                        </div>

                        <div className="space-y-3">
                            {distribution.map((item) => (
                                <div key={item.star} className="flex items-center gap-2 text-sm">
                                    <span className="w-3">{item.star}</span>
                                    <Star className="w-3 h-3 text-muted-foreground" />
                                    <Progress value={item.percentage} className="h-2" />
                                    <span className="w-8 text-right text-muted-foreground">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Write Review Form */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-bold text-lg mb-4">Write a Review</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label>Your Name</Label>
                                <Input
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-6 h-6 ${star <= formData.rating
                                                        ? "fill-yellow-500 text-yellow-500"
                                                        : "text-muted-foreground"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Your Review</Label>
                                <Textarea
                                    placeholder="Tell us what you liked..."
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    rows={4}
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Review"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="md:col-span-2 space-y-6">
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review.id} className="border-b border-border pb-6 last:border-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{review.author}</h4>
                                            <div className="flex items-center gap-0.5">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`w-3 h-3 ${star <= review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>

                                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                                    {review.text}
                                </p>

                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition">
                                    <ThumbsUp className="w-3 h-3" />
                                    Helpful ({review.helpful})
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-muted-foreground bg-secondary/10 rounded-xl">
                            <p>No reviews yet. Be the first to write one!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
