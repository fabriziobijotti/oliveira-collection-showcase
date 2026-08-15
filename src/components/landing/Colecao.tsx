import { Flower2, Layers, Shirt, Palette } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: Flower2,
    titulo: "Vestidos leves e femininos",
    texto: "Modelos que unem conforto, movimento e elegância.",
  },
  {
    icon: Layers,
    titulo: "Conjuntos modernos",
    texto: "Combinações versáteis para diferentes momentos do dia.",
  },
  {
    icon: Shirt,
    titulo: "Blusas e peças frescas",
    texto: "Opções fáceis de combinar e perfeitas para os dias mais quentes.",
  },
  {
    icon: Palette,
    titulo: "Cores e estampas da estação",
    texto: "Tons e detalhes que renovam o guarda-roupa com personalidade.",
  },
];

export function Colecao() {
  return (
    <section id="colecao" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Leveza para viver. Estilo para marcar presença.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A nova coleção chega inspirada nos dias ensolarados, nas cores da estação e na liberdade
            de se vestir bem sem abrir mão do conforto.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            São peças versáteis para acompanhar você no trabalho, nos encontros, nos passeios e nas
            ocasiões especiais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 90}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink/50 text-primary">
                  <c.icon size={22} strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl text-foreground">{c.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
