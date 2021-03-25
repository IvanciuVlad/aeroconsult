<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">
      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            GKN Fokker Engineering Romania
          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#2B5689">
            DESCRIERE
          </h5>
          <p class="text-justify">
           GKN Aerospace is the world’s leading multi-technology tier 1 aerospace supplier. With over 50 manufacturing locations across the globe, GKN serves over 90% of the world’s aircraft and engine manufacturers. We design and manufacture innovative smart aerospace systems and components. Our technologies are used in aircraft ranging from the most used single aisle aircraft and the largest passenger planes in the world to business jets and 5th generation fighter aircrafts. Working closely together with universities, knowledge institutes, suppliers and customers, we lead the industry in developing new technology to improve aircraft efficiency: lowering cost, weight and emissions.
        
          </p>

          <p class="text-justify">
           Our GKN Fokker office in Romania is one of the major Aerospace Engineering Hubs for the company, supporting the business in all engineering challenges. Our high skilled engineering team serves the complete Aircraft Design & Development Life Cycle from Proposal to Concept, from Production Assistance to In-Flight Support. Whether we are designing a composite tail for the newest Gulfstream Business Jet or providing onsite support to our production locations all over Europe, we are passionate about our work and show our love for Aerospace Engineering through everything we do.

          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#2B5689">
            CONTACT
          </h5>

          <p class="text-justify">
            Nicolae Raicu
            <br>
            Director
          </p>
          <p class="text-justify">
            Maria Radu
            <br>
            Human Resources Officer
          </p>

          <p class="text-justify">
            <b> E-mail: </b> office.fer@fokker.com
            <br>
            <b> Telefon: </b> +40 021 204 8440
            <br>
          </p>
          <p class="text-justify">
            <b> GKN Fokker Engineering România </b>
            <br>
            5-7 B-dul Dimitrie Pompeiu
            <br>
            Hermes Business Campus, Bld C, etaj 3
            <br>
            Sector 2, București 020337, România
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
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('fkr');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'fkr';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>