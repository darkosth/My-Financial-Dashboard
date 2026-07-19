import { BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReconciliationQueue from "@/components/reconciliation/ReconciliationQueue";
import type { LearningQueueData } from "@/lib/learningData";

export default function LearningReconciliationCard({ data }: { data: LearningQueueData }) {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex flex-wrap items-center gap-2">
          <BrainCircuit className="size-4 text-emerald-600 dark:text-emerald-400" />
          <CardTitle>Conciliación bancaria</CardTitle>
          <Badge variant="outline">Observación</Badge>
        </div>
        <CardDescription>Solo aprendizaje · no modifica pagos.</CardDescription>
      </CardHeader>
      <CardContent>
        <ReconciliationQueue data={data} />
      </CardContent>
    </Card>
  );
}
