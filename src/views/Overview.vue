<template>
  <div class="overview">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-9">
                 <h3>Informativo</h3>
                 <p>
                    Veja informações importantes aqui
                 </p>
                  <iframe src="//calendar.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=vempravida%40gmail.com&amp;color=%2342104A&amp;ctz=America%2FSao_Paulo"
                          style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
              </div>
              <div class="col-md-3">
                  <img src="/img/svg/overview.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
