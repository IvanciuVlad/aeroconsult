<template>
  <div>
    <the-header></the-header>
    <img src="../../../assets/SABAerospaceBaner.gif" style="width:100%;" class="img-fluid" alt="SAB banner">
    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">

      <div class="container">
        
      </div>

      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            SAB Aerospace

          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#012245;">
            DESCRIPTION
          </h5>
          <p class="text-justify">
            SAB Aerospace is a SME part of SAB Group, created in 2004 in Italy (Benevento) now operating in The Czech
            Republic (Brno), Poland (Zielona Góra) and Romania (Bucharest) with its core business focused on the
            development of Mechanical Systems and Sub-systems for Satellites and Launchers.
          </p>
          <p class="text-justify">
            In 2009 SAB had the chance to participate in the LARES project by developing the support system for the
            Maiden Flight of VEGA.

          </p>
          <p class="text-justify">
            In more than 15 years of activities, SAB has been involved in several projects facing the mechanical design,
            thermal and structural analyses of space systems and subsystems, the high precision mechanical integration
            activities, testing activities, and the manufacturing of space mechanical parts and MGSE.
          </p>
          <p>In 2012 SAB started the co-operation with AVIO and ARIANESPACE getting the chance to prove the skill and
            knowhow of the company. SAB developed the adapter for the main passenger and participated in the Launch
            Campaign in Centre Spatial Guyanais (Kourou).</p>
          <p>Among the most important projects, followed the SSMS dispenser, designed for the Vega launchers: a mission
            which gave to the European Space Business a great lead in the access to space for small satellites.</p>
          <p>But not only, SAB contribution goes from Rose-L, Solar Orbiter, Plato, Galileo, ExoMars, the BioMass
            Facility and Microgravity, to many others.</p>
          <p>The heritage gained through these projects has made SAB to be today a leading company is European Space
            Business.</p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#012245;">
            CONTACT
          </h5>

          <p class="text-justify">
            <b>Address: </b> Contrada Piano Cappelle, 8 ( SS 7 km 265-II) 82100 Benevento (Italia)
            <br>
            <b> Telephone: </b>+39 0824 25587
            <br>
            <b>E-mail: </b> info@sabaerospace.com
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
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('sab');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'sab';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>