# Cadastro que abre o WhatsApp com mensagem pronta (sem e-mail)

Restaurar o comportamento em que a própria cliente entra em contato com a loja logo após o cadastro, e simplificar o formulário.

## O que muda

1. **Remover o campo E-mail** do formulário "Receba as novidades". O layout passa a ter Nome (opcional) e WhatsApp (obrigatório) na primeira linha e Tipo de peça (opcional) na segunda, mantendo o mesmo visual e responsividade.
2. **Após o envio, abrir o WhatsApp automaticamente** em nova aba, com a mensagem já escrita pela cliente:
   - "Olá! Sou [Nome] e me cadastrei pelo site da Sheila Oliveira Store."
   - "Tenho interesse em: [Tipo de peça]." (só aparece se ela escolher)
   - "Gostaria de receber as novidades da coleção Primavera–Verão."
   - Sem o nome quando ela não preencher; nunca inclui o número dela.
3. **Tela de confirmação** no lugar do formulário, com botão de reserva "Abrir conversa no WhatsApp" caso o navegador bloqueie o pop-up.
4. **Registro continua funcionando**: o lead segue sendo salvo no banco e enviado à Martec (com touch_id) antes de abrir a conversa. O campo `email` deixa de ser enviado.
5. Os demais botões de WhatsApp da página continuam usando o link rastreável da Martec — só este fluxo pós-cadastro usa `wa.me` com a mensagem pronta, conforme escolhido.

## Detalhes técnicos

- `src/components/landing/Novidades.tsx`: remover input de e-mail e o campo do estado; após a resposta da Martec (201 ou erro), montar o link com `mensagemCadastro()` + `wa.me/5517992287373?text=...` e chamar `window.open`; guardar o link em estado para o botão de fallback; manter tratamento de 400 (telefone/consentimento) e mensagem genérica de erro sem apagar os dados digitados; manter o `input hidden` `martec_touch_id`.
- `src/config/site.ts`: adicionar `whatsappLinkDireto(mensagem)` que gera `https://wa.me/<numero>?text=<mensagem>`; `whatsappLink()` (Martec) permanece intacto para os outros botões. `mensagemCadastro()` passa a tolerar nome vazio.
- `src/lib/leads.schemas.ts` e `src/lib/leads.functions.ts`: remover `email` do schema e da gravação (coluna do banco fica sem uso, sem migração necessária).
