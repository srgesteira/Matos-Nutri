# Premissas do Projeto

## Domínio e SEO
- **Domínio base**: `https://danielamatosnutri.com.br` – utilizado em metadata, JSON-LD, sitemap e robots.txt. Ajuste em `lib/config.ts` ou nos arquivos de SEO se o domínio for outro.

## Imagens
- As imagens foram copiadas da pasta de assets do Cursor com nomes longos. Para produção, recomenda-se renomear para algo como `logo.png`, `daniela-photo.png`, `banner.png` e atualizar `lib/config.ts`.
- As imagens locais são servidas via `next/image`; não é necessário configurar domínios remotos.

## JSON-LD
- O schema usa URLs genéricas para `image` (ex.: `/images/daniela-photo.jpg`). Ajuste conforme os nomes reais das imagens.
- Horário de atendimento definido como 08:00–18:00, seg–sex, como placeholder. Atualize em `components/JsonLd.tsx` conforme a realidade.

## Animações
- `prefers-reduced-motion` é tratado via CSS em `globals.css`. Em navegadores que suportam a mídia query, animações são reduzidas automaticamente.
- O Framer Motion não verifica `prefers-reduced-motion` em runtime por padrão; o fallback é via CSS global.

## Mobile Sticky Bar
- A barra inferior fixa "Agendar no WhatsApp" é exibida apenas em mobile (oculta em `md` e acima) para não competir com o botão flutuante do WhatsApp.

## Netlify
- Deploy configurado com `@netlify/plugin-nextjs` no `netlify.toml`. Certifique-se de que o plugin está instalado ou permita que o Netlify o adicione automaticamente.
