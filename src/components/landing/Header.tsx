import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sheila-logo.png.asset.json";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { label: "Coleção", href: "#colecao" },
  { label: "Looks", href: "#looks" },
  { label: "Novidades", href: "#novidades" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-[36px] z-50 transition-all duration-500 sm:top-[38px]",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" aria-label={siteConfig.nome} className="flex items-center">
          <img
            src={logo.url}
            alt={`Logotipo ${siteConfig.nome}`}
            width={550}
            height={240}
            className="h-10 w-auto md:h-12"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="hidden sm:inline-flex" size="sm" evento="header_whatsapp">
            Falar no WhatsApp
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Navegação mobile"
          className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <WhatsAppButton className="w-full" evento="header_whatsapp_mobile">
                Falar no WhatsApp
              </WhatsAppButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
