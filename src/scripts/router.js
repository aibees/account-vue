import { createWebHistory, createRouter } from 'vue-router'
import Account from '@/components/account'
import NotFound from '@/components/except/NotFound.vue'

const routes=[
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
    ,{
        path: '/account',
        name: 'Home',
        component: Account.PayRoute,
        children: [
            {
                path: "login",
                component: Account.PayLogin
            }
            ,{
                path: "",
                component: Account.PayHome
            }
            ,{
                path: 'list',
                component: Account.PayHistory
            }
        ]
    }
    // ,
    // {
    //     path: '/store',
    //     name: 'StoreHome',
    //     component: Stores.StoreView,
    //     children: [
    //         {
    //             path: '',
    //             component: Stores.StoreHome
    //         },
    //         {
    //             path: 'login',
    //             component: Stores.StoreLogin
    //         }
    //     ]
    // },
    // {
    //     path: '/cafe',
    //     name: 'CafeHome',
    //     component: Cafes.CafeHome
    // }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
