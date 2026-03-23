module.exports = [
"[next]/internal/font/google/inter_396b12ce.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_396b12ce-module__rRjk0G__className",
});
}),
"[next]/internal/font/google/inter_396b12ce.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_396b12ce.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/prisma.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const globalForPrisma = globalThis;
const createPrismaClient = ()=>{
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
        connectionString: process.env.DATABASE_URL
    });
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        adapter
    });
};
if (!globalForPrisma.prisma || !globalForPrisma.prisma.creditCardPaymentHistory || !globalForPrisma.prisma.appSettings || !globalForPrisma.prisma.user || !globalForPrisma.prisma.workspace || !globalForPrisma.prisma.workspaceMember || !globalForPrisma.prisma.userPreference) {
    globalForPrisma.prisma = createPrismaClient();
}
const prisma = globalForPrisma.prisma;
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
const __TURBOPACK__default__export__ = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/auth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const isE2ETestMode = process.env.E2E_TEST_MODE === "1";
const ensureUserAccess = async (user)=>{
    const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.upsert({
        where: {
            email: user.email
        },
        update: {
            name: user.name ?? undefined,
            image: user.image ?? undefined
        },
        create: {
            email: user.email,
            name: user.name ?? null,
            image: user.image ?? null
        }
    });
    let workspace = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.findFirst({
        where: {
            ownerUserId: dbUser.id
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    if (!workspace) {
        workspace = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.create({
            data: {
                name: `${user.name?.trim() || user.email.split("@")[0]} Workspace`,
                ownerUserId: dbUser.id
            }
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspaceMember.upsert({
        where: {
            userId_workspaceId: {
                userId: dbUser.id,
                workspaceId: workspace.id
            }
        },
        update: {
            role: "OWNER"
        },
        create: {
            userId: dbUser.id,
            workspaceId: workspace.id,
            role: "OWNER"
        }
    });
    const preference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.findUnique({
        where: {
            userId: dbUser.id
        }
    });
    if (!preference) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.create({
            data: {
                userId: dbUser.id,
                activeWorkspaceId: workspace.id
            }
        });
    } else if (!preference.activeWorkspaceId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.update({
            where: {
                userId: dbUser.id
            },
            data: {
                activeWorkspaceId: workspace.id
            }
        });
    }
};
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    pages: {
        signIn: "/",
        error: "/"
    },
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    ],
    callbacks: {
        authorized ({ auth, request }) {
            const isE2ERequest = request?.nextUrl?.searchParams.get("e2e") === "1";
            if (isE2ETestMode || isE2ERequest) {
                return true;
            }
            return !!auth?.user;
        },
        async signIn ({ user }) {
            if (isE2ETestMode) {
                return true;
            }
            const allowedEmails = [
                "darkosthgx@gmail.com",
                "raquel19nunez@gmail.com"
            ];
            if (!allowedEmails.includes(user.email)) {
                return false;
            }
            await ensureUserAccess(user);
            return true;
        }
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/waterfallCalculations.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDaysInMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isWithinInterval.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/setDate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
;
const WEEK_STARTS_ON = 4;
const normalizeDate = (value)=>{
    if (!value) return null;
    return typeof value === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(value) : new Date(value);
};
const toStartOfDay = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(normalizeDate(value) ?? new Date());
const getCycleKey = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(toStartOfDay(date), "yyyy-MM-dd");
const getWeekKey = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(toStartOfDay(date), "yyyy-MM-dd");
const getItemKind = (item)=>item.kind ?? "template";
const getPaymentOwnerKey = (item)=>`${getItemKind(item)}:${item.id}`;
const getMonthlyOccurrenceForMonth = (baseDate, dayOfMonth)=>{
    const safeDay = Math.min(dayOfMonth, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDaysInMonth"])(baseDate));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$setDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDate"])(baseDate, safeDay));
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
const getProjectionWeekStart = (referenceDate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(toStartOfDay(referenceDate), {
        weekStartsOn: WEEK_STARTS_ON
    });
const getProjectionWeekInterval = (referenceDate, weekOffset = 0)=>{
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(getProjectionWeekStart(referenceDate), weekOffset * 7);
    return {
        start,
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(start, 6)
    };
};
const getTemplateCycleReference = (item, occurrenceDate)=>{
    if (item.frequency === "MONTHLY") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfMonth"])(toStartOfDay(occurrenceDate));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(toStartOfDay(occurrenceDate), {
        weekStartsOn: WEEK_STARTS_ON
    });
};
const getFollowingOccurrence = (item, occurrenceDate)=>{
    const normalizedOccurrence = toStartOfDay(occurrenceDate);
    if (item.frequency === "MONTHLY") {
        return getMonthlyOccurrenceForMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMonths"])(normalizedOccurrence, 1), item.dayOfMonth);
    }
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!stepInDays) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(normalizedOccurrence, stepInDays);
};
const getNextTemplateOccurrence = (item, referenceDate)=>{
    const normalizedReferenceDate = toStartOfDay(referenceDate);
    if (item.frequency === "MONTHLY") {
        let occurrenceDate = getMonthlyOccurrenceForMonth(normalizedReferenceDate, item.dayOfMonth);
        if (occurrenceDate < normalizedReferenceDate) {
            occurrenceDate = getMonthlyOccurrenceForMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMonths"])(normalizedReferenceDate, 1), item.dayOfMonth);
        }
        return occurrenceDate;
    }
    const anchorDate = normalizeDate(item.lastPaidAt);
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!anchorDate || !stepInDays) return null;
    const normalizedAnchorDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(anchorDate);
    const daysFromAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(normalizedReferenceDate, normalizedAnchorDate);
    const stepsFromAnchor = Math.max(0, Math.ceil(daysFromAnchor / stepInDays));
    let occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(normalizedAnchorDate, stepsFromAnchor * stepInDays);
    while(occurrenceDate < normalizedReferenceDate){
        occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(occurrenceDate, stepInDays);
    }
    return occurrenceDate;
};
const getTemplateOccurrenceInInterval = (item, interval)=>{
    if (item.frequency === "MONTHLY") {
        const candidates = [
            getMonthlyOccurrenceForMonth(interval.start, item.dayOfMonth),
            getMonthlyOccurrenceForMonth(interval.end, item.dayOfMonth)
        ];
        return candidates.find((date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWithinInterval"])(date, interval)) ?? null;
    }
    const anchorDate = normalizeDate(item.lastPaidAt);
    const stepInDays = getRecurringStepInDays(item.frequency);
    if (!anchorDate || !stepInDays) return null;
    const normalizedAnchorDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(anchorDate);
    const daysFromAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(interval.start, normalizedAnchorDate);
    const stepsFromAnchor = Math.floor(daysFromAnchor / stepInDays);
    let occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(normalizedAnchorDate, stepsFromAnchor * stepInDays);
    while(occurrenceDate < interval.start){
        occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(occurrenceDate, stepInDays);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWithinInterval"])(occurrenceDate, interval) ? occurrenceDate : null;
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
            title: `Semana ${weekNumber} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(interval.start, "dd")} al ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(interval.end, "dd MMM")})`
        });
    }
    return weeklyProjections;
};
}),
"[project]/src/lib/financeEngine.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/waterfallCalculations.js [app-rsc] (ecmascript)");
;
;
const DEFAULT_WEEKLY_INCOME = 1000;
const getDayKey = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date(value)).toISOString();
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
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(todayInput);
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
    const waterfallData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateWaterfall"])({
        totalLiquidity,
        templates: scheduledPayments,
        historyRecords,
        creditCardHistoryRecords,
        carryovers,
        today,
        standardWeeklyIncome: appSettings.weeklyIncome
    });
    const upcomingPayments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUpcomingPendingPayments"])({
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
    const normalizedToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(today);
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(targetDate);
    const events = [];
    const carryoverCycleKeys = new Set();
    historyRecords.forEach((record)=>{
        const recordDate = new Date(record.datePaid);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(recordDate).getTime() !== day.getTime()) return;
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(recordDate).getTime() !== day.getTime()) return;
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(expenseDate).getTime() !== day.getTime()) return;
        events.push({
            id: `pending-${expense.id}`,
            name: expense.description || "One-time expense",
            amount: expense.amount,
            isPast: true,
            type: "pending-expense"
        });
    });
    carryovers.forEach((carryover)=>{
        const targetWeekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(new Date(carryover.targetWeekStart));
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
        const occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateOccurrenceInInterval"])(item, {
            start: day,
            end: day
        });
        if (!occurrenceDate || occurrenceDate < normalizedToday) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTemplatePaidForOccurrence"])(item, occurrenceDate, historyRecords, creditCardHistoryRecords)) {
            return;
        }
        const cycleKey = `${item.id}:${getDayKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(item, occurrenceDate))}`;
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
            cycleReference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(item, occurrenceDate),
            isPast: false,
            type: "scheduled"
        });
    });
    return events.sort((a, b)=>a.amount - b.amount);
};
}),
"[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getCurrentUserContext",
    ()=>getCurrentUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/financeEngine.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const isE2ETestMode = process.env.E2E_TEST_MODE === "1";
const E2E_WORKSPACE_ID = "__e2e_workspace__";
const E2E_USER = {
    id: "__e2e_user__",
    email: "e2e@example.com",
    name: "E2E User",
    image: null
};
const getSessionIdentity = async ()=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (session?.user?.email) {
        return {
            email: session.user.email,
            name: session.user.name ?? null,
            image: session.user.image ?? null
        };
    }
    if (isE2ETestMode) {
        return E2E_USER;
    }
    return null;
};
const buildDefaultWorkspaceName = (identity)=>{
    const baseName = identity.name?.trim() || identity.email?.split("@")[0] || "Personal";
    return `${baseName} Workspace`;
};
const getWorkspaceDataScore = async (workspaceId)=>{
    if (!workspaceId) {
        return 0;
    }
    const [accounts, creditCards, templates, historyRecords, creditCardHistoryRecords, pendingExpenses, carryovers] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCardPaymentHistory.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.count({
            where: {
                workspaceId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].paymentCarryover.count({
            where: {
                workspaceId
            }
        })
    ]);
    return accounts + creditCards + templates + historyRecords + creditCardHistoryRecords + pendingExpenses + carryovers;
};
const getPrimaryPopulatedWorkspace = async ()=>{
    const workspaces = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.findMany({
        include: {
            owner: true
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    const scoredWorkspaces = await Promise.all(workspaces.map(async (workspace)=>({
            workspace,
            score: await getWorkspaceDataScore(workspace.id)
        })));
    const populatedWorkspaces = scoredWorkspaces.filter(({ score })=>score > 0);
    if (populatedWorkspaces.length !== 1) {
        return null;
    }
    return populatedWorkspaces[0].workspace;
};
async function attachUserToLegacyWorkspaceIfNeeded(context, identity) {
    if (!context.activeWorkspace?.id) {
        return context;
    }
    const currentWorkspaceScore = await getWorkspaceDataScore(context.activeWorkspace.id);
    if (currentWorkspaceScore > 0) {
        return context;
    }
    const populatedWorkspace = await getPrimaryPopulatedWorkspace();
    if (!populatedWorkspace || populatedWorkspace.id === context.activeWorkspace.id) {
        return context;
    }
    const existingMembership = context.memberships.find((membership)=>membership.workspaceId === populatedWorkspace.id);
    if (!existingMembership) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspaceMember.create({
            data: {
                userId: context.user.id,
                workspaceId: populatedWorkspace.id,
                role: "OWNER"
            }
        });
    }
    if (populatedWorkspace.owner?.email === E2E_USER.email) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.update({
            where: {
                id: populatedWorkspace.id
            },
            data: {
                ownerUserId: context.user.id,
                name: buildDefaultWorkspaceName(identity)
            }
        });
    }
    const updatedPreference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.update({
        where: {
            userId: context.user.id
        },
        data: {
            activeWorkspaceId: populatedWorkspace.id
        }
    });
    const memberships = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspaceMember.findMany({
        where: {
            userId: context.user.id
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    const activeWorkspace = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.findUnique({
        where: {
            id: populatedWorkspace.id
        }
    });
    return {
        ...context,
        memberships,
        preference: updatedPreference,
        activeWorkspace: activeWorkspace ?? populatedWorkspace
    };
}
async function ensureUserWorkspaceAccess(identity) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.upsert({
        where: {
            email: identity.email
        },
        update: {
            name: identity.name ?? undefined,
            image: identity.image ?? undefined
        },
        create: {
            email: identity.email,
            name: identity.name,
            image: identity.image
        }
    });
    let ownedWorkspace = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.findFirst({
        where: {
            ownerUserId: user.id
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    if (!ownedWorkspace) {
        ownedWorkspace = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.create({
            data: {
                name: buildDefaultWorkspaceName(identity),
                ownerUserId: user.id
            }
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspaceMember.upsert({
        where: {
            userId_workspaceId: {
                userId: user.id,
                workspaceId: ownedWorkspace.id
            }
        },
        update: {
            role: "OWNER"
        },
        create: {
            userId: user.id,
            workspaceId: ownedWorkspace.id,
            role: "OWNER"
        }
    });
    let preference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.findUnique({
        where: {
            userId: user.id
        }
    });
    if (!preference) {
        preference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.create({
            data: {
                userId: user.id,
                activeWorkspaceId: ownedWorkspace.id
            }
        });
    } else if (!preference.activeWorkspaceId) {
        preference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.update({
            where: {
                userId: user.id
            },
            data: {
                activeWorkspaceId: ownedWorkspace.id
            }
        });
    }
    const memberships = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspaceMember.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    const activeMembership = memberships.find((membership)=>membership.workspaceId === preference.activeWorkspaceId) ?? memberships[0] ?? null;
    const activeWorkspace = activeMembership ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].workspace.findUnique({
        where: {
            id: activeMembership.workspaceId
        }
    }) : null;
    if (activeMembership && preference.activeWorkspaceId !== activeMembership.workspaceId) {
        preference = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userPreference.update({
            where: {
                userId: user.id
            },
            data: {
                activeWorkspaceId: activeMembership.workspaceId
            }
        });
    }
    return {
        user,
        memberships,
        preference,
        activeWorkspace: activeWorkspace ?? ownedWorkspace
    };
}
async function migrateLegacyDataToWorkspace(workspaceId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCardPaymentHistory.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].paymentCarryover.updateMany({
        where: {
            workspaceId: null
        },
        data: {
            workspaceId
        }
    });
    const existingLegacySettings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings?.findFirst ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.findFirst({
        where: {
            workspaceId: null
        },
        orderBy: {
            createdAt: "asc"
        }
    }) : null;
    if (existingLegacySettings) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.update({
            where: {
                id: existingLegacySettings.id
            },
            data: {
                workspaceId
            }
        });
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings?.findFirst) {
        const workspaceSettings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.findFirst({
            where: {
                workspaceId
            }
        });
        if (!workspaceSettings) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.create({
                data: {
                    workspaceId,
                    weeklyIncome: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_WEEKLY_INCOME"]
                }
            });
        }
    }
}
async function getCurrentUserContext() {
    if (isE2ETestMode) {
        return {
            user: E2E_USER,
            memberships: [],
            preference: {
                id: "__e2e_preference__",
                userId: E2E_USER.id,
                activeWorkspaceId: E2E_WORKSPACE_ID
            },
            activeWorkspace: {
                id: E2E_WORKSPACE_ID,
                name: "E2E Workspace",
                ownerUserId: E2E_USER.id
            }
        };
    }
    const identity = await getSessionIdentity();
    if (!identity?.email) {
        throw new Error("Unauthorized");
    }
    let context = await ensureUserWorkspaceAccess(identity);
    context = await attachUserToLegacyWorkspaceIfNeeded(context, identity);
    await migrateLegacyDataToWorkspace(context.activeWorkspace.id);
    return context;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Layout/AuthenticatedNavbar.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Layout/AuthenticatedNavbar.jsx <module evaluation>", "default");
}),
"[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Layout/AuthenticatedNavbar.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Layout/AuthenticatedNavbar.jsx", "default");
}),
"[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthenticatedNavbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthenticatedNavbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthenticatedNavbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Layout/GoogleSignInButton.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Layout/GoogleSignInButton.jsx <module evaluation>", "default");
}),
"[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Layout/GoogleSignInButton.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Layout/GoogleSignInButton.jsx", "default");
}),
"[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$GoogleSignInButton$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$GoogleSignInButton$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$GoogleSignInButton$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Layout/Navbar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-rsc] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-rsc] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/financeEngine.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthenticatedNavbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/AuthenticatedNavbar.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$GoogleSignInButton$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/GoogleSignInButton.jsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const isE2ETestMode = process.env.E2E_TEST_MODE === "1";
async function Navbar() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const isAuthenticated = !!session?.user || isE2ETestMode;
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 font-bold tracking-tight text-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "h-6 w-6 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "MyFinance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-2 sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Flow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$GoogleSignInButton$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        className: "rounded-full shadow-sm",
                        label: "Acceder"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
    const [appSettings, accountCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.findFirst({
            where: {
                workspaceId: context.activeWorkspace.id
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.count({
            where: {
                workspaceId: context.activeWorkspace.id
            }
        })
    ]);
    const userName = session?.user?.name?.trim() || session?.user?.email?.trim() || context.user?.name?.trim() || context.user?.email?.trim() || "MyFinance";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthenticatedNavbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        userName: userName,
        workspaceName: context.activeWorkspace.name,
        weeklyIncome: appSettings?.weeklyIncome ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_WEEKLY_INCOME"],
        hasAccounts: accountCount > 0
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/Navbar.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_396b12ce.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Navbar.jsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const metadata = {
    title: "MyFinance",
    description: "Private household cash-flow planning with projected liquidity, recurring bills, and calendar visibility."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_396b12ce$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/layout.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.js",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0412b4f._.js.map