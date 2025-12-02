# MaxClean — Limpeza e Higienização Profissional

Website responsivo e moderno para empresa de limpeza profissional de sofás, colchões, tapetes e veículos.

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

## 🎯 Sobre o Projeto

MaxClean é um website apresentando serviços de limpeza e higienização profissional com foco em:
- Responsividade total (mobile-first)
- Acessibilidade (WCAG 2.1)
- Performance otimizada
- Integração com WhatsApp
- Galeria interativa com lightbox

**Live Demo**: [https://eduardoalsilva.github.io/max-clean-website/](#)

## 📋 Funcionalidades

- ✅ **Hero Section** com CTA (Call-to-Action)
- ✅ **Catálogo de Serviços** em cards responsivos
- ✅ **Galeria Antes & Depois** com lightbox modal
- ✅ **Jornada do Cliente** com timeline visual
- ✅ **Formulário de Solicitação** com validações
- ✅ **Integração WhatsApp** para contato direto
- ✅ **Design Responsivo** (mobile, tablet, desktop)
- ✅ **Acessibilidade** (ARIA labels, navegação por teclado)
- ✅ **SEO Otimizado** (meta tags, estrutura semântica)

## 🏗️ Estrutura do Projeto

```
max-clean-website/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos (mobile-first)
├── js/
│   └── main.js         # JavaScript (interatividade)
├── img/
│   ├── logo.png
│   ├── icon.ico
│   ├── max-clean-estofados.jpeg
│   ├── banco-de-carros-antes-e-depois.jpeg
│   └── banco-de-carros-antes-e-depois-2.jpeg
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🚀 Como Começar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/max-clean-website.git
   cd max-clean-website
   ```

2. **Abra no navegador**
   ```bash
   # Opção 1: Abra o arquivo diretamente
   open index.html

   # Opção 2: Use um servidor local (recomendado)
   python -m http.server 8000
   # Acesse: http://localhost:8000
   ```

3. **Configure o número do WhatsApp**
   - Abra `js/main.js`
   - Encontre a linha: `const WHATSAPP_NUMBER = '5511995758183';`
   - Substitua pelo seu número no formato: `55` + DDD + número (sem símbolos)

## ⚙️ Configuração

### Número do WhatsApp
No arquivo `js/main.js` (linha ~7):
```javascript
const WHATSAPP_NUMBER = '55SEUNUMEROCOMDDD'; // ex: '5511912345678'
```

### Meta Tags (SEO)
No arquivo `index.html` (linhas 6-11):
```html
<meta name="description" content="Sua descrição aqui" />
<meta property="og:title" content="Seu título aqui" />
<link rel="canonical" href="https://seu-dominio.com.br" />
```

### Cores e Temas
No arquivo `css/style.css` (linhas 1-10):
```css
:root {
    --accent: #0b7a3a;      /* Cor primária */
    --accent-2: #0b5f2b;    /* Cor secundária */
    --bg: #f7f9fb;          /* Fundo */
    --card: #ffffff;        /* Cards */
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Mobile**: até 640px (padrão)
- **Tablet**: 640px - 900px
- **Desktop**: 900px+

Testado em:
- ✅ iPhone (12, 13, 14, 15)
- ✅ iPad
- ✅ Android (Chrome, Samsung Internet)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)

## ♿ Acessibilidade

Implementações:
- ✅ Navegação por teclado (Tab, Enter, Escape)
- ✅ ARIA labels e roles
- ✅ Contraste de cores (WCAG AA)
- ✅ Textos alternativos em imagens
- ✅ Focus indicators visíveis
- ✅ Formulário com validação semântica
- ✅ Lightbox acessível

Testar com:
```bash
# Navegação por teclado
# 1. Pressione Tab para navegar
# 2. Enter para ativar botões
# 3. Escape para fechar modais
```

## 🎨 Customização

### Adicionar mais itens à galeria
Em `index.html`, adicione mais `<figure>` no elemento `#gallery`:
```html
<figure class="gallery-item" tabindex="0" role="button">
    <img src="img/sua-imagem.jpeg" alt="Descrição" data-caption="Seu título — R$XXX" loading="lazy">
    <figcaption>Seu título — R$XXX</figcaption>
</figure>
```

### Adicionar novos serviços
Em `index.html`, adicione mais `<article class="card">`:
```html
<article class="card">
    <h3>Novo Serviço</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</article>
```

### Modificar cores
Em `css/style.css`, altere as variáveis CSS:
```css
:root {
    --accent: #sua-cor;
    --muted: #sua-cor-secundaria;
}
```

## 🔒 Segurança

- ✅ Sem dependências externas (vanilla JS)
- ✅ Validação de entrada no formulário
- ✅ Validação de arquivo (tipo e tamanho)
- ✅ Sem armazenamento de dados sensíveis
- ✅ HTTPS recomendado em produção

## ⚡ Performance

- ✅ CSS em arquivo único (~8KB)
- ✅ JavaScript em arquivo único (~5KB)
- ✅ Imagens otimizadas (lazy loading)
- ✅ Sem frameworks pesados
- ✅ Lighthouse Score: 95+

## 🚢 Deployment

### Opção 1: GitHub Pages (Gratuito)
1. Faça push do repositório para GitHub
2. Acesse Settings → Pages
3. Selecione "Deploy from a branch" → main
4. Seu site estará em `https://seu-usuario.github.io/max-clean-website`

### Opção 2: Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Importe seu repositório GitHub
3. Clique em Deploy
4. Seu site estará em `https://seu-projeto.vercel.app`

### Opção 3: Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto
3. Seu site estará em `https://seu-projeto.netlify.app`

### Opção 4: Hospedagem Compartilhada
1. Use FTP para upload dos arquivos
2. Aponte o domínio para a pasta raiz
3. Pronto!

## 📊 Monitoramento

### Google Analytics (Opcional)
Adicione em `index.html` antes do `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Search Console
Registre seu domínio em [search.google.com](https://search.google.com)

## 🐛 Troubleshooting

### Problema: WhatsApp não abre
**Solução**: Verifique se o número está configurado corretamente em `js/main.js`

### Problema: Imagens não carregam
**Solução**: Verifique se os caminhos das imagens em `index.html` estão corretos

### Problema: Formulário não funciona
**Solução**: Verifique o console do navegador (F12) para erros JavaScript

### Problema: Site lento no mobile
**Solução**: Comprima as imagens com ferramentas como [TinyPNG](https://tinypng.com)

## 📝 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## 👥 Contribuições

Contribuições são bem-vindas! Para mudanças maiores:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato via WhatsApp.

## 🔄 Changelog

### v1.0.0 (2024-01-XX)
- ✨ Lançamento inicial
- 🎨 Design responsivo mobile-first
- ♿ Acessibilidade completa
- ⚡ Performance otimizada
- 📱 Integração WhatsApp

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org)
- [W3C Accessibility](https://www.w3.org/WAI)
- [Google Developers](https://developers.google.com)
- [Web.dev](https://web.dev)
- [Can I Use](https://caniuse.com)

---

**Desenvolvido com ❤️ para MaxClean**