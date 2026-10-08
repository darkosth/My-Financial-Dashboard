import test from 'node:test';
import assert from 'node:assert/strict';

const enabled=process.env.RUN_FINANCE_INTEGRATION === '1';
test('finance repair complete user journeys in disposable local database',{skip:!enabled},async t=>{
 const url=new URL(process.env.DATABASE_URL ?? 'http://invalid');
 assert.equal(url.hostname,'127.0.0.1','Integration tests must use disposable local DB');assert.equal(url.port,'55486');
 const {default:db}=await import('./prisma.ts');
 const {createManualMovement,reverseManualMovement,classifyMovement}=await import('./finance/movements.ts');
 const {reconcileMovement,undoReconciliation,replaceManualMovement,setClosure}=await import('./finance/reconciliation.ts');
 const {transferToCash,undoTransfer}=await import('./finance/transfers.ts');
 const {loadFinanceEvents,undoClassification}=await import('./finance/events.ts');
 const {buildAnalytics}=await import('./finance/analytics.ts');
 const suffix=crypto.randomUUID();
 const user=await db.user.create({data:{email:`repair-${suffix}@example.invalid`}});
 const workspace=await db.workspace.create({data:{name:'Disposable repair integration',ownerUserId:user.id}});const w=workspace.id,u=user.id;
 const account=await db.account.create({data:{workspaceId:w,name:'Manual account',balanceCents:100000}});
 const synced=await db.account.create({data:{workspaceId:w,name:'Synced account',source:'PLAID',balanceCents:100000}});
 const category=await db.financeCategory.create({data:{workspaceId:w,name:'Transport',nameKey:'transport'}});
 const alternate=await db.financeCategory.create({data:{workspaceId:w,name:'Other',nameKey:'other'}});
 await db.financeCategory.create({data:{workspaceId:w,name:'Transferencias propias',nameKey:'transferencias propias'}});
 await db.financeCash.create({data:{workspaceId:w,balanceCents:200000}});
 const template=await db.template.create({data:{workspaceId:w,name:'Gas',amountCents:5000,frequency:'WEEKLY',category:'TRANSPORTATION',lastPaidAt:new Date('2026-10-01T12:00:00Z')}});
 const cycle='2026-10-01';
 const manual=(overrides:Partial<Parameters<typeof createManualMovement>[2]>={})=>createManualMovement(w,u,{requestId:crypto.randomUUID(),name:'Gas',date:'2026-10-02',amountCents:5000,source:'DEBIT',accountId:account.id,categoryId:category.id,...overrides});
 const bank=(amountCents=5000,extra:Record<string,unknown>={})=>db.financialMovement.create({data:{workspaceId:w,name:'Bank gas',date:new Date('2026-10-02'),amountCents,source:'BANK',kind:'EXPENSE',accountId:synced.id,...extra}});
 const input=(movementId:string)=>({movementId,targetId:template.id,cycleReference:cycle});
 try{
 await t.test('manual debit changes its account and reversal restores it; category/account are required',async()=>{
   await assert.rejects(manual({categoryId:null}),/categoría/);await assert.rejects(manual({accountId:null}),/cuenta/);
   const m=await manual();assert.equal((await db.account.findUniqueOrThrow({where:{id:account.id}})).balanceCents,95000);
   await reverseManualMovement(w,u,m.id);assert.equal((await db.account.findUniqueOrThrow({where:{id:account.id}})).balanceCents,100000);
 });
 await t.test('duplicate import replaces manual payment once and undo restores history, categories and dashboard review',async()=>{
   const m=await manual({accountId:synced.id,targetId:template.id,cycleReference:cycle});
   assert.equal((await db.account.findUniqueOrThrow({where:{id:synced.id}})).balanceCents,100000);
   const item=await db.plaidItem.create({data:{workspaceId:w,plaidItemId:`qa-${suffix}`}});
   const payload={transactionId:'txn',accountId:'remote',amountCents:5000,date:'2026-10-02',authorizedDate:null,name:'Bank gas',merchantName:'Gas',categoryPrimary:null,categoryDetailed:null,isoCurrencyCode:'USD',pending:false,pendingTransactionId:null,removedAt:null};
   const record=await db.learningRecord.create({data:{workspaceId:w,plaidItemId:item.id,kind:'TRANSACTION',externalKey:'txn',payload}});
   const b=await bank(5000,{externalKey:`${item.id}:txn`,categoryId:alternate.id});
   await assert.rejects(reconcileMovement(w,u,input(b.id)),/compatible/);
   await reconcileMovement(w,u,{...input(b.id),replacesMovementId:m.id});
   assert.equal(await db.history.count({where:{workspaceId:w}}),1);
   assert.ok((await db.financialMovement.findUniqueOrThrow({where:{id:m.id}})).reversedAt);
   assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:b.id}})).categoryId,category.id);
   assert.ok((await db.learningRecord.findUniqueOrThrow({where:{id:record.id}})).payload && JSON.stringify((await db.learningRecord.findUniqueOrThrow({where:{id:record.id}})).payload).includes('MANUAL_SELECTION'));
   const active=await db.financialMovement.findMany({where:{workspaceId:w,reversedAt:null}});
   const analytics=buildAnalytics({movements:active.map(x=>({...x,date:x.date.toISOString().slice(0,10),reversedAt:null,accountName:'QA',reconciliation:null,transferId:null})) as Parameters<typeof buildAnalytics>[0]['movements'],categories:[{id:category.id,name:'Transport',archived:false,subcategories:[]}],occurrences:[],cash:{balanceCents:0},accounts:[],events:[],legacyPayments:[]},'2026-10-01','2026-10-31','USD');
   assert.equal(analytics.categories.reduce((sum,[,cents])=>sum+cents,0),5000);
   await undoReconciliation(w,u,b.id);
   assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:m.id}})).reversedAt,null);
   assert.ok(await db.financeReconciliation.findUnique({where:{activeMovementId:m.id}}));
   assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:b.id}})).categoryId,alternate.id);
   const updated=(await db.learningRecord.findUniqueOrThrow({where:{id:record.id}})).payload as {review:unknown};assert.equal(updated.review,null);
   await reconcileMovement(w,u,{...input(b.id),replacesMovementId:m.id});
 });
 await t.test('extra charge stays on same closed period and pending movements cannot reconcile',async()=>{
   const b=await bank(1600);await reconcileMovement(w,u,input(b.id));
   const o=await db.financeOccurrence.findUniqueOrThrow({where:{workspaceId_targetId_cycleReference:{workspaceId:w,targetId:template.id,cycleReference:new Date(cycle)}}});
   assert.equal(o.closure,'AUTO');assert.equal((await db.history.aggregate({where:{workspaceId:w,templateId:template.id},_sum:{amountPaidCents:true}}))._sum.amountPaidCents,6600);
   await undoReconciliation(w,u,b.id);
   const pending=await bank(35393,{status:'PENDING'});await assert.rejects(reconcileMovement(w,u,input(pending.id)),/contabilizados/);
 });
 await t.test('partial accumulation closes at five percent; excess and remainder close manually',async()=>{
   const createTarget=()=>db.template.create({data:{workspaceId:w,name:'Monthly repair',amountCents:10000,frequency:'MONTHLY',category:'TRANSPORTATION',dayOfMonth:19}});
   const target=await createTarget();
   const first=await bank(4000);const second=await bank(5500);
   const targetInput=(id:string)=>({movementId:id,targetId:target.id,cycleReference:'2026-10-01'});
   const state=()=>db.financeOccurrence.findUniqueOrThrow({where:{workspaceId_targetId_cycleReference:{workspaceId:w,targetId:target.id,cycleReference:new Date('2026-10-01')}}});
   await reconcileMovement(w,u,targetInput(first.id));assert.equal((await state()).closure,'OPEN');
   await reconcileMovement(w,u,targetInput(second.id));assert.equal((await state()).closure,'AUTO');
   await undoReconciliation(w,u,second.id);assert.equal((await state()).closure,'OPEN');
   await setClosure(w,u,{occurrenceId:(await state()).id,closed:true});assert.equal((await state()).closure,'MANUAL');
   await setClosure(w,u,{occurrenceId:(await state()).id,closed:false});assert.equal((await state()).closure,'OPEN');
   const excessTarget=await createTarget();const excess=await bank(11000);
   await reconcileMovement(w,u,{movementId:excess.id,targetId:excessTarget.id,cycleReference:'2026-10-01'});
   const over=await db.financeOccurrence.findUniqueOrThrow({where:{workspaceId_targetId_cycleReference:{workspaceId:w,targetId:excessTarget.id,cycleReference:new Date('2026-10-01')}}});assert.equal(over.closure,'OPEN');
   await setClosure(w,u,{occurrenceId:over.id,closed:true});assert.equal((await db.financeOccurrence.findUniqueOrThrow({where:{id:over.id}})).closure,'MANUAL');
   await assert.rejects(reconcileMovement('another-workspace',u,targetInput(excess.id)),/disponible/);
 });
 await t.test('unplanned replacement and its undo preserve category',async()=>{
   const m=await manual({accountId:synced.id,amountCents:1234});const b=await bank(1234);
   await replaceManualMovement(w,u,{movementId:b.id,replacesMovementId:m.id});assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:b.id}})).categoryId,category.id);
   await assert.rejects(transferToCash(w,u,b.id),/Deshaz/);
   await undoReconciliation(w,u,b.id);assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:m.id}})).reversedAt,null);
 });
 await t.test('withdrawal moves money into cash, cash payments consume it, and classification has durable undo',async()=>{
   const before=(await db.financeCash.findUniqueOrThrow({where:{workspaceId:w}})).balanceCents;
   const withdrawal=await bank(180000);await transferToCash(w,u,withdrawal.id);
   assert.equal((await db.financeCash.findUniqueOrThrow({where:{workspaceId:w}})).balanceCents,before+180000);
   const rent=await manual({source:'CASH',accountId:null,amountCents:147500,name:'Rent'});
   assert.equal((await db.financeCash.findUniqueOrThrow({where:{workspaceId:w}})).balanceCents,before+32500);
   await reverseManualMovement(w,u,rent.id);await undoTransfer(w,u,withdrawal.id);assert.equal((await db.financeCash.findUniqueOrThrow({where:{workspaceId:w}})).balanceCents,before);
   await classifyMovement(w,u,{movementId:withdrawal.id,categoryId:alternate.id,subcategoryId:null});
   const event=await db.financeEvent.findFirstOrThrow({where:{workspaceId:w,movementId:withdrawal.id,action:'CLASSIFIED'}});
   await undoClassification(w,u,{eventId:event.id});assert.equal((await db.financialMovement.findUniqueOrThrow({where:{id:withdrawal.id}})).categoryId,null);
 });
 await t.test('history pagination reaches beyond 200 records without repeats',async()=>{
   await db.financeEvent.createMany({data:Array.from({length:220},(_,i)=>({workspaceId:w,userId:u,action:'QA_HISTORY',payload:{i}}))});
   let cursor:string|undefined;const ids=new Set<string>();do{const page=await loadFinanceEvents(w,{from:'2020-01-01',to:'2099-12-31',cursor,limit:50});for(const e of page.items){assert.ok(!ids.has(e.id));ids.add(e.id);}cursor=page.nextCursor ?? undefined;}while(cursor);
   assert.equal(ids.size,await db.financeEvent.count({where:{workspaceId:w}}));assert.ok(ids.size>220);
 });
 }finally{await db.$disconnect();}
});
