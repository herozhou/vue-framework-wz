/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './mock'; // 该项目所有请求使用mockjs模拟
import './login.js';
import './ui.js';
import global_ from './components/Global'//引用文件
Vue.config.productionTip = false;

Vue.config.devtools = true
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
