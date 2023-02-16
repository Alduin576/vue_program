import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout.vue')

const routes = [
  {
    path: '/',
    name: 'education-layout',
    component: layout
  }
]

const router = new VueRouter({
  routes
})

export default router
