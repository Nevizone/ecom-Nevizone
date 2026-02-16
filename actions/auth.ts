"use server"

import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const resendApiKey = process.env.RESEND_API_KEY!

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
})

const resend = new Resend(resendApiKey)

export async function sendOtp(email: string) {
    try {
        // 1. Check if user exists, if not create them (standard signInWithOtp behavior)
        // Actually, generateLink with type 'magiclink' works for existing.
        // For new users, we might need 'signup'.
        // Let's try to get the user first.
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers({
            filters: { email: email } // Access experimental or check exact match manually
        })

        // listUsers doesn't support email filter well in all types, but we can try getUserById if we had ID.
        // Instead, let's try generateLink 'magiclink'. If user doesn't exist, it might fail.

        // Better approach: Use generateLink type 'magiclink'. 
        // If it fails, try 'signup'.

        let linkData
        let linkError

        // Try sending magic link (which generates OTP)
        const { data, error } = await supabaseAdmin.auth.admin.generateLink({
            type: "magiclink",
            email: email,
        })

        if (error) {
            // If user not found, try signup
            if (error.message && error.message.includes("User not found")) {
                const { data: signupData, error: signupError } = await supabaseAdmin.auth.admin.generateLink({
                    type: "signup",
                    email: email,
                    password: Math.random().toString(36).slice(-8) + "A1!", // Random password for new user
                })
                if (signupError) throw signupError
                linkData = signupData
            } else {
                throw error
            }
        } else {
            linkData = data
        }

        // Extract OTP
        // properties: { action_link: string, email_otp: string, ... }
        const otp = linkData?.properties?.email_otp
        const magicLink = linkData?.properties?.action_link

        if (!otp && !magicLink) {
            throw new Error("Failed to generate OTP or Link")
        }

        // 2. Send Email via Resend
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: "onboarding@resend.dev", // Default Resend testing domain
            to: email, // Resend only allows sending to verified email (e.g. nevizonestore@gmail.com) unless domain is verified.
            // Given user provided a key, assume they might suffer restriction if not verified.
            // But user's snippet used 'onboarding@resend.dev'.
            subject: "Your Login Code",
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to Nevizon</h2>
          <p>Your login code is:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px; color: #333;">${otp}</h1>
          <p>Or click this link to login directly:</p>
          <a href="${magicLink}" style="display: inline-block; padding: 12px 24px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px;">Login to Nevizon</a>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">If you didn't request this, please ignore.</p>
        </div>
      `,
        })

        if (emailError) throw emailError

        return { success: true }
    } catch (err: any) {
        console.error("Server Action Error:", err)
        return { error: err.message || "Failed to send OTP" }
    }
}
