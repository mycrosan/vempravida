import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'
import VueMask from 'v-mask'
import VueResource from 'vue-resource'
import VeeValidate, { Validator } from "vee-validate";
import br from 'vee-validate/dist/locale/pt_BR';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import { useCurrencyInput } from 'vue-currency-input'

require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'))
Vue.use(VueMask)
Vue.use(VueFirestore)
Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(VueLodash, lodash)

Validator.localize("pt_BR", br)
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';


import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false;
Vue.config.debug = true


let app = '';

fb.auth().onAuthStateChanged(function (user) {
  // console.log(user)
  if (!app) {
   app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});



