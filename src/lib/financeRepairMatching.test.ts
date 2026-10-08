import assert from 'node:assert/strict';
import test from 'node:test';
import { rankFinanceOccurrences } from './finance/matching.ts';
import { resolveFinancePeriod } from './finance/periods.ts';
import type { Occurrence } from './finance/uiTypes.ts';
import type { LearningTransactionPayload } from './learningTypes.ts';
const transaction: LearningTransactionPayload={accountId:'bank',amountCents:5000,authorizedDate:null,categoryDetailed:null,categoryPrimary:null,date:'2026-10-02',isoCurrencyCode:'USD',merchantName:'Gas',name:'Gas',pending:false,pendingTransactionId:null,removedAt:null,transactionId:'t'};
const period=(id:string,targetId:string,name:string,weekStart:string,expectedCents=5000):Occurrence=>({id,targetId,name,weekStart,cycleReference:weekStart,expectedCents,paidCents:0,closure:'OPEN'});
test('ranking prefers name and nearby week and never repeats old periods for one expense',()=>{
 const rows=[period('old','gas','Gas','2025-10-02'),period('near','gas','Gas','2026-10-01'),period('other','food','Lunch','2026-10-01')];
 const ranked=rankFinanceOccurrences(transaction,rows);assert.equal(ranked[0],'near');assert.ok(!ranked.includes('old'));assert.deepEqual(rankFinanceOccurrences({...transaction,amountCents:575},rows),[]);
});
test('a monthly period with a late due date resolves within the selected month',()=>{
 const item={targetId:'car',name:'Car insurance',amountCents:35400,category:'TRANSPORTATION',frequency:'MONTHLY',dayOfMonth:19,lastPaidAt:null,kind:'template' as const};
 assert.deepEqual(resolveFinancePeriod(item,'2026-10-01'),{cycleReference:'2026-10-01',occurrenceDate:'2026-10-19'});
 assert.equal(resolveFinancePeriod(item,'2026-10-02'),null);
});
