<template>
  <div class="home">
    <div class="hello">
      <!-- Navbar Moderna -->
      <nav class="navbar custom-nav navbar-expand-lg">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Logo" class="logo-img">
          </router-link>
          <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <form class="form-inline my-2 my-lg-0">
              <a href="https://forms.gle/r38vNiDnDNzvaKja7" class="btn custom-btn btn-primary mr-3" target="_blank">
                <span class="btn-icon">🎫</span>
                Inscreva-se
              </a>
              <a class="btn btn-outline-light my-2 my-sm-0" href="#" data-toggle="modal" data-target="#start">
                SisLife
              </a>
            </form>
          </div>
        </div>
      </nav>

      <!-- Hero Section Moderno -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="6000" data-pause="hover">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        
        <div class="carousel-inner">
          <!-- Slide 1 - Principal -->
          <div class="carousel-item active" data-video="https://www.youtube.com/embed/edKeTqpeNx8?autoplay=1&mute=1&loop=1&playlist=edKeTqpeNx8">
            <div class="hero">
              <div class="video-background">
                <iframe :src="currentVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <div class="overlay"></div>
              <div class="hero-content">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12">
                        <div class="hero-header">
                          <div class="badge-container">
                            <span class="badge badge-primary pulse">🔥 NOVO</span>
                          </div>
                          <h1 class="hero-title">
                            <span class="title-line">O esquenta para o</span>
                            <span class="title-highlight">Acamp 2026</span>
                            <span class="title-line">já tem data marcada!</span>
                          </h1>
                          
                          <div class="cta-banner">
                            <a href="https://forms.gle/r38vNiDnDNzvaKja7" class="cta-button-neon" target="_blank">
                              <span class="cta-icon">🎫</span>
                              <span class="cta-text">INSCREVA-SE AGORA</span>
                              <span class="cta-arrow">→</span>
                              <div class="cta-glow"></div>
                            </a>
                          </div>
                        </div>
                        
                        <div class="hero-info">
                          <div class="date-badge">
                            <div class="date-content">
                              <div class="date-icon">📅</div>
                              <div class="date-text">
                                <span class="date-main">01 e 02 de novembro</span>
                                <span class="date-sub">Sítio Flor do Cerrado</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="features-grid">
                          <div class="feature-item" v-for="(feature, index) in features" :key="index">
                            <div class="feature-icon">{{ feature.icon }}</div>
                            <div class="feature-text">{{ feature.text }}</div>
                          </div>
                        </div>

                        <div class="alert alert-warning alert-modern" role="alert">
                          <div class="alert-content">
                            <span class="alert-icon">⚠️</span>
                            <span class="alert-text">Vagas limitadas! Garanta já sua participação!</span>
                          </div>
                        </div>

                        <div class="pricing-section">
                          <div class="price-card">
                            <div class="price-header">
                              <span class="price-currency">R$</span>
                              <span class="price-value">80</span>
                              <span class="price-decimal">,00</span>
                            </div>
                            <div class="price-details">
                              <p><strong>📍 Local:</strong> Sítio Flor do Cerrado</p>
                              <p><strong>✨ Tema:</strong> "Jovens, sois fortes, porque já vencestes o Maligno." (1 João 2:14)</p>
                            </div>
                          </div>
                        </div>

                        <div class="cta-section">
                          <a href="https://forms.gle/r38vNiDnDNzvaKja7" class="btn btn-primary btn-lg btn-modern" target="_blank">
                            <span class="btn-icon">🎫</span>
                            Garantir minha vaga
                            <span class="btn-arrow">→</span>
                          </a>
                          <p class="cta-subtitle">💥 Vai ser inesquecível! Não perca essa oportunidade!</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 - Atividades -->
          <div class="carousel-item" data-video="https://www.youtube.com/embed/uHnokhfj-ek?autoplay=1&mute=1&loop=1&playlist=PL1MY4sQT3Oe0AKbtnK85FvQu1lYzcsW0-">
            <div class="hero">
              <div class="video-background">
                <iframe :src="currentVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <div class="overlay"></div>
              <div class="hero-content">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12">
                        <div class="hero-header">
                          <h1 class="hero-title">
                            <span class="title-line">🎯 Atividades</span>
                            <span class="title-highlight">Especiais</span>
                          </h1>
                          <p class="hero-subtitle">Prepare-se para uma experiência única de crescimento espiritual e diversão!</p>
                        </div>

                        <div class="activities-grid">
                          <div class="activity-card" v-for="(activity, index) in activities" :key="index">
                            <div class="activity-icon">{{ activity.icon }}</div>
                            <div class="activity-content">
                              <h3 class="activity-title">{{ activity.title }}</h3>
                              <p class="activity-description">{{ activity.description }}</p>
                            </div>
                          </div>
                        </div>

                        <div class="schedule-section">
                          <div class="schedule-card">
                            <div class="schedule-header">
                              <h3>📅 Programação</h3>
                            </div>
                            <div class="schedule-content">
                              <div class="schedule-item">
                                <span class="schedule-day">Sábado</span>
                                <span class="schedule-time">Dia completo de atividades</span>
                              </div>
                              <div class="schedule-item">
                                <span class="schedule-day">Domingo</span>
                                <span class="schedule-time">Manhã e tarde</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="cta-section">
                          <a href="https://forms.gle/r38vNiDnDNzvaKja7" class="btn btn-primary btn-lg btn-modern" target="_blank">
                            <span class="btn-icon">🎫</span>
                            Garantir minha vaga
                            <span class="btn-arrow">→</span>
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      
      <Login />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  },
  data() {
    return {
      currentVideo: "https://www.youtube.com/embed/edKeTqpeNx8?autoplay=1&mute=1&loop=1&playlist=edKeTqpeNx8",
      features: [
        { icon: "🎯", text: "Brincadeiras" },
        { icon: "📖", text: "Palavra que transforma" },
        { icon: "🎶", text: "Louvor" },
        { icon: "🤝", text: "Amizades" },
        { icon: "📸", text: "Memórias inesquecíveis" }
      ],
      activities: [
        { 
          icon: "🎮", 
          title: "Jogos e Competições", 
          description: "Atividades divertidas e desafiadoras para todos" 
        },
        { 
          icon: "🔥", 
          title: "Momentos de Adoração", 
          description: "Louvor e adoração em espírito e verdade" 
        },
        { 
          icon: "👥", 
          title: "Networking com Jovens", 
          description: "Conecte-se com outros jovens da igreja" 
        },
        { 
          icon: "📚", 
          title: "Estudos Bíblicos", 
          description: "Aprendizado e crescimento espiritual" 
        }
      ]
    };
  },
  mounted() {
    // Aguarda o DOM estar pronto
    this.$nextTick(() => {
      const carousel = document.querySelector('#carouselExampleIndicators');
      if (carousel) {
        carousel.addEventListener('slid.bs.carousel', (event) => {
          const activeItem = event.target.querySelector('.carousel-item.active');
          if (activeItem) {
            this.currentVideo = activeItem.getAttribute('data-video');
          }
        });
        
        // Adiciona listeners para os controles
        const prevButton = carousel.querySelector('.carousel-control-prev');
        const nextButton = carousel.querySelector('.carousel-control-next');
        
        if (prevButton) {
          prevButton.addEventListener('click', () => {
            $(carousel).carousel('prev');
          });
        }
        
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            $(carousel).carousel('next');
          });
        }
      }
    });
  }
};
</script>

<style scoped>
/* Scroll suave para dispositivos móveis */
html {
  scroll-behavior: smooth;
}

/* Variáveis CSS modernas */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --warning-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.1);
  --shadow-strong: 0 20px 60px rgba(0, 0, 0, 0.2);
  --border-radius: 20px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Navbar Moderna */
.navbar.custom-nav {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  transition: var(--transition);
}

.navbar-brand .logo-img {
  height: 60px;
  width: auto;
  max-width: 100%;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.navbar-toggler.custom-toggler {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 8px 12px;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Botões modernos */
.btn-modern {
  background: var(--primary-gradient);
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn-modern:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
  background: var(--secondary-gradient);
}

.btn-modern .btn-icon {
  margin-right: 8px;
  font-size: 1.2em;
}

.btn-modern .btn-arrow {
  margin-left: 8px;
  transition: var(--transition);
}

.btn-modern:hover .btn-arrow {
  transform: translateX(5px);
}

.custom-btn {
  border-radius: 50px;
  padding: 12px 24px;
  font-weight: 600;
  transition: var(--transition);
  border: 2px solid transparent;
}

.custom-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

/* Hero Section */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: black;
}

.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.6) 25%, 
    rgba(0, 0, 0, 0.7) 50%, 
    rgba(0, 0, 0, 0.8) 75%, 
    rgba(0, 0, 0, 0.9) 100%);
  z-index: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding-top: 120px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .hero-content {
    align-items: flex-start;
    padding-top: 100px;
    padding-bottom: 2rem;
  }
}



@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Header */
.hero-header {
  text-align: center;
  margin-bottom: 2rem;
}

.badge-container {
  margin-bottom: 1rem;
}

.badge {
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-primary {
  background: var(--primary-gradient);
  color: white;
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 10;
}

.title-line {
  display: block;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.title-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  display: block;
  margin: 0.5rem 0;
  color: #667eea;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

/* Fallback para navegadores que não suportam background-clip */
@supports not (-webkit-background-clip: text) {
  .title-highlight {
    background: none;
    color: #667eea;
    -webkit-text-fill-color: initial;
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
}

/* Date Badge */
.date-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
  position: relative;
}

.date-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.date-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  pointer-events: none;
}

.date-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.date-text {
  text-align: left;
}

.date-main {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.date-sub {
  display: block;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-item {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  position: relative;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  pointer-events: none;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.4);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Alert Moderno */
.alert-modern {
  background: var(--warning-gradient);
  border: none;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: var(--shadow-soft);
}

.alert-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.alert-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Pricing Section */
.pricing-section {
  margin: 2rem 0;
}

.price-card {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
}

.price-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 20px;
  pointer-events: none;
}

.price-header {
  margin-bottom: 1.5rem;
}

.price-currency {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}

.price-value {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  background: var(--success-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-decimal {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}

.price-details p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0;
  font-size: 1rem;
}

/* Activities Grid */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.activity-card {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  text-align: center;
  position: relative;
}

.activity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  pointer-events: none;
}

.activity-card:hover {
  transform: translateY(-5px);
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.4);
}

.activity-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.activity-title {
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.activity-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

/* Schedule Section */
.schedule-section {
  margin: 2rem 0;
}

.schedule-card {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
}

.schedule-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  pointer-events: none;
}

.schedule-header h3 {
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.schedule-item:last-child {
  border-bottom: none;
}

.schedule-day {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.schedule-time {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
}

/* CTA Banner Neon */
.cta-banner {
  text-align: center;
  margin: 3rem 0;
  position: relative;
  z-index: 10;
}

.cta-button-neon {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  text-decoration: none;
  background: linear-gradient(45deg, 
    #ff006e 0%, 
    #8338ec 25%, 
    #3a86ff 50%, 
    #06ffa5 75%, 
    #ffbe0b 100%);
  border: none;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 0 20px rgba(255, 0, 110, 0.5),
    0 0 40px rgba(131, 56, 236, 0.3),
    0 0 60px rgba(58, 134, 255, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  animation: neonPulse 2s ease-in-out infinite alternate;
}

.cta-button-neon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent);
  transition: left 0.5s;
}

.cta-button-neon:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 0 30px rgba(255, 0, 110, 0.8),
    0 0 60px rgba(131, 56, 236, 0.5),
    0 0 90px rgba(58, 134, 255, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.cta-button-neon:hover::before {
  left: 100%;
}

.cta-icon {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

.cta-text {
  font-weight: 900;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.cta-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-button-neon:hover .cta-arrow {
  transform: translateX(10px);
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, 
    rgba(255, 255, 255, 0.3) 0%, 
    transparent 70%);
  transform: translate(-50%, -50%);
  border-radius: 50px;
  pointer-events: none;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes neonPulse {
  0% {
    box-shadow: 
      0 0 20px rgba(255, 0, 110, 0.5),
      0 0 40px rgba(131, 56, 236, 0.3),
      0 0 60px rgba(58, 134, 255, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 
      0 0 30px rgba(255, 0, 110, 0.8),
      0 0 60px rgba(131, 56, 236, 0.5),
      0 0 90px rgba(58, 134, 255, 0.3),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin-top: 2rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-top: 1rem;
  font-weight: 600;
}

/* Carousel Item */
.carousel-item {
  height: 100vh;
  min-height: 400px;
  background: transparent;
  color: white;
  position: relative;
}

/* Carousel Controls */
.carousel-control-prev,
.carousel-control-next {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  margin: auto 2rem;
  transition: var(--transition);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev {
  left: 2rem;
}

.carousel-control-next {
  right: 2rem;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.carousel-indicators {
  bottom: 30px;
}

.carousel-indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 5px;
  transition: var(--transition);
}

.carousel-indicators li.active {
  background: var(--primary-gradient);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .carousel-item {
    height: auto;
    min-height: 100vh;
  }
  
  .hero-content {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  .title-line {
    margin-bottom: 0.3rem;
  }
  
  .title-highlight {
    margin: 0.3rem 0;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-banner {
    margin: 2rem 0;
  }
  
  .cta-button-neon {
    padding: 1.2rem 2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  
  .cta-icon {
    font-size: 1.5rem;
  }
  
  .cta-arrow {
    font-size: 1.2rem;
  }
  

  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .feature-item {
    padding: 1rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .feature-text {
    font-size: 1rem;
  }
  
  .activities-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .activity-card {
    padding: 1rem;
  }
  
  .activity-icon {
    font-size: 2.5rem;
  }
  
  .activity-title {
    font-size: 1.1rem;
  }
  
  .activity-description {
    font-size: 0.9rem;
  }
  
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    margin-top: 1rem;
    padding: 1rem;
  }
  
  .navbar-nav .nav-link, 
  .navbar .btn {
    color: white !important;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
    margin: auto 0.5rem;
  }
  
  .carousel-control-prev {
    left: 0.5rem;
  }
  
  .carousel-control-next {
    right: 0.5rem;
  }
  
  .date-badge {
    padding: 0.75rem 1rem;
    margin: 1rem 0;
  }
  
  .date-icon {
    font-size: 1.5rem;
  }
  
  .date-main {
    font-size: 1.2rem;
  }
  
  .date-sub {
    font-size: 0.9rem;
  }
  
  .price-card {
    padding: 1.5rem;
  }
  
  .price-value {
    font-size: 3rem;
  }
  
  .price-details p {
    font-size: 0.9rem;
  }
  
  .schedule-card {
    padding: 1.5rem;
  }
  
  .schedule-header h3 {
    font-size: 1.3rem;
  }
  
  .btn-modern {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
  
  .cta-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .carousel-item {
    min-height: 90vh;
  }
  
  .hero-content {
    padding-top: 80px;
  }
  
  .hero-title {
    font-size: 1.8rem;
    line-height: 1.4;
  }
  
  .title-line {
    margin-bottom: 0.2rem;
  }
  
  .title-highlight {
    margin: 0.2rem 0;
  }
  
  .date-content {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .cta-banner {
    margin: 1.5rem 0;
  }
  
  .cta-button-neon {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
    gap: 0.5rem;
  }
  
  .cta-icon {
    font-size: 1.2rem;
  }
  
  .cta-arrow {
    font-size: 1rem;
  }
  

  
  .features-grid {
    gap: 0.75rem;
  }
  
  .feature-item {
    padding: 0.75rem;
  }
  
  .feature-icon {
    font-size: 1.8rem;
  }
  
  .feature-text {
    font-size: 0.9rem;
  }
  
  .activities-grid {
    gap: 0.75rem;
  }
  
  .activity-card {
    padding: 0.75rem;
  }
  
  .activity-icon {
    font-size: 2rem;
  }
  
  .activity-title {
    font-size: 1rem;
  }
  
  .activity-description {
    font-size: 0.8rem;
  }
  
  .date-badge {
    padding: 0.5rem 0.75rem;
    margin: 0.75rem 0;
  }
  
  .date-icon {
    font-size: 1.2rem;
  }
  
  .date-main {
    font-size: 1rem;
  }
  
  .date-sub {
    font-size: 0.8rem;
  }
  
  .price-card {
    padding: 1rem;
  }
  
  .price-value {
    font-size: 2.5rem;
  }
  
  .price-currency {
    font-size: 1.2rem;
  }
  
  .price-decimal {
    font-size: 1.5rem;
  }
  
  .price-details p {
    font-size: 0.8rem;
  }
  
  .schedule-card {
    padding: 1rem;
  }
  
  .schedule-header h3 {
    font-size: 1.1rem;
  }
  
  .schedule-item {
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }
  
  .schedule-day {
    font-size: 1rem;
  }
  
  .schedule-time {
    font-size: 0.9rem;
  }
  
  .btn-modern {
    padding: 10px 16px;
    font-size: 0.8rem;
  }
  
  .btn-icon {
    font-size: 1rem;
  }
  
  .cta-subtitle {
    font-size: 0.9rem;
  }
  
  .alert-modern {
    padding: 1rem;
  }
  
  .alert-text {
    font-size: 1rem;
  }
  
  .carousel-indicators {
    bottom: 15px;
  }
  
  .carousel-indicators li {
    width: 8px;
    height: 8px;
    margin: 0 3px;
  }
}

@media (max-width: 480px) {
  .carousel-item {
    min-height: 85vh;
  }
  
  .hero-title {
    font-size: 1.6rem;
    line-height: 1.4;
  }
  
  .title-line {
    margin-bottom: 0.15rem;
  }
  
  .title-highlight {
    margin: 0.15rem 0;
  }
  
  .cta-banner {
    margin: 1rem 0;
  }
  
  .cta-button-neon {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    letter-spacing: 0.3px;
    gap: 0.3rem;
  }
  
  .cta-icon {
    font-size: 1rem;
  }
  
  .cta-arrow {
    font-size: 0.8rem;
  }
  

  
  .feature-item {
    padding: 0.5rem;
  }
  
  .feature-icon {
    font-size: 1.5rem;
  }
  
  .feature-text {
    font-size: 0.8rem;
  }
  
  .activity-card {
    padding: 0.5rem;
  }
  
  .activity-icon {
    font-size: 1.8rem;
  }
  
  .activity-title {
    font-size: 0.9rem;
  }
  
  .activity-description {
    font-size: 0.75rem;
  }
  
  .price-value {
    font-size: 2rem;
  }
  
  .btn-modern {
    padding: 8px 12px;
    font-size: 0.75rem;
  }
  
  .navbar-brand .logo-img {
    height: 40px;
  }
  
  .navbar.custom-nav {
    padding: 0.5rem 1rem;
  }
}

/* Ajustes para telas muito pequenas */
@media (max-width: 360px) {
  .carousel-item {
    min-height: 80vh;
  }
  
  .hero-title {
    font-size: 1.4rem;
    line-height: 1.4;
  }
  
  .title-line {
    margin-bottom: 0.1rem;
  }
  
  .title-highlight {
    margin: 0.1rem 0;
  }
  
  .hero-content {
    padding-top: 70px;
    padding-bottom: 1rem;
  }
  

  
  .feature-item,
  .activity-card {
    padding: 0.5rem;
  }
  
  .feature-icon,
  .activity-icon {
    font-size: 1.5rem;
  }
  
  .feature-text,
  .activity-title {
    font-size: 0.8rem;
  }
  
  .activity-description {
    font-size: 0.7rem;
  }
  
  .price-value {
    font-size: 1.8rem;
  }
  
  .btn-modern {
    padding: 6px 10px;
    font-size: 0.7rem;
  }
}

/* Animações adicionais */

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.feature-item,
.activity-card {
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }
.feature-item:nth-child(4) { animation-delay: 0.4s; }
.feature-item:nth-child(5) { animation-delay: 0.5s; }

.activity-card:nth-child(1) { animation-delay: 0.1s; }
.activity-card:nth-child(2) { animation-delay: 0.2s; }
.activity-card:nth-child(3) { animation-delay: 0.3s; }
.activity-card:nth-child(4) { animation-delay: 0.4s; }
</style>
