import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout')
// 数据中心
const dataCenter = () => import('@/views/dataCenter/dataCenter.vue')

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/dataCenter',
    children: [
      { path: '/dataCenter', name: 'dataCenter', component: dataCenter }
    ]
  }
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  routes
})

export default router
