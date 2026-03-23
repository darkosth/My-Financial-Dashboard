(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/table.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
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
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/forms/TemplateForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplateForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TemplateForm({ initialData = null, onSubmit, onCancel }) {
    _s();
    const [freq, setFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.frequency || "MONTHLY");
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: onSubmit,
        ref: formRef,
        className: "grid gap-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "name",
                                children: "Nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "amount",
                                children: "Monto ($)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "category",
                                children: "Categoría"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "category",
                                name: "category",
                                defaultValue: initialData?.category || "OTHER",
                                className: "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "HOUSING",
                                        children: "Vivienda"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "TRANSPORTATION",
                                        children: "Transporte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "FOOD",
                                        children: "Comida"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "UTILITIES",
                                        children: "Servicios"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "INSURANCE",
                                        children: "Seguros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "SUBSCRIPTIONS",
                                        children: "Suscripciones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MEDICAL",
                                        children: "Médico / Escuela"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "frequency",
                                children: "Frecuencia"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "frequency",
                                name: "frequency",
                                value: freq,
                                onChange: (e)=>setFreq(e.target.value),
                                className: "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MONTHLY",
                                        children: "Mensual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "WEEKLY",
                                        children: "Semanal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            freq === "MONTHLY" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dayOfMonth",
                        children: "Día de cobro (1-31)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "lastPaidAt",
                        children: "Última fecha de pago"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-4",
                children: [
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        onClick: onCancel,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/TemplateForm.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(TemplateForm, "hhImdfjMAs2GS+Kp9+HgTVxbEzY=");
_c = TemplateForm;
var _c;
__turbopack_context__.k.register(_c, "TemplateForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/actions/data:85df5d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markWaterfallItemAsPaid",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60db6f9464dda5f5acc5580859a12f6a60720ed8af":"markWaterfallItemAsPaid"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60db6f9464dda5f5acc5580859a12f6a60720ed8af", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markWaterfallItemAsPaid");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQWtQc0Isb01BQUEifQ==
}),
"[project]/src/lib/actions/data:149043 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveWaterfallItemToNextWeek",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60867848a17572c668ca1e96ae399fd2291b86b367":"moveWaterfallItemToNextWeek"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60867848a17572c668ca1e96ae399fd2291b86b367", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveWaterfallItemToNextWeek");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQWdTc0Isd01BQUEifQ==
}),
"[project]/src/lib/actions/data:d65653 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateTemplate",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6056230f8d60ee00cb6c853fffd88d9eaf08fb9816":"updateTemplate"},"src/lib/actions/templateActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6056230f8d60ee00cb6c853fffd88d9eaf08fb9816", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateTemplate");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcGxhdGVBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG4gIGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2UsXG4gIGdldFByb2plY3Rpb25XZWVrU3RhcnQsXG4gIGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2UsXG59IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvdGVtcGxhdGVzXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9jYWxlbmRhclwiKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUFtb3VudCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYW1vdW50KSA/IGFtb3VudCA6IDA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2UoeyB0ZW1wbGF0ZUlkLCBvY2N1cnJlbmNlRGF0ZSwgYW1vdW50UGFpZCwgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWsgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBwcmlzbWEudGVtcGxhdGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogdGVtcGxhdGVJZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICB9KTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgfVxuXG4gIGNvbnN0IGN5Y2xlUmVmZXJlbmNlID0gZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSh0ZW1wbGF0ZSwgb2NjdXJyZW5jZURhdGUpO1xuICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYWlkQW1vdW50U29GYXIgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gIGNvbnN0IHJlbWFpbmluZ0JlZm9yZUFjdGlvbiA9IE1hdGgubWF4KHRlbXBsYXRlLmFtb3VudCAtIHBhaWRBbW91bnRTb0ZhciwgMCk7XG4gIGNvbnN0IHNhZmVBbW91bnRQYWlkID0gTWF0aC5taW4oTWF0aC5tYXgoYW1vdW50UGFpZCwgMCksIHJlbWFpbmluZ0JlZm9yZUFjdGlvbik7XG4gIGNvbnN0IHJlbWFpbmluZ0FmdGVyUGF5bWVudCA9IE1hdGgubWF4KHJlbWFpbmluZ0JlZm9yZUFjdGlvbiAtIHNhZmVBbW91bnRQYWlkLCAwKTtcblxuICBpZiAoc2FmZUFtb3VudFBhaWQgPiAwKSB7XG4gICAgYXdhaXQgcHJpc21hLmhpc3RvcnkuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgIGFtb3VudFBhaWQ6IHNhZmVBbW91bnRQYWlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgZGF0ZVBhaWQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG1vdmVSZW1haW5pbmdUb05leHRXZWVrICYmIHJlbWFpbmluZ0FmdGVyUGF5bWVudCA+IDApIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZF9vcmlnaW5DeWNsZVJlZmVyZW5jZToge1xuICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgIG9yaWdpbkN5Y2xlUmVmZXJlbmNlOiBjeWNsZVJlZmVyZW5jZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVtYWluaW5nQW1vdW50OiByZW1haW5pbmdBZnRlclBheW1lbnQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldFdlZWtTdGFydDogYWRkRGF5cyhnZXRQcm9qZWN0aW9uV2Vla1N0YXJ0KG9jY3VycmVuY2VEYXRlKSwgNyksXG4gICAgICAgIHJlbWFpbmluZ0Ftb3VudDogcmVtYWluaW5nQWZ0ZXJQYXltZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwcmlzbWEucGF5bWVudENhcnJ5b3Zlci5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkLFxuICAgICAgICBvcmlnaW5DeWNsZVJlZmVyZW5jZTogY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFtb3ZlUmVtYWluaW5nVG9OZXh0V2VlayB8fCByZW1haW5pbmdBZnRlclBheW1lbnQgPD0gMCkge1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHRlbXBsYXRlLmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhc3RQYWlkQXQ6IG9jY3VycmVuY2VEYXRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcbiAgY29uc3QgZnJlcXVlbmN5ID0gZm9ybURhdGEuZ2V0KFwiZnJlcXVlbmN5XCIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBpc0F1dG9QYXkgPSBmb3JtRGF0YS5nZXQoXCJpc0F1dG9QYXlcIikgPT09IFwib25cIjtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGZvcm1EYXRhLmdldChcImRheU9mTW9udGhcIikgPyBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpKSA6IG51bGw7XG5cbiAgbGV0IGxhc3RQYWlkQXQgPSBudWxsO1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSkge1xuICAgIGxhc3RQYWlkQXQgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJsYXN0UGFpZEF0XCIpKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUgdG8gZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0ZW1wbGF0ZVwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlbXBsYXRlKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUoaWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XG4gIGNvbnN0IGZyZXF1ZW5jeSA9IGZvcm1EYXRhLmdldChcImZyZXF1ZW5jeVwiKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3QgaXNBdXRvUGF5ID0gZm9ybURhdGEuZ2V0KFwiaXNBdXRvUGF5XCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IGRheU9mTW9udGggPSBmb3JtRGF0YS5nZXQoXCJkYXlPZk1vbnRoXCIpID8gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiZGF5T2ZNb250aFwiKSkgOiBudWxsO1xuXG4gIGxldCBsYXN0UGFpZEF0ID0gbnVsbDtcbiAgaWYgKGZvcm1EYXRhLmdldChcImxhc3RQYWlkQXRcIikpIHtcbiAgICBsYXN0UGFpZEF0ID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwibGFzdFBhaWRBdFwiKSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEudGVtcGxhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZS5pZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlzQXV0b1BheSxcbiAgICAgICAgZGF5T2ZNb250aCxcbiAgICAgICAgbGFzdFBhaWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHRlbXBsYXRlXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUGFpZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHByaXNtYS50ZW1wbGF0ZS5maW5kRmlyc3QoeyB3aGVyZTogeyBpZCwgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCB9IH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhc3RvIG5vIGVuY29udHJhZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2NjdXJyZW5jZURhdGUgPSBnZXROZXh0VGVtcGxhdGVPY2N1cnJlbmNlKHRlbXBsYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGNhbGN1bGFyIGxhIHByw7N4aW1hIG9jdXJyZW5jaWEgZGVsIGdhc3RvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gYXdhaXQgcHJpc21hLmhpc3RvcnkuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG4gICAgY29uc3Qgb3V0c3RhbmRpbmdBbW91bnQgPSBNYXRoLm1heCh0ZW1wbGF0ZS5hbW91bnQgLSBwYWlkQW1vdW50LCAwKTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZDogaWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZSxcbiAgICAgIGFtb3VudFBhaWQ6IG91dHN0YW5kaW5nQW1vdW50LFxuICAgICAgbW92ZVJlbWFpbmluZ1RvTmV4dFdlZWs6IGZhbHNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtYXJraW5nIHRlbXBsYXRlIGFzIHBhaWQ6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIG1hcmsgYXMgcGFpZFwiIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtXYXRlcmZhbGxJdGVtQXNQYWlkKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJpc21hLnRlbXBsYXRlLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiB0ZW1wbGF0ZUlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0gfSk7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FzdG8gbm8gZW5jb250cmFkb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5UGFpZCA9IGF3YWl0IHByaXNtYS5oaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQsXG4gICAgICAgIGN5Y2xlUmVmZXJlbmNlOiBnZXRUZW1wbGF0ZUN5Y2xlUmVmZXJlbmNlKHRlbXBsYXRlLCBvY2N1cnJlbmNlRGF0ZSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHBhaWRBbW91bnQgPSBhbHJlYWR5UGFpZC5yZWR1Y2UoKGFjYywgcmVjb3JkKSA9PiBhY2MgKyByZWNvcmQuYW1vdW50UGFpZCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2V0dGxlVGVtcGxhdGVPY2N1cnJlbmNlKHtcbiAgICAgIHRlbXBsYXRlSWQsXG4gICAgICBvY2N1cnJlbmNlRGF0ZTogbmV3IERhdGUob2NjdXJyZW5jZURhdGUpLFxuICAgICAgYW1vdW50UGFpZDogTWF0aC5tYXgodGVtcGxhdGUuYW1vdW50IC0gcGFpZEFtb3VudCwgMCksXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogZmFsc2UsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgd2F0ZXJmYWxsIGl0ZW0gYXMgcGFpZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbWFyayB3YXRlcmZhbGwgaXRlbSBhcyBwYWlkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJXYXRlcmZhbGxJdGVtKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlLCBhbW91bnRQYWlkSW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvY2N1cnJlbmNlID0gbmV3IERhdGUob2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSBub3JtYWxpemVBbW91bnQoYW1vdW50UGFpZElucHV0KTtcblxuICAgIHJldHVybiBhd2FpdCBzZXR0bGVUZW1wbGF0ZU9jY3VycmVuY2Uoe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIG9jY3VycmVuY2VEYXRlOiBvY2N1cnJlbmNlLFxuICAgICAgYW1vdW50UGFpZCxcbiAgICAgIG1vdmVSZW1haW5pbmdUb05leHRXZWVrOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWZlcnJpbmcgd2F0ZXJmYWxsIGl0ZW06XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGRlZmVyIHdhdGVyZmFsbCBpdGVtXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVdhdGVyZmFsbEl0ZW1Ub05leHRXZWVrKHRlbXBsYXRlSWQsIG9jY3VycmVuY2VEYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHNldHRsZVRlbXBsYXRlT2NjdXJyZW5jZSh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgb2NjdXJyZW5jZURhdGU6IG5ldyBEYXRlKG9jY3VycmVuY2VEYXRlKSxcbiAgICAgIGFtb3VudFBhaWQ6IDAsXG4gICAgICBtb3ZlUmVtYWluaW5nVG9OZXh0V2VlazogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbW92aW5nIHdhdGVyZmFsbCBpdGVtIHRvIG5leHQgd2VlazpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gbW92ZSB3YXRlcmZhbGwgaXRlbSB0byBuZXh0IHdlZWtcIiB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQW1Lc0IsMkxBQUEifQ==
}),
"[project]/src/lib/actions/data:2922df [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markCreditCardAsPaid",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf":"markCreditCardAsPaid"},"src/lib/actions/creditCardActions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markCreditCardAsPaid");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3JlZGl0Q2FyZEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZ2V0TmV4dFRlbXBsYXRlT2NjdXJyZW5jZSwgZ2V0VGVtcGxhdGVDeWNsZVJlZmVyZW5jZSB9IGZyb20gXCJAL2xpYi93YXRlcmZhbGxDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQ29udGV4dCB9IGZyb20gXCJAL2xpYi93b3Jrc3BhY2VDb250ZXh0XCI7XG5cbmNvbnN0IHJldmFsaWRhdGVGaW5hbmNlVmlld3MgPSAoKSA9PiB7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FsZW5kYXJcIik7XG59O1xuXHJcbi8vIDEuIENSRUFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDcmVkaXRDYXJkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImJhbGFuY2VcIikpO1xyXG4gIGNvbnN0IGNyZWRpdExpbWl0ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJjcmVkaXRMaW1pdFwiKSk7XHJcbiAgLy8gU2kgbm8gdGUgcGFzYW4gdW4gcGFnbyBtw61uaW1vLCBwb3IgZGVmZWN0byBhc3VtZSBlbCAyJSBkZWwgYmFsYW5jZSBvIDBcclxuICBjb25zdCBtaW5pbXVtUGF5bWVudCA9IGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpID8gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJtaW5pbXVtUGF5bWVudFwiKSkgOiAoYmFsYW5jZSAqIDAuMDcpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBBQ1RVQUxJWkFSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDcmVkaXRDYXJkKGlkLCBmb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcclxuICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJiYWxhbmNlXCIpKTtcclxuICBjb25zdCBjcmVkaXRMaW1pdCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiY3JlZGl0TGltaXRcIikpO1xyXG4gIGNvbnN0IG1pbmltdW1QYXltZW50ID0gZm9ybURhdGEuZ2V0KFwibWluaW11bVBheW1lbnRcIikgPyBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcIm1pbmltdW1QYXltZW50XCIpKSA6IChiYWxhbmNlICogMC4wMik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImR1ZURhdGVcIikpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY3RpdmVXb3Jrc3BhY2UgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWRpdENhcmQgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5jcmVkaXRDYXJkLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogY3JlZGl0Q2FyZC5pZCB9LFxuICAgICAgZGF0YTogeyBuYW1lLCBiYWxhbmNlLCBjcmVkaXRMaW1pdCwgbWluaW11bVBheW1lbnQsIGR1ZURhdGUgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNyZWRpdCBjYXJkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjcmVkaXQgY2FyZFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBFTElNSU5BUlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkLCB3b3Jrc3BhY2VJZDogYWN0aXZlV29ya3NwYWNlLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNyZWRpdENhcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWRpdCBjYXJkIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGNyZWRpdENhcmQuaWQgfSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlRmluYW5jZVZpZXdzKCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjcmVkaXQgY2FyZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGNyZWRpdCBjYXJkXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0NyZWRpdENhcmRBc1BhaWQoY3JlZGl0Q2FyZElkLCBvY2N1cnJlbmNlRGF0ZUlucHV0ID0gbnVsbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWN0aXZlV29ya3NwYWNlIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlckNvbnRleHQoKTtcbiAgICBjb25zdCBjcmVkaXRDYXJkID0gYXdhaXQgcHJpc21hLmNyZWRpdENhcmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBjcmVkaXRDYXJkSWQsIHdvcmtzcGFjZUlkOiBhY3RpdmVXb3Jrc3BhY2UuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghY3JlZGl0Q2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGl0IGNhcmQgbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVkdWxlZEl0ZW0gPSB7XG4gICAgICBpZDogYGNyZWRpdC1jYXJkOiR7Y3JlZGl0Q2FyZC5pZH1gLFxuICAgICAga2luZDogXCJjcmVkaXQtY2FyZFwiLFxuICAgICAgZnJlcXVlbmN5OiBcIk1PTlRITFlcIixcbiAgICAgIGRheU9mTW9udGg6IGNyZWRpdENhcmQuZHVlRGF0ZSxcbiAgICAgIGFtb3VudDogY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCxcbiAgICB9O1xuICAgIGNvbnN0IG9jY3VycmVuY2VEYXRlID1cbiAgICAgIG9jY3VycmVuY2VEYXRlSW5wdXQgPyBuZXcgRGF0ZShvY2N1cnJlbmNlRGF0ZUlucHV0KSA6IGdldE5leHRUZW1wbGF0ZU9jY3VycmVuY2Uoc2NoZWR1bGVkSXRlbSwgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoIW9jY3VycmVuY2VEYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2FsY3VsYXRlIGNyZWRpdCBjYXJkIHBheW1lbnQgb2NjdXJyZW5jZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjeWNsZVJlZmVyZW5jZSA9IGdldFRlbXBsYXRlQ3ljbGVSZWZlcmVuY2Uoc2NoZWR1bGVkSXRlbSwgb2NjdXJyZW5jZURhdGUpO1xuICAgIGNvbnN0IHByZXZpb3VzUGF5bWVudHMgPSBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGFscmVhZHlQYWlkID0gcHJldmlvdXNQYXltZW50cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5hbW91bnRQYWlkLCAwKTtcbiAgICBjb25zdCBwZW5kaW5nQW1vdW50ID0gTWF0aC5tYXgoY3JlZGl0Q2FyZC5taW5pbXVtUGF5bWVudCAtIGFscmVhZHlQYWlkLCAwKTtcblxuICAgIGlmIChwZW5kaW5nQW1vdW50IDw9IDApIHtcbiAgICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuY3JlZGl0Q2FyZFBheW1lbnRIaXN0b3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWRpdENhcmRJZCxcbiAgICAgICAgYW1vdW50UGFpZDogcGVuZGluZ0Ftb3VudCxcbiAgICAgICAgd29ya3NwYWNlSWQ6IGFjdGl2ZVdvcmtzcGFjZS5pZCxcbiAgICAgICAgY3ljbGVSZWZlcmVuY2UsXG4gICAgICAgIGRhdGVQYWlkOiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVGaW5hbmNlVmlld3MoKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcmtpbmcgY3JlZGl0IGNhcmQgcGF5bWVudCBhcyBwYWlkOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBtYXJrIGNyZWRpdCBjYXJkIHBheW1lbnQgYXMgcGFpZFwiIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBdUZzQixpTUFBQSJ9
}),
"[project]/src/components/dashboard/UpcomingCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$TemplateForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/TemplateForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:85df5d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:149043 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$d65653__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:d65653 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:2922df [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
const getFrequencyLabel = (payment)=>{
    if (payment.isCarryover) return "Saldo movido";
    if (payment.frequency === "MONTHLY") return `Día ${payment.dayOfMonth}`;
    if (payment.frequency === "WEEKLY") return "Cada semana";
    return "Cada 2 semanas";
};
function UpcomingCard({ upcomingPayments, totalUpcomingExpenses }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTemplate, setEditingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMarkAsPaid = async (payment)=>{
        const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
        const result = payment.kind === "credit-card" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markCreditCardAsPaid"])(payment.id.replace("credit-card:", ""), settlementDate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markWaterfallItemAsPaid"])(payment.id, settlementDate);
        if (result.success) {
            router.refresh();
        } else {
            alert("Hubo un error al registrar el pago.");
        }
    };
    const handleMoveToNextWeek = async (payment)=>{
        const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveWaterfallItemToNextWeek"])(payment.id, settlementDate);
        if (result.success) {
            router.refresh();
        } else {
            alert("Hubo un error al mover el gasto.");
        }
    };
    const handleEditSubmit = async (formData)=>{
        if (!editingTemplate) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$d65653__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateTemplate"])(editingTemplate.id, formData);
        if (result.success) {
            setIsOpen(false);
            setEditingTemplate(null);
            router.refresh();
        } else {
            alert("Hubo un error al actualizar el gasto.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "flex flex-row items-center justify-between pb-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-xl font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-slate-700",
                                children: [
                                    "$",
                                    totalUpcomingExpenses.toLocaleString("en-US", {
                                        minimumFractionDigits: 2
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "pl-6",
                                                children: "Gasto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Próximo cobro"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Monto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: [
                                        upcomingPayments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
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
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: "hover:bg-slate-100/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "pl-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-base",
                                                                children: payment.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(occurrenceDate, "EEE dd MMM")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: getFrequencyLabel(payment)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, this),
                                                            payment.isAutoPay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right w-[50px] pr-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        className: "h-8 w-8 p-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                    align: "end",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>handleMarkAsPaid(payment),
                                                                            className: "font-medium text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 cursor-pointer",
                                                                            children: "Marcar como pagado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        payment.kind !== "credit-card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>handleMoveToNextWeek(payment),
                                                                                    className: "font-medium text-amber-600 focus:text-amber-700 focus:bg-amber-50 cursor-pointer",
                                                                                    children: "Mover a la siguiente semana"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/UpcomingCard.jsx",
                                                                                    lineNumber: 136,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$TemplateForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(UpcomingCard, "I6nlczmGHXU0KGXw2J9uK2x346I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UpcomingCard;
var _c;
__turbopack_context__.k.register(_c, "UpcomingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/waterfallCalculations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WEEK_STARTS_ON",
    ()=>WEEK_STARTS_ON,
    "calculateWaterfall",
    ()=>calculateWaterfall,
    "getNextTemplateOccurrence",
    ()=>getNextTemplateOccurrence,
    "getProjectionWeekInterval",
    ()=>getProjectionWeekInterval,
    "getProjectionWeekStart",
    ()=>getProjectionWeekStart,
    "getTemplateCycleReference",
    ()=>getTemplateCycleReference,
    "getTemplateOccurrenceInInterval",
    ()=>getTemplateOccurrenceInInterval,
    "getTemplatePaidAmountForOccurrence",
    ()=>getTemplatePaidAmountForOccurrence,
    "getUpcomingPendingPayments",
    ()=>getUpcomingPendingPayments,
    "isTemplatePaidForOccurrence",
    ()=>isTemplatePaidForOccurrence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDaysInMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isWithinInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/setDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
const WEEK_STARTS_ON = 4;
const normalizeDate = (value)=>{
    if (!value) return null;
    return typeof value === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(value) : new Date(value);
};
const toStartOfDay = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(normalizeDate(value) ?? new Date());
const getCycleKey = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(toStartOfDay(date), "yyyy-MM-dd");
const getWeekKey = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(toStartOfDay(date), "yyyy-MM-dd");
const getItemKind = (item)=>item.kind ?? "template";
const getPaymentOwnerKey = (item)=>`${getItemKind(item)}:${item.id}`;
const getMonthlyOccurrenceForMonth = (baseDate, dayOfMonth)=>{
    const safeDay = Math.min(dayOfMonth, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(baseDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDate"])(baseDate, safeDay));
};
const getRecurringStepInDays = (frequency)=>{
    if (frequency === "WEEKLY") return 7;
    if (frequency === "BIWEEKLY") return 14;
    return null;
};
const getTemplatePaymentSummaryMap = (historyRecords = [])=>{
    const summary = new Map();
    historyRecords.filter((record)=>record.templateId && record.cycleReference).forEach((record)=>{
        const key = `template:${record.templateId}:${getCycleKey(record.cycleReference)}`;
        summary.set(key, (summary.get(key) ?? 0) + (record.amountPaid ?? 0));
    });
    return summary;
};
const getCreditCardPaymentSummaryMap = (paymentRecords = [])=>{
    const summary = new Map();
    paymentRecords.filter((record)=>record.creditCardId && record.cycleReference).forEach((record)=>{
        const key = `credit-card:credit-card:${record.creditCardId}:${getCycleKey(record.cycleReference)}`;
        summary.set(key, (summary.get(key) ?? 0) + (record.amountPaid ?? 0));
    });
    return summary;
};
const getCombinedPaymentSummaryMap = (templateHistory = [], creditCardHistory = [])=>{
    const summary = getTemplatePaymentSummaryMap(templateHistory);
    const creditCardSummary = getCreditCardPaymentSummaryMap(creditCardHistory);
    for (const [key, value] of creditCardSummary.entries()){
        summary.set(key, value);
    }
    return summary;
};
const getCarryoverMaps = (carryovers = [])=>{
    const byOriginCycle = new Map();
    const byTargetWeek = new Map();
    carryovers.forEach((carryover)=>{
        const originKey = `template:${carryover.templateId}:${getCycleKey(carryover.originCycleReference)}`;
        const targetWeekKey = getWeekKey(carryover.targetWeekStart);
        byOriginCycle.set(originKey, carryover);
        const currentWeek = byTargetWeek.get(targetWeekKey) ?? [];
        currentWeek.push(carryover);
        byTargetWeek.set(targetWeekKey, currentWeek);
    });
    return {
        byOriginCycle,
        byTargetWeek
    };
};
const getProjectionWeekStart = (referenceDate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(toStartOfDay(referenceDate), {
        weekStartsOn: WEEK_STARTS_ON
    });
const getProjectionWeekInterval = (referenceDate, weekOffset = 0)=>{
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(getProjectionWeekStart(referenceDate), weekOffset * 7);
    return {
        start,
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(start, 6)
    };
};
const getTemplateCycleReference = (item, occurrenceDate)=>{
    if (item.frequency === "MONTHLY") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(toStartOfDay(occurrenceDate));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(toStartOfDay(occurrenceDate), {
        weekStartsOn: WEEK_STARTS_ON
    });
};
const getFollowingOccurrence = (item, occurrenceDate)=>{
    const normalizedOccurrence = toStartOfDay(occurrenceDate);
    if (item.frequency === "MONTHLY") {
        return getMonthlyOccurrenceForMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(normalizedOccurrence, 1), item.dayOfMonth);
    }
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!stepInDays) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(normalizedOccurrence, stepInDays);
};
const getNextTemplateOccurrence = (item, referenceDate)=>{
    const normalizedReferenceDate = toStartOfDay(referenceDate);
    if (item.frequency === "MONTHLY") {
        let occurrenceDate = getMonthlyOccurrenceForMonth(normalizedReferenceDate, item.dayOfMonth);
        if (occurrenceDate < normalizedReferenceDate) {
            occurrenceDate = getMonthlyOccurrenceForMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(normalizedReferenceDate, 1), item.dayOfMonth);
        }
        return occurrenceDate;
    }
    const anchorDate = normalizeDate(item.lastPaidAt);
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!anchorDate || !stepInDays) return null;
    const normalizedAnchorDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(anchorDate);
    const daysFromAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(normalizedReferenceDate, normalizedAnchorDate);
    const stepsFromAnchor = Math.max(0, Math.ceil(daysFromAnchor / stepInDays));
    let occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(normalizedAnchorDate, stepsFromAnchor * stepInDays);
    while(occurrenceDate < normalizedReferenceDate){
        occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(occurrenceDate, stepInDays);
    }
    return occurrenceDate;
};
const getTemplateOccurrenceInInterval = (item, interval)=>{
    if (item.frequency === "MONTHLY") {
        const candidates = [
            getMonthlyOccurrenceForMonth(interval.start, item.dayOfMonth),
            getMonthlyOccurrenceForMonth(interval.end, item.dayOfMonth)
        ];
        return candidates.find((date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(date, interval)) ?? null;
    }
    const anchorDate = normalizeDate(item.lastPaidAt);
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!anchorDate || !stepInDays) return null;
    const normalizedAnchorDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(anchorDate);
    const daysFromAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(interval.start, normalizedAnchorDate);
    const stepsFromAnchor = Math.floor(daysFromAnchor / stepInDays);
    let occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(normalizedAnchorDate, stepsFromAnchor * stepInDays);
    while(occurrenceDate < interval.start){
        occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(occurrenceDate, stepInDays);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(occurrenceDate, interval) ? occurrenceDate : null;
};
const getTemplatePaidAmountForOccurrence = (item, occurrenceDate, templateHistory = [], creditCardHistory = [])=>{
    const summaryMap = templateHistory instanceof Map ? templateHistory : getCombinedPaymentSummaryMap(templateHistory, creditCardHistory);
    const cycleReference = getTemplateCycleReference(item, occurrenceDate);
    return summaryMap.get(`${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`) ?? 0;
};
const isTemplatePaidForOccurrence = (item, occurrenceDate, templateHistory = [], creditCardHistory = [])=>getTemplatePaidAmountForOccurrence(item, occurrenceDate, templateHistory, creditCardHistory) >= item.amount;
const getUpcomingPendingPayments = ({ templates, historyRecords = [], creditCardHistoryRecords = [], carryovers = [], today, weeksAhead = 2 })=>{
    const paymentSummaryMap = getCombinedPaymentSummaryMap(historyRecords, creditCardHistoryRecords);
    const { byOriginCycle, byTargetWeek } = getCarryoverMaps(carryovers);
    const rangeStart = toStartOfDay(today);
    const rangeEnd = getProjectionWeekInterval(today, weeksAhead - 1).end;
    const upcomingPayments = [];
    templates.forEach((item)=>{
        let occurrenceDate = getNextTemplateOccurrence(item, rangeStart);
        while(occurrenceDate && occurrenceDate <= rangeEnd){
            const cycleReference = getTemplateCycleReference(item, occurrenceDate);
            const cycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`;
            const paidAmount = paymentSummaryMap.get(cycleKey) ?? 0;
            const carryover = getItemKind(item) === "template" ? byOriginCycle.get(cycleKey) : null;
            const deferredAmount = carryover?.remainingAmount ?? 0;
            const pendingAmount = Math.max(item.amount - paidAmount - deferredAmount, 0);
            if (pendingAmount > 0) {
                upcomingPayments.push({
                    ...item,
                    kind: getItemKind(item),
                    occurrenceDate,
                    amount: pendingAmount
                });
            }
            occurrenceDate = getFollowingOccurrence(item, occurrenceDate);
        }
    });
    for (const [weekKey, weekCarryovers] of byTargetWeek.entries()){
        const targetWeekStart = toStartOfDay(weekKey);
        if (targetWeekStart < rangeStart || targetWeekStart > rangeEnd) {
            continue;
        }
        weekCarryovers.forEach((carryover)=>{
            const item = templates.find((entry)=>getItemKind(entry) === "template" && entry.id === carryover.templateId);
            if (!item) return;
            upcomingPayments.push({
                ...item,
                kind: "template",
                amount: carryover.remainingAmount,
                occurrenceDate: targetWeekStart,
                isCarryover: true,
                sourceCycleReference: carryover.originCycleReference
            });
        });
    }
    return upcomingPayments.filter((payment)=>payment.occurrenceDate >= rangeStart).sort((a, b)=>new Date(a.occurrenceDate) - new Date(b.occurrenceDate));
};
const calculateWaterfall = ({ totalLiquidity, templates, historyRecords = [], creditCardHistoryRecords = [], carryovers = [], today, standardWeeklyIncome })=>{
    const paymentSummaryMap = getCombinedPaymentSummaryMap(historyRecords, creditCardHistoryRecords);
    const { byOriginCycle, byTargetWeek } = getCarryoverMaps(carryovers);
    let runningBalance = totalLiquidity;
    const weeklyProjections = [];
    for(let i = 0; i < 4; i++){
        const weekNumber = i + 1;
        const interval = getProjectionWeekInterval(today, i);
        let expensesInWeek = 0;
        const details = [];
        templates.forEach((item)=>{
            const occurrenceDate = getTemplateOccurrenceInInterval(item, interval);
            if (!occurrenceDate) {
                return;
            }
            const cycleReference = getTemplateCycleReference(item, occurrenceDate);
            const cycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`;
            const paidAmount = paymentSummaryMap.get(cycleKey) ?? 0;
            const carryover = getItemKind(item) === "template" ? byOriginCycle.get(cycleKey) : null;
            const deferredAmount = carryover?.remainingAmount ?? 0;
            const pendingAmount = Math.max(item.amount - paidAmount - deferredAmount, 0);
            const isFullyPaid = paidAmount >= item.amount;
            const isMovedWithoutPayment = deferredAmount > 0 && paidAmount <= 0;
            const isHandledThisWeek = pendingAmount <= 0;
            if (weekNumber === 1 || occurrenceDate >= toStartOfDay(today) || isHandledThisWeek) {
                if (pendingAmount > 0) {
                    expensesInWeek += pendingAmount;
                }
                details.push({
                    kind: getItemKind(item),
                    templateId: item.id,
                    name: item.name,
                    amount: pendingAmount > 0 ? pendingAmount : item.amount,
                    isPaid: isFullyPaid,
                    isDeferred: deferredAmount > 0,
                    isMovedWithoutPayment,
                    paidAmount,
                    occurrenceDate,
                    cycleReference
                });
            }
        });
        const carryoversForWeek = byTargetWeek.get(getWeekKey(interval.start)) ?? [];
        carryoversForWeek.forEach((carryover)=>{
            const item = templates.find((entry)=>getItemKind(entry) === "template" && entry.id === carryover.templateId);
            if (!item) return;
            const originCycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(carryover.originCycleReference)}`;
            const originPaidAmount = paymentSummaryMap.get(originCycleKey) ?? 0;
            const carryoverLabel = originPaidAmount > 0 ? "restante" : "pendiente";
            expensesInWeek += carryover.remainingAmount;
            details.push({
                kind: "template",
                templateId: item.id,
                name: `${item.name} (${carryoverLabel})`,
                amount: carryover.remainingAmount,
                isPaid: false,
                isCarryover: true,
                occurrenceDate: interval.start,
                cycleReference: carryover.originCycleReference
            });
        });
        if (weekNumber !== 1) {
            runningBalance += standardWeeklyIncome;
        }
        runningBalance -= expensesInWeek;
        weeklyProjections.push({
            weekNumber,
            restante: runningBalance,
            expensesInWeek,
            details,
            title: `Semana ${weekNumber} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(interval.start, "dd")} al ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(interval.end, "dd MMM")})`
        });
    }
    return weeklyProjections;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/financeEngine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_WEEKLY_INCOME",
    ()=>DEFAULT_WEEKLY_INCOME,
    "buildFinanceSnapshot",
    ()=>buildFinanceSnapshot,
    "buildScheduledCreditCardPayments",
    ()=>buildScheduledCreditCardPayments,
    "getCalendarEventsForDay",
    ()=>getCalendarEventsForDay,
    "getScheduledPayments",
    ()=>getScheduledPayments,
    "getValidTemplates",
    ()=>getValidTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/waterfallCalculations.js [app-client] (ecmascript)");
;
;
const DEFAULT_WEEKLY_INCOME = 1000;
const getDayKey = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(new Date(value)).toISOString();
const buildScheduledCreditCardPayments = (creditCards = [])=>creditCards.filter((card)=>card.minimumPayment > 0 && card.dueDate).map((card)=>({
            id: `credit-card:${card.id}`,
            name: `${card.name} Minimum Payment`,
            amount: card.minimumPayment,
            frequency: "MONTHLY",
            dayOfMonth: card.dueDate,
            category: "DEBT",
            isAutoPay: false,
            kind: "credit-card"
        }));
const getValidTemplates = (templates = [])=>templates.filter((template)=>template.frequency === "MONTHLY" && template.dayOfMonth || (template.frequency === "WEEKLY" || template.frequency === "BIWEEKLY") && template.lastPaidAt);
const getScheduledPayments = ({ templates = [], creditCards = [] })=>[
        ...getValidTemplates(templates),
        ...buildScheduledCreditCardPayments(creditCards)
    ];
const buildFinanceSnapshot = (data, todayInput = new Date())=>{
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(todayInput);
    const context = data.context ?? null;
    const accounts = data.accounts ?? [];
    const creditCards = data.creditCards ?? [];
    const templates = data.templates ?? [];
    const historyRecords = data.historyRecords ?? [];
    const creditCardHistoryRecords = data.creditCardHistoryRecords ?? [];
    const carryovers = data.carryovers ?? [];
    const pendingExpenses = data.pendingExpenses ?? [];
    const appSettings = {
        weeklyIncome: data.appSettings?.weeklyIncome ?? DEFAULT_WEEKLY_INCOME,
        ...data.appSettings
    };
    const scheduledPayments = getScheduledPayments({
        templates,
        creditCards
    });
    const totalAccountBalances = accounts.reduce((acc, account)=>acc + account.balance, 0);
    const pendingExpensesTotal = pendingExpenses.reduce((acc, expense)=>acc + expense.amount, 0);
    const totalLiquidity = totalAccountBalances - pendingExpensesTotal;
    const totalDebt = creditCards.reduce((acc, card)=>acc + card.balance, 0);
    const totalCreditLimit = creditCards.reduce((acc, card)=>acc + card.creditLimit, 0);
    const totalAvailableCredit = totalCreditLimit - totalDebt;
    const waterfallData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateWaterfall"])({
        totalLiquidity,
        templates: scheduledPayments,
        historyRecords,
        creditCardHistoryRecords,
        carryovers,
        today,
        standardWeeklyIncome: appSettings.weeklyIncome
    });
    const upcomingPayments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpcomingPendingPayments"])({
        templates: scheduledPayments,
        historyRecords,
        creditCardHistoryRecords,
        carryovers,
        today,
        weeksAhead: 2
    });
    const totalUpcomingExpenses = upcomingPayments.reduce((acc, payment)=>acc + payment.amount, 0);
    const finalRemainingS4 = waterfallData[3]?.restante ?? totalLiquidity;
    return {
        context,
        today,
        appSettings,
        scheduledPayments,
        accounts,
        creditCards,
        templates,
        historyRecords,
        creditCardHistoryRecords,
        carryovers,
        pendingExpenses,
        totalAccountBalances,
        pendingExpensesTotal,
        totalLiquidity,
        totalDebt,
        totalCreditLimit,
        totalAvailableCredit,
        waterfallData,
        upcomingPayments,
        totalUpcomingExpenses,
        finalRemainingS4
    };
};
const getCalendarEventsForDay = ({ scheduledPayments = [], historyRecords = [], creditCardHistoryRecords = [], carryovers = [], pendingExpenses = [], today = new Date(), targetDate })=>{
    const normalizedToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(today);
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(targetDate);
    const events = [];
    const carryoverCycleKeys = new Set();
    historyRecords.forEach((record)=>{
        const recordDate = new Date(record.datePaid);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(recordDate).getTime() !== day.getTime()) return;
        const template = scheduledPayments.find((item)=>item.id === record.templateId);
        events.push({
            id: `history-${record.id}`,
            name: template?.name || "Recorded payment",
            amount: record.amountPaid,
            isPast: true,
            type: "history"
        });
    });
    creditCardHistoryRecords.forEach((record)=>{
        const recordDate = new Date(record.datePaid);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(recordDate).getTime() !== day.getTime()) return;
        const payment = scheduledPayments.find((item)=>item.id === `credit-card:${record.creditCardId}`);
        events.push({
            id: `credit-card-history-${record.id}`,
            name: payment?.name || "Card payment",
            amount: record.amountPaid,
            isPast: true,
            type: "credit-card-history"
        });
    });
    pendingExpenses.forEach((expense)=>{
        const expenseDate = new Date(expense.createdAt);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(expenseDate).getTime() !== day.getTime()) return;
        events.push({
            id: `pending-${expense.id}`,
            name: expense.description || "One-time expense",
            amount: expense.amount,
            isPast: true,
            type: "pending-expense"
        });
    });
    carryovers.forEach((carryover)=>{
        const targetWeekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(new Date(carryover.targetWeekStart));
        if (targetWeekStart.getTime() !== day.getTime()) return;
        const template = scheduledPayments.find((item)=>item.kind !== "credit-card" && item.id === carryover.templateId);
        if (!template) return;
        const paidAmount = historyRecords.filter((record)=>record.templateId === carryover.templateId && getDayKey(record.cycleReference) === getDayKey(carryover.originCycleReference)).reduce((acc, record)=>acc + (record.amountPaid ?? 0), 0);
        const carryoverLabel = paidAmount > 0 ? "restante" : "pendiente";
        const cycleKey = `${carryover.templateId}:${getDayKey(carryover.originCycleReference)}`;
        carryoverCycleKeys.add(cycleKey);
        events.push({
            id: `carryover-${carryover.id}`,
            templateId: template.id,
            kind: "template",
            name: `${template.name} (${carryoverLabel})`,
            amount: carryover.remainingAmount,
            occurrenceDate: targetWeekStart,
            sourceCycleReference: carryover.originCycleReference,
            isPast: false,
            type: "carryover"
        });
    });
    scheduledPayments.forEach((item)=>{
        const occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateOccurrenceInInterval"])(item, {
            start: day,
            end: day
        });
        if (!occurrenceDate || occurrenceDate < normalizedToday) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTemplatePaidForOccurrence"])(item, occurrenceDate, historyRecords, creditCardHistoryRecords)) {
            return;
        }
        const cycleKey = `${item.id}:${getDayKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(item, occurrenceDate))}`;
        if (carryoverCycleKeys.has(cycleKey)) {
            return;
        }
        events.push({
            id: `${item.id}-${occurrenceDate.toISOString()}`,
            templateId: item.id,
            kind: item.kind ?? "template",
            name: item.name,
            amount: item.amount,
            occurrenceDate,
            cycleReference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(item, occurrenceDate),
            isPast: false,
            type: "scheduled"
        });
    });
    return events.sort((a, b)=>a.amount - b.amount);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/calendar/CalendarClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UpcomingCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/UpcomingCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/financeEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:2922df [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:85df5d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/actions/data:149043 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
const CALENDAR_WEEK_STARTS_ON = 0;
const weekDaysHeaders = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
function CalendarClient({ scheduledPayments, historyRecords, creditCardHistoryRecords, carryovers, pendingExpenses, upcomingPayments, totalUpcomingExpenses, today }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const normalizedToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(new Date(today));
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(normalizedToday);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedExpense, setSelectedExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedDay, setExpandedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMarkAsPaid = async ()=>{
        if (!selectedExpense) return;
        const settlementDate = selectedExpense.sourceCycleReference ?? selectedExpense.occurrenceDate;
        const result = selectedExpense.kind === "credit-card" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$2922df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markCreditCardAsPaid"])(selectedExpense.templateId.replace("credit-card:", ""), settlementDate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$85df5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markWaterfallItemAsPaid"])(selectedExpense.templateId, settlementDate);
        if (result.success) {
            setSelectedExpense(null);
            router.refresh();
            return;
        }
        alert("Could not register the payment.");
    };
    const handleMoveToNextWeek = async ()=>{
        if (!selectedExpense || selectedExpense.kind === "credit-card") return;
        const settlementDate = selectedExpense.sourceCycleReference ?? selectedExpense.occurrenceDate;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$data$3a$149043__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveWaterfallItemToNextWeek"])(selectedExpense.templateId, settlementDate);
        if (result.success) {
            setSelectedExpense(null);
            router.refresh();
            return;
        }
        alert("Could not move the expense.");
    };
    const getCalendarGridStart = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date), {
            weekStartsOn: CALENDAR_WEEK_STARTS_ON
        });
    const getCalendarGridEnd = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date), {
            weekStartsOn: CALENDAR_WEEK_STARTS_ON
        });
    const getDaysInGrid = ()=>{
        const startDate = isExpanded ? getCalendarGridStart((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(currentDate)) : getCalendarGridStart(currentDate);
        const endDate = isExpanded ? getCalendarGridEnd((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(currentDate)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startDate, 20);
        const days = [];
        let day = startDate;
        while(day <= endDate){
            days.push(day);
            day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(day, 1);
        }
        return days;
    };
    const getEventsForDay = (day)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCalendarEventsForDay"])({
            scheduledPayments,
            historyRecords,
            creditCardHistoryRecords,
            carryovers,
            pendingExpenses,
            today: normalizedToday,
            targetDate: day
        });
    const openExpenseDetails = (expense)=>{
        if (expense.isPast || !expense.templateId) return;
        setSelectedExpense(expense);
    };
    const gridDays = getDaysInGrid();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-8 w-8 text-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    "Calendario de liquidez"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Revisa pagos registrados y gastos programados en un calendario de Sunday a Saturday."
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(currentDate, 1)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-36 text-center font-semibold text-slate-700",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMMM yyyy")
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(currentDate, 1)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-6 bg-slate-200 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "text-sm font-medium",
                                onClick: ()=>setCurrentDate(normalizedToday),
                                children: "Hoy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-6 bg-slate-200 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setIsExpanded(!isExpanded),
                                className: "text-blue-600 hover:text-blue-700 hover:bg-blue-50",
                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 152,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 152,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-lg border-slate-200 overflow-hidden bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "bg-slate-50 border-b p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 divide-x divide-slate-200",
                            children: weekDaysHeaders.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider",
                                    children: day
                                }, day, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 border-l border-slate-200",
                            children: gridDays.map((day)=>{
                                const isCurrentMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(day, currentDate);
                                const isToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(day, normalizedToday);
                                const dayEvents = getEventsForDay(day);
                                const dailyTotal = dayEvents.reduce((acc, curr)=>acc + curr.amount, 0);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                    min-h-[120px] md:min-h-[140px] border-r border-b border-slate-200 p-1 md:p-2 flex flex-col justify-between transition-colors hover:bg-slate-50
                    ${!isCurrentMonth ? "bg-slate-50/50" : "bg-white"}
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                        ${isToday ? "bg-blue-600 text-white shadow-md" : !isCurrentMonth ? "text-slate-400" : "text-slate-700"}
                      `,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "d")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 mt-1 space-y-1 overflow-hidden",
                                            children: [
                                                dayEvents.slice(0, 2).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: event.isPast || !event.templateId,
                                                        onClick: ()=>openExpenseDetails(event),
                                                        className: `
                          w-full text-left text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate font-medium border
                          ${event.isPast ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-red-50 text-red-700 border-red-100"}
                          ${event.isPast || !event.templateId ? "cursor-default" : "hover:bg-red-100"}
                        `,
                                                        children: [
                                                            event.name,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-75 font-normal",
                                                                children: [
                                                                    "$",
                                                                    event.amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                                lineNumber: 208,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, event.id, true, {
                                                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this)),
                                                dayEvents.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setExpandedDay({
                                                            date: day,
                                                            events: dayEvents
                                                        }),
                                                    className: "text-[10px] text-blue-600 font-medium pl-1 hover:text-blue-700",
                                                    children: [
                                                        "+ ",
                                                        dayEvents.length - 2,
                                                        " más"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        dailyTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 border-t border-slate-100 pt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[10px] md:text-xs font-bold text-right ${isToday ? "text-blue-700" : "text-slate-700"}`,
                                                children: [
                                                    "Total: $",
                                                    dailyTotal.toLocaleString("en-US", {
                                                        minimumFractionDigits: 0
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                            lineNumber: 229,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, day.toISOString(), true, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$UpcomingCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                upcomingPayments: upcomingPayments,
                totalUpcomingExpenses: totalUpcomingExpenses
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedExpense,
                onOpenChange: (open)=>{
                    if (!open) {
                        setSelectedExpense(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: selectedExpense?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Registra este pago o muévelo a la siguiente semana sin marcarlo como pagado."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        selectedExpense && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-sm text-slate-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Fecha programada: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedExpense.occurrenceDate), "EEE dd MMM")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                            lineNumber: 263,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Monto:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-900",
                                            children: [
                                                "$",
                                                selectedExpense.amount.toLocaleString("en-US", {
                                                    minimumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex-col gap-2 sm:flex-col sm:items-stretch",
                            children: [
                                selectedExpense?.kind !== "credit-card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    className: "w-full",
                                    onClick: handleMoveToNextWeek,
                                    children: "Mover a la siguiente semana"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: handleMarkAsPaid,
                                    children: "Marcar como pagado"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!expandedDay,
                onOpenChange: (open)=>{
                    if (!open) {
                        setExpandedDay(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[480px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: expandedDay ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(expandedDay.date), "EEEE dd MMM") : "Detalle del día"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Revisa todas las entradas de este día y abre cualquier pendiente desde aquí."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[320px] space-y-2 overflow-y-auto pr-1",
                            children: expandedDay?.events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: event.isPast || !event.templateId,
                                    onClick: ()=>{
                                        setExpandedDay(null);
                                        openExpenseDetails(event);
                                    },
                                    className: `w-full rounded-lg border px-3 py-2 text-left ${event.isPast || !event.templateId ? "cursor-default border-slate-200 bg-slate-50 text-slate-600" : "border-red-100 bg-red-50 text-red-700 hover:bg-red-100"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: event.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                children: [
                                                    "$",
                                                    event.amount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this)
                                }, event.id, false, {
                                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/CalendarClient.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/calendar/CalendarClient.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(CalendarClient, "p2ISns2LOvDrTWTrKd4kA+WbkhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CalendarClient;
var _c;
__turbopack_context__.k.register(_c, "CalendarClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0650c747._.js.map