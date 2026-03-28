"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Save } from "lucide-react";
import { updateWeeklyIncome } from "@/lib/actions/settingsActions";

export default function WeeklyIncomeForm({ currentIncome, workspaceId }) {
  const [income, setIncome] = useState(currentIncome || 0);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);
    
    const result = await updateWeeklyIncome(workspaceId, income);
    
    if (result.success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } else {
      alert("Error saving income.");
    }
    
    setIsSaving(false);
  };

  return (
    <div className="space-y-4">
      <div className="relative flex items-center max-w-xs">
        <DollarSign className="absolute left-3 w-5 h-5 text-muted-foreground" />
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring outline-none transition-all text-lg font-semibold"
          placeholder="1000"
        />
      </div>
      <Button 
        onClick={handleSave} 
        disabled={isSaving || income === ""}
        className={saved ? "bg-emerald-600 hover:bg-emerald-700 text-white transition-colors" : ""}
      >
        <Save className="w-4 h-4 mr-2" />
        {isSaving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
      </Button>
    </div>
  );
}