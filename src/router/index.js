import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/home',
        name:"Home",
        component:()=>import('../components/Homepage.vue')
    },

    {
        path:'/classErrorList/',
        name:"classErrorList",
        component:()=>import('../components/ClassErrorPage.vue')
    },

    {
        path:'/errorLog/',
        name:"errorLog",
        component:()=>import('../components/ErrorDetailPage.vue')
    },
   
   
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router