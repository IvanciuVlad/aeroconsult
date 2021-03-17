<template>
  <div>
    <the-header></the-header>

    <div class="blog section section-invert py-4 text-white vh-100" style="background: #081123;">
      <div class="container-md" style="background: whitesmoke; padding: 30px;border-radius:15px">

        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
          <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Authenticating..." fixed>
          <base-spinner></base-spinner>
        </base-dialog>

        <!--Login mode-->
        <div v-if="mode === 'login'" class="text-black">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="emailLogin">Adresă Email</label>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa :icon="['fas', 'envelope']"/>
                  </span>
                </div>
                <input type="email" class="form-control" id="emailLogin" v-model.trim="emailLogin"
                       placeholder="Adresa ta de mail"/>
              </div>

              <div class="alert alert-danger" role="alert" v-if="validity.emailLogin === false">
                Introduce adresa de email
              </div>
            </div>

            <div class="form-group">
              <label for="passwordLogin">Parolă</label>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa :icon="['fas', 'key']"/>
                  </span>
                </div>
                <input type="password" class="form-control" id="passwordLogin" v-model.trim="passwordLogin"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.passwordLogin === false">
                Nu uita de parola
              </div>
            </div>

            <button type="submit" class="btn btn-primary active mr-2">Login</button>
            <button type="button" class="btn btn-secondary" @click="switchAuthMode">{{
                switchModeButtonCaption
              }}
            </button>
          </form>
        </div>

        <!-- Signup mode -->
        <div v-if="mode === 'signup'" class="text-black">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="email">Adresă Email</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'envelope']"/>
              </span>
                </div>
                <input type="email" class="form-control" id="email" v-model.trim="email"
                       placeholder="Adresa ta de mail"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.email === false">
                Introduce o adresă validă de mail
              </div>
            </div>

            <div class="form-group">
              <label for="firstName">Prenume</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'user']"/>
              </span>
                </div>
                <input type="text" class="form-control" id="firstName" v-model.trim="firstName"
                       placeholder="Prenumele tău"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.firstName === false">
                Introduceți numele
              </div>
            </div>

            <div class="form-group">
              <label for="lastName">Nume</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'user']"/>
              </span>
                </div>
                <input type="text" class="form-control" id="lastName" v-model.trim="lastName" placeholder="Numele tău"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.lastName === false">
                Introduceți numele
              </div>
            </div>

            <div class="form-group">
              <label for="faculty">Facultate</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
              <span class="input-group-text">
                <fa :icon="['fas', 'university']"/>
              </span>
                </div>
                <input type="text" class="form-control" id="faculty" v-model.trim="faculty"
                       placeholder="Denumirea completă a facultăți"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.faculty === false">
                Introduceți numele facultății voastre
              </div>
            </div>

            <div class="form-group">
              <label for="studyYear">Anul de studiu</label>
              <select class="form-control" id="studyYear" name="studyYear" v-model="studyYear">
                <option value="Anul 1">Anul 1</option>
                <option value="Anul 2">Anul 2</option>
                <option value="Anul 3">Anul 3</option>
                <option value="Anul 4">Anul 4</option>
                <option value="Master 1">Master 1</option>
                <option value="Master 2">Master 2</option>
              </select>
              <div class="alert alert-danger" role="alert" v-if="validity.studyYear === false">
                Selectează anul de studiu
              </div>
            </div>

            <div class="form-group">
              <label for="password">Parolă</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa :icon="['fas', 'key']"/>
                  </span>
                </div>
                <input type="password" class="form-control" id="password" v-model.trim="password"
                       placeholder="*********"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.password === false">
                Introduce o parolă de cel puțin 6 caractere
              </div>
            </div>

            <div class="form-group">
              <label for="passwordConfirm">Confirmare parolă</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa :icon="['fas', 'key']"/>
                  </span>
                </div>
                <input type="password" class="form-control" id="passwordConfirm" v-model.trim="passwordConfirm"
                       placeholder="*********"/>
              </div>
              <div class="alert alert-danger" role="alert" v-if="validity.passwordMatch === false">
                Parolele diferă
              </div>
            </div>

            <div class="form-group">
              <label for="fileUpload">Încarcă CV-ul</label>
              <input type="file" id="fileUpload" class="form-control-file" ref="fileInput"
                     v-on:change="handleFileUpload" accept=".pdf"/>

              <div class="alert alert-danger" role="alert" v-if="validity.file === false">
                CV-ul trebuie sa fie în format PDF
              </div>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="confirm-terms" name="confirm-terms" v-model="confirm">
              <label class="form-check-label" for="confirm-terms">Accept Termenii şi Condițiile</label>
              <div class="alert alert-danger" role="alert" v-if="validity.confirm === false">
                Trebuie să accepți ca să continui
              </div>
            </div>

            <button type="submit" class="btn btn-primary active mr-2">Înregistrare</button>
            <button type="button" class="btn btn-secondary" @click="switchAuthMode">{{
                switchModeButtonCaption
              }}
            </button>
          </form>
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
      emailLogin: '',
      passwordLogin: '',
      email: '',
      firstName: '',
      lastName: '',
      faculty: '',
      studyYear: '',
      password: '',
      passwordConfirm: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
      confirm: false,
      validity: {
        emailLogin: true,
        passwordLogin: true,
        email: true,
        firstName: true,
        lastName: true,
        faculty: true,
        studyYear: true,
        password: true,
        passwordMatch: true,
        confirm: true,
        file: true
      },
      file: null
    };
  },
  computed: {
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Înregistrare';
      } else {
        return 'Login';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      this.validity.emailLogin = true;
      this.validity.paswordLogin = true;
      this.validity.email = true;
      this.validity.firstName = true;
      this.validity.lastName = true;
      this.validity.faculty = true;
      this.validity.studyYear = true;
      this.validity.password = true;
      this.validity.passwordMatch = true;
      this.validity.confirm = true;
      this.validity.file = true;

      if (this.mode === 'signup') {
        if (this.email === '' || !this.email.includes('@')) {
          this.formIsValid = false;
          this.validity.email = false;
          return;
        }

        if (this.firstName === '') {
          this.formIsValid = false;
          this.validity.firstName = false;
          return;
        }

        if (this.lastName === '') {
          this.formIsValid = false;
          this.validity.lastName = false;
          return;
        }

        if (this.faculty === '') {
          this.formIsValid = false;
          this.validity.faculty = false;
          return;
        }

        if (this.studyYear === '') {
          this.formIsValid = false;
          this.validity.studyYear = false;
          return;
        }

        if (this.password.length < 6) {
          this.formIsValid = false;
          this.validity.password = false;
          return;
        }

        if (this.password !== this.passwordConfirm) {
          this.formIsValid = false;
          this.validity.passwordMatch = false;
          return;
        }

        if (this.confirm === false) {
          this.formIsValid = false;
          this.validity.confirm = false;
          return;
        }

        if (this.file === null) {
          this.formIsValid = false;
          this.validity.file = false;
          return;
        }

      } else {
        if (this.emailLogin === '' || !this.emailLogin.includes('@')) {
          this.formIsValid = false;
          this.validity.emailLogin = false;
          return;
        }

        if (this.passwordLogin.length < 6) {
          this.formIsValid = false;
          this.validity.passwordLogin = false;
          return;
        }
      }

      this.isLoading = true;

      const loginActionPayload = {
        email: this.emailLogin,
        password: this.passwordLogin,
      };

      const signupActionPayload = {
        email: this.email,
        password: this.password,
      };

      const signupUserDataPayload = {
        lastName: this.lastName,
        firstName: this.firstName,
        studyYear: this.studyYear,
        faculty: this.studyYear
      };

      const signupUserCV = {
        file: this.file
      }

      try {
        if (this.mode === 'login') {
          console.log(loginActionPayload);
          await this.$store.dispatch('login', loginActionPayload);
        } else {
          console.log(signupActionPayload);
          await this.$store.dispatch('signup', signupActionPayload);
          await this.$store.dispatch('registerUserData', signupUserDataPayload);
          await this.$store.dispatch('uploadCV', signupUserCV);
        }

        const redirectUrl = '/';
        await this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }

      this.isLoading = false;
    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },

    handleError() {
      this.error = null;
    },

    handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
      console.log(this.file);
    }
  },
};
</script>

<style scoped>
/*form {
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
}*/
</style>
