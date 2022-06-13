import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/common/Home.vue'
import LoginPage from '@/components/common/LoginPage.vue'
import Account from '@/components/account'
import Stock from '@/components/stock'
import NotFound from '@/components/except/NotFound.vue'

const TITLE = '자산관리시스템';

const routes=[
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
    ,{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: TITLE
        }
    }
    ,{
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            title: TITLE + ':로그인'
        }
    }
    ,{
        path: '/account',
        name: 'PayHome',
        component: Account.PayRoute,
        children: [
            {
                path: 'list',
                component: Account.PayHistory
            }
        ]
    }
    ,{
        path: '/stock',
        name: 'StockHome',
        component: Stock.StockRoute,
        children: [
            {
                path: 'search',
                component: Stock.StockSearch
            }
        ]
    }
]

export const setRouterToApp = () => {
    const router = createRouter({
        history: createWebHistory(),
        routes
    })

    router.beforeEach((to, from, next) => {
        console.log("router:before each : " + to.fullPath)
        next()
    })

    router.afterEach((to, from) => {
        console.log("router::after each : " + to)
    })
    return router
}