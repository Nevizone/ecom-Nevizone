import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const supabase = createRouteHandlerClient({ cookies })

        // Get authenticated user
        const { data: { session } } = await supabase.auth.getSession()

        // Fetch order with items (allow both authenticated and guest access)
        const { data: order, error } = await supabase
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
                        slug,
                        price
                    )
                )
            `)
            .eq('id', params.id)
            .single()

        if (error) {
            console.error('Error fetching order:', error)
            throw error
        }

        // If user is authenticated, verify they own this order
        if (session && order.user_id && order.user_id !== session.user.id) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
        }

        return NextResponse.json({ order })

    } catch (error: any) {
        console.error('Order Details API Error:', error)
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        )
    }
}
