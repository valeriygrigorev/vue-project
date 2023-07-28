import { createRouter, createWebHistory } from 'vue-router'
import { warningMessage } from '@/utils/messageService';
import { translate as tl } from '@/utils/locales/locale';
import { inject } from 'vue';

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: { requiredAuthentication: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
        beforeEnter: (to, from, next) => {
            const store = inject('store');
            if (to.name === 'login' && store.getters.isAuthenticated) {
                warningMessage(tl('You are logged in. The login form is not available'));
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    // некоторые страницы - например '/' - могут быть доступны для аутентифицированных пользователей
    const requiredAuth = to.matched.some(record => record.meta.requiredAuthentication);
    const store = inject('store');
    requiredAuth && !store.getters.isAuthenticated ? next('/login') : next();
})

export default router
