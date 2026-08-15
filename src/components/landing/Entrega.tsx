import { Truck, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Entrega() {
  return (
    <section id="entrega" className="scroll-mt-24 bg-sprig/20 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mb-4 inline-flex items-center justify-center rounded-full bg-background/70 p-3 text-primary shadow-[var(--shadow-soft)]">
            <Truck size={24} strokeWidth={1.6} aria-hidden />
          </span>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Entrega local
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/90">
            Não está em Rio Preto? A Sheila pode chegar até você.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Também realizamos entregas em São José do Rio Preto e cidades da região. Fale com nossa
            equipe pelo WhatsApp, veja os modelos disponíveis e consulte a entrega para sua cidade.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              evento="entrega_consultar"
              mensagem={siteConfig.mensagens.entrega}
            >
              Consultar entrega pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#colecao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
            >
              <MapPin size={18} strokeWidth={1.6} aria-hidden />
              Quero ver os looks disponíveis
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
