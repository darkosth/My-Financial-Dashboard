"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { acceptWorkspaceInvite } from "@/lib/actions/inviteActions";

export default function AcceptInviteClient({ token }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAccept = async () => {
    setIsLoading(true);
    const result = await acceptWorkspaceInvite(token);
    
    if (result.success) {
      // ¡Éxito! La mandamos al Dashboard
      router.push("/");
    } else {
      alert(result.error || "Hubo un error al procesar la invitación.");
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleAccept} 
      disabled={isLoading} 
      className="w-full text-base py-6 bg-blue-600 hover:bg-blue-700 text-white"
    >
      {isLoading ? "Aceptando invitación..." : "Aceptar e Ingresar"}
    </Button>
  );
}