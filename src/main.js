import Vue from 'vue'
// 引入 elementui.js 构建依赖树
import './plugins/elementui'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
