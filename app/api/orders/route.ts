import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    try {
        const supabase = createRouteHandlerClient({ cookies })

        // Get authenticated user
        const { data: { session } } = await supabase.auth.getSession()

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Fetch orders for the current user
        const { data: orders, error } = await supabase
            .from('orders')
            .select(`
                *,
                order_items (
                    id,
                    quantity,
                    price_at_purchase,
                    variant_color,
                    variant_size,
                    product_id,
                    products (
                        id,
                        name,
                        images,
                        slug
                    )
                )
            `)
            .eq('user_id', session.user.id)
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching orders:', error)
            throw error
        }

        return NextResponse.json({ orders: orders || [] })

    } catch (error: any) {
        console.error('Orders API Error:', error)
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        )
    }
}
