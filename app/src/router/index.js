import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Socket from '@/components/Socket'
import Profile from '@/components/Profile'
import Contracts from '@/components/Contracts'

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
    },
    {
      path: '/connections',
      name: 'My connections',
      component: Contracts
    },
    {
      path: '/connections/:sid',
      name: 'Connection',
      component: Socket
    }
  ]
})
