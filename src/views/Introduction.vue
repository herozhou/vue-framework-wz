<template>
  <div class="animated fadeIn">


<Row>
    <Col :md="24">
          <intro-chart-count> </intro-chart-count>

    </Col>

</Row>

 <Row>
        <Col span="24" >
          <h3 style="text-align:center">特性</h3>
            
        </Col>
    </Row>


    <Row>

        <Col :md="8" >
          <div class="dashboard_feature">
            <Icon type="ios-color-wand" size="50"></Icon>
            <h5>简洁工业化UI：</h5>                 
            <p>各类组件已经完美封装，简化UI工作，专注数据</p>
            <p>再也不用担心老板骂我的UI丑了</p>

                <p><a href="https://www.iviewui.com/components/input" target="_blank">点击查看iview</a></p>
            </div>
            
        </Col>

  <Col :md="8" >

          <div class="dashboard_feature">
            <Icon type="android-phone-portrait" size="50"></Icon>

            <h5>自适应</h5>                 
            <p>自适应布局 可缩小侧边栏 Logo自动居中 </p>
            <p>完美适配大屏、平板、手机</p>
                <p>    <a style="    color: #2d8cf0;cursor: pointer;">调整浏览器大小查看</a></p>
            </div>
            
        </Col>
          <Col :md="8" >
          <div class="dashboard_feature">
            <Icon type="eye" size="50"></Icon>
            <h5>登录鉴权</h5>                 
            <p>在前端截获路由跳转，控制登录及鉴权功能</p>
            <p>极大简化后端工作量</p>

                <p> <a style="    color: #2d8cf0;cursor: pointer;" @click="test_logout">点击立即退出登录测试</a></p>
            </div>
            
        </Col>

    </Row>


 <Row>
        <Col span="24" >
          <h3 style="text-align:center">教程</h3>
            
        </Col>
    </Row>




 <Row>
        <Col :md="12" >
          
          <p><a href="http://www.cnblogs.com/herozhou/p/7434931.html" target="_blank">一步步带你做vue后台管理框架(一)——介绍框架</a></p>
          <p><a href="http://www.cnblogs.com/herozhou/p/7441702.html" target="_blank">一步步带你做vue后台管理框架(二)——上手使用</a></p>
          

          <p>后续课程正在日夜撰写中，接下来会讲一下 登录鉴权、路由、webpack、自己动手封装UI组件 等内容</p>
          <p> 希望大家能够根据此项目和教程开发出自己的框架，从而在工作学习中得心应手</p>

        </Col>

         <Col :md="12" >

          <intro-chart-pie> </intro-chart-pie>
        </Col>


</Row>


    <Row>
        <Col span="24" >
          <h3 style="text-align:center">实践案例</h3>
            
        </Col>
    </Row>


     <Row class="row-margin-top">
        <Col :xs="12" :sm="12" :md="8" :lg="8">
          <h5>Yi+内容审核平台</h5>
            <p>
            基于WZ开发的稳定高效的平台，用于涉黄、涉政、涉暴检测。
            </p>
            <p><a href="http://censorship.dressplus.cn/#/introduction" target="_blank">立即访问</a></p>



        </Col>

  
        <Col :xs="12" :sm="12" :md="8" :lg="8">
          <h5>Yi+ 人脸识别 </h5>
            <p>基于WZ开发的人脸识别平台，采用行业领先的图像识别技术, 
            </p>
            <p><a href="http://faceattr.dressplus.cn/" target="_blank">立即访问</a></p>

        </Col>
       
      

        <Col :xs="12" :sm="12" :md="8" :lg="8">
          <h5>Yi+ 边看边买 </h5>
            <p>
            基于WZ框架开发出的边看边买推荐系统
            </p>
            <p><a href="recommand-demo.dressplus.cn" target="_blank">立即访问</a></p>

        </Col>
     
    </Row>



  </div>
</template>

<script>
import IntroChartCount from './charts/IntroChartCount';
import IntroChartPie from './charts/IntroChartPie';

export default {
  components:{IntroChartCount,IntroChartPie},
  name: 'dashboard',
        data () {
            return {
                value1: 0,
                value2: 0,
                value3: 0,

                speed:10000,
            }
        },
        methods:{
              test_logout(){
                 this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({ path: '/login' });
                  }).catch(err => {
                    this.$message.error(err);
                  });
              }
        },
        mounted(){
                const token=this.$store.getters.token;
                
            
        }
}
</script>


<style type="text/css" scoped>
 .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
.dashboard_feature{
  text-align:center;
}
  .demo-carousel{
     height: 600px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
  }
  .demo-carousel img{
      height: 100%;
      width: 100%;
  }
  h3,h4,h5 {
      margin:12px;
  }
  h3{
    margin-bottom: 20px;
  }
  p{
    margin: 12px;
  }
  .row-margin-top {
    margin-top:30px;
  }
</style>