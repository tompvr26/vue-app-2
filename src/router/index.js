import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Films from '../views/Films.vue'
import Covid from '../views/Covid.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/covid',
    name: 'Covid',
    component: Covid
  }
]

const router = new VueRouter({
  routes
})

export default router
