import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { leadSchema, type Lead } from "@/lib/leads.schemas";
import { saveLead } from "@/lib/leads.functions";
import { Reveal } from "./Reveal";

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
    email: "",
    interesse: "",
    consentimento: false,
  });
  const [erros, setErros] = useState<Record<string, string>>({});
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

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
      await submitLead({ data: resultado.data });
      setEnviado(true);
    } catch {
      setErroEnvio("Não foi possível enviar seu cadastro. Tente novamente.");
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
              <p
                role="status"
                className="py-10 text-center font-display text-xl leading-relaxed text-foreground"
              >
                Cadastro realizado com sucesso! Em breve, nossa equipe entrará em contato com você.
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="nome" className="mb-2 block text-sm text-foreground">
                    Nome *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
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
                    name="whatsapp"
                    inputMode="tel"
                    required
                    value={valores.whatsapp}
                    onChange={(e) =>
                      setValores({ ...valores, whatsapp: mascararTelefone(e.target.value) })
                    }
                    aria-invalid={!!erros["whatsapp"]}
                    className={inputClass}
                    placeholder="(11) 90000-0000"
                  />
                  {erros["whatsapp"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["whatsapp"]}</p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm text-foreground">
                    E-mail <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    value={valores.email}
                    onChange={(e) => setValores({ ...valores, email: e.target.value })}
                    aria-invalid={!!erros["email"]}
                    className={inputClass}
                    placeholder="seuemail@exemplo.com"
                  />
                  {erros["email"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["email"]}</p>
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
                      Autorizo a Sheila Oliveira Store a entrar em contato comigo pelo WhatsApp para
                      enviar novidades e informações sobre a coleção.
                    </span>
                  </label>
                  {erros["consentimento"] && (
                    <p className="mt-1.5 text-xs text-destructive">{erros["consentimento"]}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={enviando}
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
