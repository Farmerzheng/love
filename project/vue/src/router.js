import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'first',
      component: () => import(/* webpackChunkName: "about" */ './views/PageOne')
    },
    {
      path: '/second',
      name: 'second',
      component: () => import(/* webpackChunkName: "about" */ './views/PageTwo')
    }
  ]
})
