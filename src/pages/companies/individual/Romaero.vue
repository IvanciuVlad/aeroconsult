<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 vh-10000 text-black" style="background: whitesmoke">

      <div class="container">


        <div>
          <h3 class="section-title text-center text-dark m-5">
            ROMAERO S.A. – o societate integratoare pentru viitor

          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#003E67;">
            DESCRIERE
          </h5>
          <p class="text-justify">
            Strategia ROMAERO S.A. este de menţinere şi dezvoltare a capacitatilor de fabricaţie aerostructuri şi
            servicii de întreţinere şi reparaţii, modernizări, reconfigurări de avioane civile şi militare în condiţii
            de eficienţă şi profitabilitate.

          </p>
          <p class="text-justify">
            Un rol central în implementarea strategiei societăţii îl are capitolul uman, resursa primordială a ROMAERO
            S.A.
          </p>
          <p class="text-justify">
            Misiunea managementului resurselor umane este de a asigura societăţii personalul instruit şi motivat
            corespunzător care să contribuie la realizarea obiectivelor specifice ale ROMAERO S.A.

          </p>
          <p class="text-justify">
            Planificarea resurselor umane se realizează în strânsă interdependenţă cu resursele financiare şi materiale
            ale societăţii.

          </p>
          <div class="text-justify">
            Pornind de la strategia societăţii, au fost propuse politici privind resursele umane, ce au ca scop
            următoarele:
          <ul>
            <li> Să anunţe intern toate posturile libere existente.</li>
            <li>Să-i informeze cu bună credinţă pe potenţialii candidaţi, în privinţa datelor esenţiale şi a conditiilor
              de angajare aferente fiecărui post liber anunţat.
            </li>
            <li>Să identifice candidaţii pornind de la calificarea lor de a ocupa postul liber respectiv.</li>
            <li>Să acorde în mod echitabil atenţia cuvenită fiecărei persoane invitate la interviu.
            </li>
          </ul>
          </div>

          <div class="text-justify">
            Politica ROMAERO S.A. este aceea de a-şi plăti angajaţii la un asemenea nivel şi de o asemenea manieră,
            încât:
          <ul>
            <li>Să atragă, să menţină şi să motiveze un număr de angajaţi corespunzător necesităţilor</li>
            <li>Să stimuleze angajaţii pentru atingerea unui grad optim de productivitate.</li>
            <li>Să asigure cerinţele de calitate a producţiei.</li>
            <li>Să recunoască valoarea fiecărui post.</li>
            <li>Să permită angajaţilor să beneficieze de dezvoltarea şi prosperitatea ROMAERO S.A.</li>
            <li>Să dezvolte şi să creeze condiţiile de păstrare a specialistilor din domeniul aeronautic adoptând un
              pachet salarial motivant.
            </li>
            <li>Să asigure control adecvat al costurilor de muncă, comparativ cu celelalte costuri şi cu veniturile.
            </li>

          </ul>
          </div>
          <p class="text-justify">
            ROMAERO S.A. îşi propune să implementeze şi să menţină un sistem de salarizare şi de plată adecvat efortului
            şi eficienţei muncii depuse, care să faciliteze productivitatea şi să ofere salariaţilor câştiguri stabile,
            în proporţii juste.
          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold;color:#003E67;">
            CONTACT
          </h5>

          <p class="text-justify">
            <b>Adresa: </b> Bulevardul Ficusului 44, București 013975
            <br>
            <b> Telefon: </b>+4021 599 43 25
            <br>
            <b>E-mail: </b> office@romaero.com
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

      const companyPayload = 'rom';

      this.$store.dispatch('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    }
  }
}
</script>

<style scoped>
</style>