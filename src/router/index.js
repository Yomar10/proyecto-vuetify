import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/footer',
  //   name: 'footer',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/footer.vue')
  // },
  // {
  //   path: '/proyecto',
  //   name: 'proyecto',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Proyecto.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
