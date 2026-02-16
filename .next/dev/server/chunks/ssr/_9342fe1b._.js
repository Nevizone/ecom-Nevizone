module.exports = [
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/otp-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OtpInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OtpInput({ length = 4, onComplete }) {
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(length).fill(""));
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleChange = (index, value)=>{
        if (isNaN(Number(value))) return;
        const newOtp = [
            ...otp
        ];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        // Trigger onComplete if filled
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) {
            onComplete(combinedOtp);
        }
        // Move to next input
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, e)=>{
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handlePaste = (e)=>{
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text/plain").slice(0, length);
        if (!/^\d+$/.test(pastedData)) return;
        const newOtp = [
            ...otp
        ];
        pastedData.split("").forEach((char, index)=>{
            newOtp[index] = char;
        });
        setOtp(newOtp);
        if (pastedData.length === length) {
            onComplete(pastedData);
            inputRefs.current[length - 1]?.focus();
        } else {
            inputRefs.current[pastedData.length]?.focus();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex justify-center", length > 6 ? "gap-1 md:gap-2" : "gap-3"),
        children: otp.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                inputMode: "numeric",
                maxLength: 1,
                value: digit,
                onChange: (e)=>handleChange(index, e.target.value),
                onKeyDown: (e)=>handleKeyDown(index, e),
                onPaste: handlePaste,
                ref: (ref)=>{
                    inputRefs.current[index] = ref;
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center font-bold transition-all p-0", length > 6 ? "w-8 h-10 text-base md:w-10 md:h-12 md:text-lg" : "w-12 h-12 text-lg", digit ? "border-primary bg-primary/5" : "border-border")
            }, index, false, {
                fileName: "[project]/components/otp-input.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/otp-input.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
}),
"[project]/actions/data:3512ec [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4026fa3b617407c9e9c9fa97678b2ebbeca4ed2a19":"sendOtp"},"actions/auth.ts",""] */ __turbopack_context__.s([
    "sendOtp",
    ()=>sendOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var sendOtp = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4026fa3b617407c9e9c9fa97678b2ebbeca4ed2a19", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendOtp"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gXCJyZXNlbmRcIlxuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCFcbmNvbnN0IHNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSFcbmNvbnN0IHJlc2VuZEFwaUtleSA9IHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZIVxuXG5jb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzZXJ2aWNlUm9sZUtleSwge1xuICAgIGF1dGg6IHtcbiAgICAgICAgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsXG4gICAgICAgIHBlcnNpc3RTZXNzaW9uOiBmYWxzZSxcbiAgICB9LFxufSlcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChyZXNlbmRBcGlLZXkpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT3RwKGVtYWlsOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyAxLiBDaGVjayBpZiB1c2VyIGV4aXN0cywgaWYgbm90IGNyZWF0ZSB0aGVtIChzdGFuZGFyZCBzaWduSW5XaXRoT3RwIGJlaGF2aW9yKVxuICAgICAgICAvLyBBY3R1YWxseSwgZ2VuZXJhdGVMaW5rIHdpdGggdHlwZSAnbWFnaWNsaW5rJyB3b3JrcyBmb3IgZXhpc3RpbmcuXG4gICAgICAgIC8vIEZvciBuZXcgdXNlcnMsIHdlIG1pZ2h0IG5lZWQgJ3NpZ251cCcuXG4gICAgICAgIC8vIExldCdzIHRyeSB0byBnZXQgdGhlIHVzZXIgZmlyc3QuXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyB1c2VycyB9LCBlcnJvcjogbGlzdEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmF1dGguYWRtaW4ubGlzdFVzZXJzKHtcbiAgICAgICAgICAgIGZpbHRlcnM6IHsgZW1haWw6IGVtYWlsIH0gLy8gQWNjZXNzIGV4cGVyaW1lbnRhbCBvciBjaGVjayBleGFjdCBtYXRjaCBtYW51YWxseVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGxpc3RVc2VycyBkb2Vzbid0IHN1cHBvcnQgZW1haWwgZmlsdGVyIHdlbGwgaW4gYWxsIHR5cGVzLCBidXQgd2UgY2FuIHRyeSBnZXRVc2VyQnlJZCBpZiB3ZSBoYWQgSUQuXG4gICAgICAgIC8vIEluc3RlYWQsIGxldCdzIHRyeSBnZW5lcmF0ZUxpbmsgJ21hZ2ljbGluaycuIElmIHVzZXIgZG9lc24ndCBleGlzdCwgaXQgbWlnaHQgZmFpbC5cblxuICAgICAgICAvLyBCZXR0ZXIgYXBwcm9hY2g6IFVzZSBnZW5lcmF0ZUxpbmsgdHlwZSAnbWFnaWNsaW5rJy4gXG4gICAgICAgIC8vIElmIGl0IGZhaWxzLCB0cnkgJ3NpZ251cCcuXG5cbiAgICAgICAgbGV0IGxpbmtEYXRhXG4gICAgICAgIGxldCBsaW5rRXJyb3JcblxuICAgICAgICAvLyBUcnkgc2VuZGluZyBtYWdpYyBsaW5rICh3aGljaCBnZW5lcmF0ZXMgT1RQKVxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmF1dGguYWRtaW4uZ2VuZXJhdGVMaW5rKHtcbiAgICAgICAgICAgIHR5cGU6IFwibWFnaWNsaW5rXCIsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBJZiB1c2VyIG5vdCBmb3VuZCwgdHJ5IHNpZ251cFxuICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIlVzZXIgbm90IGZvdW5kXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBzaWdudXBEYXRhLCBlcnJvcjogc2lnbnVwRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uYXV0aC5hZG1pbi5nZW5lcmF0ZUxpbmsoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpZ251cFwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgtOCkgKyBcIkExIVwiLCAvLyBSYW5kb20gcGFzc3dvcmQgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoc2lnbnVwRXJyb3IpIHRocm93IHNpZ251cEVycm9yXG4gICAgICAgICAgICAgICAgbGlua0RhdGEgPSBzaWdudXBEYXRhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5rRGF0YSA9IGRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4dHJhY3QgT1RQXG4gICAgICAgIC8vIHByb3BlcnRpZXM6IHsgYWN0aW9uX2xpbms6IHN0cmluZywgZW1haWxfb3RwOiBzdHJpbmcsIC4uLiB9XG4gICAgICAgIGNvbnN0IG90cCA9IGxpbmtEYXRhPy5wcm9wZXJ0aWVzPy5lbWFpbF9vdHBcbiAgICAgICAgY29uc3QgbWFnaWNMaW5rID0gbGlua0RhdGE/LnByb3BlcnRpZXM/LmFjdGlvbl9saW5rXG5cbiAgICAgICAgaWYgKCFvdHAgJiYgIW1hZ2ljTGluaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIE9UUCBvciBMaW5rXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyAyLiBTZW5kIEVtYWlsIHZpYSBSZXNlbmRcbiAgICAgICAgY29uc3QgeyBkYXRhOiBlbWFpbERhdGEsIGVycm9yOiBlbWFpbEVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgICAgICAgZnJvbTogXCJvbmJvYXJkaW5nQHJlc2VuZC5kZXZcIiwgLy8gRGVmYXVsdCBSZXNlbmQgdGVzdGluZyBkb21haW5cbiAgICAgICAgICAgIHRvOiBlbWFpbCwgLy8gUmVzZW5kIG9ubHkgYWxsb3dzIHNlbmRpbmcgdG8gdmVyaWZpZWQgZW1haWwgKGUuZy4gbmV2aXpvbmVzdG9yZUBnbWFpbC5jb20pIHVubGVzcyBkb21haW4gaXMgdmVyaWZpZWQuXG4gICAgICAgICAgICAvLyBHaXZlbiB1c2VyIHByb3ZpZGVkIGEga2V5LCBhc3N1bWUgdGhleSBtaWdodCBzdWZmZXIgcmVzdHJpY3Rpb24gaWYgbm90IHZlcmlmaWVkLlxuICAgICAgICAgICAgLy8gQnV0IHVzZXIncyBzbmlwcGV0IHVzZWQgJ29uYm9hcmRpbmdAcmVzZW5kLmRldicuXG4gICAgICAgICAgICBzdWJqZWN0OiBcIllvdXIgTG9naW4gQ29kZVwiLFxuICAgICAgICAgICAgaHRtbDogYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IG1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxuICAgICAgICAgIDxoMj5XZWxjb21lIHRvIE5ldml6b248L2gyPlxuICAgICAgICAgIDxwPllvdXIgbG9naW4gY29kZSBpczo8L3A+XG4gICAgICAgICAgPGgxIHN0eWxlPVwiZm9udC1zaXplOiAzMnB4OyBsZXR0ZXItc3BhY2luZzogNXB4OyBjb2xvcjogIzMzMztcIj4ke290cH08L2gxPlxuICAgICAgICAgIDxwPk9yIGNsaWNrIHRoaXMgbGluayB0byBsb2dpbiBkaXJlY3RseTo8L3A+XG4gICAgICAgICAgPGEgaHJlZj1cIiR7bWFnaWNMaW5rfVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAxMnB4IDI0cHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDA7IGNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5Mb2dpbiB0byBOZXZpem9uPC9hPlxuICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luLXRvcDogMjRweDsgY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMTJweDtcIj5JZiB5b3UgZGlkbid0IHJlcXVlc3QgdGhpcywgcGxlYXNlIGlnbm9yZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoZW1haWxFcnJvcikgdGhyb3cgZW1haWxFcnJvclxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2ZXIgQWN0aW9uIEVycm9yOlwiLCBlcnIpXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBzZW5kIE9UUFwiIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdSQWtCc0IifQ==
}),
"[project]/components/login-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$otp$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/otp-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3512ec__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:3512ec [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function LoginForm() {
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("email");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("input");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [identifier, setIdentifier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    // Timer logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (step === "otp" && timer > 0) {
            interval = setInterval(()=>{
                setTimer((prev)=>prev - 1);
            }, 1000);
        }
        return ()=>clearInterval(interval);
    }, [
        step,
        timer
    ]);
    const handleSendOtp = async (e)=>{
        e.preventDefault();
        if (!identifier) return;
        setLoading(true);
        try {
            // Use Server Action to send OTP via Resend
            // Dynamic import to avoid server-action issues if not set up perfectly? No, standard import.
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3512ec__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendOtp"])(identifier);
            if (result?.error) {
                throw new Error(result.error);
            }
            setStep("otp");
            setTimer(30);
            toast({
                title: "Login Code Sent",
                description: `We've emailed a 6-digit code to ${identifier}.`
            });
        } catch (error) {
            console.error("Auth error:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to send OTP",
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleVerifyOtp = async (otp)=>{
        setLoading(true);
        try {
            let error;
            if (method === "email") {
                const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.verifyOtp({
                    email: identifier,
                    token: otp,
                    type: 'email'
                });
                error = err;
            } else {
                const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.verifyOtp({
                    phone: "+91" + identifier,
                    token: otp,
                    type: 'sms'
                });
                error = err;
            }
            if (error) throw error;
            toast({
                title: "Welcome Back!",
                description: "You have successfully logged in."
            });
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Verify error:", error);
            toast({
                title: "Invalid OTP",
                description: error.message || "Please check the code and try again.",
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleResend = async ()=>{
        setTimer(30);
        await handleSendOtp({
            preventDefault: ()=>{}
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-2",
                        children: step === "input" ? "Sign in or Create Account" : "Enter OTP"
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: step === "input" ? "Use your email or mobile number. We’ll send you a one-time password (OTP)." : `OTP sent to ${identifier}.`
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login-form.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            step === "input" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSendOtp,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "email",
                        onValueChange: (val)=>{
                            setMethod(val);
                            setIdentifier("");
                        },
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "email",
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-form.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this),
                                            " Email"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login-form.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "phone",
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-form.tsx",
                                                lineNumber: 143,
                                                columnNumber: 33
                                            }, this),
                                            " Phone"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login-form.tsx",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "email",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-form.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "email",
                                            type: "email",
                                            placeholder: "name@example.com",
                                            value: identifier,
                                            onChange: (e)=>setIdentifier(e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-form.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login-form.tsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "phone",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "phone",
                                            children: "Mobile Number"
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-form.tsx",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center border border-border rounded-md px-3 bg-secondary/50 text-sm font-medium text-muted-foreground w-16",
                                                    children: "+91"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-form.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "phone",
                                                    type: "tel",
                                                    placeholder: "98765 43210",
                                                    value: identifier,
                                                    onChange: (e)=>{
                                                        const val = e.target.value.replace(/\D/g, "");
                                                        if (val.length <= 10) setIdentifier(val);
                                                    },
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-form.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login-form.tsx",
                                            lineNumber: 164,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login-form.tsx",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 161,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "w-full h-11 text-base",
                        disabled: loading,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/login-form.tsx",
                                    lineNumber: 187,
                                    columnNumber: 33
                                }, this),
                                " Sending..."
                            ]
                        }, void 0, true) : "Send OTP"
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-center text-muted-foreground",
                        children: [
                            "By continuing, you agree to our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "underline hover:text-primary",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this),
                            " ",
                            "&",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "underline hover:text-primary",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 194,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login-form.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$otp$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        length: 8,
                        onComplete: (otp)=>handleVerifyOtp(otp)
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 208,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{},
                        className: "w-full h-11 text-base hidden",
                        disabled: loading,
                        children: "Verify & Continue"
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-center text-muted-foreground",
                        children: "Enter the code sent to you."
                    }, void 0, false, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 217,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Didn't receive code?",
                                    " ",
                                    timer > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-foreground",
                                        children: [
                                            "Resend in ",
                                            timer,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login-form.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleResend,
                                        className: "text-primary font-medium hover:underline",
                                        children: "Resend OTP"
                                    }, void 0, false, {
                                        fileName: "[project]/components/login-form.tsx",
                                        lineNumber: 227,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 222,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setStep("input");
                                    setIdentifier("");
                                },
                                className: "flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground mx-auto transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/login-form.tsx",
                                        lineNumber: 243,
                                        columnNumber: 29
                                    }, this),
                                    "Use a different ",
                                    method
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login-form.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login-form.tsx",
                        lineNumber: 221,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login-form.tsx",
                lineNumber: 207,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t border-border text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-xs text-muted-foreground hover:text-primary transition",
                    children: "Need help? Contact support."
                }, void 0, false, {
                    fileName: "[project]/components/login-form.tsx",
                    lineNumber: 251,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/login-form.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login-form.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_9342fe1b._.js.map