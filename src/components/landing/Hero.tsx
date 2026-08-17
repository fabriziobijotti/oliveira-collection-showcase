import { Gift } from "lucide-react";
import heroImg from "@/assets/hero-look-nova.png.asset.json";
import { promoConfig, siteConfig, trackConversion } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pink/25 pt-36 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-2 lg:gap-16">
        <div className="animate-[fade-up_1s_ease-out_both]">
          <p className="mb-5 inline-flex items-center rounded-full bg-background/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Coleção Primavera–Verão
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            A nova estação começa com você
          </h1>
          <a
            href="#presentao"
            onClick={() => trackConversion("hero_selo_presentao")}
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-primary-foreground shadow-[var(--shadow-elegant)] ring-1 ring-primary/20 ring-offset-2 ring-offset-background transition-all duration-300 animate-[selo-pulse_2.8s_ease-in-out_infinite] hover:-translate-y-0.5 motion-reduce:animate-none sm:px-8 sm:py-4"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
              <Gift size={18} strokeWidth={1.6} aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.24em] text-primary-foreground/70">
                {promoConfig.nome}
              </span>
              <span className="block font-display text-lg leading-tight sm:text-xl">
                {promoConfig.selo}
              </span>
            </span>
          </a>


          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Cores leves, tecidos frescos e peças que valorizam sua beleza em todos os momentos.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Conheça a nova coleção Primavera–Verão da Sheila Oliveira Store e descubra produções
            pensadas para deixar seus dias mais elegantes, confortáveis e cheios de personalidade.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#colecao"
              onClick={() => trackConversion("hero_ver_colecao")}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Conhecer a coleção
            </a>
            <WhatsAppButton
              variant="outline"
              size="lg"
              evento="hero_consultora"
              mensagem={siteConfig.mensagens.consultora}
            >
              Falar com uma consultora
            </WhatsAppButton>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Atendimento personalizado para ajudar você a encontrar o look ideal.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={heroImg.url}
              alt="Modelo vestindo look azul claro da nova coleção Primavera–Verão da Sheila Oliveira Store"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-accent/40 blur-2xl md:block"
          />
        </div>
      </div>
    </section>
  );
}
