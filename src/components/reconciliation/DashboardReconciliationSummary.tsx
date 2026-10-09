import Link from "next/link";
import { ArrowRight, CircleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardReconciliationSummary({
  postedCount,
  provisionalCount,
  reviewCount,
}: {
  postedCount: number;
  provisionalCount: number;
  reviewCount: number;
}) {
  const total = postedCount + provisionalCount;

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex flex-wrap items-center gap-2">
          <CircleAlert className="size-4 text-muted-foreground" />
          <CardTitle>Conciliación bancaria</CardTitle>
          <Badge variant={total ? "outline" : "secondary"}>
            {total ? `${total} por revisar` : "Al día"}
          </Badge>
        </div>
        <CardDescription>
          {postedCount} contabilizado{postedCount === 1 ? "" : "s"}
          {provisionalCount > 0
            ? ` · ${provisionalCount} provisional${provisionalCount === 1 ? "" : "es"}`
            : ""}
          {reviewCount > 0
            ? ` · ${reviewCount} con cambios por revisar`
            : ""}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-between gap-4 pt-5">
        <p className="text-sm text-muted-foreground">
          {provisionalCount > 0
            ? "Los cargos provisionales esperan confirmación del banco."
            : total > 0
              ? "Revisa y concilia tus movimientos bancarios."
              : "No hay cargos pendientes de conciliación."}
        </p>
        <Button asChild variant="outline">
          <Link href="/movements?source=BANK&status=unreconciled">
            Revisar movimientos <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
