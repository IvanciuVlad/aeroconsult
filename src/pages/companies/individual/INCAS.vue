<template>
  <div>
    <the-header></the-header>
    <img src="../../../assets/INCAS_web_banner.jpg" style="width:100%;"  class="img-fluid" alt="INCAS banner">

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">

      <div class="container">
        <div>
          <h3 class="section-title text-center text-dark m-5">
            INCAS <br>Institutului Național de Cercetare –Dezvoltare Aerospațială <br> „Elie Carafoli”

          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#1374A5;">
            DESCRIERE
          </h5>
          <p class="text-justify">
            INCAS – Institutul Național de Cercetări Aerospațiale „Elie Carafoli” este unitatea de cercetare lideră în științe aerospațiale din România, cu o tradiție de peste 70 de ani în ingineria aerospațială, fizica curgerii și aerodinamică aplicată, utilizând tehnologii de ultimă generație și infrastructură unică de importanță strategică națională. INCAS a fost implicat în toate proiectele aeronautice naționale majore pentru zonele civile și militare și acționează în prezent ca un actor important în politica Uniunii Europene pentru dezvoltarea cercetării și dezvoltării în cadrul viziunii FlightPath 2050 și a programului Horizon Europe.
          </p>
          <p class="text-justify">
            Începând din 2007, INCAS a inițiat o strategie solidă pe termen lung spre recunoașterea statutului și capabilităților României în științele aerospațiale, folosind infrastructura unică de cercetare (inclusiv tuneluri eoliene cu tehnologie de ultimă generație) și competențe remarcabile în domenii de nișă pentru dezvoltare la scară internațională. În același timp, INCAS a fost recunoscut ca factor de decizie politică în Europa și la nivel internațional, jucând un rol major în toate documentele și viziunile programatice dezvoltate în ultimii 5 ani în domeniul aeronauticii.

          </p>
          <p class="text-justify">
            INCAS este unul dintre contribuitorii la FlightPath 2050, un participant activ la noul ACARE – Consiliul Consultativ pentru Cercetare în domeniul Aeronautic, a dezvoltat împreună cu EREA – Organizația Europeană de Cercetare în Domeniul Aeronautic , „Viziunea programatică pentru generația viitoare a sistemului de transport aerian”, a inițiat și a semnat ca membru instituțional Carta Europeană a Cercetătorilor și Codul de conduită pentru Recrutarea Cercetătorilor” și este unul dintre membrii fondatori ai IFAR – Forumul Internațional pentru Cercetare în Aviație.

          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#1374A5;">
            CONTACT
          </h5>

          <p class="text-justify">
            <b> INCAS-Institutul Național de Cercetare-Dezvoltare Aerospațială "Elie Carafoli" </b>
            <br>
            Bd. Iuliu Maniu nr.220, Sector 6, Cod 061126, București, ROMÂNIA
            <br>
            <b> Tel: </b>(+40-21) 434 00 83
            <br>
            <b>E-mail: </b> incas@incas.ro
            <br>
            <a href="https://www.incas.ro" style="color:#1374A5;"><b>www.incas.ro</b></a>
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