<template>
  <div class="hero">
    <div class="container h-100 text-center text-light py-5">
      <h2>De 1º a 4 de março</h2>
      <h4 class="mt-3">
        ACAMP ADVENTURE APOCALIPSE</h4>
      <p>
        "Bem-aventurado aquele que lê, e os que ouvem as palavras desta profecia, e guardam as coisas que nela estão escritas; porque o tempo está próximo." Ap 1:3
      </p>
      <ul class="list-unstyled mt-4">
        <li>✔️ Diversão garantida</li>
        <li>✔️ Atividades repletas de adrenalina</li>
        <li>✔️ Palavra e louvores a Deus</li>
      </ul>
      <p class="mt-4">
        🌟 Não perca a chance de participar deste evento transformador! As vagas são limitadas, então garanta já o seu
        lugar.
      </p>
      <a href="https://forms.gle/tFSHUeZKgM8sUfXg9" class="btn custom-btn btn-primary mt-3" target="_blank">
        📥 Inscreva-se agora
      </a>
      <p class="mt-4">🚀 Vamos juntos nessa aventura espiritual!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 5rem 0;
  border-radius: 10px;
  text-align: center;

  h2,
  h4 {
    font-weight: bold;
  }

  .custom-btn {
    padding: 10px 20px;
    font-size: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    font-size: 18px;
  }
}
</style>
