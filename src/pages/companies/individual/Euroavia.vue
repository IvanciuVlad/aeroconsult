<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">
      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            Departamentul Tehnic
          </h3>
        </div>

        <div>
          <h6 class="lead" style="font-weight: bold">
            Cu ce ne ocupăm?
          </h6>
          <p class="text-justify">
            Departamentul Tehnic își propune să contribuie la dezvoltarea și perfecționarea abilităților tehnice și
            organizatorice ale membrilor săi, într-un colectiv ce poate reprezenta Asociația în cadrul unor concursuri
            cu
            specific tehnic.
          </p>

        </div>

        <div>
          <h6 class="lead" style="font-weight: bold">
            Obiective
          </h6>

          <ul class="text-justify">
            <li>
              Realizarea de aeromodele și rachetomodele cu scopuri variate (evenimentele dedicate lor fiind Aircraft
              Workshop, Rocket Workshop);
            </li>
            <li>
              Realizarea unui research asupra unor teme de interes din domeniului aerospațial;
            </li>
            <li>
              Organizarea și participarea la diverse traininguri tehnice menite să dezvolte “hard skill-urile”
              participanților.
            </li>
          </ul>

          <p class="text-justify">
            De asemenea, în cadrul acestui departament membrii vor avea oportunitatea de a lucra în programe precum
            OpenRocket, SolidWorks sau Catia.
          </p>
        </div>

        <div>
          <h6 class="lead" style="font-weight: bold">
            RocketWorkshop. Viziunea și Scopul
          </h6>

          <p class="text-justify">
            Rocket Workshop este cel mai așteptat eveniment al anului EUROAVIAn. Cuvinte cheie: 4 zile, 8 echipe, traininguri, rachetomodele, lansări.
            Evenimentul a avut parte de o evoluție remarcabilă, fapt observat încă de la ediția din 2018, în care echipa tehnică a proiectat o rachetă din materiale compozite, cu motoare mai puternice, stabilind astfel o nouă performanță. De asemenea, echipa tehnică urmărește și introducerea unor tehnologii avansate pentru a spori performanțele.
            Pornind de la organizarea acestui eveniment, EUROAVIA București își propune introducerea altor elemente de natură tehnică în viitoarele proiecte ale asociației. Un exemplu este un Workshop ce se va concentra pe Drone.
            Acesta urmărește un nou concept în privința construirii unui UAV de la 0, dar mai ales implicarea studenților pasionați într-o activitate menită să le dezvolte abilitățile de gestionare a unui proiect, cât și stimularea muncii în echipă.

          </p>
        </div>

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
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  components: {TheHeader},
  computed: {
    verificationOfApplication() {
      const companiesAppliedTo = this.$store.getters.appliedTo;
      // console.log(companiesAppliedTo, (companiesAppliedTo.valueOf()), companiesAppliedTo.includes('eur'));
      //console.log(JSON.parse(JSON.stringify(companiesAppliedTo)).flat())
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('eur');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'eur';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>