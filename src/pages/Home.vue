<template>
  <div>
    <div class="welcome d-flex justify-content-center flex-column" id="welcome_section">
      <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
        <div class="container">
          <router-link to="/" class="navbar-brand mx-auto" >
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

      <!-- Inner Wrapper -->
      <div class="inner-wrapper mt-auto mb-auto container">
        <div class="video-container">
          <video width="320" height="240" controls class="video-background" autoplay muted loop>
            <source src="@/assets/ACINFOFinal.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
            <h1 class="welcome-heading display-4 text-white">
              #internships
              22-23 martie
            </h1>
            <h5 class="text-muted">
              Găsește oportunitățile potrivite pentru realizarea stagiului de practică
              obligatorie din vara aceasta.
            </h5>
            <a href="https://ro-ro.facebook.com/EUROAVIABucuresti/"
               class="btn btn-lg btn-primary btn-pill align-self-center" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Găsește-ne pe Facebook
            </a>
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
                  <h5 class="text-light">Intră pe www.aeroconsult.info
                  </h5>
                  <p>Crează cont și încarcă CV-ul</p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>2</b></i>
                </div>
                <div>
                  <h5 class="text-light">Urmărește prezentările companiilor și alege oportunitățile potrivite
                  </h5>
                  <p>Găsește compania cea mai potrivită pentru efectuarea stagiului de practică obligatorie
                    din perioada 25 mai - 25 septembrie.
                  </p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>3</b></i>
                </div>
                <div>
                  <h5 class="text-light">Aplică
                  </h5>
                  <p>Direct de pe pagina companiei sau urmarește indicațiile menționate în dreptul fiecărei companii pentru a aplica la o
                    poziție de practică.</p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>4</b></i>
                </div>
                <div>
                  <h5 class="text-light">Urmează procesul de selectie
                  </h5>
                  <p>Aplicarea pentru un post de practică va fi urmată de un proces de selecție realizat de
                    reprezentanții fiecărei companii în parte.
                  </p>
                </div>
              </div>

              <div class="feature py-4 d-flex">
                <div class="icon text-black mr-5" style="background: #E0CA3C"><i class="fa icon-number"><b>5</b></i>
                </div>
                <div>
                  <h5 class="text-light">Completează convenția cadru
                  </h5>
                  <p>Alături de reprezentanții companiilor, completează și semnează convenția cadru (Descarcă
                    de pe Moodle) pentru realizarea unui stagiu de 180 de ore în această vară.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Guide Section -->

    <!-- Organizers Section -->
    <div class="testimonials section bg-light py-4" id="organizers_section">
      <h3 class="section-title text-center m-5">Parteneri</h3>

      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 testimonial text-center">
            <a href="https://euroavia-bucuresti.ro/" target="_blank">
              <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                <img src="@/assets/logo_targ_wh.png" class="w-100" alt="Testimonial Avatar"/>
              </div>
            </a>
            <h5 class="mb-1">EUROAVIA București</h5>
            <span class="text-muted d-block mb-2">The European Assiociation of Aerospace Students</span>
          </div>

          <div class="col-md-4 testimonial text-center">
            <a href="http://www.aero.pub.ro/wordpress/index.php/ro/acasa/" target="_blank">
              <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                <img src="@/assets/Facultatea-de-inginerie-aerospatiala.png" class="w-100"
                     alt="Testimonial Avatar"/>
              </div>
            </a>
            <h5 class="mb-1">FIA</h5>
            <span class="text-muted d-block mb-2">Facultatea de Inginerie Aerospațială</span>
          </div>

          <div class="col-md-4 testimonial text-center">
            <a href="http://www.upb.ro/" target="_blank">
              <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                <img src="@/assets/logo-upb.png" class="w-100" alt="Testimonial Avatar"/>
              </div>
            </a>
            <h5 class="mb-1">UPB</h5>
            <span class="text-muted d-block mb-2">Universitatea POLITEHNICA din București</span>
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
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
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

</style>