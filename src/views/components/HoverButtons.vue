<template>
  <div class="animated fadeIn">

<Row>
        <Col span="24" >
           
       <div style="" class="doc-header">
          <section class="color-1">

        <p style="z-index:1;position:relative">
          <hover-button type="height" shap="full"> HOVER ONE</hover-button>
          <hover-button type="height" shap="half"> HOVER TWO</hover-button>
          <hover-button type="width"  shap="full"> HOVER THREE</hover-button>
          <hover-button type="width"  shap="half"> HOVER FOUR</hover-button> 
          <hover-button type="lean"  > HOVER FIVE</hover-button>  
        </p>
      </section>

            <!-- </div> -->
            </div>
            <div style="" class="doc-content">
                <h5>简单悬停样式</h5>

        <p>适合主页跳转等场景使用，简单大方。</p>
        <p>通过设置type为height、width、lean, shap 为full、half 创建不同样式。</p>
        <p>注意父元素需要设置z-index>1 position为relative</p>

            </div>
             
        </Col>

</Row> 
<Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

          <section class="color-4">


          <hover-button type="arrow"  shap="right" icon="arrow-right-c">Continue</hover-button>
          <hover-button type="arrow"  shap="left" icon="arrow-left-c">Return</hover-button>


      </section>

            </div>
            <div style="" class="doc-content">
                <h5>简单悬停按钮</h5>

        <p>适合页面跳转及分页场景使用</p>
            </div>
             
        </Col>


     


    </Row> 


    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

       <section class="color-5" >

        <p>
          <hover-button type="change"  shap="top" icon="ios-cart">Add to cart</hover-button>
          <hover-button type="change"  shap="top" icon="android-delete">Delete</hover-button>
          <hover-button type="change"  shap="top" icon="android-settings">Settings</hover-button>
     </p>

        <p>

          <hover-button type="change"  shap="left" icon="ios-cart">Add to cart</hover-button>
          <hover-button type="change"  shap="left" icon="android-delete">Delete</hover-button>
          <hover-button type="change"  shap="left" icon="android-settings">Settings</hover-button>


        </p>

      </section>

            </div>
            <div style="" class="doc-content">
                <h5>普通悬停按钮</h5>
<p>最常用的几个功能性按钮</p>
            </div>
             
        </Col>





    </Row> 


       <Row>
        <Col span="24" >
           
           <div style="" class="">

      <div class="wrap">
                 <cool-hover-button type="swipe">Settings</cool-hover-button>
                 <cool-hover-button type="swipe" shap="out"> Diagonal Swipe</cool-hover-button>
                 <cool-hover-button type="swipe" shap="in">Double Swipe</cool-hover-button>
                 <cool-hover-button type="close">Diagonal Close</cool-hover-button>
                 <cool-hover-button type="zoningin">Zoning In</cool-hover-button>
                 <cool-hover-button type="corners">4 Corners</cool-hover-button>
              </div>
              <div class="wrap">
                 <cool-hover-button type="slice">Slice</cool-hover-button>
                 <cool-hover-button type="alternate">Alternate</cool-hover-button>
                 <cool-hover-button type="smoosh">Smoosh</cool-hover-button>
                 <cool-hover-button type="overlap" shap="vertical">Vertical Overlap</cool-hover-button>
                 <cool-hover-button type="overlap" shap="horizontal">Horizontal Overlap</cool-hover-button>
                 <cool-hover-button type="collision">Collision</cool-hover-button>

            </div>
            </div>
            <div style="" class="doc-content">
                <h5>炫酷悬停按钮</h5>

        <p>通过设置type为swipe、close、zoningin、corners、slice、smoosh、overlap、collision创建不同样式的按钮，搭配shap 属性使用更佳哦</p>
            </div>
             
        </Col>

    </Row> 




  
  </div>
</template>

<script>
import HoverButton from '@/components/Button/HoverButton';
import CoolHoverButton from '@/components/Button/CoolHoverButton';

export default {
  name: 'social-buttons',
   components: {HoverButton,CoolHoverButton} ,
}
</script>

<style scoped lang="css">
  .btn {
     margin-bottom: 4px;
  }
   .doc-header{
        width:100%;border-bottom:1.5px dashed rgb(6, 40, 115);
        padding-left: 5px;
        padding-top: 5px;

        padding-bottom: 30px;
    }
    .doc-content{
        margin-top:10px;

        margin-bottom:50px;
        padding: 5px;
        line-height: 20px;
    }
      .doc-content p{
      margin-bottom: 5px;
      margin-top: 5px;

    }
    .doc-content h5{
      margin-bottom: 10px;
      margin-top: 10px;

    }
    .showallcode{
            height: 100px;
    }
    .hidecode{
            height: 100%;
    }
    .highlight{
         transition:1000ms ease all;
    }

</style>
