import Vue from 'vue';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import  TreeView   from "vue-json-tree-view";
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
