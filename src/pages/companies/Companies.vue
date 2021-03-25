<template>
  <div>
  <the-header></the-header>

  <!-- Companies Section -->
  <div class="blog section section-invert py-4" id="Last_edition_companies_section" style="background: #081123">

    <div class="container">
      <div>
        <h3 class="section-title text-center text-light m-5">Companii Practică 2021</h3>
      </div>


      <div class="col-12">
        <div class="card mb-4">
          <div class="card-body">

            <h4 class="card-title">

            </h4>

            <div class="card-text row">
              <!-- GMV -->
              <router-link to="/gmv" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-14">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/gmv.png" class="logo-companie" />
                </div>
              </router-link>

              <!-- GKN/Fokker -->
              <router-link to="/fokker" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-15">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/GKN.jpg"  class="logo-companie" />
                </div>
              </router-link>

              <!-- HPS -->
              <router-link to="/hps" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-16">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/HPS_Logo_RO_300dpi_QF_Farbig.jpg"  class="logo-companie"/>
                </div>
              </router-link>

              <!-- TAROM -->
              <router-link to="/tarom" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-23">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/tarom-logo.jpg"  class="logo-companie"/>
                </div>
              </router-link>

              <!-- UAC -->
              <router-link to="/uac" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-19">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/UniversalAlloy-«_Logo_RGB_SML.jpg"  class="logo-companie"/>
                </div>
              </router-link>

              <!-- Euroavia -->
              <router-link to="/euroavia" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-30">
                <div class="col-12 d-inline-block m-auto landing-logo">
                  <img src="../../assets/siglaea.png"  class="logo-companie"/>
                </div>
              </router-link>

              <!-- Deimos -->
              <router-link to="/deimos" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-21" style="padding-top:40px;">
                <div class="col-12 d-inline-block m-auto landing-logo">
                  <img src="../../assets/LogoDeimos.png"  class="logo-companie" />
                </div>
              </router-link>

              <!-- SAB -->
              <router-link to="/sab" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-20">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/SABAerospaceBaner.gif"  class="logo-companie" />
                </div>
              </router-link>

              <!-- Romaero -->
              <router-link to="/romaero" class="col-4 col-md-4 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                 data-toggle="modal" data-target="#company-17">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                     <img src="../../assets/rom.png"  class="logo-companie" />
                     </div>
              </router-link>

              <!-- INCAS -->
              <router-link to="/incas" class="col-6 col-md-6 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                           data-toggle="modal" data-target="#company-20">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/incas.png"  class="logo-companie" />
                </div>
              </router-link>

              <!-- COMOTI -->
              <router-link to="/comoti" class="col-6 col-md-6 pl-1 pl-md-4 pr-1 pr-md-4 landing-logo-container"
                           data-toggle="modal" data-target="#company-17">
                <div class="col-12 m-auto landing-logo container-logo-companie">
                  <img src="../../assets/comoti.png"  class="logo-companie" />
                </div>
              </router-link>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
export default {
  components: {TheHeader}
}
</script>

<style scoped>

.container-logo-companie {
  display: flex;
  justify-content:center;
  align-items:center;
  vertical-align: middle;
}

.logo-companie {
  max-width: 100%;
  display: inline-flex !important;
}
</style>