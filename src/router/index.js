import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const router =  new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('../components/login')
        },
        {
            path: '/home',
            component: () => import('../components/home')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()

    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router
