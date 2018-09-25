import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

const Tooast = () => import(/* webpackChunkName: "Tooast" */'@/components/Demos/Tooast.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/demos/tooast',
      name: 'Tooast',
      component: Tooast
    }
  ]
})
