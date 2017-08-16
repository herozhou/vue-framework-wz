<template>
  <div class="animated fadeIn">
  <h3 class="text-center">采用了基于Chart.js的vue-chartjs</h3>
  <p class="text-center">文档看这里 <a href="http://vue-chartjs.org/#/">vue-chartjs</a> </p>
  <p class="text-center">更多炫酷demo看这里 <a href="http://demo.vue-chartjs.org/">vue-chartjs</a> </p>

<Row>
  <Col :md="12" :sm="12">
  <div style=" background: #212733;
      border-radius: 15px;
      box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
      margin:  25px 0;">
<cool-example></cool-example>
    
  </div>
    
  </Col>
</Row>
    <div class="card-columns cols-2">
      <div class="card">
        <div class="card-header">
          Line Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <line-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Bar Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <bar-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Doughnut Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <doughnut-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Radar Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <radar-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Pie Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <pie-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Polar Area Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <polar-area-example/>
          </div>
        </div>
      </div>

 

    </div>
  </div>
</template>

<script>

import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'
import CoolExample from './charts/CoolExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample,
    CoolExample
  }
}
</script>
