import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout.vue')
const homepage = () => import('@/views/homepage/homepage.vue')

const routes = [
  {
    path: '/',
    name: 'education-layout',
    component: layout,
    redirect: '/homepage',
    children: [
      { path: '/homepage', name: 'homepage', component: homepage }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
