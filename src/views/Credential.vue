<template>
    <div>
        <Card v-if="user" :info="user"></Card>
    </div>
</template>

<script>
import {fb, db} from '../firebase';
import fbs from "../services/fireService";
import Card from "../components/Card";

export default {
  name: "credential",
  components: {
    Card
  },
  data: () => ({
    user: ''
  }),
  created: function () {
    this.getUser()
  },
  methods: {
    async getUser () {

      let user = fb.auth().currentUser
      let values = await fbs.getById('users', user.uid).then(function (response) {
        return response
      })
      this.user = values
    }
  }
}
</script>

<style scoped lang="scss">

</style>
