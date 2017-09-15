<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
<div>
    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

                        <Timeline>
                    <Timeline-item>
                        <p class="time">1976年</p>
                        <p class="content">Apple I 问世</p>
                    </Timeline-item>
                    <Timeline-item>
                        <p class="time">1984年</p>
                        <p class="content">发布 Macintosh</p>
                    </Timeline-item>
                    <Timeline-item>
                        <p class="time">2007年</p>
                        <p class="content">发布 iPhone</p>
                    </Timeline-item>
                    <Timeline-item>
                        <p class="time">2010年</p>
                        <p class="content">发布 iPad</p>
                    </Timeline-item>
                    <Timeline-item>
                        <p class="time">2011年10月5日</p>
                        <p class="content">史蒂夫·乔布斯去世</p>
                    </Timeline-item>
                </Timeline>

            </div>
            <div style="" class="doc-content">
                <h5>基础用法</h5>
        <p>最简单定义一个时间轴的用法。</p>
            </div>

             
        </Col>

    </Row>        



<Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
 <Timeline>
        <Timeline-item color="green">发布1.0版本</Timeline-item>
        <Timeline-item color="green">发布2.0版本</Timeline-item>
        <Timeline-item color="red">严重故障</Timeline-item>
        <Timeline-item color="blue">发布3.0版本</Timeline-item>
    </Timeline>

            </div>
            <div style="" class="doc-content">
                <h5>圆圈颜色</h5>
        <p> 
用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。</p>
            </div>

             
        </Col>



    </Row>    




</div>
   

</template>
<script>
    export default {
        
    }
</script>




