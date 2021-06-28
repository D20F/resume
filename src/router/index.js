import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"main",
    component:() => import("@/view/main.vue")
  },
  {
    path:"/nextpage",
    name:"nextpage",
    component:() => import("@/view/nextpage.vue")
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to',to);
  // console.log('from',from);
  next()
})

export default router

