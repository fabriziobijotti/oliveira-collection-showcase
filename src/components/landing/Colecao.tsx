import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

import imgVestidos from "@/assets/look-vestidos.png.asset.json";
import imgConjuntos from "@/assets/look-conjuntos.png.asset.json";
import imgCasual from "@/assets/look-casual.png.asset.json";
import imgBlusas from "@/assets/look-blusas.png.asset.json";
import imgVersateis from "@/assets/look-versateis.png.asset.json";
import imgMacacao from "@/assets/look-macacao.png.asset.json";

const looks = [
  {
    nome: "Vestidos",
    imagem: imgVestidos.url,
    alt: "Vestidos leves e femininos da coleção Primavera–Verão",
    texto: "Modelos que unem conforto, movimento e elegância para o dia a dia e ocasiões especiais.",
  },
  {
    nome: "Conjuntos",
    imagem: imgConjuntos.url,
    alt: "Conjuntos modernos da coleção Primavera–Verão",
    texto: "Combinações versáteis que facilitam a produção e acompanham diferentes momentos do dia.",
  },
  {
    nome: "Looks casuais",
    imagem: imgCasual.url,
    alt: "Looks casuais da coleção Primavera–Verão",
    texto: "Peças descomplicadas para o dia a dia em Rio Preto, sem perder o charme e a feminilidade.",
  },
  {
    nome: "Blusas",
    imagem: imgBlusas.url,
    alt: "Blusas frescas da coleção Primavera–Verão",
    texto: "Opções leves, fáceis de combinar e perfeitas para os dias mais quentes.",
  },
  {
    nome: "Peças versáteis",
    imagem: imgVersateis.url,
    alt: "Peças versáteis da coleção Primavera–Verão",
    texto: "Itens que transitam do trabalho ao fim de semana com apenas alguns ajustes de styling.",
  },
  {
    nome: "Macacão",
    imagem: imgMacacao.url,
    alt: "Macacão da coleção Primavera–Verão",
    texto: "Uma peça prática e sofisticada para montar looks completos com pouco esforço.",
  },
];

function mensagemWhatsApp(nomePeca: string) {
  return `Olá! Gostei dos ${nomePeca} da coleção Primavera–Verão e quero ver os modelos e tamanhos disponíveis.`;
}

export function Colecao() {
  return (
    <section id="colecao" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Descubra a Nova Coleção Primavera–Verão
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Peças leves, tecidos frescos e modelagens pensadas para o clima de Rio Preto. Looks
            versáteis que vão do trabalho ao fim de semana com estilo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look, i) => (
            <Reveal key={look.nome} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={look.imagem}
                    alt={look.alt}
                    loading="lazy"
                    width={600}
                    height={750}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-foreground">{look.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {look.texto}
                  </p>
                  <WhatsAppButton
                    className="mt-6 w-full"
                    size="md"
                    evento={`colecao_ver_opcoes_${look.nome.toLowerCase().replace(/\s+/g, "_")}`}
                    mensagem={mensagemWhatsApp(look.nome)}
                  >
                    Ver opções no WhatsApp
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
