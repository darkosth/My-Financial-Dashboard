"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { acceptWorkspaceInvite } from "@/lib/actions/inviteActions";

export default function AcceptInviteClient({ token }: { token: string }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleAccept = async () => {
    setIsLoading(true);
    const result = await acceptWorkspaceInvite(token);
    
    if (result.success) {
      // ¡Éxito! La mandamos al Dashboard
      router.push("/");
    } else {
      const message = "error" in result ? result.error : "Hubo un error al procesar la invitación.";
      alert(message);
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
