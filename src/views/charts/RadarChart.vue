<template>
  <Row>

  <Col :span="24">
    <chart :options="option" class="echarts"></chart>

  </Col>

  </Row>
</template>

<style scoped>
.echarts {
  height: 500px;
  width: 100%;
  border-radius: 25px;
}

</style>

<script>







export default {
  data: function () {

    return {







   option : {
      title: {
          text: '雷达图'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
          textStyle: {
              color: '#fff'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: 'Sales',
              max: 6000
          }, {
              name: 'Administration',
              max: 16000
          }, {
              name: 'Information Techology',
              max: 30000
          }, {
              name: 'Customer Support',
              max: 35000
          }, {
              name: 'Development',
              max: 50000
          }, {
              name: 'Marketing',
              max: 25000
          }]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '预算分配（Allocated Budget）',
          }, {
              value: [2500, 12000, 8000, 8500, 12000, 12000],
              name: '实际开销（Actual Spending）',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [{
              offset: 0,
              color: '#895355' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#593640' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#39273d' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
  }





    }
  }
}
</script>