import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/contacts', component: Contact },
]

export default new VueRouter({ routes })