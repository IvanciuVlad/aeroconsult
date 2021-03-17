<template>

  <nav class="navbar navbar-expand-lg navbar-dark navbar-db pt-4 px-0">
    <div class="container">
      <router-link to="/" class="navbar-brand mx-auto">
        <img src="src/assets/sigla2.png" class="mr-2" alt="AEROCONSULT" width="150px;">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">

          <li class="nav-item active">
            <router-link to="/home" class="nav-link">
              Acasă
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contactează-ne
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/conference" class="nav-link">
              Conferința live
            </router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/apps" class="nav-link">
              Aplicațile mele
            </router-link>
          </li>

          <li class="nav-item" v-else>
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

/*header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}*/
</style>