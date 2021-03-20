<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 text-white vh-100" style="background: #081123;">
      <div class="container">

        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
          <p>{{ error }}</p>
        </base-dialog>

        <h4 class="text-white">Trimite-ne un mesaj</h4>
        <form @submit.prevent="submitForm">

          <div class="form-group">
            <label for="name">Numele complet</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'user']"/>
              </span>
              </div>
              <input type="text" class="form-control" id="name" v-model.trim="name" placeholder="Numele tău"/>
            </div>
            <div class="alert alert-danger" role="alert" v-if="validity.name === false">
              Introduceți numele
            </div>
          </div>

          <div class="form-group">
            <label for="email">Adresă Email</label>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'envelope']"/>
              </span>
              </div>
              <input type="email" class="form-control" id="email" v-model.trim="email" placeholder="Adresa ta de mail"/>
            </div>

            <div class="alert alert-danger" role="alert" v-if="validity.email === false">
              Introduce o adresă validă de mail
            </div>
          </div>

          <div class="form-group">
            <label for="message">Mesaj</label>
            <textarea rows="5" class="form-control" id="message" v-model.trim="message"
                      placeholder="Introduceți mesajul ..."/>
            <div class="alert alert-danger" role="alert" v-if="validity.message === false">
              Nu îți uita mesajul
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Trimite</button>
        </form>

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
      email: '',
      name: '',
      message: '',
      formIsValid: true,
      formIsSubmitted: false,
      validity: {
        email: true,
        name: true,
        message: true,
      },
    }
  },

  methods: {
    async submitForm() {
      this.formIsSubmitted = false;
      this.formIsValid = true;
      this.validity.email = true;
      this.validity.name = true;
      this.validity.message = true;

      if (this.name === '') {
        this.formIsValid = false;
        this.validity.name = false;
        return;
      }

      if (this.email === '' || !this.email.includes('@')) {
        this.formIsValid = false;
        this.validity.email = false;
        return;
      }

      if (this.message === '') {
        this.formIsValid = false;
        this.validity.message = false;
        return;
      }

      const contactActionPayload = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      // console.log(contactActionPayload);

      try {
        await this.$store.dispatch('sendContactForm', contactActionPayload);
      } catch (err) {
        this.error = err.message || 'Failed to send message, try later.';
      }

      this.name = '';
      this.message = '';
      this.email = '';
      this.formIsSubmitted = true;
    },

    handleError() {
      this.error = null;
    },
  }
}
</script>

<style scoped>
</style>