import { Instagram, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/sheila-logo.png.asset.json";
import fachada from "@/assets/loja-fachada.png.asset.json";
import { siteConfig, whatsappLink } from "@/config/site";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sand-soft py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src={logo.url}
              alt={`Logotipo ${siteConfig.nome}`}
              loading="lazy"
              width={550}
              height={240}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{siteConfig.frase}</p>
          </div>


          <nav aria-label="Links do rodapé" className="flex flex-col gap-3 text-sm">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram size={16} aria-hidden /> sheilaoliveirastorerp
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle size={16} aria-hidden /> +55 17 99228-7373
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Termos de Uso
            </a>
          </nav>
          <div className="max-w-xs">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-foreground">
              Visite a loja
            </h3>
            <a
              href={siteConfig.endereco.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-start gap-2 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
            >
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
              <span>
                {siteConfig.endereco.linha1}
                <br />
                {siteConfig.endereco.linha2}
              </span>
            </a>
            <img
              src={fachada.url}
              alt={`Fachada da ${siteConfig.nome} em São José do Rio Preto`}
              loading="lazy"
              className="mt-4 w-full rounded-xl border border-border object-cover shadow-sm"
            />
          </div>
        </div>



        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {ano} {siteConfig.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
