import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { productId, userName, rating, comment } = body

        if (!productId || !userName || !rating || !comment) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const { data, error } = await supabase
            .from('reviews')
            .insert([
                {
                    product_id: productId,
                    user_name: userName,
                    rating,
                    comment,
                    status: 'Pending' // Default to Pending for moderation
                }
            ])
            .select()
            .single()

        if (error) throw error

        return NextResponse.json({ success: true, review: data })
    } catch (error: any) {
        console.error('Error submitting review:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
