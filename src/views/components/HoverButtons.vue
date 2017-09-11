<template>
  <div class="animated fadeIn">

<Row>
        <Col :xs="24" :sm="24" :md="12" :lg="12" >
           
           <div style="" class="doc-header">
 <!-- <div class="hovercontainer">   -->
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


        <Col :xs="24" :sm="24" :md="12" :lg="12">
<div class="highlight" style="background: #f0f0f0">
          <pre style="line-height: 125%"> 
        <span style="color: #062873; font-weight: bold">&lt;p</span> <span style="color: #4070a0">style=&quot;z-index:1;position:relative&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
          <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;height&quot;</span> <span style="color: #4070a0">shap=&quot;full&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span> HOVER ONE<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
          <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;height&quot;</span> <span style="color: #4070a0">shap=&quot;half&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span> HOVER TWO<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
          <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;width&quot;</span>  <span style="color: #4070a0">shap=&quot;full&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span> HOVER THREE<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
          <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;width&quot;</span>  <span style="color: #4070a0">shap=&quot;half&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span> HOVER FOUR<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span> 
          <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;lean&quot;</span>  <span style="color: #062873; font-weight: bold">&gt;</span> HOVER FIVE<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>  
        <span style="color: #062873; font-weight: bold">&lt;/p&gt;</span>
</pre></div>


        </Col>
</Row> 
<Row>
        <Col :xs="24" :sm="24" :md="12" :lg="12" >
           
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


        <Col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%">
       <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;arrow&quot;</span>  <span style="color: #4070a0">shap=&quot;right&quot;</span> <span style="color: #4070a0">icon=&quot;arrow-right-c&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Continue<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
       <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;arrow&quot;</span>  <span style="color: #4070a0">shap=&quot;left&quot;</span> <span style="color: #4070a0">icon=&quot;arrow-left-c&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Return<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>

</pre></div>


        </Col>



    </Row> 


    <Row>
        <Col :xs="24" :sm="24" :md="12" :lg="12" >
           
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


        <Col :xs="24" :sm="24" :md="12" :lg="12">
         <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"> 
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;top&quot;</span>  <span style="color: #4070a0">icon=&quot;ios-cart&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Add to cart<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;top&quot;</span>  <span style="color: #4070a0">icon=&quot;android-delete&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Delete<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;top&quot;</span>  <span style="color: #4070a0">icon=&quot;android-settings&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Settings<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;left&quot;</span> <span style="color: #4070a0">icon=&quot;ios-cart&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Add to cart<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;left&quot;</span> <span style="color: #4070a0">icon=&quot;android-delete&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Delete<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;hover-button</span> <span style="color: #4070a0">type=&quot;change&quot;</span>  <span style="color: #4070a0">shap=&quot;left&quot;</span> <span style="color: #4070a0">icon=&quot;android-settings&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Settings<span style="color: #062873; font-weight: bold">&lt;/hover-button&gt;</span>

</pre></div>


        </Col>



    </Row> 


       <Row>
        <Col :xs="24" :sm="24" :md="12" :lg="12" >
           
           <div style="" class="doc-header">

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


        <Col :xs="24" :sm="24" :md="12" :lg="12">
    <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%">
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;swipe&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Settings<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;swipe&quot;</span> <span style="color: #4070a0">shap=&quot;out&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span> Diagonal Swipe<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;swipe&quot;</span> <span style="color: #4070a0">shap=&quot;in&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Double Swipe<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;close&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Diagonal Close<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;zoningin&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Zoning In<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;corners&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>4 Corners<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;slice&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Slice<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;alternate&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Alternate<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;smoosh&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Smoosh<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;overlap&quot;</span> <span style="color: #4070a0">shap=&quot;vertical&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Vertical Overlap<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;overlap&quot;</span> <span style="color: #4070a0">shap=&quot;horizontal&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Horizontal Overlap<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
                 <span style="color: #062873; font-weight: bold">&lt;cool-hover-button</span> <span style="color: #4070a0">type=&quot;collision&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Collision<span style="color: #062873; font-weight: bold">&lt;/cool-hover-button&gt;</span>
</pre></div>


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
        padding: 5px;
    }
    .doc-content{
        margin-bottom:20px;
        padding: 5px;
        line-height: 20px;
    }
    .doc-content p{
      margin-bottom: 5px;
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
