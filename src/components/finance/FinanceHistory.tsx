'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { loadFinanceEventsAction, undoClassificationAction } from '@/lib/actions/financeActions';
import type { FinanceEventsPage } from '@/lib/finance/events';
import type { RunAction } from './FinanceForms';

export default function FinanceHistory({ from, to, run, busy, onSelectMovement }: { from: string; to: string; run: RunAction; busy: boolean; onSelectMovement: (id: string) => void }) {
  const [page, setPage] = useState<FinanceEventsPage>({ items: [], nextCursor: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);
  const generation = useRef(0);
  useEffect(() => {
    const current = ++generation.current;
    let active = true;
    void loadFinanceEventsAction({ from, to }).then(result => {
      if (!active || current !== generation.current) return;
      if (result.success) { setPage(result.data); setError(''); }
      else { setPage({ items: [], nextCursor: null }); setError(result.error); }
      setLoading(false);
    }).catch(() => { if (active) { setError('No se pudo cargar el historial.'); setLoading(false); } });
    return () => { active = false; generation.current = current + 1; };
  }, [from, to, revision]);
  async function loadMore() {
    if (loading || !page.nextCursor) return;
    const current = generation.current;
    setLoading(true); setError('');
    try {
      const result = await loadFinanceEventsAction({ from, to, cursor: page.nextCursor });
      if (current !== generation.current) return;
      if (result.success) setPage(previous => ({ items: [...previous.items, ...result.data.items.filter(e => !previous.items.some(p => p.id === e.id))], nextCursor: result.data.nextCursor }));
      else setError(result.error);
    } catch { if (current === generation.current) setError('No se pudo cargar el historial.'); }
    finally { if (current === generation.current) setLoading(false); }
  }
  return <div aria-busy={loading}>
    {error && <div role="alert" className="my-3 text-sm text-destructive">{error}<Button variant="outline" size="sm" className="ml-3" onClick={() => { setLoading(true); setRevision(r => r + 1); }}>Reintentar</Button></div>}
    <ul className="divide-y">{page.items.map(event => <li key={event.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
      <div><p className="text-sm">{event.label}{event.movementName ? ` · ${event.movementName}` : ''}</p><p className="text-xs text-muted-foreground">{new Date(event.createdAt).toLocaleString('es')}</p>{event.details.map((detail, index) => <p key={index} className="text-xs text-muted-foreground">{detail}</p>)}</div>
      <div className="flex gap-2">{event.canUndoClassification && <Button size="sm" variant="outline" disabled={busy || loading} onClick={() => run(() => undoClassificationAction({ eventId: event.id }), () => { setLoading(true); setRevision(r => r + 1); })}>Deshacer clasificación</Button>}{event.movementId && <Button size="sm" variant="outline" disabled={busy} onClick={() => onSelectMovement(event.movementId!)}>Ver movimiento</Button>}</div>
    </li>)}</ul>
    {!loading && !error && page.items.length === 0 && <p className="py-8 text-sm text-muted-foreground">No hay operaciones en estas fechas.</p>}
    {loading && <p role="status" className="py-4 text-sm text-muted-foreground">Cargando historial…</p>}
    {page.nextCursor && <Button variant="outline" disabled={loading || busy} onClick={() => void loadMore()}>Cargar más operaciones</Button>}
  </div>;
}
