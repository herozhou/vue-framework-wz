<template>
  <div class="animated fadeIn">

    <Row>
        <Col :md="12" :sm="12" :lg="12">
          <h3>特性</h3>
           <p>
              <strong>简洁工业化UI：</strong>  各类组件已经完美封装，简化UI工作，专注数据及逻辑开发，再也不用担心老板骂我的UI丑了。

              <a href="https://www.iviewui.com/components/input" target="_blank">点击查看iview</a>
            </p>
            <p>
            <strong>自适应：</strong>  基于bootstrap，完美适配大屏、平板、手机。
             <a style="    color: #2d8cf0;cursor: pointer;">调整浏览器大小查看</a>
            </p>
              <p>
               <strong> 路由控制：</strong>
             在前端截获路由跳转，控制登录及鉴权功能，极大简化后端工作量

              <a style="    color: #2d8cf0;cursor: pointer;" @click="test_logout">点击立即退出登录测试</a>
            </p>

            <p>
              
            </p>
        </Col>
    </Row>


    <Row>
        <Col :md="12" :sm="12" :lg="12">
          <h3>实践案例</h3>
            
        </Col>
    </Row>


     <Row class="row-margin-top">
        <Col :md="4" :sm="12" :lg="4">
          <h5>Yi+内容审核平台</h5>
            <p>
            基于WZ开发的稳定高效的平台，用于涉黄、涉政、涉暴检测。
            </p>
            <p><a href="http://censorship.dressplus.cn/#/introduction" target="_blank">立即访问</a></p>



        </Col>

        <Col :md="8" :sm="12" :lg="8"> 
          
             <Carousel autoplay v-model="value1" :autoplay-speed="speed">
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/ident_index.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/ident_list.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/ident_detail.png">
            </div>
        </Carousel-item>
       
    </Carousel>
        </Col>
    </Row>




     <Row class="row-margin-top">
        <Col :md="4" :sm="12" :lg="4">
          <h5>Yi+ 人脸识别 </h5>
            <p>基于WZ开发的人脸识别平台，快速调用后台api, 采用行业领先的图像识别技术，根据人脸的面部的深度特征识别图像中的明星，支持超过1000位娱乐明星的识别。
            </p>
            <p><a href="http://faceattr.dressplus.cn/">立即访问</a></p>

        </Col>
        <Col :md="8" :sm="12" :lg="8"> 
          
             <Carousel autoplay v-model="value2" :autoplay-speed="speed">
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recongize_1.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recongize_2.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recongize_1.png">
            </div>
        </Carousel-item>
       
    </Carousel>
        </Col>
    </Row>


     <Row class="row-margin-top">
        <Col :md="4" :sm="12" :lg="4">
          <h5>Yi+ 边看边买 </h5>
            <p>
            基于WZ框架开发出的边看边买推荐系统
            </p>
            <p><a href="recommand-demo.dressplus.cn">立即访问</a></p>

        </Col>
        <Col :md="8" :sm="12" :lg="8"> 
          
             <Carousel autoplay v-model="value3" :autoplay-speed="speed">
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recommand_1.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recommand_2.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recommand_3.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="static/img/project_demo/recommand_4.png">
            </div>
        </Carousel-item>
       
    </Carousel>
        </Col>
    </Row>



  </div>
</template>

<script>

export default {
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
        }
}
</script>


<style type="text/css">
  .demo-carousel{
     height: 500px;
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
      margin:;
  }
  .row-margin-top {
    margin-top:20px;
  }
</style>