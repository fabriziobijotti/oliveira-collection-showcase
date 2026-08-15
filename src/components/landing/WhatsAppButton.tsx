import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig, trackConversion, whatsappLink } from "@/config/site";

type Props = {
  children: ReactNode;
  mensagem?: string;
  evento?: string;
  className?: string;
  variant?: "primary" | "outline" | "soft";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]",
  outline: "border border-primary/40 text-primary hover:bg-primary/5",
  soft: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function WhatsAppButton({
  children,
  mensagem = siteConfig.mensagens.padrao,
  evento = "whatsapp_click",
  className,
  variant = "primary",
  size = "md",
}: Props) {
  return (
    <a
      href={whatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion(evento)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
