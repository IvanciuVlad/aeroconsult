<template>
  <div>
    <the-header></the-header>
    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">

      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            National Research and Development Institute for Gas Turbines COMOTI

          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#0054A6;">
            DESCRIPTION
          </h5>
          <p class="text-justify">
            COMOTI Turbine Engines Research and Development Institute is the only unit in Romania specialized in
            development and integration of scientific research, constructive and technological design, manufacturing,
            experimentation, testing, technological transfer and innovation in the field of <b>aviation turbine engines,
            gas turbine industrial machines and high speed blade machines.</b>
          </p>
          <p class="text-justify">
            The experience gathered in the field of high speed blade machines allowed development, in own conception, of
            series of electrical centrifugal natural gas or air compressors and electrical centrifugal air blowers in a
            large variety of flows and pressures, making COMOTI the only national producer for such complex equipment.
          </p>
          <p class="text-justify">
            In more than 15 years of activities, SAB has been involved in several projects facing the mechanical design,
            thermal and structural analyses of space systems and subsystems, the high precision mechanical integration
            activities, testing activities, and the manufacturing of space mechanical parts and MGSE.
          </p>
          <p>COMOTI's researchers, allowed involvement in present days with scientific research, design, testing and
            small production in main research fields:</p>
          <ul type="1">
            <li> aviation turbine engines;</li>
            <li>consume reduction, including new types of turbo engines fuel, co-generation, unconventional forms of
              energy, improvement of energetic efficiency for natural gas compression systems, etc.;
            </li>
            <li>environment protection, noise reduction in aircraft and industrial turbo engines, wasted waters
              treatment units, air ventilation systems for the biological stage of wasted water cleaning
            </li>
          </ul>

          <p>I.N.C.D.T. COMOTI supplies assembling, start up, endurance tests and service for all delivered products in
            warranty and post warranty period.</p>
          <p>Human resources quality and appropriate management strategy made I.N.C.D.T. COMOTI's products are a
            constant presence in most various areas and used by more and more beneficiaries from the machine engineering
            industry, crude oil and natural gas extraction industry, petrochemical industry, energetic industry,
            construction materials industry, metallurgical industry and in the field of environment protection and
            environment friendly industrial systems.
            I.N.C.D.T. COMOTI has following certified laboratories:</p>
          <ul>
            <b>
              <li>Laboratory for experimenting and quality certification of turbine engines and power sets;
              </li>
              <li>Acoustics and vibrations laboratory;
              </li>
              <li>Unit testing for turbine engines laboratory;
              </li>
              <li>Physics and chemical testing laboratory .
              </li>
            </b>
          </ul>


        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#0054A6;">
            CONTACT
          </h5>

          <p class="text-justify">
            <b>Address: </b> 220 D Iuliu Maniu Bd., sector 6, cod 061126, OP 76, CP174
            Bucharest, Romania.
            <br>
            <b>E-mail: </b> contact@comoti.ro

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
    apply() {
      this.applied = true;
    }
  }
}
</script>

<style scoped>
</style>