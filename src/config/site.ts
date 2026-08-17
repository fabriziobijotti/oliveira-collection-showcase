/**
 * ============================================================
 * CONFIGURAÇÕES EDITÁVEIS DA LOJA
 * Altere aqui o WhatsApp, Instagram e mensagens automáticas.
 * ============================================================
 */

export const siteConfig = {
  nome: "Sheila Oliveira Store",
  frase: "Moda feminina para você se sentir bonita, confiante e autêntica.",

  /** Número do WhatsApp no formato internacional, apenas dígitos (55 + DDD + número) */
  whatsapp: "5517992287373",

  /** Link do perfil no Instagram */
  instagram: "https://instagram.com/sheilaoliveirastore",

  /** Endereço da loja física */
  endereco: {
    linha1: "Bernardino de Campos, 3465, Loja 1",
    linha2: "São José do Rio Preto – SP",
    mapa: "https://www.google.com/maps/search/?api=1&query=Bernardino+de+Campos+3465+Loja+1+S%C3%A3o+Jos%C3%A9+do+Rio+Preto",
  },


  /** Mensagens automáticas do WhatsApp */
  mensagens: {
    padrao:
      "Olá! Vim pela página da coleção Primavera–Verão da Sheila Oliveira Store e gostaria de conhecer as peças disponíveis.",
    look: "Olá! Gostei deste look da coleção Primavera–Verão e gostaria de saber os modelos, tamanhos e valores disponíveis.",
    consultora:
      "Olá! Gostaria de ajuda de uma consultora para escolher um look da coleção Primavera–Verão.",
    presente:
      "Olá! Vi a promoção da coleção Primavera–Verão e quero saber quais peças estão disponíveis para ganhar a Mini Bolsa exclusiva.",
    miniBolsa:
      "Olá! Vi a promoção da Primavera–Verão e quero garantir minha Mini Bolsa exclusiva nas compras a partir de R$ 250!",
    entrega:
      "Olá! Gostaria de consultar a entrega para minha cidade e ver os modelos disponíveis da coleção Primavera–Verão.",
  },
} as const;

/**
 * ============================================================
 * CAMPANHA PROMOCIONAL — textos, valores, datas e regras
 * Tudo editável aqui.
 * ============================================================
 */
export const promoConfig = {
  nome: "PRESENTE EXCLUSIVO DE LANÇAMENTO",
  valorMinimo: "R$ 250",
  brinde: "Mini Bolsa exclusiva",

  banner: "PRESENTÃO: nas compras a partir de R$ 250, ganhe uma Mini Bolsa exclusiva.",
  bannerCta: "Ver coleção",
  selo: "Compre R$ 250 e ganhe uma Mini Bolsa",

  titulo: "Seu look novo vem com um presente especial",
  subtitulo:
    "Comprou R$ 250 em peças da nova coleção, ganhou a Mini Bolsa exclusiva com alça inclusa (disponível em 6 cores).",
  texto:
    "Escolha suas peças favoritas da Nova Coleção Primavera–Verão e, ao completar R$ 250 em compras, leve uma Mini Bolsa exclusiva para deixar suas produções ainda mais especiais.",
  complemento:
    "Promoção exclusiva de lançamento • Válida enquanto durarem os estoques do brinde.",
  cores:
    "A Mini Bolsa está disponível em 6 cores: off-white, bege, rosa, verde, vermelha e preta — e acompanha a alça.",
  observacao:
    "Promoção exclusiva de lançamento • Válida enquanto durarem os estoques do brinde.",
  ctaPrincipal: "Quero garantir minha Mini Bolsa",

  chamadaGaleria: "Está quase lá! Complete R$ 250 em compras e ganhe sua Mini Bolsa exclusiva.",
  ctaGaleria: "Montar meu look pelo WhatsApp",

  /** Período de validade da campanha (editável) */
  validade: "Válida enquanto durarem os estoques do brinde.",

  regrasTitulo: "Confira as condições do presentão",
  regras: [
    "Brinde válido para compras a partir de R$ 250.",
    "O valor mínimo deve ser atingido em uma única compra.",
    "Modelos e cores do brinde estão sujeitos à disponibilidade.",
    "Promoção válida enquanto durarem os estoques.",
    "O brinde não poderá ser trocado por dinheiro ou desconto.",
  ],
} as const;


/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(mensagem: string = siteConfig.mensagens.padrao) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Monta a mensagem que o cliente envia após se cadastrar no formulário. */
export function mensagemCadastro({
  nome,
  interesse,
}: {
  nome: string;
  interesse?: string | null;
}) {
  const linhas = [
    `Olá! Sou ${nome} e me cadastrei pelo site da ${siteConfig.nome}.`,
    interesse ? `Tenho interesse em: ${interesse}.` : null,
    "Gostaria de receber as novidades da coleção Primavera–Verão.",
  ];
  return linhas.filter(Boolean).join("\n");
}

/**
 * Ponto único para registrar eventos de conversão (Meta Pixel, GA4, etc.).
 * Basta implementar o envio aqui futuramente.
 */
export function trackConversion(evento: string, dados?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // TODO: integrar com Google Analytics / Meta Pixel
  (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
    event: evento,
    ...dados,
  });
}
