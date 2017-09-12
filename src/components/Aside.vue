<template>
  <aside class="aside-menu px-4">
    <div class="aside-options">
      <div class="clearfix mt-4">
        <h6><b>待办事项 1</b>  <i-switch class="float-right">
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch></h6>
   
      </div>
      <div>
        <p class="text-muted">明天提醒我吃黄焖鸡</p>
      </div>


    </div>
   
    <hr>
    <h6>系统利用率</h6>

      <i-circle
        :size="200"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-i-circle-custom">
            <h1>42,001,776</h1>
            <p>下载人数</p>
            <span>
                占总访问人数
                <i>75%</i>
            </span>
        </div>
    </i-circle>
    <div class="text-uppercase mb-1 mt-4"><small><b>CPU Usage</b></small></div>
     <Progress :percent="95" :stroke-width="7" status="active"></Progress>

    <small class="text-muted">348 Processes. 1/4 Cores.</small>


    <div class="text-uppercase mb-1 mt-2"><small><b>Memory Usage</b></small></div>

     <Progress :percent="95" :stroke-width="7" status="wrong"></Progress>

    <small class="text-muted">243GB/256GB</small>


    <div class="text-uppercase mb-1 mt-2"><small><b>SSD  Usage</b></small></div>
     <Progress :percent="25" :stroke-width="7" status="success"></Progress>

    <small class="text-muted">25GB/256GB</small>
  </aside>
</template>

<script>
export default {
  name: 'aside'
}
</script>
<style type="text/css">
  .wz-progress-show-info .wz-progress-outer{
      padding-right: 0px;
      margin-right: 0px;
  }
</style>


<style scoped>
.text-muted{
  margin-top:1rem;
  margin-bottom:1rem;

}
    .demo-i-circle-custom h1{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
     .demo-i-circle-custom  p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
     .demo-i-circle-custom  span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;}
         /*  .demo-i-circle-custom:before{
                content: '';
                display: block;
                width: 80px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: 100px;
            };*/
    .demo-i-circle-custom  span i{
            font-style: normal;
            color: #3f414d;
        }
</style>
