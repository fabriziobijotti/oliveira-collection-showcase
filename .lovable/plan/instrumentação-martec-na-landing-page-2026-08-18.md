# Instrumentação Martec na landing page

## 1. Snippet de medição

Este projeto é TanStack Start e não possui `index.html`. O equivalente exato é o `head()` da rota raiz (`src/routes/__root.tsx`), cujo bloco `scripts` é renderizado pelo `<Scripts />` no final do `<body>` — mesmo efeito de colar antes de `</body>`.

Será adicionado uma única vez:

```text
<script src="https://martec.app/api/v1/snippet.js"
        data-key="mtk_pub_cbb045d84aab04748e56d2849358460b6184a417b4774d4ae940425e64cd21d8"></script>
```

Nenhum outro script novo.

## 2. Botão flutuante de WhatsApp

Remover o botão flutuante próprio (`src/components/landing/WhatsAppFloat.tsx`) e sua renderização em `src/routes/index.tsx`, para não duplicar o botão que o snippet da Martec pode injetar. O componente é deletado do projeto.

## 3. Todos os links de WhatsApp → link rastreável

Trocar todo destino `wa.me` / `api.whatsapp.com` por:

```text
https://martec.app/t/sheilaoliveirastore/r/lp1-colecao-pv-26
```

Mantendo texto e estilo de cada botão. Pontos afetados:

- `src/config/site.ts`: a função `whatsappLink()` passa a retornar o link rastreável (única fonte usada por todos os botões).
- `src/components/landing/Novidades.tsx`: após o cadastro, abrir o link rastreável em vez do `wa.me` com mensagem pronta.
- Conferir `Footer.tsx`, `Entrega.tsx`, `WhatsAppButton.tsx` — todos passam por `whatsappLink()`, então herdam a troca.

Consequência a registrar: como o link rastreável não aceita mensagem pré-preenchida, as mensagens automáticas por contexto (look, consultora, mini bolsa, cadastro) deixam de ser enviadas junto. O texto dos botões permanece igual.

## 4. Formulário de captura (`Novidades.tsx`)

Ajustes na seção "Receba as novidades":

- Telefone/WhatsApp: obrigatório, aceitando celular e fixo brasileiro com DDD.
- Nome e e-mail: passam a ser opcionais.
- Checkbox de consentimento: obrigatório, desmarcado por padrão, com o texto exato: "Autorizo o contato por WhatsApp/e-mail e o tratamento dos meus dados conforme a Política de Privacidade." Envio bloqueado enquanto não marcado.
- Adicionar dentro do form: `<input type="hidden" name="martec_touch_id">` com value vazio (preenchido pelo snippet).

No submit (`preventDefault`), `POST` para `https://martec.app/api/v1/leads/form-ingest` com `Authorization: Bearer <chave pública mtk_pub_...>` e body contendo apenas: `phone`, `consent`, `name`, `email`, `touch_id` (via `window.martec.getTouchId()`), `landing_page`.

Tratamento de resposta:

- 201: substituir o form por mensagem de obrigado.
- 400: mensagem pedindo correção do telefone/consentimento, mantendo os dados digitados.
- Outros erros: "Não deu certo — tente de novo em instantes.", sem apagar o que foi digitado.

O salvamento atual no banco (`saveLead`) é mantido antes do envio à Martec, e o schema de validação é ajustado para as novas regras (nome/e-mail opcionais).

## 5. Publicar e verificar

Publicar a página e abrir a URL publicada uma vez no navegador para disparar a verificação de instalação da Martec.

## Detalhes técnicos

- Chave usada no header `Authorization`: a mesma chave pública `mtk_pub_cbb045d84aab04748e56d2849358460b6184a417b4774d4ae940425e64cd21d8` fornecida no snippet (o exemplo trazia o placeholder `mtk_pub_SUA_CHAVE`).
- Arquivos tocados: `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/config/site.ts`, `src/components/landing/Novidades.tsx`, `src/lib/leads.schemas.ts`; exclusão de `src/components/landing/WhatsAppFloat.tsx`.
