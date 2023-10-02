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
    },{
        path: '/application',
        name:'application',
        component:()=> import('../views/applicationPage.vue'),
        meta:{
            showNavi: true
        }
    },
    {
        path: '/materials',
        name:'materials',
        component:()=> import('../views/addMaterials.vue'),
        meta:{
            showNavi: true
        }
    },{
        path: '/showApplication',
        name:'showApplication',
        component:()=> import('../views/showApplication.vue'),
        meta:{
            showNavi: true
        }
    },{
        path: '/allApplications',
        name:'allApplications',
        component:()=> import('../views/allApplications.vue'),
        meta:{
            showNavi: true
        }
    },{
        path: '/applyNew',
        name:'applyNew',
        component:()=> import('../views/confirmSignature.vue'),
        meta:{
            showNavi: true
        }
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
