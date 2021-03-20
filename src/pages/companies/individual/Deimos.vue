<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">

      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            Deimos
          </h3>
        </div>

        <div>
          <div class="text-center">
            <button class="btn btn-success" style="background: #ec7404">
              <a class="text-white"
                 href="https://firebasestorage.googleapis.com/v0/b/aeroconsult2021.appspot.com/o/Brosuri%2FDeimos_brosura.pdf?alt=media"
                 download="BrosuraDeimos.pdf">
                <fa :icon="['fas', 'download']"/>
                Download brochure
              </a>
            </button>
          </div>

          <h5 class="lead" style="font-weight: bold; color:#ec7404;">
            DESCRIERE
          </h5>
          <p class="text-justify">
            Deimos, sub deviza “Expanding Frontiers”, face parte din corporația Elecnor, una dintre cele mai bine cotate
            companii din domeniul ingineriei, axată în principal pe soluții în dezvoltarea infrastructurii, energie
            regenerabilă și inovații în domeniul tehnologiei.

          </p>
          <p class="text-justify">
            Fondată în anul 2001, în Spania, Deimos este filiala profilată în tehnologie a companiei Elecnor, având
            sedii în cinci țări europene: Spania, Portugalia, Marea Britanie, Italia și România.
          </p>
          <p class="text-justify">
            Deimos activează în principal în domenii precum cel spațial, aeronautic, maritim, al transporturilor, al
            industriei și utilităților și, nu în ultimul rând, al telecomunicațiilor și media, având în portofoliu peste
            500 de proiecte de ultimă generație în domeniul tehnologic și peste 500 de contracte cu companii de top,
            precum NASA, Airbus sau ESA. În plus, deservește organizații de top, precum Orange, Samsung sau Telefonica
            cu soluții și servicii în domeniul informatic și al comunicațiilor.
          </p>
          <p>
            Aflat în al optulea an de activitate, Deimos Space România are trei unități operaționale: sisteme de zbor,
            ground segment și SSA, precum și 18 proiecte.
          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color: #ec7404;">
            CONTACT
          </h5>

          <p class="text-justify">
            <b>Adresa: </b> Strada Buzești 65-69, București

            <br>
            <b> Tel: </b>021 589 7891
            <br>
            <b>E-mail: </b>info-romania@deimos-space.com
            <br>
          </p>

          <div class="text-center" v-if="haveAuth">
            <button class="btn btn-success" disabled v-if="verificationOfApplication">
              Aplicat deja
            </button>

            <button class="btn btn-success" v-else @click="apply">
              Aplică acum
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  components: {TheHeader},
  computed: {
    verificationOfApplication() {
      const companiesAppliedTo = this.$store.getters.appliedTo;
      //console.log(companiesAppliedTo, (companiesAppliedTo.valueOf()), companiesAppliedTo.includes('eur'));
      //console.log(JSON.parse(JSON.stringify(companiesAppliedTo)).flat())
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('dei');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'dei';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>