import vestidos from "@/assets/look-vestidos.png.asset.json";
import conjuntos from "@/assets/look-conjuntos.png.asset.json";
import casuais from "@/assets/look-casual.png.asset.json";
import macacao from "@/assets/look-macacao.png.asset.json";
import blusas from "@/assets/look-blusas.png.asset.json";
import versateis from "@/assets/look-versateis.png.asset.json";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

/**
 * EDITÁVEL: troque imagens, nomes e descrições dos looks aqui.
 * Basta substituir os arquivos em src/assets ou apontar para outra imagem.
 */
const looks = [
  {
    imagem: vestidos.url,
    nome: "Vestidos",
    descricao: "Modelos fluidos e femininos para os dias mais ensolarados.",
    alt: "Vestido longo tomara-que-caia com estampa verde e branca, em ambiente de loja",
  },
  {
    imagem: conjuntos.url,
    nome: "Conjuntos",
    descricao: "Combinações prontas que valorizam a silhueta com conforto.",
    alt: "Conjunto listrado rosa e branco com top cropped, shorts saia, kimono e mini bolsa branca",
  },
  {
    imagem: casuais.url,
    nome: "Looks casuais",
    descricao: "Peças fáceis de usar para deixar a rotina mais bonita.",
    alt: "Top faixa preto com poá branco e calça branca, look casual elegante",
  },
  {
    imagem: blusas.url,
    nome: "Blusas",
    descricao: "Tecidos frescos e detalhes delicados para o dia a dia.",
    alt: "Blusa branca de poá com gola laço e mangas bufantes, look elegante e feminino",
  },
  {
    imagem: versateis.url,
    nome: "Peças versáteis",
    descricao: "Coringas do guarda-roupa que combinam com tudo.",
    alt: "Colete branco com botões e saia longa preta de poá branco, com clutch de palha",
  },
  {
    imagem: macacao.url,
    nome: "Macacão",
    descricao: "Modelagem elegante que une conforto, estilo e praticidade.",
    alt: "Macacão amarelo com manga curta, gola e amarração na cintura, modelo segurando clutch nude",
  },
];

export function Galeria() {
  return (
    <section id="looks" className="scroll-mt-24 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Descubra os destaques da nova coleção
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Looks selecionados para você viver a primavera e o verão com mais estilo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look, i) => (
            <Reveal key={look.nome} delay={(i % 3) * 90}>
              <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={look.imagem}
                    alt={look.alt}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl text-foreground">{look.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {look.descricao}
                  </p>
                  <WhatsAppButton
                    className="mt-6 w-full"
                    variant="soft"
                    evento={`look_${look.nome}`}
                    mensagem={siteConfig.mensagens.look}
                  >
                    Quero este look
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
