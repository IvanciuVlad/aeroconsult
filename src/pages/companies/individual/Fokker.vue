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
            GKN Aerospace este liderul aerospațial de nivel 1 din lume în multi-tehnologie în materie de furnizori. Cu peste 50 de locații de producție de pe glob, GKN servește peste 90% din producătorii mondiali de aeronave și motoare. Proiectăm și fabricarea de sisteme și componente aerospațiale inteligente inovatoare. Tehnologiile noastre sunt utilizate în aeronave care variază de la cele mai utilizate avioane cu un singur culoar și cele mai mari avioane de pasageri din lume la jeturi de afaceri și generația a 5-a de avioane de vânătoare. Lucrând strâns împreună cu universitățile, instituții cunoscute, furnizori și clienți, conducem industria în dezvoltarea de noi
            tehnologiic pentru îmbunătățirea eficienței aeronavelor: scăderea costurilor, a greutății și a emisiilor.
          </p>

          <p class="text-justify">
            Biroul nostru GKN Fokker din România este unul dintre marile companii aeriene
            Hub-uri de inginerie pentru companie, care sprijină activitatea în toate provocările ingineriei. Echipa noastră pricepută se ocupă de design-ul avioanelor și de ciclul de viață al dezvoltării de la propunere la concept, de la asistența producerii la asistență în zbor.Indiferent dacă proiectăm o coadă compozită pentru cel mai nou Gulfstream Business Jet sau dacă oferim asistență producției noastre în locațiile din toată Europa, suntem pasionați de munca noastră și ne arătăm iubirea pentru Ingineria Aerospațială prin tot ceea ce facem.

          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#2B5689">
            CONTACT
          </h5>

          <p class="text-justify">
            Tom Leene
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