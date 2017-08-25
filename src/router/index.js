import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'

// Views - Components

import Buttons from '@/views/components/Buttons'
import HoverButtons from '@/views/components/HoverButtons'

// Views - Views
import Table from '@/views/Table'
import TableDetail from '@/views/TableDetail'
import JsonTree from '@/views/JsonTree'


// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'


/* login */
const Login = _import('login/index');

/* dashboard */
/* permission */
// const Permission = _import('permission/index');


Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if hidden:true will not show in the sidebar
  * redirect : if redirect:noredirect will not redirct in the levelbar
  * noDropdown : if noDropdown:true will not has submenu
  * meta : { role: ['admin'] }  will control the page role
  **/

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {
          path: '/pages',
          redirect: '/pages/p404',
          name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [
            {
              path: '404',
              name: 'Page404',
              component: Page404
            },
            {
              path: '500',
              name: 'Page500',
              component: Page500
            },
          ]
        }


]

export default new Router({
  // mode: 'history', //后端支持可开
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Layout,
//     redirect: '/permission/index',
//     name: '权限测试',
//     icon: 'quanxian',
//     meta: { role: ['admin'] },
//     noDropdown: true,
//     children: [{ path: 'index', component: Permission, name: '权限测试页', meta: { role: ['admin'] } }]
//   },

 {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      hidden:false,
      children: [
       {
          path: '/dashboard',
          name: 'Dashboard',
          icon:'speedometer',
          component: Dashboard
        },
       {
          path: '/components',
          name: 'Components',
      redirect: '/components/buttons',

          icon:'bookmark',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              icon:'social-youtube',
              component: Buttons,
              hidden:false,

            },
            {
              path: 'hoverbuttons',
              name: 'HoverButtons',
              icon:'wand',
              component: HoverButtons
            }
          ]
        },
       
        {
          path: '/charts',
          name: 'Charts',
          icon:'pie-graph',
          component: Charts,
        },
         {
          path: '/table',
          name: 'Table',
          icon:'ios-paper',
          component: Table,
          meta: { role: ['admin'] }
        },
         {
          path: '/jsontree',
          name: 'JsonTree',
          icon:'merge',
          component: JsonTree
        },
          {
          path: '/tabledetail/:id',
          name: 'TableDetail',
            hidden:true,
          component: TableDetail
        },
    
        
       
          ]
    },
    { path: '*', redirect: '/pages/404', hidden: true }
  
];
