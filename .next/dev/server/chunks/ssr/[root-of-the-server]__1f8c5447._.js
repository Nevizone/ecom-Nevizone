module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4026fa3b617407c9e9c9fa97678b2ebbeca4ed2a19":"sendOtp"},"",""] */ __turbopack_context__.s([
    "sendOtp",
    ()=>sendOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://anspbgrnysnohdafzyns.supabase.co");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](resendApiKey);
async function sendOtp(email) {
    try {
        // 1. Check if user exists, if not create them (standard signInWithOtp behavior)
        // Actually, generateLink with type 'magiclink' works for existing.
        // For new users, we might need 'signup'.
        // Let's try to get the user first.
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers({
            filters: {
                email: email
            } // Access experimental or check exact match manually
        });
        // listUsers doesn't support email filter well in all types, but we can try getUserById if we had ID.
        // Instead, let's try generateLink 'magiclink'. If user doesn't exist, it might fail.
        // Better approach: Use generateLink type 'magiclink'. 
        // If it fails, try 'signup'.
        let linkData;
        let linkError;
        // Try sending magic link (which generates OTP)
        const { data, error } = await supabaseAdmin.auth.admin.generateLink({
            type: "magiclink",
            email: email
        });
        if (error) {
            // If user not found, try signup
            if (error.message && error.message.includes("User not found")) {
                const { data: signupData, error: signupError } = await supabaseAdmin.auth.admin.generateLink({
                    type: "signup",
                    email: email,
                    password: Math.random().toString(36).slice(-8) + "A1!"
                });
                if (signupError) throw signupError;
                linkData = signupData;
            } else {
                throw error;
            }
        } else {
            linkData = data;
        }
        // Extract OTP
        // properties: { action_link: string, email_otp: string, ... }
        const otp = linkData?.properties?.email_otp;
        const magicLink = linkData?.properties?.action_link;
        if (!otp && !magicLink) {
            throw new Error("Failed to generate OTP or Link");
        }
        // 2. Send Email via Resend
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
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
      `
        });
        if (emailError) throw emailError;
        return {
            success: true
        };
    } catch (err) {
        console.error("Server Action Error:", err);
        return {
            error: err.message || "Failed to send OTP"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendOtp
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendOtp, "4026fa3b617407c9e9c9fa97678b2ebbeca4ed2a19", null);
}),
"[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4026fa3b617407c9e9c9fa97678b2ebbeca4ed2a19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendOtp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f8c5447._.js.map