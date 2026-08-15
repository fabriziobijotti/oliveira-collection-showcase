import { HeartHandshake, Ruler, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const beneficios = [
  { icon: HeartHandshake, titulo: "Atendimento personalizado" },
  { icon: Ruler, titulo: "Ajuda para escolher o tamanho" },
  { icon: Sparkles, titulo: "Looks selecionados para diferentes ocasiões" },
  { icon: MessageCircle, titulo: "Compra rápida pelo WhatsApp" },
];

export function Beneficios() {
  return (
    <section className="bg-butter/25 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {beneficios.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 80}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card px-6 py-7">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <b.icon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <p className="text-sm font-medium leading-snug text-foreground">{b.titulo}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
