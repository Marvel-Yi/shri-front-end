import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/homePage.vue'),
        meta: {
            showNavi: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/loginPage.vue'),
        meta: {
            showNavi: false
        }
    },{
        path: '/register',
        name:'register',
        component:() => import('../views/registerPage.vue'),
        meta: {
            showNavi: false
        }
    },{
        path: '/courseInfo',
        name:'courseInfo',
        component:() => import('../views/courseInfo.vue'),
        meta: {
            showNavi: true
        }
    },{
        path:'/message',
        name:'message',
        component:()=> import('../views/message.vue'),
        meta: {
            showNavi: true
        }
    },{
        path: '/reply',
        name:'reply',
        component:()=> import('../views/replyPage.vue'),
        meta:{
            showNavi: true
        }
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
