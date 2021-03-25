<template>
  <div>
    <the-header></the-header>
    <img src="../../../assets/banner_gmv_cropped.png" style="width:100%;" class="img-fluid" alt="SAB banner">
    <div class="blog section section-invert py-4 vh-100000 text-black" style="background: whitesmoke">
      <div class="container">

        <div>
          <h3 class="section-title text-center text-dark m-5">
            GMV
          </h3>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            DESCRIPTION
          </h5>
          <p class="text-justify">
            In GMV we believe that behind every new need, behind every new problem, lies a challenge and a chance to
            innovate. Technology is not an end in itself but rather a means to create something completely new or
            improve
            on the present performance.
          </p>

          <p class="text-justify">
            GMV goes even beyond the requisites of its clients, exploring their real needs with a total readiness to
            find
            solutions. This allows us to come up with the right response, often imaginative, sometimes unique and always
            honest.
          </p>

          <p class="text-justify">
            We take on our clients challenges as our own, spurring us on to new heights of innovation.
          </p>


        </div>


        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            WHO ARE WE?
          </h5>
          <p class="text-justify">
            GMV is a private-capital Spanish technological business group trading on a worldwide scale. Founded in 1984
            it
            operates in nine main sectors: Aeronautics, Space, Defense, Healthcare, Security, Transport,
            Telecommunications, Information technologies for the general government and major companies.
          </p>

          <p class="text-justify">
            GMV currently runs 8 work centers in Spain and offices in France, Germany, Malaysia, Poland, Portugal,
            Romania, UK, USA and Colombia.
          </p>

          <p class="text-justify">
            Our goal is to support our client processes by dint of technologically advanced solutions, providing
            integrated systems, specialized products and services covering the whole life cycle. These range from
            consultancy and engineering services up to the development of software and hardware, the integration of
            turnkey systems and operational backup, with an unswerving pledge to quality and competitiveness.
          </p>

          <p class="text-justify">
            GMV has built up its leadership position on the strength of its ability to understand the needs of its
            clients
            and its in-depth knowledge of technology. GMV personnel, modus operandi and business values are all geared
            towards ensuring that each client gets exactly what it needs.
          </p>


        </div>


        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            OUR VALUES
          </h5>
          <h6>INNOVATION CAPABILITY </h6>

          <p class="text-justify">
            Problems always have a solution; our challenge is to find it.
          </p>

          <p class="text-justify">
            We provide innovative solutions capable of satisfying customer needs.
          </p>
          <h6>TECHNOLOGICAL LEADERSHIP </h6>
          <p class="text-justify">
            We are leaders on attending specific needs andsegments with the highest technology.
          </p>
          <h6>QUALITY </h6>
          <p class="text-justify">
            We have a total commitment to quality.
          </p>
          <h6>RESPONSE CAPABILITY </h6>
          <p class="text-justify">
            The customer knows what you need and we know how to provide it through experience and technological
            expertise.CUSTOMER FOCUS
          </p>
          <p>Our goal is to meet our clients expectations.</p>
          <h6>COMPETITIVENESS</h6>
          <p class="text-justify">
            We find the optimal solution that works.
          </p>
          <h6>YES COMPANY </h6>
          <p class="text-justify">
            We are the Yes Company, which finds the optimal solution that works, commited to listening and to adapt to
            the
            clients needs.
          </p>
          <h6>FLEXIBILITY </h6>
          <p class="text-justify">
            We are flexible to adapt to our clients needs.
          </p>
          <h6>COMMITMENT </h6>
          <p class="text-justify">
            Solid and trustworthy supplier that fulfils its commitments.
          </p>

        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            STUDENT PROFILES
          </h5>
          <p class="text-justify">
            GMV technological activities call for qualifications in computing engineering, aeronautical engineering,
            industrial engineering, telecommunications, IT, physics and mathematics. Its international projection means
            that a high level of English is essential and mastery of any other language is also looked upon positively.
          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            CAREER OPORTUNITIES
          </h5>
          <p class="text-justify">
            As soon as they join the organization our young career professionals are given the chance to tackle
            technological challenges in an innovative environment, to work in multi-disciplinary teams and deal directly
            with clients. This helps them to mature quickly as professionals.
          </p>

          <p class="text-justify">
            There are chances of working in our centers around the world or on the sites of our clients (France, Italy,
            Holland).
          </p>

          <p class="text-justify">
            We provide continual top-up training to keep our career professionals perfectly abreast of all technologies
            used.
          </p>
        </div>

        <div>
          <h5 class="lead" style="font-weight: bold; color:#c00000;">
            JOB APPLICATION PROCEDURE
          </h5>
          <p class="text-justify">
            If you wish to develop your technical career in a high-growth benchmark company while forming part of a
            young
            and dynamic team, please send your Curriculum Vitae and academic record to jobs@gmv.com
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
      const result = (JSON.parse(JSON.stringify(companiesAppliedTo)).flat() || []).includes('gmv');
      //console.log("Ce obtin de la getter in verificare: " +  companiesAppliedTo + " result " + result);
      return result;

    },
    haveAuth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async apply() {
      const companyPayload = 'gmv';

      this.$store.commit('setApplications', companyPayload);
      await this.$store.dispatch('sendApplication');
    },
  }
}
</script>

<style scoped >


</style>