import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import Home from './pages/Home';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: Home },
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