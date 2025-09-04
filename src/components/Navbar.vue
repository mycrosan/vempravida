<template>
  <div class="hello">
    <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img src="/img/logo.png" alt="Logo" class="logo-img">
        </router-link>

        <!-- Toggler for mobile -->
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a href="https://forms.gle/tFSHUeZKgM8sUfXg9" class="btn custom-btn btn-primary mt-3" target="_blank">
          Inscreva-se para o curso de evangelismo ministério VIDA
        </a>

        <!-- Navbar content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!--            <li class="nav-item">-->
            <!--              <router-link to="/home" class="nav-link">Home</router-link>-->
            <!--            </li>-->
            <!--            <li class="nav-item">-->
            <!--              <router-link to="/products" class="nav-link">Preço</router-link>-->
            <!--            </li>-->
            <!--            <li class="nav-item">-->
            <!--              <router-link to="/about" class="nav-link">Sobre</router-link>-->
            <!--            </li>-->
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline-success my-2 my-sm-0" href="#" data-toggle="modal"
               data-target="#start">SisLife</a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {}
};
</script>

<style scoped lang="scss">
/* Navbar Customization */
.navbar.custom-nav {
  background-color: #f8f9fa !important; /* Light background */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for better separation */
  transition: all 0.3s ease-in-out;
}

/* Navbar logo resizing */
.navbar-brand .logo-img {
  max-height: 80px; /* Increased height for a larger logo */
  transition: all 0.3s ease-in-out;
}

/* Navbar hover effects */
.navbar-nav .nav-link {
  color: #343a40;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

/* Navbar button customization */
.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
  transition: all 0.3s ease-in-out;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #fff;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .navbar-brand .logo-img {
    max-height: 70px; /* Slightly smaller logo for smaller screens */
  }
}
.navbar-brand img {
  width: 100%;
}
</style>