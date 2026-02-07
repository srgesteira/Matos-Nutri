# Daniela Matos - Site Nutricionista

Site profissional de conversão para a nutricionista funcional Daniela Matos, focado em geração de leads via WhatsApp.

## Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

## Setup

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy no Netlify

### Opção 1: Via GitHub (recomendado)

1. Crie um repositório no [GitHub](https://github.com) e envie o projeto:
   ```bash
   git init
   git add .
   git commit -m "Site Daniela Matos"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/daniela-site.git
   git push -u origin main
   ```

2. Acesse [app.netlify.com](https://app.netlify.com) e faça login.

3. Clique em **"Add new site"** → **"Import an existing project"**.

4. Escolha **"Deploy with GitHub"** e autorize o Netlify.

5. Selecione o repositório do projeto. O Netlify detecta o `netlify.toml` automaticamente.

6. Confirme as configurações:
   - **Build command:** `npm run build`
   - **Publish directory:** (deixar vazio – o plugin Next.js cuida disso)

7. Clique em **"Deploy site"**. O site ficará disponível em `https://nome-aleatorio.netlify.app`.

### Opção 2: Deploy manual (arrastar pasta)

1. Execute o build localmente:
   ```bash
   npm run build
   ```
2. No Netlify: **Add new site** → **Deploy manually** → arraste a pasta `.next` e a raiz do projeto.  
   *(Para Next.js, a opção via GitHub é mais adequada.)*

### Domínio personalizado

Após o deploy: **Site settings** → **Domain management** → **Add custom domain**.

## Alterar links e contatos

Edite o arquivo `lib/config.ts`:

- **whatsapp** / **whatsappLink**: número e link do WhatsApp
- **instagram** / **instagramUrl**: @ e URL do Instagram

## Imagens

As imagens ficam em `public/images/`. Para substituir:

- `logo` – logo circular/badge
- `danielaPhoto` – foto profissional com limão
- `banner` – banner promocional horizontal

Atualize os caminhos em `lib/config.ts` na constante `IMAGES`.
