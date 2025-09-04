<template>
  <div>
    <div class="container h-100">
    <section class="mbr-section form4 cid-rgdSX4HDqV">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="google-map">
              <iframe frameborder="0" style="border:0"
                      src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6588710155984!2d-47.942767185139196!3d-16.237967888776858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359993ee5a530f3%3A0x596abac25b15154c!2sAssembl%C3%A9ia+de+Deus+Minist%C3%A9rio+VIDA!5e0!3m2!1spt-BR!2sbr!4v1548520719279"
                      allowfullscreen=""></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="pb-3 align-left hero-title">
              Contato</h2>
            <div>
              <div class="icon-block pb-3 align-left">
                <span class="icon-block__icon">
                  <span class="mbri-letter mbr-iconfont"></span>
                </span>
                <h4 class="icon-block__title align-left mbr-fonts-style display-5">
                  vempravida@gmail.com</h4>
              </div>
              <div class="icon-contacts pb-3">
                <h5 class="align-left mbr-fonts-style display-7">
                  Endereço</h5>
                <p class="mbr-text align-left mbr-fonts-style display-7">Rua 24, Quadra 55, lote 03 - Parque
                  Jk,
                  Luziânia - GO, 72815-430</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="cid-rghtfT2Bz4">
      <div class="container">
        <div class="media-container-row">
          <div class="col-md-8 align-center">
            <h2 class="pb-3 mbr-fonts-style display-7">Acompanhe</h2>
            <div class="social-list pl-0 mb-0">
              <a href="//www.facebook.com/vempravida" target="_blank">
                <span class="px-2 mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span>
              </a>
              <a href="//www.youtube.com/channel/UCA4cTfl8l7B4_KP812jh3bw" target="_blank">
                <span class="px-2 mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span>
              </a>
              <a href="//www.instagram.com/vempra_vida/?hl=pt-br" target="_blank">
                <span class="px-2 socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  </div>
</template>

<script>
export default {
  name: 'FooterWithSocial',
};
</script>

<style scoped>
/* Estilos para a primeira seção */
.mbr-section.form4,
.mbr-section.cid-rgdSX4HDqV {
  background-color: #f8f9fa; /* Cor de fundo */
  padding: 50px 0; /* Espaçamento interno */
}

.mbr-section.form4 .container,
.mbr-section.cid-rgdSX4HDqV .container {
  max-width: 100%; /* Largura máxima do container */
}

.google-map {
  position: relative; /* Posição relativa */
  padding-bottom: 56.25%; /* Proporção do iframe */
  overflow: hidden; /* Ocultar overflow */
  max-width: 100%; /* Largura máxima */
}

.google-map iframe {
  position: absolute; /* Posição absoluta */
  top: 0;
  left: 0;
  width: 100%; /* Largura total */
  height: 100%; /* Altura total */
  border: 0; /* Sem borda */
}

/* Estilos para a segunda seção */
.mbr-section.cid-rghtfT2Bz4 {
  background-color: #333; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 50px 0; /* Espaçamento interno */
}

.mbr-section.cid-rghtfT2Bz4 .container {
  max-width: 100%; /* Largura máxima do container */
}

.social-list {
  list-style: none; /* Remover marcadores da lista */
  padding: 0; /* Remover preenchimento */
  margin: 0; /* Remover margens */
}

.social-list a {
  display: inline-block; /* Exibir como bloco inline */
  margin-right: 10px; /* Margem direita */
}

.social-list a:last-child {
  margin-right: 0; /* Remover margem direita do último item */
}

.social-list span {
  font-size: 24px; /* Tamanho do ícone */
}

/* Estilos para ícones sociais específicos, se necessário */
</style>
