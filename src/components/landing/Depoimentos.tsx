import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * CONTEÚDO PROVISÓRIO — substituir por depoimentos reais de clientes.
 */
const depoimentos = [
  {
    nome: "Mariana",
    texto: "Adorei o atendimento. Me ajudaram a encontrar um look que ficou perfeito em mim.",
  },
  { nome: "Cláudia", texto: "Peças lindas, confortáveis e com um caimento maravilhoso." },
  { nome: "Renata", texto: "O atendimento pelo WhatsApp foi rápido e muito atencioso." },
];

export function Depoimentos() {
  return (
    <section className="bg-sprig/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Quem conhece, recomenda
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome} delay={i * 100}>
              <figure className="h-full rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
                <Quote size={26} strokeWidth={1.5} className="text-primary/50" aria-hidden />
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {d.nome}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
