<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-100 text-black" style="background: whitesmoke">
      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            TAROM

          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#00164D;">
            DESCRIERE
          </h5>
          <p class="text-justify">
            TAROM - Compania Naţională de Transporturi Aeriene a României a fost înfiinţată în 1954 şi a crescut în
            acelaşi timp cu aviaţia românească. TAROM îşi desfăşoară activitatea sub autoritatea Ministerului
            Transporturilor şi este membră a Alianţei SkyTeam din 25 iunie 2010.

          </p>
          <p class="text-justify">
            Compania naţională operează peste 50 de destinaţii proprii şi destinaţii deservite de partenerii code share.
          </p>
          <p class="text-justify">
            Transportatorul României deţine una dintre cele mai tinere flote din Europa, alcătuită din 29 de aeronave,
            şi este membru al Asociaţiei Internaţionale a Transportatorilor Aerieni (IATA) din 1993.

          </p>
          <p>În 25 iunie 2010, TAROM a aderat la SkyTeam, alianţă aeriană globală, ce oferă pasagerilor membrilor săi
            acces la o reţea lărgită de destinaţii, mai multe frecvenţe şi conexiuni. Înscriindu-se în programul de
            fidelizare SkyTeam, pasagerii pot acumula şi utiliza mile, efectuând zboruri cu oricare dintre companiile
            membre.
          </p>

        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#00164D;">
            CONTACT
          </h5>


          <p class="text-justify">
            <b> Telefon: </b>0213 160 220
            <br>
            <b>E-mail: </b> agsplai@tarom.ro
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
      // console.log(companiesAppliedTo, (companiesAppliedTo.valueOf()), companiesAppliedTo.includes('eur'));
      //console.log(JSON.parse(JSON.stringify(companiesAppliedTo)).flat())
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('tar');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'tar';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>