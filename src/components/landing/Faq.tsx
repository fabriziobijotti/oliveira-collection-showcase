import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export const perguntas = [
  {
    pergunta: "Como faço para comprar?",
    resposta:
      "Você pode escolher um look e falar diretamente com nossa equipe pelo WhatsApp.",
  },
  {
    pergunta: "Posso consultar os tamanhos disponíveis?",
    resposta:
      "Sim. Nossa equipe informa os modelos, cores e tamanhos disponíveis de cada peça.",
  },
  {
    pergunta: "Posso receber ajuda para montar um look?",
    resposta:
      "Sim. Conte qual é a ocasião e o estilo que procura. Nossa equipe ajudará você a encontrar a melhor combinação.",
  },
  {
    pergunta: "A loja realiza entregas?",
    resposta:
      "As opções de retirada e entrega podem ser consultadas diretamente pelo WhatsApp.",
  },
  {
    pergunta: "Os produtos exibidos estão sempre disponíveis?",
    resposta:
      "A disponibilidade pode variar. Consulte nossa equipe para confirmar os modelos e tamanhos disponíveis.",
  },
];

export function Faq() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {perguntas.map((p, i) => (
              <AccordionItem key={p.pergunta} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline">
                  {p.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {p.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
