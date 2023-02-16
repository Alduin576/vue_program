import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout') //布局页面
const dataCenter = () => import('@/views/dataCenter/dataCenter.vue')//数据中心
const homepage = () => import('@/views/homepage/homepage.vue') //首页
const serviceCenter = () => import('@/views/serviceCenter/serviceCenter.vue') //服务中心
const personCenter = () => import('@/views/personCenter/personCenter.vue')//个人中心
const login = () => import('@/views/login/login.vue') //登录
const register = () => import('@/views/register/register.vue')//注册

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/homepage',
    children: [
      { path: '/homepage', name: 'homepage', component: homepage },
      { path: '/dataCenter', name: 'dataCenter', component: dataCenter },
      { path: '/serviceCenter', name: 'service', component: serviceCenter }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
