import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/TodoView.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
  next()
})

router.afterEach((to, from) => {
  goTo(0, { duration: 0 })  
})

export default router
