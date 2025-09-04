<template>
    <div class="products">

        <div class="intro h-100">
            <div class="row h-100 align-items-center">
                <div class="col-md-6 ml-3">
                    <h3>Meus dados</h3>

                    <p>
                        Altere os seus dados aqui
                    </p>
                </div>
            </div>
        </div>
        <div class="profile-content">

            <div class="container">
                <div class="row">

                    <form-data-user v-if="dados.email" :user="dados"></form-data-user>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import {VueEditor} from "vue2-editor";
import {fb, db} from '../firebase';
import FormDataUser from "../components/FormDataUser";
import fbs from "../services/fireService";

export default {
  name: "profile",
  components: {
    FormDataUser,
    VueEditor
  },
  data: () => ({
      dados: ''
  }),
  created: function () {
    this.getUser()
    const user = fb.auth().currentUser
  },
  methods: {

    async getUser () {
      const user = fb.auth().currentUser
      let values = await fbs.getById('users', user.uid).then(function (response) {
        return response
      })
      this.dados = values
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
