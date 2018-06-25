import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import JoinUs from './views/JoinUs.vue'
import Software from './views/Software.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/join',
      name: 'join',
      component: JoinUs
    },
    {
      path: '/software',
      name: 'software',
      component: Software
    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  mode: 'history',
})