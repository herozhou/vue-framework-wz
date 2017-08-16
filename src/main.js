// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import NProgress from 'nprogress'; // Progress 进度条
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import 'nprogress/nprogress.css';// Progress 进度条 样式

import Button from './components/Button';
import HoverButton from './components/Button/HoverButton';
import CoolHoverButton from './components/Button/CoolHoverButton';
import {Select,Option,OptionGroup} from './components/Select';

import Row from './components/Grid/row';
import Col from './components/Grid/col';

// 使用
import Affix from './components/Affix';
import Alert from './components/Alert';
import BackTop from './components/Back-top';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Cascader from './components/Cascader';
import Checkbox from './components/Checkbox';
import Circle from './components/Circle';
import Collapse from './components/Collapse';
import DatePicker from './components/DatePicker';
import Dropdown from './components/Dropdown';
import Form from './components/Form';
import Icon from './components/icon/icon';
import Input from './components/Input';
import InputNumber from './components/Input-number';
import LoadingBar from './components/LoadingBar';
import Menu from './components/Menu';
import Message from './components/Message';
import Modal from './components/Modal';
import Notice from './components/Notice';
import Page from './components/Page';
import Poptip from './components/Poptip';
import Progress from './components/Progress'
import Radio from './components/Radio';
import Rate from './components/Rate';
import Slider from './components/Slider';
import Spin from './components/Spin';
import Steps from './components/Steps';
import Switch from './components/Switch';
import Table from './components/Table';
import Tabs from './components/Tabs';
import Tag from './components/Tag';
import Timeline from './components/Timeline';
import TimePicker from './components/DatePicker/picker/time-picker';

import Tooltip from './components/Tooltip';
import Transfer from './components/Transfer';
import Tree from './components/Tree';
import Upload from './components/Upload';

import locale from './locale';


import TreeView from "vue-json-tree-view";
Vue.use(TreeView);


Vue.prototype.$Modal = Modal;
Vue.prototype.$Message = Message;


// register globally

const WzViews = {
    Affix,
    Alert,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    iButton: Button,
    Button,
    ButtonGroup: Button.Group,
    
    HoverButton,
    CoolHoverButton,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    iCircle: Circle,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    iForm: Form,
    FormItem: Form.Item,
    Col,
    iCol: Col,
    Collapse,
    Icon,
    Input,
    iInput: Input,
    InputNumber,
    LoadingBar,
    Menu,
    iMenu: Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    iOption: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    iProgress: Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    iSelect: Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    // Switch,
    iSwitch: Switch,
    iTable: Table,
    Table,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload
};


    Object.keys(WzViews).forEach((key) => {
        Vue.component(key, WzViews[key]);
    });

    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;


Vue.config.productionTip = false;

function hasPermission(roles, permissionRoles) {

  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

// register global progress.
const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // console.log(to)
  NProgress.start(); // 开启Progress
  if (store.getters.token) { // 判断是否有token


            // alert('dont need login ');
           if (to.path === '/login') {
              next({ path: '/' });
            }  
             else {//如果不是去login 而是其他需要判定权限的
              // console.log(store.getters.roles)
              if (store.getters.roles.length === 0) { // 如果当前用户没有拉取完user_info信息
                store.dispatch('GetInfo').then(res => { // 拉取user_info
                  const roles = res.data.role;
                  store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
                    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                    // console.log(store.getters.addRouters);
                    next({ ...to }); // hack方法 确保addRoutes已完成
                  })
                })
              } else {
                // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                if (hasPermission(store.getters.roles, to.meta.role)) {
                  // console.log(to.meta.role)
                  // console.log("has permission");
                  next();//
                } else {
                  // console.log("has no permission");

                  next({ path: '/', query: { noGoBack: true } });
                }
                // 可删 ↑
              }
            }


  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      alert('please login');
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


