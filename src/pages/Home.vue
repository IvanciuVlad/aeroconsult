<template>
  <div>
    <div class="welcome d-flex justify-content-center flex-column" id="welcome_section">
      <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
        <div class="container">
          <router-link to="/" class="navbar-brand mx-auto" >
            <img src="../assets/sigla2.png" class="mr-2 imag-logo" alt="AEROCONSULT">
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

      <!-- Inner Wrapper -->
      <div class="inner-wrapper mt-auto mb-auto container">
        <div class="video-container">
          <video width="320" height="240" controls  autoplay muted loop class="video-background">
            <source src="@/assets/ACINFOFinal.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
            <h1 class="welcome-heading display-4 text-white">
              #internships
              22-28 martie
            </h1>
            <h5 class="text-muted">
              Găsește oportunitățile potrivite pentru realizarea stagiului de practică
              obligatorie din vara aceasta.
            </h5>
            <button 
               class="btn btn-lg btn-primary btn-pill align-self-center" target="_blank">
              <a class="text-white" target="_blank"
                 href="https://firebasestorage.googleapis.com/v0/b/aeroconsult2021.appspot.com/o/Brosuri%2FInfografic_aeroconsult2021.pdf?alt=media"
                 download="InfograficAeroconsult2021.pdf">
                <fa :icon="['fas', 'download']"/>
                programul evenimentului
              </a>
            </button>
             <button 
               class="btn btn-lg btn-success btn-pill align-self-center" target="_blank" style="margin-top:10px;">
              <a class="text-white" target="_blank"
                 href="https://forms.gle/TfVuASoNLGHQBbsk9">Înregistrare ALUMNI TALK</a>
            </button>
          </div>

          <div class="col-lg-4 col-md-5 col-sm-12 ml-auto">
            <img class="iphone-mockup ml-auto" src="" style="max-width: 100%">
          </div>


        </div>
      </div>
      <!-- / Inner Wrapper -->
    </div>

    <!-- Guide Section -->
    <div id="guide_section" class="app-features section py-4" style="background: #081123">
      <h3 class="section-title text-center text-light m-5">Ghidul Participantului</h3>
      <div class="container-fluid">

        <div class="row">
          <div class="m-auto col-lg-5 col-md-12 col-sm-12 px-0 py-5">
            <img class="mt-auto mb-auto" src="@/assets/ac.svg">
          </div>


          <div class="app-features-wrapper col-lg-5 col-md-6 col-sm-12 py-5 mx-auto">
            <div class="container">
              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>1</b></i>
                </div>
                <div>
                  <h5 class="text-light">Creează cont și încarcă CV-ul</h5>
                  <p></p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>2</b></i>
                </div>
                <div>
                  <h5 class="text-light">Urmărește prezentările companiilor și alege oportunitățile potrivite
                  </h5>
                  <p>Găsește compania cea mai potrivită pentru efectuarea stagiului de practică obligatorie.
                  </p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>3</b></i>
                </div>
                <div>
                  <h5 class="text-light">Aplică direct de pe pagina companiei
                  </h5>
                  <p> </p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>4</b></i>
                </div>
                <div>
                  <h5 class="text-light">Urmează procesul de selecție
                  </h5>
                  <p>Aplicarea pentru un post de practică va fi urmată de un proces de selecție realizat de
                    reprezentanții fiecărei companii în parte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Guide Section -->

    <!-- Organizers Section -->

    <!-- TAROM -->
   <div class="testimonials section bg-light py-4" id="organizers_section">
      <h3 class="section-title text-center m-5">Partener Tehnic</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-9" >
            <div id="tarom-card" class="col-md-11 offset-md-2" >
                <div  class="card card border-0" >
                  <div class="card-body"  >
                    <a href="https://tarom.esky.ro/">
                      <img src="@/assets/tarom-logo.jpg" class="img-fluid" alt="Responsive image" style="width:90%; padding-left:5px;">
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    <!-- GMV -->
   <div class="testimonials section bg-light py-4" id="organizers_section">
      <h3 class="section-title text-center m-5">Sponsor GOLD</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-9" >
            <div  id="gmv-card" class="col-md-11 offset-md-2"  >
                <div  class="card card border-0">
                  <div class="card-body" >
                    <a href="https://www.gmv.com/en/">
                      <img id="gmv-img" src="@/assets/gmv.png" class="img-fluid" alt="Responsive image" style="">
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>

   </div>
    </div> 
    <!-- / Organizers Section -->
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/');
      }
    }
  }
}
</script>

<style scoped>
.imag-logo {
  width: 75px;
}
img:hover{
   transform: scale(1.1);
}

@media only screen and (min-width: 768px) {
  #gmv-img{
    height:160px;
    padding-left:100px; 
  }
  #gmv-card{
    margin-left:180px;
  }
  #tarom-card{
    margin-left:180px;
  }
}

@media only screen and (max-width: 768px) {
  #gmv-img{
    height:60px;
    padding-left:50px; 
  }
}

</style>