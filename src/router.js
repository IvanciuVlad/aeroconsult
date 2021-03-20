import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import Home from './pages/Home';
import store from './store/index.js';
import Contact from "@/pages/Contact";
import Conference from "@/pages/Conference";
import Companies from "@/pages/companies/Companies";
import Euroavia from "@/pages/companies/individual/Euroavia";
import Fokker from "@/pages/companies/individual/Fokker";
import HPS from "@/pages/companies/individual/HPS";
import GMV from "@/pages/companies/individual/GMV";
import SAB from "@/pages/companies/individual/SAB";
import UAC from "@/pages/companies/individual/UAC";
import TAROM from "@/pages/companies/individual/TAROM";
import Romaero from "@/pages/companies/individual/Romaero";
import Deimos from "@/pages/companies/individual/Deimos";
import INCAS from "@/pages/companies/individual/INCAS";
import COMOTI from "@/pages/companies/individual/COMOTI";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/conference', component: Conference },
        { path: '/companies', component: Companies},
        { path: '/euroavia', component: Euroavia },
        { path: '/fokker', component: Fokker },
        { path: '/hps', component: HPS },
        { path: '/gmv', component: GMV },
        { path: '/sab', component: SAB },
        { path: '/tarom', component: TAROM },
        { path: '/uac', component: UAC },
        { path: '/incas', component: INCAS },
        { path: '/comoti', component: COMOTI },
        { path: '/romaero', component: Romaero },
        { path: '/deimos', component: Deimos },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach(function (to, _, next) {
   if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
       next('/auth');
   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
       next('/')
   } else {
       next();
   }
});

export default router;