import Vue from 'vue';
import Router from 'vue-router';
import Full from '@/containers/Full';
import Full2 from '@/containers/Full2';
import mr from '@/views/mr';
import formMr from '@/views/formMr';
// Views - Pages
import Page404 from '@/views/errorPages/Page404';
import Page500 from '@/views/errorPages/Page500';
const _import = require('./_import_' + process.env.NODE_ENV);

/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  {path: '/pages',
    redirect: '/pages/p404',
    name: 'Pages',
    component: {
      render (c) { return c('router-view') }
      // Full,
    },
    children: [{ path: '404', name: "Page404", component: Page404 },
      {path: '500', name: "Page500", component: Page500},

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
    redirect: '/carouselMap',
    name: '首页',
    component: Full,
    hidden: false,
    children: [
      {path: '/carouselMap', name: '首页轮播图', icon: 'ios-images', component: _import('carouselMap')},
      {path: '/navigation', name: 'TV首页导航', icon: 'ios-alert', component: _import('navigation')},

      {path: '/goods', name: '商品管理', icon: 'ios-alert', component: _import('goods')},
      {path: '/goods/addFrom/:ids',
        name: "操作商品",
        component: _import('goods/addFrom'),
        props: true,
        hidden: true
      },
      {path: '/category', name: '商品类别', icon: 'ios-alert', component: _import('category'),
      },

      {path: '/category/addFrom',
        name: "操作分类",
        component: _import('category/addFrom'),
        hidden: true
      },
      /* {path: '/familyCombo', name: '家庭套餐', icon: 'ios-alert', component: _import('familyCombo')},
         {path: '/information', name: '信息录入', icon: 'ios-alert', component: _import('Information')},
          {path: '/introduction', name: '介绍', icon: 'ios-alert', component: _import('Introduction')},
         {path: '/components',
           name: 'component组件',
           redirect: '/components/buttons',
           icon: 'ios-alert',
           component: {render (c) { return c('router-view') }},
           children: [{ path: 'buttons', name: 'Buttons按钮', icon: 'ios-alert', component: _import('components/Buttons'), hidden: false, },
             {path: 'hoverbuttons', name: '悬停特效按钮', icon: 'ios-alert', component: _import('components/HoverButtons')},
             {path: 'alert', name: 'Alert警告提示', icon: 'ios-alert', component: _import('components/Alert')},
             {path: 'card', name: 'Card卡片', icon: 'ios-alert', component: _import('components/Card')},
             {path: 'datepicker', name: 'DatePicker', icon: 'ios-alert', component: _import('components/DatePicker')},
             {path: 'form', name: 'Form表单', icon: 'ios-alert', component: _import('components/Form')},
             {path: 'modal', name: 'Modal对话框', icon: 'ios-alert', component: _import('components/Modal')},
             {path: 'select', name: 'Select选择器', icon: 'ios-alert', component: _import('components/Select')},
             {path: 'spin', name: 'Spin加载中', icon: 'ios-alert', component: _import('components/Spin')},
             {path: 'steps', name: 'Steps步骤条', icon: 'ios-alert', component: _import('components/Steps')},
             {path: 'timeline', name: 'Timeline时间轴', icon: 'ios-alert', component: _import('components/Timeline')},
             {path: 'transfer', name: 'Transfer穿梭框', icon: 'ios-alert', component: _import('components/Transfer')},
             {path: 'timepicker', name: 'Timepicker', icon: 'ios-alert', component: _import('components/Timepicker')},
             {path: 'upload', name: 'Upload上传', icon: 'ios-alert', component: _import('components/Upload')},
           ]
         },
         {path: '/charts',
           name: 'echart图表',
           redirect: '/charts/shopchart',
           icon: 'ios-alert',
           component: {render (c) { return c('router-view') }},
           children: [ { path: 'shopchart', name: '商场统计图表', icon: 'stats-bars', component: _import('charts/ShopChart'), hidden: false, },
             {path: 'radarchart', name: '雷达图', icon: 'arrow-graph-up-right', component: _import('charts/RadarChart')},
             {path: 'cakechart', name: '蛋糕销量图表', icon: 'ios-analytics', component: _import('charts/CakeChart')}
           ]
         },
         {path: '/table', name: '表格综合实例', icon: 'ios-alert', component: _import('Table'), meta: { role: ['admin'] }},
         {path: '/jsontree', name: 'JSON视图', icon: 'ios-alert', component: _import('JsonTree')},
         {path: '/tabledetail/:id', name: 'TableDetail', hidden: true, component: _import('TableDetail')},

         {path: '/markdown', name: 'Markdown', icon: "ios-alert", component: _import('Markdown')},
         {path: '/mr', name: 'MR', icon: "ios-alert", component: mr},
         {path: '/formMr', name: 'FormMr', icon: "ios-alert", component: formMr},
      {path: '/tinymce', name: 'Tinymce编辑器', icon: "ios-alert", component: _import('Tinymce')},*/

    ]
  },
  { path: '*', redirect: '/pages/404', hidden: true },

];
