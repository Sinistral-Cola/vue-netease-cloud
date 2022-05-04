import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const LoginView = () => import ('../views/LoginView')
const ProfileView = () => import ('../views/ProfileView')
const RadioView = () => import('../views/RadeoView')
const SearchView = () => import('../views/SearchView')
const YunCunView = () => import('../views/YunCunView')
const ListView=()=>import('../views/ListView')


import store from '../store'
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
        component: ProfileView,
    //    添加导航守卫，在进入个人中心之前判断此人是否已登录，如果登录了，则允许进入本页面，如果未登录，则跳转到登录界面
        beforeEnter:(to,from,next)=>{
        // 登录过后，我们在vuex里，添加一个字段user，如果此人已登录，则user，否则!user
        //     console.log($store.state.user)
            if (store.state.user.isLogin){
                next()
            }else {
                next('/login')
            }
        }
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
