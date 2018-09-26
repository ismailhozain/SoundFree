import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/login.vue'
import FindWorkplace from './views/FindWorkplace.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
     path: '/login',
     name: 'login',
     components:Login
    },
    {
    path: '/findworkplace',
    name: 'findworkplace',
    component:FindWorkplace
    }    
  ]
})
