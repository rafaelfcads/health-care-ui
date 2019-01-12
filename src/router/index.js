import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/contacts', component: Contact },
]

export default new Router({ routes })
