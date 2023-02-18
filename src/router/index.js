import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layout = () => import('@/views/layout/layout.vue') // 布局页面
const homepage = () => import('@/views/homepage/homepage.vue') // 首页
const schoolInfo = () => import('@/views/schoolInfo/schoolIntro.vue') // 学校简介
const schoolBasic = () => import('@/views/schoolBasic/schoolBasic.vue')// 学校概况
const reportAppoint = () => import('@/views/reportAppoint/reportAppoint.vue') //报道预约
const newStudentReport = () => import('@/views/newStudentReport/newStudentReport.vue') //新生报道

const routes = [
  {
    path: '/',
    name: 'campus-layout',
    component: layout,
    redirect: '/homepage',
    children: [
      { path: '/homepage', name: 'homepage', component: homepage },
      { path: '/schoolIntro', name: 'schoolInfo', component: schoolInfo },
      { path: '/schoolBasic', name: 'schoolBasic', component: schoolBasic },
      { path: '/reportAppoint', name: 'reportAppoint', component: reportAppoint },
      { path: '/newStudentReport', name: 'newStudentReport', component: newStudentReport }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
