import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard/Analysis'
import NotFound from '@/pages/exception/404'
import NotPermit from '@/pages/exception/403'
import ServerError from '@/pages/exception/500'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import BasicForm from '@/pages/form/BasicForm'
import StepForm from '@/pages/form/stepForm/StepForm'
import AdvancedForm from '@/pages/form/advancedForm/AdvancedForm'
import Success from '@/pages/result/Success'
import Error from '@/pages/result/Error'
import QueryList from '@/pages/list/QueryList'
import StandardList from '@/pages/list/StandardList'
import CardList from '@/pages/list/CardList'
import SearchLayout from '@/pages/list/search/SearchLayout'
import ArticleList from '@/pages/list/search/ArticleList'
import ApplicationList from '@/pages/list/search/ApplicationList'
import ProjectList from '@/pages/list/search/ProjectList'
import WorkPlace from '@/pages/dashboard/WorkPlace'
import Login from '@/pages/login/Login'
import BasicDetail from '@/pages/detail/BasicDetail'
import AdvancedDetail from '@/pages/detail/AdvancedDetail'
import TaskCard from '@/pages/components/TaskCard'
import ColorBox from '@/pages/components/Palette'

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
              component: WorkPlace,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: 'Analysis page',
              component: Dashboard,
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
              component: BasicForm,
              icon: 'none'
            },
            {
              path: '/form/step',
              name: 'Step form',
              component: StepForm,
              icon: 'none'
            },
            {
              path: '/form/advanced',
              name: 'Advanced Forms',
              component: AdvancedForm,
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
              component: QueryList,
              icon: 'none'
            },
            {
              path: '/list/primary',
              name: 'Standard List',
              component: StandardList,
              icon: 'none'
            },
            {
              path: '/list/card',
              name: 'Card list',
              component: CardList,
              icon: 'none'
            },
            {
              path: '/list/search',
              name: 'Search list',
              component: SearchLayout,
              icon: 'none',
              children: [
                {
                  path: '/list/search/article',
                  name: 'Article',
                  component: ArticleList,
                  icon: 'none'
                },
                {
                  path: '/list/search/application',
                  name: 'Application',
                  component: ApplicationList,
                  icon: 'none'
                },
                {
                  path: '/list/search/project',
                  name: 'Project',
                  component: ProjectList,
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
              component: BasicDetail
            },
            {
              path: '/detail/advanced',
              name: 'Advanced Details page',
              icon: 'none',
              component: AdvancedDetail
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
              component: Success
            },
            {
              path: '/result/error',
              name: 'Failed',
              icon: 'none',
              component: Error
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
              component: NotFound
            },
            {
              path: '/exception/403',
              name: '403',
              icon: 'none',
              component: NotPermit
            },
            {
              path: '/exception/500',
              name: '500',
              icon: 'none',
              component: ServerError
            }
          ]
        },
        {
          path: '/pages',
          redirect: '/pages/taskcard',
          name: 'Group Parts',
          icon: 'appstore-o',
          component: PageView,
          children: [
            {
              path: '/pages/taskcard',
              name: 'Task cards',
              icon: 'none',
              component: TaskCard
            },
            {
              path: '/pages/palette',
              name: 'Color check box',
              icon: 'none',
              component: ColorBox
            }
          ]
        }
      ]
    }
  ]
})
