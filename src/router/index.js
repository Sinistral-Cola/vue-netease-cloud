import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const LoginView = () => import ('../views/LoginView')
const ProfileView = () => import ('../views/ProfileView')
const RadioView = () => import('../views/RadeoView')
const SearchView = () => import('../views/SearchView')
const YunCunView = () => import('../views/YunCunView')
const ListView=()=>import('../views/ListView')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/radio',
        name: 'radio',
        component: RadioView
    },
    {
        path: '/search',
        name: 'search',
        component: SearchView
    },
    {
        path: '/yun-cun',
        name: 'yunCun',
        component: YunCunView
    },
    {
        path: '/list-view',
        name:'ListView',
        component: ListView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
