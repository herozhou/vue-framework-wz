<template>
  <Row>

  <Col :span="24">
    <chart :options="option" class="echarts" id="cakechart"></chart>

  </Col>

  </Row>
</template>

<style scoped>
.echarts {
  height: 700px;
  width: 100%;
  border-radius: 25px;
}

</style>

<script>
var weekDay = 0;
var data = [{
    name: '可可慕斯',
    value: [1, 2, 5, 7, 6, 7, 1]
}, {
    name: '马卡龙',
    value: [3, 4, 5, 8, 2, 9, 10]
}, {
    name: '布朗尼',
    value: [2, 4, 5, 7, 3, 9, 11]
}]



function tooltipFormatter(params) {
    var valuesFormatter = [];
    if (params.componentSubType == 'pie') {
        valuesFormatter.push(
            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
            option.angleAxis.data[weekDay].value + '<br>' + '</div>' +
            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value
        );
    } else {
        valuesFormatter.push(
            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
            params.seriesName +
            '</div>' +
            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value + '<br>');
    }

    return valuesFormatter;
};

$('#cakechart').on('click', function(params) {
    if (params.componentSubType != 'pie') {
        weekDay = params.dataIndex;
        option.series[3].data[0].value = data[0].value[weekDay];
        option.series[3].data[1].value = data[1].value[weekDay];
        option.series[3].data[2].value = data[2].value[weekDay];
        var weekDayData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];;
        weekDayData[weekDay] = {
            value: weekDayData[weekDay],
            textStyle: {
                fontSize: 25,
            }
        };
        option.angleAxis.data = weekDayData;
        myChart.setOption(option);
    }
})
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();


export default {
  data: function () {

  

    return {

option : {
    title: {
        text: 'Snow蛋糕店-本周各类蛋糕销量',
        subtext: '点击极坐标系下即可与圆环图交互',
        textAlign: 'left'
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: tooltipFormatter,

    },
    angleAxis: {
        type: 'category',
        data: [{
            value: '星期一',
            textStyle: {
                fontSize: 25,
            }
        }, '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        z: 10
    },
    polar: {
        center: ['50%', '50%'],
        radius: 260,
    },
    radiusAxis: {},
    series: [{
        type: 'bar',
        data: [
            data["0"].value["0"],
            data["0"].value["1"],
            data["0"].value["2"],
            data["0"].value["3"],
            data["0"].value["4"],
            data["0"].value["5"],
            data["0"].value["6"],
        ],
        coordinateSystem: 'polar',
        name: data["0"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: [
            data["1"].value["0"],
            data["1"].value["1"],
            data["1"].value["2"],
            data["1"].value["3"],
            data["1"].value["4"],
            data["1"].value["5"],
            data["1"].value["6"],
        ],
        coordinateSystem: 'polar',
        name: data["1"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: [
            data["2"].value["0"],
            data["2"].value["1"],
            data["2"].value["2"],
            data["2"].value["3"],
            data["2"].value["4"],
            data["2"].value["5"],
            data["2"].value["6"],
        ],
        coordinateSystem: 'polar',
        name: data["2"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 3,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '每天销量',
        type: 'pie',
        radius: ['95%', '100%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} : {c} ({d}%)'

            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'normal'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data["0"].value["0"],
            name: data["0"].name
        }, {
            value: data["1"].value["0"],
            name: data["1"].name
        }, {
            value: data["2"].value["0"],
            name: data["2"].name
        }],
        legend: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'top',
            data: [data["0"].name, data["1"].name, data["2"].name, ]
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 3,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}



    }
  }
}
</script>