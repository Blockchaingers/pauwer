import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Socket from '@/components/Socket'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/socket/:sid',
      name: 'Socket',
      component: Socket
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
