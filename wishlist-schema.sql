-- Wishlist Table
-- This table stores user wishlist items
CREATE TABLE IF NOT EXISTS wishlists (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, product_id)
);

-- Index for faster queries
CREATE INDEX idx_wishlists_user_id ON wishlists(user_id);
CREATE INDEX idx_wishlists_product_id ON wishlists(product_id);

-- Note: Run this in your Supabase SQL editor to create the wishlist table
