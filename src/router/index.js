import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Buttons from '@/views/components/Buttons'

// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
     {path: '/dashboard',name: 'Dashboard',icon:'speedometer',component: _import('Dashboard')},
     {path: '/introduction',name: '介绍',icon:'thumbsup',component: _import('Introduction')},
     {path: '/components',name: 'component组件',redirect: '/components/buttons',icon:'bookmark',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'buttons',name: '按钮',icon:'social-youtube',component: _import('components/Buttons'), hidden:false, },
                    {path: 'hoverbuttons',name: '悬停特效按钮',icon:'wand',component: _import('components/HoverButtons')}
                  ]
      },
       {path: '/charts',name: 'echart图表',redirect: '/charts/shopchart',icon:'pie-graph',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'shopchart',name: '商场统计图表',icon:'stats-bars',component: _import('charts/ShopChart'), hidden:false, },
                    {path: 'radarchart',name: '雷达图',icon:'arrow-graph-up-right',component: _import('charts/RadarChart')},
                    {path: 'cakechart',name: '蛋糕销量图表',icon:'ios-analytics',component: _import('charts/CakeChart')}
                  ]
      },
      {path: '/table', name: '表格',icon:'ios-paper',component: _import('Table'),meta: { role: ['admin'] }},
      {path: '/jsontree', name: 'JSON视图',icon:'merge',component: _import('JsonTree')},
      {path: '/tabledetail/:id',name: 'TableDetail', hidden:true, component: _import('TableDetail')},
      {path: '/tinymce',name: 'Tinymce编辑器',icon:"android-document",component: _import('Tinymce')},
      {path: '/markdown',name: 'Markdown',icon:"android-list",component: _import('Markdown')},
      
    ]
  },
  { path: '*', redirect: '/pages/404', hidden: true }
  
];
