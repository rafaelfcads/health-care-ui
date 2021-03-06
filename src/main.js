import Vue from 'vue'
import Home from './components/Home.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
