import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
  import ('./views/Home.vue')
const About = () =>
  import ('./views/About.vue')
const JoinUs = () =>
  import ('./views/JoinUs.vue')
const Software = () =>
  import ('./views/Software.vue')
const Licence = () =>
  import ('./views/Licence.vue')
const OSSMap = () =>
  import ('./views/OSSMap.vue')
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/about',
      name: 'about',
      component: About,

    },
    {
      path: '/join',
      name: 'join',
      component: JoinUs,

    },
    {
      path: '/software',
      name: 'software',
      component: Software,

    },
    {
      path: '/licence',
      name: 'licence',
      component: Licence,

    },
    {
      path: '/map',
      name: 'map',
      component: OSSMap,

    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  // mode: 'history',

})