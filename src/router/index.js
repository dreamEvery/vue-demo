import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PageA from '@/components/A'
import PageB from '@/components/B'
import PageC from '@/components/C'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/page-a',
      component: PageA
    },
    {
      path: '/page-b',
      component: PageB
    },
    {
      path: '/page-c',
      component: PageC
    }
  ]
})
