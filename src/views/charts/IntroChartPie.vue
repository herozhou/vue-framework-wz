<template>
  <Row>

  <Col :span="24">
    <chart :options="option" class="echarts" id="chart"> </chart>

  </Col>

  </Row>
</template>

<style scoped>
.echarts {
  height: 300px;
  width: 100%;
  border-radius: 25px;
}

canvas{
	margin-top:50px !important;
}

</style>

<script>

export default {
  data: function () {
   
    return {





option : {
    title : {
        text: '项目占比',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['vue 2976','webpack 1092','node 241','css 59']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [30, 110],
            center : ['55%', '55%'],
            roseType : 'radius',
            data:[
                {value:1976, name:'vue 2976'},
                {value:1092, name:'webpack 1092'},
                {value:241, name:'node 241'},
                {value:59, name:'css 59'},
            ]
        }
      
    ]
}




    }
  }
}
</script>