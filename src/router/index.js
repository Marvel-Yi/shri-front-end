import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/homePage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/loginPage.vue')
    },{
        path: '/register',
        name:'register',
        component:() => import('../views/registerPage.vue')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
