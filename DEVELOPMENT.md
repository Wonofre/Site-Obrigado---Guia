# GUIA DE DESENVOLVIMENTO - Site Obrigado

## 🛠️ Setup Local

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de texto (VS Code recomendado)
- Python 3 ou Node.js (para servidor local)

### Instalação Rápida

```bash
# Clonar repositório
git clone https://github.com/Wonofre/Site-Obrigado---Guia.git
cd Site-Obrigado---Guia

# Iniciar servidor local (Python)
python -m http.server 8000

# Ou com Node.js
npx http-server

# Acesse em: http://localhost:8000
```

## 📂 Estrutura do Projeto

```
Site-Obrigado---Guia/
├── index.html           # HTML principal
├── styles.css           # Estilos CSS
├── script.js            # JavaScript
├── sw.js                # Service Worker
├── manifest.json        # PWA Manifest
├── README.md            # Documentação
├── .gitignore          # Git ignore
└── DEVELOPMENT.md      # Este arquivo
```

## 🎨 Customização de Design

### Alterar Cores Principais

Edit `styles.css` linha ~2:

```css
:root {
    --sage-green: #B4E7C3;      /* Verde sálvia */
    --salmon-peach: #F0C1A6;    /* Salmão/pêssego */
    --lilac-purple: #D4B5E8;    /* Lilás/roxo */
    --dark-gray: #2D3436;       /* Cinza escuro */
}
```

### Adicionar Novas Seções

1. Crie uma nova `<section>` com ID único em `index.html`
2. Adicione estilos em `styles.css`
3. Adicione link de navegação na navbar

### Exemplo:
```html
<section id="nova-secao" class="nova-secao">
    <div class="container">
        <h2 class="section-title">Título</h2>
        <!-- Conteúdo -->
    </div>
</section>
```

```css
.nova-secao {
    padding: 80px 0;
    background-color: var(--light-gray);
}
```

## 🖼️ SVG Illustrations

Todas as ilustrações são SVGs inline, facilitando customização. Para editar:

1. Localize a tag `<svg>` no `index.html`
2. Modifique as coordenadas x, y, rx, ry conforme necessário
3. Altere as cores usando as variáveis CSS

**Exemplo de forma customizável:**
```xml
<circle cx="100" cy="100" r="50" fill="#B4E7C3"/>
<!-- cx/cy = centro, r = raio, fill = cor -->
```

## ⚙️ JavaScript - Funcionalidades

### Service Worker
- Ativa caching offline
- Melhora performance
- Registrado automaticamente em `script.js`

### Smooth Scroll
- Cliques em links `#section` rolam suavemente
- Implementado via `scroll-behavior: smooth`

### Animações
- Fade-in ao scroll via Intersection Observer
- Ripple effect nos botões
- Blob animation no hero

## 📱 Responsividade

Breakpoints principais:
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

```css
@media (max-width: 768px) {
    /* Estilos mobile */
}
```

## 🔍 SEO Optimization

### Meta Tags
- Title, Description
- Open Graph (Facebook)
- Twitter Cards
- Structured Data (schema.org)

### Performance
- CSS crítico priorizado
- Google Fonts carregadas via preconnect
- SVG images (sem HTTP requests)
- Lazy loading de imagens

## 🧪 Testing

### Manual
1. Abra em diferentes navegadores
2. Teste em mobile (Chrome DevTools)
3. Verifique console.log para erros
4. Teste offline (DevTools > Network > Offline)

### Performance
```javascript
// No console do navegador
performance.timing
lighthouse  // Chrome DevTools Audits
```

## 🚀 Deploy

### GitHub Pages

1. Certifique-se de estar no branch `main`
2. Push para GitHub
3. Vá em Settings → Pages
4. Selecione `main` como branch
5. Site publicado em: `https://wonofre.github.io/Site-Obrigado---Guia/`

### Netlify

```bash
# Conectar repositório via Netlify UI
# Deploy automático ao fazer push
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Commit Messages

Padrão Conventional Commits:

```
feat: adiciona nova seção
fix: corrige hover effect
docs: atualiza README
style: formata código CSS
refactor: reorganiza estrutura
```

## 🔐 Segurança

- ✅ HTTPS em produção (GitHub Pages)
- ✅ Sem dependências npm (vanilla JS)
- ✅ Nenhuma API key exposta
- ✅ CSP headers recomendado

## 📊 Analytics

Para adicionar Google Analytics:

```html
<!-- No <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 Debug

### Console Logs
O `script.js` contém logs informativos:
```javascript
console.log('🎉 Site Obrigado carregado com sucesso!');
```

### DevTools
- F12 ou Cmd+Option+I para abrir
- Aba Network: verificar requisições
- Aba Console: erros e logs
- Aba Lighthouse: performance audit

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Can I Use](https://caniuse.com)
- [Google Fonts](https://fonts.google.com)
- [SVG Reference](https://www.w3.org/TR/SVG2/)

## ❓ FAQ

**P: Como adicionar mais cores?**
R: Adicione variáveis em `:root` do CSS

**P: O site funciona offline?**
R: Sim! Service Worker cacheia recursos

**P: Posso usar em produção?**
R: Sim! Ready for production

**P: Como rastrear downloads?**
R: Analytics em `script.js`

---

**Última atualização**: Janeiro 2024
**Versão**: 1.0.0
**Status**: Production Ready ✅
