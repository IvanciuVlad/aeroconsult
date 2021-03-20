<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">
      <div class="container">
        <img src="../../../assets/HPS_banner_cropped.png" class="img-fluid" alt="HPS banner">
      </div>

      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            HPS
          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#014A94;">
            DESCRIPTION
          </h5>
          <p class="text-justify">
            HPS is a leading midsized space group and central provider of subsystems as lightweight composite and metal
            structures, reflector antennas, deployable structures, thermal hardware, multilayer insulations, and
            Mechanical Ground Support Equipment. HPS is also well renowned as a prime contractor in the field of space
            subsystems for the European Space Agency ESA, the German Aerospace Centre DLR, the Romanian Space Agency
            ROSA,
            as well as for the „blue chips“ of the European space industry.
          </p>
          <p class="text-justify">
            Space services of HPS also cover the complete range from design, analysis, and development to manufacturing,
            assembly and testing on demand. With outstanding engineering capacities, highest flexibility, and customer
            orientation, HPS is one of the fastest growing technology drivers in the European SME industry.
          </p>
          <p class="text-justify">
            Currently HPS Group has a staff of 50 persons in Munich and Bucharest.
          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#014A94">
            CONTACT
          </h5>

          <p class="text-justify">
            <b> E-mail: </b> office@hps-srl.ro
            <br>
            <b> Telephone: </b> 031 102 9443
            <br>
            <b>Address: </b> Șoseaua Pantelimon 10-12, București, 021631

          </p>

          <div class="text-center">
            <button class="btn btn-success" v-if="!applied" @click="apply">
              Aplică acum
            </button>
            <button class="btn btn-success" disabled v-else>
              Aplicat deja
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
  data() {
    return {
      applied: false,
    }
  },
  methods: {
    async apply() {
      this.applied = true;

      const companyPayload = 'hps';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    }
  }
}
</script>

<style scoped>
</style>