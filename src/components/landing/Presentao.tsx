import { Gift, ShoppingBag } from "lucide-react";
import { BolsasCarrossel } from "./BolsasCarrossel";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig } from "@/config/site";

/** Seção exclusiva da campanha promocional do brinde. */
export function Presentao() {
  return (
    <section id="presentao" className="scroll-mt-28 bg-pink/25 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <BolsasCarrossel />
            <span className="absolute -top-4 left-6 z-10 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary shadow-[var(--shadow-soft)]">
              <Gift size={14} strokeWidth={1.5} aria-hidden />
              PRESENTE EXCLUSIVO DE LANÇAMENTO
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            PRESENTE EXCLUSIVO DE LANÇAMENTO
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Seu look novo vem com um presente especial
          </h2>
          <p className="mt-5 font-display text-xl text-foreground/85 sm:text-2xl">
            Comprou R$ 250 em peças da nova coleção, ganhou a Mini Bolsa exclusiva com alça inclusa
            (disponível em 6 cores).
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Promoção exclusiva de lançamento • Válida enquanto durarem os estoques do brinde.
          </p>

          <WhatsAppButton
            className="mt-8"
            size="lg"
            evento="promo_quero_mini_bolsa"
            mensagem={siteConfig.mensagens.miniBolsa}
          >
            <ShoppingBag size={18} strokeWidth={1.5} aria-hidden />
            Quero garantir minha Mini Bolsa
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
