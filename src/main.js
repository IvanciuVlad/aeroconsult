import {createApp} from 'vue';
import App from './App.vue';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

import firebase from "firebase";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, {ripple: true});

const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET
};
app.use(firebase.initializeApp(config));

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');