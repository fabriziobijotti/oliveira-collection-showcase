import consultoraImg from "@/assets/consultoria.png.asset.json";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Consultoria() {
  return (
    <section id="contato" className="scroll-mt-24 bg-pink/45 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Encontre o look que combina com você
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Dúvidas sobre combinações ou qual tamanho veste melhor? Nossa consultora ajuda você a
            montar o look ideal pelo WhatsApp ou separa na arara para você provar na loja física.
          </p>
          <WhatsAppButton
            className="mt-9"
            size="lg"
            evento="consultoria_whatsapp"
            mensagem={siteConfig.mensagens.consultora}
          >
            Falar com uma consultora no WhatsApp
          </WhatsAppButton>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={consultoraImg.url}
              alt="Modelo usando vestido amarelo curto com sandália branca e mini bolsa prateada na loja Sheila Oliveira Store"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
