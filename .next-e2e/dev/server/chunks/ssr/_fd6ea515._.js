module.exports = [
"[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"001a9fd691c9318495f763d6a5e65a62dcd2c34eb9":"clearPendingExpenses","40ba095d4ff43cb6d3ba74e4d8bd41d5c596aa83f1":"createPendingExpense","40f685956947dbc033984b9860419ea0f057ce8812":"deletePendingExpense"},"",""] */ __turbopack_context__.s([
    "clearPendingExpenses",
    ()=>clearPendingExpenses,
    "createPendingExpense",
    ()=>createPendingExpense,
    "deletePendingExpense",
    ()=>deletePendingExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function createPendingExpense(formData) {
    const amount = parseFloat(formData.get("amount"));
    const description = formData.get("description")?.trim() || null;
    if (!Number.isFinite(amount) || amount <= 0) {
        return {
            success: false,
            error: "Invalid amount"
        };
    }
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.create({
            data: {
                amount,
                description,
                workspaceId: activeWorkspace.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/unique-expenses");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error creating pending expense:", error);
        return {
            success: false,
            error: "Failed to create pending expense"
        };
    }
}
async function deletePendingExpense(id) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const expense = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!expense) {
            throw new Error("Pending expense not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.delete({
            where: {
                id: expense.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/unique-expenses");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting pending expense:", error);
        return {
            success: false,
            error: "Failed to delete pending expense"
        };
    }
}
async function clearPendingExpenses() {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].pendingExpense.deleteMany({
            where: {
                workspaceId: activeWorkspace.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/unique-expenses");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error clearing pending expenses:", error);
        return {
            success: false,
            error: "Failed to clear pending expenses"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPendingExpense,
    deletePendingExpense,
    clearPendingExpenses
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPendingExpense, "40ba095d4ff43cb6d3ba74e4d8bd41d5c596aa83f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePendingExpense, "40f685956947dbc033984b9860419ea0f057ce8812", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(clearPendingExpenses, "001a9fd691c9318495f763d6a5e65a62dcd2c34eb9", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00bc9fddbd583872b0d801e5353a613aae786c3076":"getAppSettings","402f42fabb971aea5d4e16162b6543c7b4cecb1bdd":"updateAppSettings"},"",""] */ __turbopack_context__.s([
    "getAppSettings",
    ()=>getAppSettings,
    "updateAppSettings",
    ()=>updateAppSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/financeEngine.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const revalidateFinanceViews = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
};
async function updateAppSettings(formData) {
    const weeklyIncome = Number.parseFloat(formData.get("weeklyIncome"));
    if (!Number.isFinite(weeklyIncome) || weeklyIncome < 0) {
        return {
            success: false,
            error: "Invalid weekly income"
        };
    }
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const existingSettings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.findFirst({
            where: {
                workspaceId: activeWorkspace.id
            }
        });
        if (existingSettings) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.update({
                where: {
                    id: existingSettings.id
                },
                data: {
                    weeklyIncome
                }
            });
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.create({
                data: {
                    workspaceId: activeWorkspace.id,
                    weeklyIncome
                }
            });
        }
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating app settings:", error);
        return {
            success: false,
            error: "Failed to update app settings"
        };
    }
}
async function getAppSettings() {
    const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
    const appSettings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings?.findFirst ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appSettings.findFirst({
        where: {
            workspaceId: activeWorkspace.id
        }
    }) : null;
    return appSettings ?? {
        id: 1,
        workspaceId: activeWorkspace.id,
        weeklyIncome: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$financeEngine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_WEEKLY_INCOME"]
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateAppSettings,
    getAppSettings
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAppSettings, "402f42fabb971aea5d4e16162b6543c7b4cecb1bdd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAppSettings, "00bc9fddbd583872b0d801e5353a613aae786c3076", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40836e783c10f49a1899499fede75639eb700c6ca0":"deleteAccount","40b8213de36e5cba88d65f90ddc2cb7cc195509191":"createAccount","60fafc7537bf53d7ffb5481b2f0e66d4c1c7c2eee1":"updateAccount"},"",""] */ __turbopack_context__.s([
    "createAccount",
    ()=>createAccount,
    "deleteAccount",
    ()=>deleteAccount,
    "updateAccount",
    ()=>updateAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function createAccount(formData) {
    const name = formData.get("name");
    const balance = parseFloat(formData.get("balance"));
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.create({
            data: {
                name,
                balance,
                workspaceId: activeWorkspace.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error creating account:", error);
        return {
            success: false,
            error: "Failed to create account"
        };
    }
}
async function updateAccount(id, formData) {
    const name = formData.get("name");
    const balance = parseFloat(formData.get("balance"));
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const account = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!account) {
            throw new Error("Account not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.update({
            where: {
                id: account.id
            },
            data: {
                name,
                balance
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating account:", error);
        return {
            success: false,
            error: "Failed to update account"
        };
    }
}
async function deleteAccount(id) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const account = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!account) {
            throw new Error("Account not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].account.delete({
            where: {
                id: account.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting account:", error);
        return {
            success: false,
            error: "Failed to delete account"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createAccount,
    updateAccount,
    deleteAccount
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAccount, "40b8213de36e5cba88d65f90ddc2cb7cc195509191", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAccount, "60fafc7537bf53d7ffb5481b2f0e66d4c1c7c2eee1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAccount, "40836e783c10f49a1899499fede75639eb700c6ca0", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40d7206777bcfb7f913e0805640dbfa9366b5eac2c":"deleteCreditCard","40e1111a1c4b792b38e0f30302caf5578ad8e92be2":"createCreditCard","604d5a899a48513ed0b09d487709585742a456baa3":"updateCreditCard","606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf":"markCreditCardAsPaid"},"",""] */ __turbopack_context__.s([
    "createCreditCard",
    ()=>createCreditCard,
    "deleteCreditCard",
    ()=>deleteCreditCard,
    "markCreditCardAsPaid",
    ()=>markCreditCardAsPaid,
    "updateCreditCard",
    ()=>updateCreditCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/waterfallCalculations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const revalidateFinanceViews = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
};
async function createCreditCard(formData) {
    const name = formData.get("name");
    const balance = parseFloat(formData.get("balance"));
    const creditLimit = parseFloat(formData.get("creditLimit"));
    // Si no te pasan un pago mínimo, por defecto asume el 2% del balance o 0
    const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : balance * 0.07;
    const dueDate = parseInt(formData.get("dueDate"));
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.create({
            data: {
                name,
                balance,
                creditLimit,
                minimumPayment,
                dueDate,
                workspaceId: activeWorkspace.id
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error creating credit card:", error);
        return {
            success: false,
            error: "Failed to create credit card"
        };
    }
}
async function updateCreditCard(id, formData) {
    const name = formData.get("name");
    const balance = parseFloat(formData.get("balance"));
    const creditLimit = parseFloat(formData.get("creditLimit"));
    const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : balance * 0.02;
    const dueDate = parseInt(formData.get("dueDate"));
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const creditCard = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!creditCard) {
            throw new Error("Credit card not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.update({
            where: {
                id: creditCard.id
            },
            data: {
                name,
                balance,
                creditLimit,
                minimumPayment,
                dueDate
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating credit card:", error);
        return {
            success: false,
            error: "Failed to update credit card"
        };
    }
}
async function deleteCreditCard(id) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const creditCard = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!creditCard) {
            throw new Error("Credit card not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.delete({
            where: {
                id: creditCard.id
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting credit card:", error);
        return {
            success: false,
            error: "Failed to delete credit card"
        };
    }
}
async function markCreditCardAsPaid(creditCardId, occurrenceDateInput = null) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const creditCard = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCard.findFirst({
            where: {
                id: creditCardId,
                workspaceId: activeWorkspace.id
            }
        });
        if (!creditCard) {
            throw new Error("Credit card not found");
        }
        const scheduledItem = {
            id: `credit-card:${creditCard.id}`,
            kind: "credit-card",
            frequency: "MONTHLY",
            dayOfMonth: creditCard.dueDate,
            amount: creditCard.minimumPayment
        };
        const occurrenceDate = occurrenceDateInput ? new Date(occurrenceDateInput) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextTemplateOccurrence"])(scheduledItem, new Date());
        if (!occurrenceDate) {
            throw new Error("Could not calculate credit card payment occurrence");
        }
        const cycleReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(scheduledItem, occurrenceDate);
        const previousPayments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCardPaymentHistory.findMany({
            where: {
                creditCardId,
                workspaceId: activeWorkspace.id,
                cycleReference
            }
        });
        const alreadyPaid = previousPayments.reduce((acc, item)=>acc + item.amountPaid, 0);
        const pendingAmount = Math.max(creditCard.minimumPayment - alreadyPaid, 0);
        if (pendingAmount <= 0) {
            revalidateFinanceViews();
            return {
                success: true
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].creditCardPaymentHistory.create({
            data: {
                creditCardId,
                amountPaid: pendingAmount,
                workspaceId: activeWorkspace.id,
                cycleReference,
                datePaid: new Date()
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error marking credit card payment as paid:", error);
        return {
            success: false,
            error: "Failed to mark credit card payment as paid"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCreditCard,
    updateCreditCard,
    deleteCreditCard,
    markCreditCardAsPaid
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCreditCard, "40e1111a1c4b792b38e0f30302caf5578ad8e92be2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCreditCard, "604d5a899a48513ed0b09d487709585742a456baa3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCreditCard, "40d7206777bcfb7f913e0805640dbfa9366b5eac2c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markCreditCardAsPaid, "606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40988d1643330259726b36366b1d3d24fae70d078f":"createTemplate","40bf20b99fc0e154e4fa9fc6923f53b9613ae04a3a":"markAsPaid","40fb45f458da2968a746ef82ca394114aa559349b8":"deleteTemplate","6056230f8d60ee00cb6c853fffd88d9eaf08fb9816":"updateTemplate","60867848a17572c668ca1e96ae399fd2291b86b367":"moveWaterfallItemToNextWeek","60db6f9464dda5f5acc5580859a12f6a60720ed8af":"markWaterfallItemAsPaid","702f7715574f14001cea30a327100f71eaebfec823":"deferWaterfallItem"},"",""] */ __turbopack_context__.s([
    "createTemplate",
    ()=>createTemplate,
    "deferWaterfallItem",
    ()=>deferWaterfallItem,
    "deleteTemplate",
    ()=>deleteTemplate,
    "markAsPaid",
    ()=>markAsPaid,
    "markWaterfallItemAsPaid",
    ()=>markWaterfallItemAsPaid,
    "moveWaterfallItemToNextWeek",
    ()=>moveWaterfallItemToNextWeek,
    "updateTemplate",
    ()=>updateTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/waterfallCalculations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workspaceContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const revalidateFinanceViews = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/templates");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/calendar");
};
const normalizeAmount = (value)=>{
    const amount = Number.parseFloat(value);
    return Number.isFinite(amount) ? amount : 0;
};
async function settleTemplateOccurrence({ templateId, occurrenceDate, amountPaid, moveRemainingToNextWeek = false }) {
    const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
    const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
        where: {
            id: templateId,
            workspaceId: activeWorkspace.id
        }
    });
    if (!template) {
        throw new Error("Gasto no encontrado");
    }
    const cycleReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(template, occurrenceDate);
    const alreadyPaid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.findMany({
        where: {
            templateId,
            workspaceId: activeWorkspace.id,
            cycleReference
        }
    });
    const paidAmountSoFar = alreadyPaid.reduce((acc, record)=>acc + record.amountPaid, 0);
    const remainingBeforeAction = Math.max(template.amount - paidAmountSoFar, 0);
    const safeAmountPaid = Math.min(Math.max(amountPaid, 0), remainingBeforeAction);
    const remainingAfterPayment = Math.max(remainingBeforeAction - safeAmountPaid, 0);
    if (safeAmountPaid > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.create({
            data: {
                templateId: template.id,
                amountPaid: safeAmountPaid,
                workspaceId: activeWorkspace.id,
                cycleReference,
                datePaid: new Date()
            }
        });
    }
    if (moveRemainingToNextWeek && remainingAfterPayment > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].paymentCarryover.upsert({
            where: {
                templateId_originCycleReference: {
                    templateId: template.id,
                    originCycleReference: cycleReference
                }
            },
            update: {
                remainingAmount: remainingAfterPayment,
                workspaceId: activeWorkspace.id,
                targetWeekStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectionWeekStart"])(occurrenceDate), 7)
            },
            create: {
                templateId: template.id,
                workspaceId: activeWorkspace.id,
                originCycleReference: cycleReference,
                targetWeekStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectionWeekStart"])(occurrenceDate), 7),
                remainingAmount: remainingAfterPayment
            }
        });
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].paymentCarryover.deleteMany({
            where: {
                templateId: template.id,
                workspaceId: activeWorkspace.id,
                originCycleReference: cycleReference
            }
        });
    }
    if (!moveRemainingToNextWeek || remainingAfterPayment <= 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.update({
            where: {
                id: template.id
            },
            data: {
                lastPaidAt: occurrenceDate
            }
        });
    }
    revalidateFinanceViews();
    return {
        success: true
    };
}
async function createTemplate(formData) {
    const name = formData.get("name");
    const amount = parseFloat(formData.get("amount"));
    const frequency = formData.get("frequency");
    const category = formData.get("category");
    const isAutoPay = formData.get("isAutoPay") === "on";
    const dayOfMonth = formData.get("dayOfMonth") ? parseInt(formData.get("dayOfMonth")) : null;
    let lastPaidAt = null;
    if (formData.get("lastPaidAt")) {
        lastPaidAt = new Date(formData.get("lastPaidAt"));
    }
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.create({
            data: {
                name,
                amount,
                frequency,
                category,
                isAutoPay,
                workspaceId: activeWorkspace.id,
                dayOfMonth,
                lastPaidAt
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error saving template to database:", error);
        return {
            success: false,
            error: "Failed to create template"
        };
    }
}
async function deleteTemplate(id) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!template) {
            throw new Error("Template not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.delete({
            where: {
                id: template.id
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting template:", error);
        return {
            success: false,
            error: "Failed to delete template"
        };
    }
}
async function updateTemplate(id, formData) {
    const name = formData.get("name");
    const amount = parseFloat(formData.get("amount"));
    const frequency = formData.get("frequency");
    const category = formData.get("category");
    const isAutoPay = formData.get("isAutoPay") === "on";
    const dayOfMonth = formData.get("dayOfMonth") ? parseInt(formData.get("dayOfMonth")) : null;
    let lastPaidAt = null;
    if (formData.get("lastPaidAt")) {
        lastPaidAt = new Date(formData.get("lastPaidAt"));
    }
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!template) {
            throw new Error("Template not found");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.update({
            where: {
                id: template.id
            },
            data: {
                name,
                amount,
                frequency,
                category,
                isAutoPay,
                dayOfMonth,
                lastPaidAt
            }
        });
        revalidateFinanceViews();
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating template:", error);
        return {
            success: false,
            error: "Failed to update template"
        };
    }
}
async function markAsPaid(id) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
            where: {
                id,
                workspaceId: activeWorkspace.id
            }
        });
        if (!template) {
            throw new Error("Gasto no encontrado");
        }
        const occurrenceDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextTemplateOccurrence"])(template, new Date());
        if (!occurrenceDate) {
            throw new Error("No se pudo calcular la próxima ocurrencia del gasto");
        }
        const alreadyPaid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.findMany({
            where: {
                templateId: id,
                workspaceId: activeWorkspace.id,
                cycleReference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(template, occurrenceDate)
            }
        });
        const paidAmount = alreadyPaid.reduce((acc, record)=>acc + record.amountPaid, 0);
        const outstandingAmount = Math.max(template.amount - paidAmount, 0);
        return await settleTemplateOccurrence({
            templateId: id,
            occurrenceDate,
            amountPaid: outstandingAmount,
            moveRemainingToNextWeek: false
        });
    } catch (error) {
        console.error("Error marking template as paid:", error);
        return {
            success: false,
            error: "Failed to mark as paid"
        };
    }
}
async function markWaterfallItemAsPaid(templateId, occurrenceDate) {
    try {
        const { activeWorkspace } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workspaceContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserContext"])();
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
            where: {
                id: templateId,
                workspaceId: activeWorkspace.id
            }
        });
        if (!template) {
            throw new Error("Gasto no encontrado");
        }
        const alreadyPaid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].history.findMany({
            where: {
                templateId,
                workspaceId: activeWorkspace.id,
                cycleReference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$waterfallCalculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCycleReference"])(template, occurrenceDate)
            }
        });
        const paidAmount = alreadyPaid.reduce((acc, record)=>acc + record.amountPaid, 0);
        return await settleTemplateOccurrence({
            templateId,
            occurrenceDate: new Date(occurrenceDate),
            amountPaid: Math.max(template.amount - paidAmount, 0),
            moveRemainingToNextWeek: false
        });
    } catch (error) {
        console.error("Error marking waterfall item as paid:", error);
        return {
            success: false,
            error: "Failed to mark waterfall item as paid"
        };
    }
}
async function deferWaterfallItem(templateId, occurrenceDate, amountPaidInput) {
    try {
        const occurrence = new Date(occurrenceDate);
        const amountPaid = normalizeAmount(amountPaidInput);
        return await settleTemplateOccurrence({
            templateId,
            occurrenceDate: occurrence,
            amountPaid,
            moveRemainingToNextWeek: true
        });
    } catch (error) {
        console.error("Error deferring waterfall item:", error);
        return {
            success: false,
            error: "Failed to defer waterfall item"
        };
    }
}
async function moveWaterfallItemToNextWeek(templateId, occurrenceDate) {
    try {
        return await settleTemplateOccurrence({
            templateId,
            occurrenceDate: new Date(occurrenceDate),
            amountPaid: 0,
            moveRemainingToNextWeek: true
        });
    } catch (error) {
        console.error("Error moving waterfall item to next week:", error);
        return {
            success: false,
            error: "Failed to move waterfall item to next week"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTemplate,
    deleteTemplate,
    updateTemplate,
    markAsPaid,
    markWaterfallItemAsPaid,
    deferWaterfallItem,
    moveWaterfallItemToNextWeek
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplate, "40988d1643330259726b36366b1d3d24fae70d078f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplate, "40fb45f458da2968a746ef82ca394114aa559349b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTemplate, "6056230f8d60ee00cb6c853fffd88d9eaf08fb9816", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAsPaid, "40bf20b99fc0e154e4fa9fc6923f53b9613ae04a3a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markWaterfallItemAsPaid, "60db6f9464dda5f5acc5580859a12f6a60720ed8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deferWaterfallItem, "702f7715574f14001cea30a327100f71eaebfec823", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(moveWaterfallItemToNextWeek, "60867848a17572c668ca1e96ae399fd2291b86b367", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "402f42fabb971aea5d4e16162b6543c7b4cecb1bdd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAppSettings"],
    "40836e783c10f49a1899499fede75639eb700c6ca0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAccount"],
    "40b8213de36e5cba88d65f90ddc2cb7cc195509191",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAccount"],
    "40ba095d4ff43cb6d3ba74e4d8bd41d5c596aa83f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPendingExpense"],
    "40d7206777bcfb7f913e0805640dbfa9366b5eac2c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCreditCard"],
    "40e1111a1c4b792b38e0f30302caf5578ad8e92be2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCreditCard"],
    "604d5a899a48513ed0b09d487709585742a456baa3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCreditCard"],
    "6056230f8d60ee00cb6c853fffd88d9eaf08fb9816",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTemplate"],
    "606aff745bf4d44b2804e7a242bc4f0b2e6ffabdaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCreditCardAsPaid"],
    "60867848a17572c668ca1e96ae399fd2291b86b367",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveWaterfallItemToNextWeek"],
    "60db6f9464dda5f5acc5580859a12f6a60720ed8af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markWaterfallItemAsPaid"],
    "60fafc7537bf53d7ffb5481b2f0e66d4c1c7c2eee1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAccount"],
    "702f7715574f14001cea30a327100f71eaebfec823",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deferWaterfallItem"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/pendingExpenseActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/settingsActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/accountActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/creditCardActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/templateActions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$pendingExpenseActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$settingsActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$accountActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$creditCardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$templateActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_fd6ea515._.js.map