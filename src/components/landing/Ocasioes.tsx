import casual from "@/assets/ocasiao-casual.jpg";
import trabalho from "@/assets/ocasiao-trabalho.jpg";
import especial from "@/assets/ocasiao-especial.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const blocos = [
  {
    imagem: casual,
    alt: "Mulher com look casual leve caminhando em rua ensolarada",
    titulo: "Para os dias casuais",
    texto:
      "Peças confortáveis, leves e fáceis de combinar para deixar a rotina mais bonita.",
  },
  {
    imagem: trabalho,
    alt: "Mulher com produção elegante para o trabalho",
    titulo: "Para o trabalho e compromissos",
    texto:
      "Produções elegantes e versáteis para você se sentir confiante durante todo o dia.",
  },
  {
    imagem: especial,
    alt: "Mulher com look marcante para ocasiões especiais",
    titulo: "Para momentos especiais",
    texto: "Looks femininos e marcantes para encontros, festas e ocasiões especiais.",
  },
];

export function Ocasioes() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Looks para todos os momentos
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {blocos.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <img
                  src={b.imagem}
                  alt={b.alt}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl text-background">{b.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/85">{b.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <WhatsAppButton size="lg" evento="ocasioes_encontrar_look">
            Encontrar meu look
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
