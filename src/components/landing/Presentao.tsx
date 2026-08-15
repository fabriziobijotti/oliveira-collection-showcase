import { Gift, ShoppingBag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { promoConfig, siteConfig } from "@/config/site";
import { BolsasCarrossel } from "./BolsasCarrossel";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

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
              🎁 Presente exclusivo de lançamento
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.22em] text-primary">{promoConfig.nome}</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Seu look novo vem com um presente especial
          </h2>
          <p className="mt-5 font-display text-xl text-foreground/85 sm:text-2xl">
            Comprou R$ 250 em peças da nova coleção, ganhou a Mini Bolsa exclusiva com alça inclusa
            (disponível em 6 cores).
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {promoConfig.texto}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {promoConfig.complemento}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {promoConfig.cores}
          </p>

          <WhatsAppButton
            className="mt-8"
            size="lg"
            evento="promo_quero_mini_bolsa"
            mensagem={siteConfig.mensagens.miniBolsa}
          >
            <ShoppingBag size={18} strokeWidth={1.5} aria-hidden />
            🎁 Quero garantir minha Mini Bolsa
          </WhatsAppButton>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Promoção exclusiva de lançamento • Válida enquanto durarem os estoques do brinde.
          </p>

          <Accordion type="single" collapsible className="mt-6 w-full">
            <AccordionItem value="regras" className="border-border">
              <AccordionTrigger className="text-left font-display text-base text-foreground hover:no-underline">
                {promoConfig.regrasTitulo}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {promoConfig.regras.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Promoção exclusiva de lançamento • Válida enquanto durarem os estoques do brinde.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/** Chamada curta exibida logo abaixo da galeria de looks. */
export function PresentaoChamada() {
  return (
    <section className="bg-secondary/50 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-[var(--shadow-soft)] md:flex-row md:justify-between md:p-10 md:text-left">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink/50 text-primary">
              <Gift size={22} strokeWidth={1.5} aria-hidden />
            </span>
            <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
              {promoConfig.chamadaGaleria}
            </p>
          </div>
          <WhatsAppButton
            className="shrink-0"
            evento="promo_montar_look"
            mensagem={siteConfig.mensagens.miniBolsa}
          >
            {promoConfig.ctaGaleria}
          </WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}
