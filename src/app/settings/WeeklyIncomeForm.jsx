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
        <DollarSign className="absolute left-3 w-5 h-5 text-slate-400" />
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 outline-none transition-all text-lg font-semibold text-slate-700"
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