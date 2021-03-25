<template>

  <nav class="navbar navbar-expand-lg navbar-dark navbar-db pt-4 px-0">
    <div class="container">
      <router-link to="/" class="navbar-brand mx-auto">
        <img src="../../assets/sigla2.png" class="mr-2 imag-logo" alt="AEROCONSULT" width="150px;">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">

          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contact Us
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/conference" class="nav-link">
              LIVE Stream
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/companies" class="nav-link">
              Companies
            </router-link>
          </li>

          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/auth">
              Login
            </router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn" @click="logout">
            <a class="nav-link">Logout</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
.navbar-db {
  background: #081123;
}

.imag-logo {
  width: 75px;
}
</style>