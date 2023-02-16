import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import './plugins/elementui'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
