import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
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
          path: '/dashboard',
          name: 'dashboard',
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
            }
          ]
        },
        {
          path: '/form',
          name: 'Form page',
          component: PageView,
          icon: 'form',
          children: [
            {
              path: '/form/basic',
              name: 'Basic forms',
              component: () => import('@/pages/form/BasicForm'),
              icon: 'none'
            },
            {
              path: '/form/step',
              name: 'Step form',
              component: () => import('@/pages/form/stepForm/StepForm'),
              icon: 'none'
            },
            {
              path: '/form/advanced',
              name: 'Advanced Forms',
              component: () => import('@/pages/form/advancedForm/AdvancedForm'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/list',
          name: 'List page',
          component: PageView,
          icon: 'table',
          children: [
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
        },
        {
          path: '/detail',
          name: 'Details page',
          icon: 'profile',
          component: RouteView,
          children: [
            {
              path: '/detail/basic',
              name: 'Basic Details page',
              icon: 'none',
              component: () => import('@/pages/detail/BasicDetail')
            },
            {
              path: '/detail/advanced',
              name: 'Advanced Details page',
              icon: 'none',
              component: () => import('@/pages/detail/AdvancedDetail')
            }
          ]
        },
        {
          path: '/result',
          name: 'Results page',
          icon: 'check-circle-o',
          component: PageView,
          children: [
            {
              path: '/result/success',
              name: 'Success',
              icon: 'none',
              component: () => import('@/pages/result/Success')
            },
            {
              path: '/result/error',
              name: 'Failed',
              icon: 'none',
              component: () => import('@/pages/result/Error')
            }
          ]
        },
        {
          path: '/exception',
          name: 'Exception page',
          icon: 'warning',
          component: RouteView,
          children: [
            {
              path: '/exception/404',
              name: '404',
              icon: 'none',
              component: () => import('@/pages/exception/404')
            },
            {
              path: '/exception/403',
              name: '403',
              icon: 'none',
              component: () => import('@/pages/exception/403')
            },
            {
              path: '/exception/500',
              name: '500',
              icon: 'none',
              component: () => import('@/pages/exception/500')
            }
          ]
        },
        {
          path: '/components',
          redirect: '/components/taskcard',
          name: 'Group Parts',
          icon: 'appstore-o',
          component: PageView,
          children: [
            {
              path: '/components/taskcard',
              name: 'Task cards',
              icon: 'none',
              component: () => import('@/pages/components/TaskCard')
            },
            {
              path: '/components/palette',
              name: 'Color check box',
              icon: 'none',
              component: () => import('@/pages/components/Palette')
            }
          ]
        }
      ]
    }
  ]
})
