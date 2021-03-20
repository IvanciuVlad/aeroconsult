<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-100 text-black" style="background: whitesmoke">
      <div class="container">
        <div>
          <h3 class="section-title text-center text-dark m-5">
            UAC Europe
          </h3>
        </div>

        <div>

          <div class="text-center">
            <button class="btn btn-success" style="background: #13569a">
              <a class="text-white"
                 href="https://firebasestorage.googleapis.com/v0/b/aeroconsult2021.appspot.com/o/Brosuri%2FUAC_brosura.pdf?alt=media"
                 download="BrosuraUAC.pdf">
                <fa :icon="['fas', 'download']"/>
                Download brochure
              </a>
            </button>
          </div>

          <h5 class="lead" style="font-weight: bold; color:#13569a;">
            DESCRIERE
          </h5>
          <p class="text-justify">
            UAC Europe - un partener, un prieten de nădejde, un factor de dezvoltare şi prosperitate. Asta pentru că “WE
            DO WHAT WE SAY”.

          </p>
          <p class="text-justify">
            Universal Alloy Corporation este parte a grupului Montana Tech Components AG și unul dintre liderii mondiali
            în industria aeronautică, având 13 ani de activitate în România.
          </p>
          <p class="text-justify">
            În toți acești ani, prin devotament, curaj și multă muncă, UAC Europe a devenit compania cu cea mai
            constantă și rapidă dezvoltare din regiune, având în portofoliu peste 200 de clienți din industria
            aeronautică, precum Boeing și Airbus. Profesionalismul, de asemenea, ne-a fost recunoscut prin numeroase
            premii pe plan național și internațional.

          </p>
          <p>
            UAC Europe produce profile pentru industria aeronautică în patru divizii:
          <ol type="1">
            <li>Topitorie și extruziuni
            </li>
            <li>Prelucrări mecanice</li>
            <li>Tratamente de suprafață</li>
            <li>Asamblare</li>
          </ol>
          </p>

          <p>
            Știm că secretul unei mari companii este definit de specializarea angajaților.În acest sens, ne focusăm
            mereu pe cursuri de specializare, dar și pe parteneriate cu instituții de învățământ liceal și universitar.
          </p>

        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color: #13569a">
            CONTACT
          </h5>


          <p class="text-justify">
            <b> E-mail: </b> CustomerService@UniversalAlloy.com
            <br>
            <b> Telefon: </b> 0040 262 202330
            <br>
            <b>Adresa:</b> Dumbravita 244 A, RO-0437145 Maramures

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
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('uac');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'uac';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped>
</style>