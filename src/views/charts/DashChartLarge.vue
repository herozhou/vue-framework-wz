<template>

  <Col :span="24" style="background-color:white">
    <chart :options="option" class="echarts" id="chart" > </chart>

  </Col>

</template>

<style scoped>
.echarts {
  height: 400px;
  width: 100%;

}


</style>

<script>




export default {
    mounted(){
    },
  data: function () {
   
    return {





option :{
   tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1', '5', '10', '15', '20', '25', '31']
            }
        ],
        yAxis: [
            {
                name: '（单价）',
                type: 'value',
                max: 100
            },
            {
                name: '（笔数）',
                type: 'value',
                max: 100
            }
        ],
        series: [
            {
                name: '客单价',
                type: 'line',
                tooltip: {
                    trigger: 'axis'
                    // formatter: '{a} <br/>{b}日: {c}元'
                },
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'rgba(2, 197, 233, 0.2)',
                        lineStyle: {
                            color: 'rgba(23, 107, 203, 0.2)'
                        },
                        areaStyle: {
                            color: 'rgba(223, 147, 233, 0.2)'
                        }
                    }
                },
                data: [10, 12, 21, 54, 60, 80, 71]
            },
            {
                name: '交易笔数',
                type: 'line',
                tooltip: {
                    trigger: 'axis'
                    // formatter: '{a} <br/>{b}日: {c}元'
                },
                yAxisIndex: 1,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'rgba(2, 197, 233, 0.2)',
                        lineStyle: {
                            color: 'rgba(2, 197, 233, 0.2)'
                        },
                        areaStyle: {
                            color: 'rgba(2, 197, 233, 0.2)'
                        }
                    }
                },
                data: [30, 32, 61, 24, 20, 90, 20]
            }
        ]
}
    



    }
  }
}
</script>