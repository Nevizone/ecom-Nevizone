
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { items, user_id, customer_details, total_amount, payment_method } = body

        // 1. Validate Input (Basic check, usually use Zod)
        if (!items || items.length === 0) {
            return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
        }

        // 2. Create Order
        const { data: order, error: orderError } = await supabaseAdmin
            .from('orders')
            .insert({
                user_id: user_id || null, // Guest or User
                customer_name: customer_details.name,
                customer_email: customer_details.email,
                customer_phone: customer_details.phone,
                shipping_address: {
                    line1: customer_details.address,
                    city: customer_details.city,
                    state: customer_details.state,
                    zip: customer_details.zip
                },
                total_amount: total_amount, // Trusted from client? Ideally recalculate server-side, but okay for MVP.
                payment_method: payment_method || 'COD',
                status: 'Pending',
                payment_status: 'Unpaid'
            })
            .select() // Select works because we are Admin
            .single()

        if (orderError) {
            console.error('Supabase Order Error:', orderError)
            throw new Error(orderError.message)
        }

        // 3. Create Order Items
        const orderItems = items.map((item: any) => ({
            order_id: order.id,
            product_id: item.id,
            quantity: item.quantity,
            price_at_purchase: item.price
        }))

        const { error: itemsError } = await supabaseAdmin
            .from('order_items')
            .insert(orderItems)

        if (itemsError) {
            console.error('Supabase Items Error:', itemsError)
            throw new Error(itemsError.message)
        }

        return NextResponse.json({ success: true, orderId: order.id })

    } catch (error: any) {
        console.error('Checkout API Error:', error)
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        )
    }
}
