"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppDialogContent, Dialog, DialogTitle } from "@/components/ui/dialog";
import { classifyMovementAction } from "@/lib/actions/financeActions";
import type { FinanceCategory } from "@/lib/finance/uiTypes";
import { CategoryFields, type CategorySelection, type RunAction } from "./FinanceForms";

export default function MovementCategoryEditor({
  movementId,
  categories,
  categoryId,
  subcategoryId,
  categoryName,
  subcategoryName,
  disabled,
  run,
  onSaved,
}: {
  movementId: string;
  categories: FinanceCategory[];
  categoryId: string;
  subcategoryId: string;
  categoryName: string;
  subcategoryName: string;
  disabled: boolean;
  run: RunAction;
  onSaved: (selection: CategorySelection) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<CategorySelection>({
    categoryId,
    subcategoryId,
    categoryName,
    subcategoryName,
  });

  const startEditing = () => {
    setSelection({ categoryId, subcategoryId, categoryName, subcategoryName });
    setOpen(true);
  };

  return (
    <>
      <Button type="button" variant="outline" disabled={disabled} onClick={startEditing}>
        Modificar categoría
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <AppDialogContent aria-describedby={undefined}>
          <DialogTitle>Modificar categoría</DialogTitle>
          <CategoryFields
            categories={categories}
            category={selection.categoryId}
            subcategory={selection.subcategoryId}
            onChange={(nextCategory, nextSubcategory) =>
              setSelection((current) => ({
                ...current,
                categoryId: nextCategory,
                subcategoryId: nextSubcategory,
              }))
            }
            onSelectionChange={setSelection}
            run={run}
            busy={disabled}
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" disabled={disabled} onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button
              type="button"
              disabled={disabled || (selection.categoryId === categoryId && selection.subcategoryId === subcategoryId)}
              onClick={() => run(
                () => classifyMovementAction({
                  movementId,
                  categoryId: selection.categoryId || null,
                  subcategoryId: selection.subcategoryId || null,
                }),
                () => {
                  onSaved(selection);
                  setOpen(false);
                },
              )}
            >
              Guardar
            </Button>
          </div>
        </AppDialogContent>
      </Dialog>
    </>
  );
}
