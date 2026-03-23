module.exports = [
"[project]/src/components/ui/accordion.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript) <export * as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
"use client";
;
;
;
;
;
function Accordion({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Root, {
        "data-slot": "accordion",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Item, {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("not-last:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Trigger, {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    "data-slot": "accordion-trigger-icon",
                    className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
                    "data-slot": "accordion-trigger-icon",
                    className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Content, {
        "data-slot": "accordion-content",
        className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/lib/actions/data:081772 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAccount",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b8213de36e5cba88d65f90ddc2cb7cc195509191":"createAccount"},"src/lib/actions/accountActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b8213de36e5cba88d65f90ddc2cb7cc195509191", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createAccount");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWNjb3VudEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvbGliL3dvcmtzcGFjZUNvbnRleHRcIjtcblxuLy8gMS4gQ1JFQVJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhY2NvdW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhY2NvdW50XCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEFDVFVBTElaQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFjY291bnQoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY291bnQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5hY2NvdW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNjb3VudC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gRUxJTUlOQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjY291bnQoaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFjdGl2ZVdvcmtzcGFjZSB9ID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJDb250ZXh0KCk7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2NvdW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjY291bnQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kYXNoYm9hcmRcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FPc0IsMExBQUEifQ==
}),
"[project]/src/lib/actions/data:90b714 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateAccount",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60fafc7537bf53d7ffb5481b2f0e66d4c1c7c2eee1":"updateAccount"},"src/lib/actions/accountActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60fafc7537bf53d7ffb5481b2f0e66d4c1c7c2eee1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAccount");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWNjb3VudEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvbGliL3dvcmtzcGFjZUNvbnRleHRcIjtcblxuLy8gMS4gQ1JFQVJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhY2NvdW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhY2NvdW50XCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEFDVFVBTElaQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFjY291bnQoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY291bnQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5hY2NvdW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNjb3VudC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gRUxJTUlOQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjY291bnQoaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFjdGl2ZVdvcmtzcGFjZSB9ID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJDb250ZXh0KCk7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2NvdW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjY291bnQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kYXNoYm9hcmRcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0F5QnNCLDBMQUFBIn0=
}),
"[project]/src/lib/actions/data:8236aa [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAccount",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40836e783c10f49a1899499fede75639eb700c6ca0":"deleteAccount"},"src/lib/actions/accountActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40836e783c10f49a1899499fede75639eb700c6ca0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteAccount");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWNjb3VudEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvbGliL3dvcmtzcGFjZUNvbnRleHRcIjtcblxuLy8gMS4gQ1JFQVJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhY2NvdW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhY2NvdW50XCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEFDVFVBTElaQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFjY291bnQoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY291bnQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5hY2NvdW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNjb3VudC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlIH0sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gRUxJTUlOQVJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjY291bnQoaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFjdGl2ZVdvcmtzcGFjZSB9ID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJDb250ZXh0KCk7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2NvdW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuYWNjb3VudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjY291bnQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kYXNoYm9hcmRcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGFjY291bnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGFjY291bnRcIiB9O1xyXG4gIH1cclxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FvRHNCLDBMQUFBIn0=
}),
"[project]/src/components/dashboard/AccountsCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$081772__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:081772 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$90b714__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:90b714 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$8236aa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:8236aa [app-ssr] (ecmascript) <text/javascript>");
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
function AccountsCard({ accounts, totalLiquidity, totalAccountBalances, pendingExpensesTotal }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingAccount, setEditingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSubmit = async (formData)=>{
        const result = editingAccount ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$90b714__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAccount"])(editingAccount.id, formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$081772__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAccount"])(formData);
        if (result.success) {
            setIsOpen(false);
            setEditingAccount(null);
            formRef.current?.reset();
        } else {
            alert("Hubo un error al guardar la cuenta.");
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("¿Seguro que quieres eliminar esta cuenta?")) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$8236aa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAccount"])(id);
        if (!result.success) {
            alert("Hubo un error al eliminar la cuenta.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                    type: "single",
                    collapsible: true,
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: "cuentas",
                        className: "border-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center w-full pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-slate-900",
                                                    children: "Cuentas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                pendingExpensesTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: [
                                                        "Balance manual $",
                                                        totalAccountBalances.toLocaleString("en-US", {
                                                            minimumFractionDigits: 2
                                                        }),
                                                        " - gastos únicos pendientes $",
                                                        pendingExpensesTotal.toLocaleString("en-US", {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-emerald-600",
                                                    children: [
                                                        "$",
                                                        totalLiquidity.toLocaleString("en-US", {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this),
                                                pendingExpensesTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Liquidez real ajustada"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pt-2 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: [
                                                    accounts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            colSpan: 3,
                                                            className: "text-center text-slate-500 py-4",
                                                            children: "No tienes cuentas registradas."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                            lineNumber: 74,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, this),
                                                    accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            className: "hover:bg-slate-100/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-medium text-base w-1/2",
                                                                    children: account.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-right font-semibold text-base",
                                                                    children: [
                                                                        "$",
                                                                        account.balance.toLocaleString("en-US", {
                                                                            minimumFractionDigits: 2
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-right w-[50px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                                asChild: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    className: "h-8 w-8 p-0",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                        lineNumber: 90,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                    lineNumber: 89,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                lineNumber: 88,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                                align: "end",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                        onClick: ()=>{
                                                                                            setEditingAccount(account);
                                                                                            setIsOpen(true);
                                                                                        },
                                                                                        className: "cursor-pointer text-blue-600 focus:text-blue-600 focus:bg-blue-50",
                                                                                        children: "Editar cuenta"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                        lineNumber: 94,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                        onClick: ()=>handleDelete(account.id),
                                                                                        className: "text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer",
                                                                                        children: "Eliminar cuenta"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                        lineNumber: 103,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                                lineNumber: 93,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, account.id, true, {
                                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-4 pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setEditingAccount(null);
                                                setIsOpen(true);
                                            },
                                            className: "w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                " Agregar cuenta"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: editingAccount ? "Editar cuenta" : "Agregar cuenta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Registra el dinero disponible que tienes actualmente en tu banco o en efectivo."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: handleSubmit,
                            ref: formRef,
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "name",
                                            children: "Nombre de la cuenta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            name: "name",
                                            defaultValue: editingAccount?.name,
                                            placeholder: "Ej: Chase Checking, Efectivo...",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "balance",
                                            children: "Balance actual ($)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "balance",
                                            name: "balance",
                                            type: "number",
                                            step: "0.01",
                                            defaultValue: editingAccount?.balance,
                                            placeholder: "0.00",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full",
                                        children: editingAccount ? "Actualizar cuenta" : "Guardar cuenta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/AccountsCard.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/actions/data:5655c8 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCreditCard",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e1111a1c4b792b38e0f30302caf5578ad8e92be2":"createCreditCard"},"src/lib/actions/creditCardActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e1111a1c4b792b38e0f30302caf5578ad8e92be2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCreditCard");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlZGl0Q2FyZEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0TmV4dFRlbXBsYXRlT2NjdXJyZW5jZSwgZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSB9IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FsZW5kYXJcIik7XG59O1xuXHJcbi8vIDEuIENSRUFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDcmVkaXRDYXJkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImJhbGFuY2VcIikpO1xyXG4gIGNvbnN0IGNyZWRpdExpbWl0ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJjcmVkaXRMaW1pdFwiKSk7XHJcbiAgLy8gU2kgbm8gdGUgcGFzYW4gdW4gcGFnbyBtw61uaW1vLCBwb3IgZGVmZWN0byBhc3VtZSBlbCAyJSBkZWwgYmFsYW5jZSBvIDBcclxuICBjb25zdCBtaW5pbXVtUGF5bWVudCA9IGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpID8gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJtaW5pbXVtUGF5bWVudFwiKSkgOiAoYmFsYW5jZSAqIDAuMDcpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBBQ1RVQUxJWkFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDcmVkaXRDYXJkKGlkLCBmb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcclxuICBjb25zdCBjcmVkaXRMaW1pdCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiY3JlZGl0TGltaXRcIikpO1xyXG4gIGNvbnN0IG1pbmltdW1QYXltZW50ID0gZm9ybURhdGEuZ2V0KFwibWluaW11bVBheW1lbnRcIikgPyBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpKSA6IChiYWxhbmNlICogMC4wMik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImR1ZURhdGVcIikpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWRpdENhcmQgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5jcmVkaXRDYXJkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogY3JlZGl0Q2FyZC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBFTElNSU5BUlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNyZWRpdENhcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWRpdCBjYXJkIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGNyZWRpdENhcmQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjcmVkaXQgY2FyZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGNyZWRpdCBjYXJkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0NyZWRpdENhcmRBc1BhaWQoY3JlZGl0Q2FyZElkLCBvY2N1cnJlbmNlRGF0ZUlucHV0ID0gbnVsbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBjcmVkaXRDYXJkSWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVkdWxlZEl0ZW0gPSB7XG4gICAgICBpZDogYGNyZWRpdC1jYXJkOiR7Y3JlZGl0Q2FyZC5pZH1gLFxuICAgICAga2luZDogXCJjcmVkaXQtY2FyZFwiLFxuICAgICAgZnJlcXVlbmN5OiBcIk1PTlRITFlcIixcbiAgICAgIGRheU9mTW9udGg6IGNyZWRpdENhcmQuZHVlRGF0ZSxcbiAgICAgIGFtb3VudDogY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCxcbiAgICB9O1xuICAgIGNvbnN0IG9jY3VycmVuY2VEYXRlID1cbiAgICAgIG9jY3VycmVuY2VEYXRlSW5wdXQgPyBuZXcgRGF0ZShvY2N1cnJlbmNlRGF0ZUlucHV0KSA6IGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2Uoc2NoZWR1bGVkSXRlbSwgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2FsY3VsYXRlIGNyZWRpdCBjYXJkIHBheW1lbnQgb2NjdXJyZW5jZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjeWNsZVJlZmVyZW5jZSA9IGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2Uoc2NoZWR1bGVkSXRlbSwgb2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IHByZXZpb3VzUGF5bWVudHMgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gcHJldmlvdXNQYXltZW50cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5hbW91bnRQYWlkLCAwKTtcbiAgICBjb25zdCBwZW5kaW5nQW1vdW50ID0gTWF0aC5tYXgoY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCAtIGFscmVhZHlQYWlkLCAwKTtcblxuICAgIGlmIChwZW5kaW5nQW1vdW50IDw9IDApIHtcbiAgICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgYW1vdW50UGFpZDogcGVuZGluZ0Ftb3VudCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIGRhdGVQYWlkOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgY3JlZGl0IGNhcmQgcGF5bWVudCBhcyBwYWlkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBtYXJrIGNyZWRpdCBjYXJkIHBheW1lbnQgYXMgcGFpZFwiIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBYXNCLDZMQUFBIn0=
}),
"[project]/src/lib/actions/data:8a6692 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCreditCard",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604d5a899a48513ed0b09d487709585742a456baa3":"updateCreditCard"},"src/lib/actions/creditCardActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("604d5a899a48513ed0b09d487709585742a456baa3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCreditCard");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlZGl0Q2FyZEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0TmV4dFRlbXBsYXRlT2NjdXJyZW5jZSwgZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSB9IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FsZW5kYXJcIik7XG59O1xuXHJcbi8vIDEuIENSRUFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDcmVkaXRDYXJkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImJhbGFuY2VcIikpO1xyXG4gIGNvbnN0IGNyZWRpdExpbWl0ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJjcmVkaXRMaW1pdFwiKSk7XHJcbiAgLy8gU2kgbm8gdGUgcGFzYW4gdW4gcGFnbyBtw61uaW1vLCBwb3IgZGVmZWN0byBhc3VtZSBlbCAyJSBkZWwgYmFsYW5jZSBvIDBcclxuICBjb25zdCBtaW5pbXVtUGF5bWVudCA9IGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpID8gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJtaW5pbXVtUGF5bWVudFwiKSkgOiAoYmFsYW5jZSAqIDAuMDcpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBBQ1RVQUxJWkFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDcmVkaXRDYXJkKGlkLCBmb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcclxuICBjb25zdCBjcmVkaXRMaW1pdCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiY3JlZGl0TGltaXRcIikpO1xyXG4gIGNvbnN0IG1pbmltdW1QYXltZW50ID0gZm9ybURhdGEuZ2V0KFwibWluaW11bVBheW1lbnRcIikgPyBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpKSA6IChiYWxhbmNlICogMC4wMik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImR1ZURhdGVcIikpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWRpdENhcmQgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5jcmVkaXRDYXJkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogY3JlZGl0Q2FyZC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBFTElNSU5BUlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNyZWRpdENhcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWRpdCBjYXJkIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGNyZWRpdENhcmQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjcmVkaXQgY2FyZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGNyZWRpdCBjYXJkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0NyZWRpdENhcmRBc1BhaWQoY3JlZGl0Q2FyZElkLCBvY2N1cnJlbmNlRGF0ZUlucHV0ID0gbnVsbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBjcmVkaXRDYXJkSWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVkdWxlZEl0ZW0gPSB7XG4gICAgICBpZDogYGNyZWRpdC1jYXJkOiR7Y3JlZGl0Q2FyZC5pZH1gLFxuICAgICAga2luZDogXCJjcmVkaXQtY2FyZFwiLFxuICAgICAgZnJlcXVlbmN5OiBcIk1PTlRITFlcIixcbiAgICAgIGRheU9mTW9udGg6IGNyZWRpdENhcmQuZHVlRGF0ZSxcbiAgICAgIGFtb3VudDogY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCxcbiAgICB9O1xuICAgIGNvbnN0IG9jY3VycmVuY2VEYXRlID1cbiAgICAgIG9jY3VycmVuY2VEYXRlSW5wdXQgPyBuZXcgRGF0ZShvY2N1cnJlbmNlRGF0ZUlucHV0KSA6IGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2Uoc2NoZWR1bGVkSXRlbSwgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2FsY3VsYXRlIGNyZWRpdCBjYXJkIHBheW1lbnQgb2NjdXJyZW5jZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjeWNsZVJlZmVyZW5jZSA9IGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2Uoc2NoZWR1bGVkSXRlbSwgb2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IHByZXZpb3VzUGF5bWVudHMgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gcHJldmlvdXNQYXltZW50cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5hbW91bnRQYWlkLCAwKTtcbiAgICBjb25zdCBwZW5kaW5nQW1vdW50ID0gTWF0aC5tYXgoY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCAtIGFscmVhZHlQYWlkLCAwKTtcblxuICAgIGlmIChwZW5kaW5nQW1vdW50IDw9IDApIHtcbiAgICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgYW1vdW50UGFpZDogcGVuZGluZ0Ftb3VudCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIGRhdGVQYWlkOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgY3JlZGl0IGNhcmQgcGF5bWVudCBhcyBwYWlkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBtYXJrIGNyZWRpdCBjYXJkIHBheW1lbnQgYXMgcGFpZFwiIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBbUNzQiw2TEFBQSJ9
}),
"[project]/src/lib/actions/data:dd5154 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCreditCard",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d7206777bcfb7f913e0805640dbfa9366b5eac2c":"deleteCreditCard"},"src/lib/actions/creditCardActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d7206777bcfb7f913e0805640dbfa9366b5eac2c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCreditCard");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlZGl0Q2FyZEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0TmV4dFRlbXBsYXRlT2NjdXJyZW5jZSwgZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSB9IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FsZW5kYXJcIik7XG59O1xuXHJcbi8vIDEuIENSRUFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDcmVkaXRDYXJkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImJhbGFuY2VcIikpO1xyXG4gIGNvbnN0IGNyZWRpdExpbWl0ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJjcmVkaXRMaW1pdFwiKSk7XHJcbiAgLy8gU2kgbm8gdGUgcGFzYW4gdW4gcGFnbyBtw61uaW1vLCBwb3IgZGVmZWN0byBhc3VtZSBlbCAyJSBkZWwgYmFsYW5jZSBvIDBcclxuICBjb25zdCBtaW5pbXVtUGF5bWVudCA9IGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpID8gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJtaW5pbXVtUGF5bWVudFwiKSkgOiAoYmFsYW5jZSAqIDAuMDcpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBBQ1RVQUxJWkFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDcmVkaXRDYXJkKGlkLCBmb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcclxuICBjb25zdCBjcmVkaXRMaW1pdCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiY3JlZGl0TGltaXRcIikpO1xyXG4gIGNvbnN0IG1pbmltdW1QYXltZW50ID0gZm9ybURhdGEuZ2V0KFwibWluaW11bVBheW1lbnRcIikgPyBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpKSA6IChiYWxhbmNlICogMC4wMik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImR1ZURhdGVcIikpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWRpdENhcmQgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5jcmVkaXRDYXJkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogY3JlZGl0Q2FyZC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBFTElNSU5BUlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNyZWRpdENhcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWRpdCBjYXJkIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGNyZWRpdENhcmQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjcmVkaXQgY2FyZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGNyZWRpdCBjYXJkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0NyZWRpdENhcmRBc1BhaWQoY3JlZGl0Q2FyZElkLCBvY2N1cnJlbmNlRGF0ZUlucHV0ID0gbnVsbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBjcmVkaXRDYXJkSWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVkdWxlZEl0ZW0gPSB7XG4gICAgICBpZDogYGNyZWRpdC1jYXJkOiR7Y3JlZGl0Q2FyZC5pZH1gLFxuICAgICAga2luZDogXCJjcmVkaXQtY2FyZFwiLFxuICAgICAgZnJlcXVlbmN5OiBcIk1PTlRITFlcIixcbiAgICAgIGRheU9mTW9udGg6IGNyZWRpdENhcmQuZHVlRGF0ZSxcbiAgICAgIGFtb3VudDogY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCxcbiAgICB9O1xuICAgIGNvbnN0IG9jY3VycmVuY2VEYXRlID1cbiAgICAgIG9jY3VycmVuY2VEYXRlSW5wdXQgPyBuZXcgRGF0ZShvY2N1cnJlbmNlRGF0ZUlucHV0KSA6IGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2Uoc2NoZWR1bGVkSXRlbSwgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2FsY3VsYXRlIGNyZWRpdCBjYXJkIHBheW1lbnQgb2NjdXJyZW5jZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjeWNsZVJlZmVyZW5jZSA9IGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2Uoc2NoZWR1bGVkSXRlbSwgb2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IHByZXZpb3VzUGF5bWVudHMgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gcHJldmlvdXNQYXltZW50cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5hbW91bnRQYWlkLCAwKTtcbiAgICBjb25zdCBwZW5kaW5nQW1vdW50ID0gTWF0aC5tYXgoY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCAtIGFscmVhZHlQYWlkLCAwKTtcblxuICAgIGlmIChwZW5kaW5nQW1vdW50IDw9IDApIHtcbiAgICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgYW1vdW50UGFpZDogcGVuZGluZ0Ftb3VudCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIGRhdGVQYWlkOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgY3JlZGl0IGNhcmQgcGF5bWVudCBhcyBwYWlkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBtYXJrIGNyZWRpdCBjYXJkIHBheW1lbnQgYXMgcGFpZFwiIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBaUVzQiw2TEFBQSJ9
}),
"[project]/src/components/dashboard/CreditCardsCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreditCardsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
// Importamos el Modal y los Inputs
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-ssr] (ecmascript)");
// Importamos el motor del servidor
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$5655c8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:5655c8 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$8a6692__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:8a6692 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$dd5154__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:dd5154 [app-ssr] (ecmascript) <text/javascript>");
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
function CreditCardsCard({ creditCards, totalCreditLimit, totalAvailableCredit, totalDebt }) {
    // LA MEMORIA DEL COMPONENTE
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCard, setEditingCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // EL CEREBRO DE GUARDADO (Dos Caras)
    const handleSubmit = async (formData)=>{
        let result;
        if (editingCard) {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$8a6692__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCreditCard"])(editingCard.id, formData);
        } else {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$5655c8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCreditCard"])(formData);
        }
        if (result.success) {
            setIsOpen(false);
            setEditingCard(null);
            formRef.current?.reset();
        } else {
            alert("Hubo un error al guardar la tarjeta.");
        }
    };
    // EL CEREBRO DE BORRADO
    const handleDelete = async (id)=>{
        if (window.confirm("Are you sure you want to delete this credit card?")) {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$dd5154__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCreditCard"])(id);
            if (!result.success) {
                alert("Error deleting the card.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                    type: "single",
                    collapsible: true,
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: "credit-cards",
                        className: "border-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center w-full pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-slate-900",
                                            children: "Tarjetas de Crédito"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-red-600",
                                            children: [
                                                "-$",
                                                totalDebt.toLocaleString("en-US", {
                                                    minimumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pt-2 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                children: "Tarjeta"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 74,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-right",
                                                                children: "Límite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 75,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-right",
                                                                children: "Disponible"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 76,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-right",
                                                                children: "Deuda"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 77,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "w-[50px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 78,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    children: [
                                                        creditCards.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                colSpan: 5,
                                                                className: "text-center text-slate-500 py-4",
                                                                children: "No tienes tarjetas de crédito registradas."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 86,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this),
                                                        creditCards.map((card)=>{
                                                            const availableCredit = card.creditLimit - card.balance;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                className: "hover:bg-slate-100/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "font-medium text-base",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: card.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                    lineNumber: 98,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-muted-foreground font-normal",
                                                                                    children: [
                                                                                        "Due ",
                                                                                        card.dueDate
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                    lineNumber: 99,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                            lineNumber: 97,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-right text-muted-foreground",
                                                                        children: [
                                                                            "$",
                                                                            card.creditLimit.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 0
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-right text-emerald-600 font-medium",
                                                                        children: [
                                                                            "$",
                                                                            availableCredit.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-right font-semibold text-base",
                                                                        children: [
                                                                            "$",
                                                                            card.balance.toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-right w-[50px]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                                    asChild: true,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        variant: "ghost",
                                                                                        className: "h-8 w-8 p-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                            lineNumber: 115,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                        lineNumber: 114,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                    lineNumber: 113,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                                    align: "end",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                            onClick: ()=>{
                                                                                                setEditingCard(card);
                                                                                                setIsOpen(true);
                                                                                            },
                                                                                            className: "cursor-pointer text-blue-600 focus:text-blue-600 focus:bg-blue-50",
                                                                                            children: "Edit Card"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                            lineNumber: 120,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                            onClick: ()=>handleDelete(card.id),
                                                                                            className: "text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer",
                                                                                            children: "Delete Card"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                            lineNumber: 130,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                                    lineNumber: 118,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, card.id, true, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 95,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableFooter"], {
                                                    className: "bg-slate-50 font-semibold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: "Totales"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 145,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right text-slate-600",
                                                                children: [
                                                                    "$",
                                                                    totalCreditLimit.toLocaleString("en-US", {
                                                                        minimumFractionDigits: 0
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 146,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right text-emerald-600",
                                                                children: [
                                                                    "$",
                                                                    totalAvailableCredit.toLocaleString("en-US", {
                                                                        minimumFractionDigits: 2
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right text-red-600",
                                                                children: [
                                                                    "$",
                                                                    totalDebt.toLocaleString("en-US", {
                                                                        minimumFractionDigits: 2
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 152,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-4 pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setEditingCard(null);
                                                setIsOpen(true);
                                            },
                                            className: "w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                " Add New Credit Card"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: editingCard ? "Edit Credit Card" : "Add New Credit Card"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Añade los detalles de tu tarjeta para trackear tu deuda y límite de crédito."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: handleSubmit,
                            ref: formRef,
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "name",
                                            children: "Nombre de la Tarjeta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            name: "name",
                                            defaultValue: editingCard?.name,
                                            placeholder: "Ej: Chase Freedom, Amex...",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "balance",
                                                    children: "Deuda Actual ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "balance",
                                                    name: "balance",
                                                    type: "number",
                                                    step: "0.01",
                                                    defaultValue: editingCard?.balance,
                                                    placeholder: "0.00",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "creditLimit",
                                                    children: "Límite Total ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "creditLimit",
                                                    name: "creditLimit",
                                                    type: "number",
                                                    step: "0.01",
                                                    defaultValue: editingCard?.creditLimit,
                                                    placeholder: "0.00",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "minimumPayment",
                                                    children: [
                                                        "Pago Mín. ($) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-normal text-muted-foreground",
                                                            children: "(Opcional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                            lineNumber: 208,
                                                            columnNumber: 63
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "minimumPayment",
                                                    name: "minimumPayment",
                                                    type: "number",
                                                    step: "0.01",
                                                    defaultValue: editingCard?.minimumPayment,
                                                    placeholder: "Ej: 35.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "dueDate",
                                                    children: "Día de Corte (1-31)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "dueDate",
                                                    name: "dueDate",
                                                    type: "number",
                                                    min: "1",
                                                    max: "31",
                                                    defaultValue: editingCard?.dueDate,
                                                    placeholder: "Ej: 15",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full",
                                        children: editingCard ? "Update Card" : "Save Card"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/CreditCardsCard.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/forms/TemplateForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplateForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TemplateForm({ initialData = null, onSubmit, onCancel }) {
    const [freq, setFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.frequency || "MONTHLY");
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: onSubmit,
        ref: formRef,
        className: "grid gap-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "name",
                                children: "Nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "name",
                                name: "name",
                                defaultValue: initialData?.name,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "amount",
                                children: "Monto ($)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "amount",
                                name: "amount",
                                defaultValue: initialData?.amount,
                                type: "number",
                                step: "0.01",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "category",
                                children: "Categoría"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "category",
                                name: "category",
                                defaultValue: initialData?.category || "OTHER",
                                className: "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "HOUSING",
                                        children: "Vivienda"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "TRANSPORTATION",
                                        children: "Transporte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "FOOD",
                                        children: "Comida"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "UTILITIES",
                                        children: "Servicios"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "INSURANCE",
                                        children: "Seguros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "SUBSCRIPTIONS",
                                        children: "Suscripciones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MEDICAL",
                                        children: "Médico / Escuela"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "OTHER",
                                        children: "Otros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "frequency",
                                children: "Frecuencia"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "frequency",
                                name: "frequency",
                                value: freq,
                                onChange: (e)=>setFreq(e.target.value),
                                className: "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MONTHLY",
                                        children: "Mensual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "WEEKLY",
                                        children: "Semanal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "BIWEEKLY",
                                        children: "Bisemanal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            freq === "MONTHLY" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dayOfMonth",
                        children: "Día de cobro (1-31)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "dayOfMonth",
                        name: "dayOfMonth",
                        defaultValue: initialData?.dayOfMonth,
                        type: "number",
                        min: "1",
                        max: "31",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "lastPaidAt",
                        children: "Última fecha de pago"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "lastPaidAt",
                        name: "lastPaidAt",
                        defaultValue: initialData?.lastPaidAt ? new Date(initialData.lastPaidAt).toISOString().split('T')[0] : "",
                        type: "date",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        id: "isAutoPay",
                        name: "isAutoPay",
                        defaultChecked: initialData?.isAutoPay,
                        className: "h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "isAutoPay",
                        className: "font-normal text-slate-700",
                        children: "Este pago está en Auto-Pay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-4",
                children: [
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        onClick: onCancel,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "w-full sm:w-auto",
                        children: initialData ? "Actualizar Gasto" : "Guardar Gasto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/TemplateForm.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/actions/data:85df5d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markWaterfallItemAsPaid",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60db6f9464dda5f5acc5580859a12f6a60720ed8af":"markWaterfallItemAsPaid"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60db6f9464dda5f5acc5580859a12f6a60720ed8af", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markWaterfallItemAsPaid");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQWtQc0Isb01BQUEifQ==
}),
"[project]/src/lib/actions/data:149043 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveWaterfallItemToNextWeek",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60867848a17572c668ca1e96ae399fd2291b86b367":"moveWaterfallItemToNextWeek"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60867848a17572c668ca1e96ae399fd2291b86b367", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveWaterfallItemToNextWeek");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQWdTc0Isd01BQUEifQ==
}),
"[project]/src/lib/actions/data:d65653 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateTemplate",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6056230f8d60ee00cb6c853fffd88d9eaf08fb9816":"updateTemplate"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6056230f8d60ee00cb6c853fffd88d9eaf08fb9816", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateTemplate");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQW1Lc0IsMkxBQUEifQ==
}),
"[project]/src/lib/actions/data:2922df [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markCreditCardAsPaid",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf":"markCreditCardAsPaid"},"src/lib/actions/creditCardActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markCreditCardAsPaid");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlZGl0Q2FyZEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0TmV4dFRlbXBsYXRlT2NjdXJyZW5jZSwgZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSB9IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FsZW5kYXJcIik7XG59O1xuXHJcbi8vIDEuIENSRUFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDcmVkaXRDYXJkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImJhbGFuY2VcIikpO1xyXG4gIGNvbnN0IGNyZWRpdExpbWl0ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJjcmVkaXRMaW1pdFwiKSk7XHJcbiAgLy8gU2kgbm8gdGUgcGFzYW4gdW4gcGFnbyBtw61uaW1vLCBwb3IgZGVmZWN0byBhc3VtZSBlbCAyJSBkZWwgYmFsYW5jZSBvIDBcclxuICBjb25zdCBtaW5pbXVtUGF5bWVudCA9IGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpID8gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJtaW5pbXVtUGF5bWVudFwiKSkgOiAoYmFsYW5jZSAqIDAuMDcpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBBQ1RVQUxJWkFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDcmVkaXRDYXJkKGlkLCBmb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcclxuICBjb25zdCBjcmVkaXRMaW1pdCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiY3JlZGl0TGltaXRcIikpO1xyXG4gIGNvbnN0IG1pbmltdW1QYXltZW50ID0gZm9ybURhdGEuZ2V0KFwibWluaW11bVBheW1lbnRcIikgPyBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpKSA6IChiYWxhbmNlICogMC4wMik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImR1ZURhdGVcIikpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWRpdENhcmQgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5jcmVkaXRDYXJkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogY3JlZGl0Q2FyZC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBFTElNSU5BUlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNyZWRpdENhcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWRpdCBjYXJkIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGNyZWRpdENhcmQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjcmVkaXQgY2FyZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGNyZWRpdCBjYXJkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0NyZWRpdENhcmRBc1BhaWQoY3JlZGl0Q2FyZElkLCBvY2N1cnJlbmNlRGF0ZUlucHV0ID0gbnVsbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBjcmVkaXRDYXJkSWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVkdWxlZEl0ZW0gPSB7XG4gICAgICBpZDogYGNyZWRpdC1jYXJkOiR7Y3JlZGl0Q2FyZC5pZH1gLFxuICAgICAga2luZDogXCJjcmVkaXQtY2FyZFwiLFxuICAgICAgZnJlcXVlbmN5OiBcIk1PTlRITFlcIixcbiAgICAgIGRheU9mTW9udGg6IGNyZWRpdENhcmQuZHVlRGF0ZSxcbiAgICAgIGFtb3VudDogY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCxcbiAgICB9O1xuICAgIGNvbnN0IG9jY3VycmVuY2VEYXRlID1cbiAgICAgIG9jY3VycmVuY2VEYXRlSW5wdXQgPyBuZXcgRGF0ZShvY2N1cnJlbmNlRGF0ZUlucHV0KSA6IGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2Uoc2NoZWR1bGVkSXRlbSwgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2FsY3VsYXRlIGNyZWRpdCBjYXJkIHBheW1lbnQgb2NjdXJyZW5jZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjeWNsZVJlZmVyZW5jZSA9IGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2Uoc2NoZWR1bGVkSXRlbSwgb2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IHByZXZpb3VzUGF5bWVudHMgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gcHJldmlvdXNQYXltZW50cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5hbW91bnRQYWlkLCAwKTtcbiAgICBjb25zdCBwZW5kaW5nQW1vdW50ID0gTWF0aC5tYXgoY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCAtIGFscmVhZHlQYWlkLCAwKTtcblxuICAgIGlmIChwZW5kaW5nQW1vdW50IDw9IDApIHtcbiAgICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgYW1vdW50UGFpZDogcGVuZGluZ0Ftb3VudCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIGRhdGVQYWlkOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgY3JlZGl0IGNhcmQgcGF5bWVudCBhcyBwYWlkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBtYXJrIGNyZWRpdCBjYXJkIHBheW1lbnQgYXMgcGFpZFwiIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBdUZzQixpTUFBQSJ9
}),
"[project]/src/components/dashboard/UpcomingCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$TemplateForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/TemplateForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:85df5d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:149043 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$d65653__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:d65653 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:2922df [app-ssr] (ecmascript) <text/javascript>");
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
;
const getFrequencyLabel = (payment)=>{
    if (payment.isCarryover) return "Saldo movido";
    if (payment.frequency === "MONTHLY") return `Día ${payment.dayOfMonth}`;
    if (payment.frequency === "WEEKLY") return "Cada semana";
    return "Cada 2 semanas";
};
function UpcomingCard({ upcomingPayments, totalUpcomingExpenses }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTemplate, setEditingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMarkAsPaid = async (payment)=>{
        const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
        const result = payment.kind === "credit-card" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markCreditCardAsPaid"])(payment.id.replace("credit-card:", ""), settlementDate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markWaterfallItemAsPaid"])(payment.id, settlementDate);
        if (result.success) {
            router.refresh();
        } else {
            alert("Hubo un error al registrar el pago.");
        }
    };
    const handleMoveToNextWeek = async (payment)=>{
        const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveWaterfallItemToNextWeek"])(payment.id, settlementDate);
        if (result.success) {
            router.refresh();
        } else {
            alert("Hubo un error al mover el gasto.");
        }
    };
    const handleEditSubmit = async (formData)=>{
        if (!editingTemplate) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$d65653__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateTemplate"])(editingTemplate.id, formData);
        if (result.success) {
            setIsOpen(false);
            setEditingTemplate(null);
            router.refresh();
        } else {
            alert("Hubo un error al actualizar el gasto.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "flex flex-row items-center justify-between pb-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-xl font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                            className: "h-5 w-5 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        "Próximos pagos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-slate-700",
                                children: [
                                    "$",
                                    totalUpcomingExpenses.toLocaleString("en-US", {
                                        minimumFractionDigits: 2
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-normal text-muted-foreground",
                                        children: "/ próximas 2 semanas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "pl-6",
                                                children: "Gasto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Próximo cobro"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Monto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "w-[50px] pr-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: [
                                        upcomingPayments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                colSpan: 4,
                                                className: "text-center text-slate-500 py-6",
                                                children: "No tienes pagos pendientes en las próximas 2 semanas."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        upcomingPayments.map((payment)=>{
                                            const occurrenceDate = new Date(payment.occurrenceDate);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: "hover:bg-slate-100/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "pl-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-base",
                                                                children: payment.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: payment.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(occurrenceDate, "EEE dd MMM")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: getFrequencyLabel(payment)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, this),
                                                            payment.isAutoPay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200",
                                                                children: "Auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right font-semibold text-base",
                                                        children: [
                                                            "$",
                                                            payment.amount.toLocaleString("en-US", {
                                                                minimumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right w-[50px] pr-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        className: "h-8 w-8 p-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                    align: "end",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>handleMarkAsPaid(payment),
                                                                            className: "font-medium text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 cursor-pointer",
                                                                            children: "Marcar como pagado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        payment.kind !== "credit-card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>handleMoveToNextWeek(payment),
                                                                                    className: "font-medium text-amber-600 focus:text-amber-700 focus:bg-amber-50 cursor-pointer",
                                                                                    children: "Mover a la siguiente semana"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                                    lineNumber: 136,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>{
                                                                                        setEditingTemplate(payment);
                                                                                        setIsOpen(true);
                                                                                    },
                                                                                    className: "cursor-pointer",
                                                                                    children: "Editar gasto"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                                    lineNumber: 142,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${payment.id}-${occurrenceDate.toISOString()}`, true, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Editar regla de pago"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$TemplateForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            initialData: editingTemplate,
                            onSubmit: handleEditSubmit,
                            onCancel: ()=>setIsOpen(false)
                        }, editingTemplate ? editingTemplate.id : "upcoming-template", false, {
                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/badge.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/lib/actions/data:ae5b1e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deferWaterfallItem",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"702f7715574f14001cea30a327100f71eaebfec823":"deferWaterfallItem"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("702f7715574f14001cea30a327100f71eaebfec823", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deferWaterfallItem");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlTQStRc0IsK0xBQUEifQ==
}),
"[project]/src/components/dashboard/WaterfallCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaterfallCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$ae5b1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:ae5b1e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:85df5d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:149043 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:2922df [app-ssr] (ecmascript) <text/javascript>");
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
;
function WaterfallCard({ waterfallData, finalRemainingS4, standardWeeklyIncome }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedDetail, setSelectedDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [partialAmount, setPartialAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const isDanger = finalRemainingS4 <= 0;
    const isHealthy = finalRemainingS4 >= 1000;
    const resetDialog = ()=>{
        setSelectedDetail(null);
        setPartialAmount("");
    };
    const handleMarkAsPaid = async ()=>{
        if (!selectedDetail) return;
        const result = selectedDetail.kind === "credit-card" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markCreditCardAsPaid"])(selectedDetail.templateId.replace("credit-card:", ""), selectedDetail.occurrenceDate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markWaterfallItemAsPaid"])(selectedDetail.templateId, selectedDetail.occurrenceDate);
        if (result.success) {
            resetDialog();
            router.refresh();
        } else {
            alert("No se pudo registrar el pago.");
        }
    };
    const handleMoveToNextWeek = async ()=>{
        if (!selectedDetail) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$ae5b1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deferWaterfallItem"])(selectedDetail.templateId, selectedDetail.occurrenceDate, partialAmount);
        if (result.success) {
            resetDialog();
            router.refresh();
        } else {
            alert("No se pudo mover el restante a la proxima semana.");
        }
    };
    const handleMoveWithoutPaying = async ()=>{
        if (!selectedDetail) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveWaterfallItemToNextWeek"])(selectedDetail.templateId, selectedDetail.occurrenceDate);
        if (result.success) {
            resetDialog();
            router.refresh();
        } else {
            alert("No se pudo mover el gasto a la proxima semana.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: `overflow-hidden border-2 shadow-lg transition-colors ${isDanger ? "border-red-500 bg-red-50" : isHealthy ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                    type: "single",
                    collapsible: true,
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: "cascada",
                        className: "border-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: `px-6 py-6 hover:no-underline transition-all ${isDanger ? "hover:bg-red-100/50" : isHealthy ? "hover:bg-emerald-100/50" : "hover:bg-slate-50"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center w-full pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: `h-6 w-6 ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-500"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `text-xl font-bold tracking-tight ${isDanger ? "text-red-900" : isHealthy ? "text-emerald-900" : "text-slate-900"}`,
                                                    children: "Liquidez Proyectada a 4 Semanas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-3xl font-extrabold ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-700"}`,
                                                    children: [
                                                        "$",
                                                        finalRemainingS4.toLocaleString("en-US", {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Tu saldo al terminar el mes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "p-0 border-t bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100",
                                    children: waterfallData.map((data)=>{
                                        const weekDanger = data.restante <= 0;
                                        const hasExpenses = data.details && data.details.length > 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 space-y-4 flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base md:text-lg font-semibold text-slate-900 truncate whitespace-nowrap",
                                                                children: data.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 122,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex min-h-7 justify-end",
                                                            children: data.weekNumber !== 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "shrink-0 text-xs text-blue-600 border-blue-100 bg-blue-50",
                                                                children: [
                                                                    "+$",
                                                                    standardWeeklyIncome.toLocaleString("en-US"),
                                                                    " Ingreso"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "invisible shrink-0 text-xs",
                                                                children: [
                                                                    "+$",
                                                                    standardWeeklyIncome.toLocaleString("en-US"),
                                                                    " Ingreso"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 132,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-4 rounded-xl border ${weekDanger ? "border-red-100 bg-red-50" : "border-slate-100 bg-slate-50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-2xl font-bold ${weekDanger ? "text-red-600" : "text-slate-900"}`,
                                                            children: [
                                                                "$",
                                                                data.restante.toLocaleString("en-US", {
                                                                    minimumFractionDigits: 2
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-1",
                                                            children: "Saldo acumulado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow",
                                                    children: hasExpenses ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-sm text-slate-600 font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "h-4 w-4 text-amber-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Gastos pendientes: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-900",
                                                                        children: [
                                                                            "-$",
                                                                            data.expensesInWeek.toLocaleString("en-US")
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 50
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 151,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 space-y-1",
                                                                children: data.details.map((detail, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            disabled: detail.isPaid,
                                                                            onClick: ()=>{
                                                                                if (detail.isPaid) return;
                                                                                setSelectedDetail(detail);
                                                                                setPartialAmount(detail.amount.toString());
                                                                            },
                                                                            className: `w-full text-xs flex justify-between text-left ${detail.isPaid ? "text-slate-300 line-through cursor-default" : detail.isMovedWithoutPayment ? "text-amber-600 hover:text-amber-700 cursor-pointer" : "text-slate-500 hover:text-slate-900 cursor-pointer"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "• ",
                                                                                        detail.name,
                                                                                        detail.isPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] ml-1 no-underline",
                                                                                            children: "(Pagado)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                                            lineNumber: 177,
                                                                                            columnNumber: 57
                                                                                        }, this),
                                                                                        detail.isDeferred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] ml-1 no-underline",
                                                                                            children: "(Movido)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                                            lineNumber: 178,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                                    lineNumber: 175,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "$",
                                                                                        detail.amount
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 156,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-sm text-emerald-600 font-medium bg-emerald-50/50 p-2 rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 188,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Semana libre de pagos"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                                lineNumber: 189,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, data.weekNumber, true, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedDetail,
                onOpenChange: (open)=>{
                    if (!open) {
                        resetDialog();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: selectedDetail?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Puedes pagarlo completo, registrar un pago parcial y mover el resto, o moverlo completo a la proxima semana sin marcarlo como pagado."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "partialAmount",
                                            children: "Monto pagado ahora"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "partialAmount",
                                            type: "number",
                                            step: "0.01",
                                            min: "0",
                                            max: selectedDetail?.amount ?? undefined,
                                            value: partialAmount,
                                            onChange: (event)=>setPartialAmount(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                selectedDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: "Si lo mueves, esta semana se libera y el saldo pendiente aparecera en la siguiente sin marcarse como pagado hasta que lo registres."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex-col gap-3 sm:flex-col sm:items-stretch",
                            children: [
                                selectedDetail?.kind !== "credit-card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: handleMoveToNextWeek,
                                            children: "Pagar parcial y mover resto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            className: "w-full",
                                            onClick: handleMoveWithoutPaying,
                                            children: "Mover a la siguiente semana"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: handleMarkAsPaid,
                                    children: "Marcar todo como pagado"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/WaterfallCard.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_4621227d._.js.map