# Cadastro que abre o WhatsApp com mensagem pronta

Hoje o formulário "Receba as novidades" só grava o lead no banco e mostra uma mensagem de sucesso — ninguém é avisado. A proposta: o próprio cliente inicia a conversa.

## Como vai funcionar

1. Cliente preenche nome, WhatsApp, e-mail (opcional), interesse (opcional) e o consentimento.
2. Ao enviar, o lead continua sendo salvo no banco (histórico e backup, caso a pessoa desista de mandar a mensagem).
3. Em seguida, o WhatsApp da loja abre automaticamente em nova aba, com uma mensagem já escrita pelo cliente, por exemplo:

```text
Olá! Sou a Maria e me cadastrei pelo site da Sheila Oliveira Store.
Tenho interesse em: Vestidos.
Meu WhatsApp: (17) 99999-0000.
Gostaria de receber as novidades da coleção Primavera–Verão.
```

Quando o interesse não for escolhido, a linha de interesse é omitida.

4. A área do formulário passa a mostrar uma confirmação com um botão "Abrir conversa no WhatsApp" — caso o navegador bloqueie o pop-up ou a pessoa queira mandar depois, ela clica e abre a conversa com a mesma mensagem.

## Textos

- Confirmação: "Tudo certo! Abrimos o WhatsApp com sua mensagem pronta — é só tocar em enviar."
- Botão de reserva: "Abrir conversa no WhatsApp"

## Detalhes técnicos

- `src/config/site.ts`: nova função `mensagemCadastro({ nome, whatsapp, interesse })` que monta o texto do lead; reaproveita `whatsappLink`.
- `src/components/landing/Novidades.tsx`: após `saveLead` resolver, gerar o link e abrir com `window.open(link, "_blank", "noopener")`; guardar o link em estado para o botão de fallback na tela de sucesso; disparar `trackConversion("cadastro_whatsapp")`.
- Se o salvamento falhar, ainda assim oferecer o botão do WhatsApp (a conversa é o objetivo principal), mantendo a mensagem de erro discreta.
- Sem mudanças de schema, banco ou RLS.
