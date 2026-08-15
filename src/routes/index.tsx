import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { PromoBar } from "@/components/landing/PromoBar";
import { Presentao } from "@/components/landing/Presentao";
import { Hero } from "@/components/landing/Hero";
import { Colecao } from "@/components/landing/Colecao";

import { Consultoria } from "@/components/landing/Consultoria";
import { Novidades } from "@/components/landing/Novidades";
import { Beneficios } from "@/components/landing/Beneficios";
import { Entrega } from "@/components/landing/Entrega";

import { CtaFinal } from "@/components/landing/CtaFinal";
import { Faq, perguntas } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

const titulo = "Coleção Primavera–Verão | Sheila Oliveira Store";
const descricao =
  "Conheça a nova coleção Primavera–Verão da Sheila Oliveira Store. Looks femininos, leves, elegantes e perfeitos para todos os momentos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: titulo },
      { name: "twitter:description", content: descricao },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: perguntas.map((p) => ({
            "@type": "Question",
            name: p.pergunta,
            acceptedAnswer: { "@type": "Answer", text: p.resposta },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Colecao />
        <Presentao />
        <Consultoria />
        <Novidades />
        <Entrega />
        <Beneficios />

        <CtaFinal />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
