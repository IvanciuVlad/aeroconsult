<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" v-model.trim="name" placeholder="Your Name" />
          <p v-if="validity.name === false">Please write your name</p>
        </div>

        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" placeholder="Your Email" />
          <p v-if="validity.email === false">Please enter a valid email</p>
        </div>

        <div class="form-control">
          <label for="message">Message</label>
          <textarea rows="5" id="message" v-model.trim="message" placeholder="Message" />
          <p v-if="validity.message === false">Don't forget your message</p>
        </div>

        <base-button>Send</base-button>

        <span v-if="formIsSubmitted" class="sent-message">We will try to get back to you as soon as possible</span>
      </form>


    </base-card>
  </div>
</template>

<script>

export default {
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
      }
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

      if(this.message === '') {
        this.formIsValid = false;
        this.validity.message = false;
        return;
      }

      const contactActionPayload = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      console.log(contactActionPayload);

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
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;

  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

.sent-message {
  color: red;
  font-weight: bold;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-top: 0.05rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}
</style>