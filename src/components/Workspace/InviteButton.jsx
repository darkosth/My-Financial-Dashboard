"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Check, Copy } from "lucide-react";
import { generateInviteToken } from "@/lib/actions/inviteActions";

export default function InviteButton({ workspaceId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inviteLink, setInviteLink] = useState("");

  const handleGenerateLink = async () => {
    setIsLoading(true);
    // Llamamos al cerebro del servidor
    const result = await generateInviteToken(workspaceId);
    
    if (result.success) {
      // Magia de UX: window.location.origin detecta automáticamente 
      // si estás en "http://localhost:3000" o en "https://tu-app.vercel.app"
      const link = `${window.location.origin}/invite/${result.token}`;
      setInviteLink(link);
    } else {
      alert("Error generating the link.");
    }
    setIsLoading(false);
  };

  const handleCopy = () => {
    // Escribimos el enlace en el portapapeles del celular/computadora
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    // Regresamos el ícono a la normalidad después de 2 segundos
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="p-5 border-2 border-slate-100 rounded-xl bg-white shadow-sm space-y-4 max-w-md">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">Share Workspace</h3>
        <p className="text-sm text-slate-500 mt-1">
          Generate a magic link to invite a member. Anyone with this link can access your financial data.
        </p>
      </div>

      {!inviteLink ? (
        <Button onClick={handleGenerateLink} disabled={isLoading} className="w-full">
          <LinkIcon className="w-4 h-4 mr-2" />
          {isLoading ? "Generating..." : "Generate Invite Link"}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            readOnly 
            value={inviteLink} 
            className="flex-1 px-3 py-2 text-sm border rounded-md bg-slate-50 text-slate-600 outline-none focus:ring-2 focus:ring-slate-200 transition-all"
          />
          <Button 
            onClick={handleCopy} 
            variant={copied ? "default" : "outline"}
            className={copied ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}