import Vue from 'vue'
import Router from 'vue-router'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login Page',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: 'Home',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/insurer',
          name: 'Insurer',
          component: () => import('@/insurer/list'),
          icon: 'bank'
        },
        {
          path: '/dashboard',
          name: 'Samples',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: 'Table',
              component: () => import('@/pages/dashboard/WorkPlace'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: 'Analysis page',
              component: () => import('@/pages/dashboard/Analysis'),
              icon: 'none'
            },
            {
              path: '/list/query',
              name: 'Query form',
              component: () => import('@/pages/list/QueryList'),
              icon: 'none'
            },
            {
              path: '/list/primary',
              name: 'Standard List',
              component: () => import('@/pages/list/StandardList'),
              icon: 'none'
            },
            {
              path: '/list/card',
              name: 'Card list',
              component: () => import('@/pages/list/CardList'),
              icon: 'none'
            },
            {
              path: '/list/search',
              name: 'Search list',
              component: () => import('@/pages/list/search/SearchLayout'),
              icon: 'none',
              children: [
                {
                  path: '/list/search/article',
                  name: 'Article',
                  component: () => import('@/pages/list/search/ArticleList'),
                  icon: 'none'
                },
                {
                  path: '/list/search/application',
                  name: 'Application',
                  component: () => import('@/pages/list/search/ApplicationList'),
                  icon: 'none'
                },
                {
                  path: '/list/search/project',
                  name: 'Project',
                  component: () => import('@/pages/list/search/ProjectList'),
                  icon: 'none'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
