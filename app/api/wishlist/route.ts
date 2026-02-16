import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Fetch user's wishlist
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
        return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    try {
        const { data, error } = await supabase
            .from('wishlists')
            .select(`
        id,
        product_id,
        created_at,
        products (
          id,
          name,
          price,
          sale_price,
          images,
          category:categories(name)
        )
      `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false })

        if (error) throw error

        return NextResponse.json({ wishlist: data || [] })
    } catch (error: any) {
        console.error('Error fetching wishlist:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// POST - Add item to wishlist
export async function POST(request: Request) {
    try {
        const { userId, productId } = await request.json()

        if (!userId || !productId) {
            return NextResponse.json(
                { error: 'User ID and Product ID required' },
                { status: 400 }
            )
        }

        const { data, error } = await supabase
            .from('wishlists')
            .insert([{ user_id: userId, product_id: productId }])
            .select()
            .single()

        if (error) {
            // Handle duplicate entry gracefully
            if (error.code === '23505') {
                return NextResponse.json(
                    { message: 'Item already in wishlist' },
                    { status: 200 }
                )
            }
            throw error
        }

        return NextResponse.json({ success: true, wishlistItem: data })
    } catch (error: any) {
        console.error('Error adding to wishlist:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// DELETE - Remove item from wishlist
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const productId = searchParams.get('productId')

    if (!userId || !productId) {
        return NextResponse.json(
            { error: 'User ID and Product ID required' },
            { status: 400 }
        )
    }

    try {
        const { error } = await supabase
            .from('wishlists')
            .delete()
            .eq('user_id', userId)
            .eq('product_id', productId)

        if (error) throw error

        return NextResponse.json({ success: true })
    } catch (error: any) {
        console.error('Error removing from wishlist:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
