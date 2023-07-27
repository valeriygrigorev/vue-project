import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {requiredAuthentication: true}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
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
    // некоторые страницы - например '/' - могут быть доступны при наличии авторизации
    const requiredAuth = to.matched.some(record => record.meta.requiredAuthentication);
    requiredAuth && !sessionStorage.getItem('authToken') ? next('/login') : next();
})

export default router
