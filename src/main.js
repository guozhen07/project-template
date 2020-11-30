import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// 矢量图
import './assets/icons'
import router from './router'
import store from './store'
// axios
import HTTP from './utils/http'

Vue.prototype.$http = HTTP
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
