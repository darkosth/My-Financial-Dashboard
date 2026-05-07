"use client";

import { signIn } from "next-auth/react";
import { Chrome, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link";

type GoogleSignInButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  label?: string;
};

export default function GoogleSignInButton({
  variant = "default",
  className = "",
  showArrow = false,
  label,
}: GoogleSignInButtonProps) {
  const handleClick = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      <Chrome className="h-4 w-4" />
      <span>{label ?? "Continuar con Google"}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </Button>
  );
}
