import { trackConversion } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CtaFinal() {
  return (
    <section className="bg-soft-pink py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Vista a estação. Viva sua melhor versão.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A primavera e o verão convidam você a experimentar novas cores, novas combinações e
            novas formas de expressar quem você é.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Descubra a nova coleção da Sheila Oliveira Store.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#colecao"
              onClick={() => trackConversion("cta_final_colecao")}
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
            >
              Conhecer a coleção
            </a>
            <WhatsAppButton size="lg" evento="cta_final_whatsapp">
              Comprar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
