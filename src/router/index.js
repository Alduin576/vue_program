import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout.vue')//布局
const homepage = () => import('@/views/homepage/homepage.vue') //首页 即管理中心
const dataCenter = () => import('@/views/dataCenter/dataCenter.vue')//数据中心

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: 'homepage',
    children: [
      { path: 'homepage', name: 'homepage', component: homepage },
      { path: 'dataCenter', name: 'dataCenter', component: dataCenter }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
