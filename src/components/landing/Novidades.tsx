import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/leads.schemas";
import { saveLead } from "@/lib/leads.functions";
import { mensagemCadastro, whatsappLinkDireto, trackConversion } from "@/config/site";
import { Reveal } from "./Reveal";

const MARTEC_KEY = "mtk_pub_cbb045d84aab04748e56d2849358460b6184a417b4774d4ae940425e64cd21d8";

/** Máscara de telefone brasileiro: (00) 00000-0000 */
function mascararTelefone(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10) return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

const opcoes = [
  "Vestidos",
  "Conjuntos",
  "Blusas",
  "Looks casuais",
  "Looks para ocasiões especiais",
  "Ainda não sei",
];

export function Novidades() {
  const submitLead = useServerFn(saveLead);
  const [valores, setValores] = useState({
    nome: "",
    whatsapp: "",
    interesse: "",
    consentimento: false,
  });
  const [erros, setErros] = useState<Record<string, string>>({});
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [linkWhatsApp, setLinkWhatsApp] = useState<string | null>(null);

  function abrirWhatsApp(nome: string, interesse: string) {
    const link = whatsappLinkDireto(mensagemCadastro({ nome, interesse }));
    setLinkWhatsApp(link);
    window.open(link, "_blank", "noopener,noreferrer");
    trackConversion("cadastro_whatsapp", { interesse: interesse || "não informado" });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const resultado = leadSchema.safeParse(valores);
    if (!resultado.success) {
      const novos: Record<string, string> = {};
      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0]);
        if (!novos[campo]) novos[campo] = issue.message;
      }
      setErros(novos);
      return;
    }
    setErros({});
    setErroEnvio(null);
    setEnviando(true);

    try {
      try {
        await submitLead({ data: resultado.data });
      } catch {
        // segue para o envio à Martec mesmo se o salvamento interno falhar
      }

      const martec = (
        window as unknown as { martec?: { getTouchId?: () => string | undefined } }
      ).martec;

      const resposta = await fetch("https://martec.app/api/v1/leads/form-ingest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MARTEC_KEY}`,
        },
        body: JSON.stringify({
          phone: resultado.data.whatsapp,
          consent: true,
          name: resultado.data.nome || undefined,
          touch_id: (martec && martec.getTouchId && martec.getTouchId()) || undefined,
          landing_page: window.location.href,
        }),
      });

      if (resposta.status === 201) {
        abrirWhatsApp(resultado.data.nome || "", resultado.data.interesse || "");
        setEnviado(true);
      } else if (resposta.status === 400) {
        setErroEnvio(
          "Confira o telefone informado e o consentimento antes de enviar novamente."
        );
      } else {
        setErroEnvio("Não deu certo — tente de novo em instantes.");
      }
    } catch {
      setErroEnvio("Não deu certo — tente de novo em instantes.");
    } finally {
      setEnviando(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <section id="novidades" className="scroll-mt-24 bg-blue/20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Receba as novidades em primeira mão
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Cadastre-se para receber lançamentos, inspirações de looks, reposições e condições
            especiais da Sheila Oliveira Store.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-[2rem] border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-10">
            {enviado ? (
              <div className="py-10 text-center">
                <p role="status" className="font-display text-xl leading-relaxed text-foreground">
                  Tudo certo! Abrimos o WhatsApp com sua mensagem pronta — é só tocar em enviar.
                </p>
                {linkWhatsApp && (
                  <a
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Abrir conversa no WhatsApp
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <input type="hidden" name="martec_touch_id" value="" readOnly />

                <div className="sm:col-span-1">
                  <label htmlFor="nome" className="mb-2 block text-sm text-foreground">
                    Nome <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    maxLength={100}
                    value={valores.nome}
                    onChange={(e) => setValores({ ...valores, nome: e.target.value })}
                    aria-invalid={!!erros["nome"]}
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                  {erros["nome"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["nome"]}</p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="whatsapp" className="mb-2 block text-sm text-foreground">
                    WhatsApp *
                  </label>
                  <input
                    id="whatsapp"
                    name="phone"
                    inputMode="tel"
                    required
                    value={valores.whatsapp}
                    onChange={(e) =>
                      setValores({ ...valores, whatsapp: mascararTelefone(e.target.value) })
                    }
                    aria-invalid={!!erros["whatsapp"]}
                    className={inputClass}
                    placeholder="(11) 99999-8888"
                  />
                  {erros["whatsapp"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["whatsapp"]}</p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="interesse" className="mb-2 block text-sm text-foreground">
                    Tipo de peça que procura{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <select
                    id="interesse"
                    name="interesse"
                    value={valores.interesse}
                    onChange={(e) => setValores({ ...valores, interesse: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Selecione</option>
                    {opcoes.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      name="consentimento"
                      checked={valores.consentimento}
                      onChange={(e) =>
                        setValores({ ...valores, consentimento: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-[oklch(0.55_0.09_25)]"
                    />
                    <span>
                      Autorizo o contato por WhatsApp/e-mail e o tratamento dos meus dados
                      conforme a Política de Privacidade.
                    </span>
                  </label>
                  {erros["consentimento"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["consentimento"]}</p>
                  )}
                </div>

                {erroEnvio && (
                  <div className="sm:col-span-2">
                    <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {erroEnvio}
                    </p>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={enviando || !valores.consentimento}
                    className="w-full rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60"
                  >
                    {enviando ? "Enviando..." : "Quero receber as novidades"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
