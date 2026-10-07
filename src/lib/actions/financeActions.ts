'use server';
import { revalidatePath } from 'next/cache';
import { getCurrentUserContext } from '@/lib/workspaceContext';
import { ValidationError,type ActionResult } from './validation';
import { createManualMovement,adjustCash,classifyMovement,reverseManualMovement,resolveBankChange,setMovementTreatment,type ManualInput } from '@/lib/finance/movements';
import { createCategory,updateCategory } from '@/lib/finance/categories';
import { transferToCash,pairTransfer,undoTransfer } from '@/lib/finance/transfers';
import { reconcileMovement,undoReconciliation,setClosure,linkExistingPayment,type ReconcileInput } from '@/lib/finance/reconciliation';
async function run<T>(fn:(workspaceId:string,userId:string)=>Promise<T>):Promise<ActionResult<T>>{try{const{activeWorkspace,user}=await getCurrentUserContext();const data=await fn(activeWorkspace.id,user.id);for(const path of ['/dashboard','/learning','/movements','/calendar'])revalidatePath(path);return{success:true,data};}catch(error){return{success:false,error:error instanceof ValidationError?error.message:'No se pudo guardar la operación. Revisa los datos e inténtalo otra vez.'};}}
export async function createManualMovementAction(input:ManualInput){return run((w,u)=>createManualMovement(w,u,input));}
export async function adjustCashAction(input:{requestId:string;amountCents:number;reason:string;date:string}){return run((w,u)=>adjustCash(w,u,input));}
export async function classifyMovementAction(input:{movementId:string;categoryId:string|null;subcategoryId:string|null}){return run((w,u)=>classifyMovement(w,u,input));}
export async function createCategoryAction(input:{name:string;parentId?:string}){return run((w,u)=>createCategory(w,u,input));}
export async function updateCategoryAction(input:{id:string;name?:string;archived?:boolean;isSubcategory?:boolean}){return run((w,u)=>updateCategory(w,u,input));}
export async function transferToCashAction(input:{movementId:string}){return run((w,u)=>transferToCash(w,u,input.movementId));}
export async function pairTransferAction(input:{movementId:string;counterpartId:string}){return run((w,u)=>pairTransfer(w,u,input));}
export async function reconcileMovementAction(input:ReconcileInput){return run(async(w,u)=>{await reconcileMovement(w,u,input);});}
export async function undoReconciliationAction(input:{movementId:string}){return run((w,u)=>undoReconciliation(w,u,input.movementId));}
export async function setOccurrenceClosureAction(input:{occurrenceId:string;closed:boolean;targetId?:string;cycleReference?:string}){return run((w,u)=>setClosure(w,u,input));}
export async function reverseManualMovementAction(input:{movementId:string}){return run((w,u)=>reverseManualMovement(w,u,input.movementId));}
export async function linkExistingPaymentAction(input:{movementId:string;historyId:string;targetId:string}){return run(async(w,u)=>{await linkExistingPayment(w,u,input);});}

export async function undoTransferAction(input:{movementId:string}){return run((w,u)=>undoTransfer(w,u,input.movementId));}
export async function resolveBankChangeAction(input:{movementId:string}){return run((w,u)=>resolveBankChange(w,u,input.movementId));}
export async function setMovementTreatmentAction(input:{movementId:string;treatment:"EXPENSE"|"INCOME"|"CARD_PAYMENT"|"REFUND";refundOfId?:string}){return run((w,u)=>setMovementTreatment(w,u,input));}
