
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('Missing Supabase Service Role Key')
}

// Create a Supabase client with the SERVICE_ROLE_KEY
// This client bypasses Row Level Security (RLS) entirely.
// ONLY use this in server-side contexts (API routes, Server Actions, getStaticProps, etc.)
export const supabaseAdmin = createClient(
    supabaseUrl || '',
    supabaseServiceRoleKey || '',
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
)
