import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import NProgress from 'nprogress'; // Progress 进度条
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import 'nprogress/nprogress.css';// Progress 进度条 样式
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import TreeView from "vue-json-tree-view";

Vue.use(iView);
Vue.use(TreeView);



import ECharts from 'vue-echarts/components/ECharts.vue'
Vue.component('chart', ECharts)
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'


Vue.config.productionTip = false;

function hasPermission(roles, permissionRoles) {

  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (store.getters.token) { // 判断是否有token
           if (to.path === '/login') {
              next({ path: '/' });
            }  
             else {//如果不是去login 而是其他需要判定权限的
              if (store.getters.roles.length === 0) { // 如果当前用户没有拉取完user_info信息
                store.dispatch('GetInfo').then(res => { // 拉取user_info
                  const roles = res.data.role;
                  store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
                    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                    next({ ...to }); // hack方法 确保addRoutes已完成
                  })
                })
              } else {
                // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                if (hasPermission(store.getters.roles, to.meta.role)) {
                  next();//
                } else {
                  next({ path: '/', query: { noGoBack: true } });
                }
                // 可删 ↑
              }
            }


  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {

      next('/login'); // 否则全部重定向到登录页
      NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});


router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


