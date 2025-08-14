# Ordem Vocacional

Um teste vocacional interativo que combina elementos de RPG para descobrir sua verdadeira vocação profissional.

## 🎯 Funcionalidades

- **Teste Vocacional Completo**: 10 perguntas cuidadosamente elaboradas
- **11 Perfis Profissionais**: Medicina, TI, Educação, Direito, Artes, e mais
- **Tokens e Mapas RPG**: Recursos visuais para sessões de RPG
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Interface Moderna**: Design elegante com animações suaves

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ordem-vocacional.git

# Entre na pasta
cd ordem-vocacional

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Build para produção
```bash
npm run build
```

## 🌐 Deploy no Netlify

### Opção 1: Deploy via Git (Recomendado)
1. Faça push do código para um repositório GitHub
2. Acesse [netlify.com](https://netlify.com) e faça login
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy site"

### Opção 2: Deploy Manual
1. O build já foi executado e a pasta `dist` está pronta
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "Add new site" > "Deploy manually"
4. Arraste a pasta `dist` para a área de deploy
5. Seu site estará online em poucos segundos!

### Opção 3: Deploy via Netlify CLI
```bash
# Instale o Netlify CLI globalmente
npm install -g netlify-cli

# Faça login no Netlify
netlify login

# Deploy do site
netlify deploy --prod --dir=dist
```

### ⚠️ Importante para o Deploy Manual
Quando o build terminar, você encontrará todos os arquivos prontos na pasta `dist`. 
Esta pasta contém:
- `index.html` - Página principal
- `assets/` - CSS, JS e outros recursos
- `_redirects` - Configurações de redirecionamento
- `.htaccess` - Configurações do servidor

### Configurações do Netlify
O projeto já inclui:
- `netlify.toml` com configurações otimizadas
- Redirects para SPA (Single Page Application)
- Headers de cache para assets
- Configurações de build automático

## 🎮 Sobre o Projeto

O Ordem Vocacional é um teste vocacional único que:

- Identifica sua área profissional ideal entre 11 opções
- Fornece análise detalhada de pontos fortes e desafios
- Oferece tokens e mapas para RPG baseados nas profissões
- Combina autoconhecimento com elementos lúdicos

## 🛠️ Tecnologias

- **React 18** - Interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Vite** - Build tool
- **React Router** - Roteamento

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎨 Design

- **Tema**: Fantasia medieval com cores escuras
- **Tipografia**: Cinzel (títulos) + Poppins (texto)
- **Cores**: Azul escuro, roxo e dourado
- **Animações**: Transições suaves e micro-interações

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

---

**Desenvolvido com ❤️ para ajudar pessoas a descobrirem sua vocação!**