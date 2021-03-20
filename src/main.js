import {createApp} from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/css/shards.min.css';
import '@/css/shards-extras.min.css';

import firebase from "firebase";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faUser, faEnvelope, faUniversity, faIdCard, faKey, faDownload} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faDownload, faUser, faUniversity, faEnvelope, faIdCard, faKey, faDownload);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("fa", FontAwesomeIcon);

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET
};
app.use(firebase.initializeApp(config));

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');