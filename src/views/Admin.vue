<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper no-print">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="#">SIS LIFE</a>
                        <div id="close-sidebar" @click="closeMenu">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" :src="photoURL" alt="picture">
                        </div>
                        <div class="user-info">
                        <span class="user-name">
                            <strong>{{name}}</strong>
                        </span>
                            <span class="user-role"> {{email}} </span>
<!--                            <span class="user-role"> {{perfil}} </span>-->
                            <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <!--<div class="sidebar-item sidebar-search">-->
                        <!--<div>-->
                            <!--<div class="input-group">-->
                                <!--<input type="text" class="form-control search-menu" placeholder="Search...">-->
                                <!--<div class="input-group-append">-->
                                <!--<span class="input-group-text">-->
                                    <!--<i class="fa fa-search" aria-hidden="true"></i>-->
                                <!--</span>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!-- sidebar-menu  -->
                    <div class=" sidebar-item sidebar-menu" @click="clickMenu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>

                            <li>
                                <router-link to="/admin/overview">
                                    <i class="fa fa-chart-line"></i>
                                    <span>Dash</span>
                                </router-link>
                            </li>
                            <li v-if="perfil === 'admin'">
                                <router-link to="/admin/users">
                                    <i class="fa fa-users"></i>
                                    <span>Membros</span>
                                </router-link>
                            </li>
                            <li v-if="perfil === 'admin'">
                                <router-link to="/admin/treasury">
                                    <i class="fas fa-piggy-bank"></i>
                                    <span>Tesouraria</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/admin/profile">
                                    <i class="fa fa-user"></i>
                                    <span>Meus dados</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/credential">
                                    <i class="fa fa-id-card"></i>
                                    <span>Carteirinha</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#" @click="logout()">
                                    <i class="fa fa-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>

            </nav>
            <!-- sidebar-content  -->
            <main class="page-content">
                <router-view/>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->


    </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import {fb, db} from '../firebase';
import { isMobile } from 'mobile-device-detect';


export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null,
      perfil: null,
      photoURL: null
    }
  },
  components: {
    Hero
  },
  methods: {
    clickMenu(){
      if(isMobile) {
        $(".page-wrapper").toggleClass("toggled");
      }
    },
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      fb.auth().signOut()
        .then(() => {
          this.$router.replace('/');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    let user = fb.auth().currentUser
    db.collection('users').doc(user.uid).onSnapshot(response => {
      let values = response.data()
      this.perfil = values.perfil
      this.name = values.name
      this.email = values.email
      this.photoURL = values.photoURL
    })
  }
};
</script>

<style>

</style>

