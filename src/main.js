import Vue from 'vue'
import Home from './components/Home.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Home),
}).$mount('#app')
