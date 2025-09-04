# 🎯 SISLIFE - Sistema de Gestão de Eventos

## 📋 Sobre o Projeto

O **SISLIFE** é uma aplicação web moderna desenvolvida em Vue.js para gestão de eventos, acampamentos e atividades da igreja. O sistema oferece uma plataforma completa para organização, inscrições e administração de eventos especiais.

### 🎪 Funcionalidades Principais

- **🏠 Página Inicial Moderna** - Landing page com carrossel de eventos e call-to-action
- **📝 Sistema de Inscrições** - Formulários integrados com Google Forms
- **👥 Gestão de Usuários** - Painel administrativo para controle de participantes
- **💰 Tesouraria** - Sistema de controle financeiro e pagamentos
- **📊 Dashboard** - Visão geral e relatórios
- **🔐 Autenticação** - Sistema de login seguro com Firebase
- **📱 Design Responsivo** - Interface adaptável para mobile e desktop

## 🚀 Tecnologias Utilizadas

### Frontend
- **Vue.js 2.6** - Framework JavaScript progressivo
- **Bootstrap 4.6** - Framework CSS para design responsivo
- **Bootstrap Vue 2.21** - Componentes Vue para Bootstrap
- **Vue Router** - Roteamento oficial do Vue.js
- **SCSS** - Pré-processador CSS para estilos avançados

### Backend & Serviços
- **Firebase 8.10** - Plataforma de desenvolvimento do Google
  - **Firestore** - Banco de dados NoSQL
  - **Authentication** - Sistema de autenticação
  - **Hosting** - Hospedagem estática
  - **Functions** - Funções serverless

### Ferramentas de Desenvolvimento
- **Vue CLI 4.5** - Ferramenta de linha de comando do Vue
- **ESLint** - Linter para JavaScript
- **Babel** - Transpilador JavaScript
- **Webpack** - Bundler de módulos

## 📦 Instalação e Configuração

### Pré-requisitos
- **Node.js** >= 16.0.0
- **npm** ou **yarn**
- **Firebase CLI** (para deploy)

### 1. Clone o repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd vempravida
```

### 2. Instale as dependências
```bash
# Usando nvm (recomendado)
nvm use
npm install
```

### 3. Configure o Firebase
```bash
# Instale o Firebase CLI globalmente
npm install -g firebase-tools

# Faça login no Firebase
firebase login

# Inicialize o projeto Firebase (se necessário)
firebase init
```

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
VUE_APP_FIREBASE_API_KEY=sua_api_key
VUE_APP_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VUE_APP_FIREBASE_PROJECT_ID=seu_projeto_id
VUE_APP_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VUE_APP_FIREBASE_APP_ID=seu_app_id
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento
npm run serve

# Compila e hot-reload para desenvolvimento
npm run serve
```

### Produção
```bash
# Compila e minifica para produção
npm run build

# Deploy para Firebase Hosting
npm run deploy
```

### Qualidade de Código
```bash
# Executa linting e corrige arquivos
npm run lint

# Executa testes
npm run test
```

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (SCSS, imagens)
├── components/       # Componentes Vue reutilizáveis
├── filters/          # Filtros Vue personalizados
├── router.js         # Configuração de rotas
├── firebase.js       # Configuração do Firebase
├── main.js          # Ponto de entrada da aplicação
├── services/        # Serviços e APIs
├── static/          # Arquivos estáticos
└── views/           # Páginas/Componentes de rota
    ├── Home.vue     # Página inicial
    ├── Admin.vue    # Painel administrativo
    ├── Users.vue    # Gestão de usuários
    ├── Treasury.vue # Tesouraria
    └── ...
```

## 🎨 Características do Design

### Interface Moderna
- **Glassmorphism** - Efeitos de vidro e transparência
- **Gradientes Neon** - Botões com efeitos luminosos
- **Animações CSS** - Micro-interações e transições suaves
- **Design Responsivo** - Adaptável a todos os dispositivos

### Componentes Principais
- **Navbar Moderna** - Navegação com efeitos de transparência
- **Carrossel Hero** - Apresentação de eventos com vídeo de fundo
- **Cards Interativos** - Informações de eventos com hover effects
- **Botões CTA** - Call-to-action com efeitos neon
- **Formulários** - Inputs com validação e máscaras

## 🔐 Autenticação e Segurança

### Sistema de Login
- Autenticação via Firebase Auth
- Proteção de rotas administrativas
- Redirecionamento automático para usuários não autenticados

### Regras de Segurança
- Firestore Rules configuradas
- Validação de dados no frontend e backend
- Controle de acesso baseado em roles

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 📱 **Mobile** (320px - 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)

## 🚀 Deploy

### Firebase Hosting
```bash
# Build do projeto
npm run build

# Deploy para Firebase
firebase deploy --only hosting
```

### Configuração de Domínio
- Configuração automática de SSL
- CDN global do Firebase
- Cache otimizado para performance

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Desenvolvimento Frontend** - Vue.js, Bootstrap
- **Backend & Infraestrutura** - Firebase
- **Design & UX** - Interface moderna e responsiva

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através dos canais oficiais da igreja.

---

**SISLIFE** - Transformando a gestão de eventos da igreja através da tecnologia! 🎯✨

