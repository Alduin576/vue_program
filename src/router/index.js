import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout.vue') // 布局页面
const homepage = () => import('@/views/homepage/homepage.vue') // 首页
const schoolInfo = () => import('@/views/schoolInfo/schoolIntro.vue') // 学校简介

const routes = [
  {
    path: '/',
    name: 'campus-layout',
    component: layout,
    redirect: '/homepage',
    children: [
      { path: '/homepage', name: 'homepage', component: homepage },
      { path: '/schoolIntro', name: 'schoolInfo', component: schoolInfo }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
