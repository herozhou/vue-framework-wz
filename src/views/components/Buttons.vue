<template>
  <div class="animated fadeIn">

          <Row>
        <Col  span="24">
           
           <div style="" class="doc-header">

                        <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">信息按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="error">错误按钮</Button>

            </div>
            <div style="" class="doc-content">
                <h5>按钮类型</h5>

        <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
        <p>通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
            </div>
             
        </Col>

    </Row> 

 <Row>
        <Col  span="24" >
           
           <div style="" class="doc-header">

    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">搜索</Button>
    <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
    <Button type="primary" shape="circle">圆角按钮</Button>
    <br><br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">搜索</Button>
    <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
    <Button type="ghost" shape="circle">圆角按钮</Button>

            </div>
            <div style="" class="doc-content">
                <h5>图标按钮及按钮形状</h5>

        <p>通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。</p>
        <p>使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。</p>
        <p>通过设置shape属性为circle，可将按钮置为圆的形状。</p>
            </div>
             
        </Col>
     


    </Row> 


     <Row>
        <Col  span="24" >
           
           <div style="" class="doc-header">

      <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>

            </div>
            <div style="" class="doc-content">
                <h5>按钮尺寸</h5>

        <p>按钮有三种尺寸：大、默认（中）、小</p>
        <p>通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
            </div>

        </Col>

    </Row> 



      <Row>
        <Col  span="24">
           
           <div style="" class="doc-header">

      <Button type="success" long>确认提交</Button>
    <br><br>
    <Button type="error" long>确认删除</Button>

            </div>
            <div style="" class="doc-content">
                <h5>长按钮</h5>

        <p>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
        <p>使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽</p>
            </div>
        </Col>



    </Row> 



     <Row>
        <Col  span="24" >
           
           <div style="" class="doc-header">

     <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>

            </div>
            <div style="" class="doc-content">
                <h5>不可用状态</h5>

        <p>通过添加disabled属性可将按钮设置为不可用状态。</p>
            </div>
      
        </Col>


    </Row> 



     <Row>
        <Col  span="24" >
           
           <div style="" class="doc-header">

    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>

            </div>
            <div style="" class="doc-content">
                <h5>加载中状态</h5>
        <p>通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态</p>
            </div>
      
        </Col>



    </Row> 



    <Row>
        <Col  span="24" >
           
           <div style="" class="doc-header">
 <h4>基本</h4>
     <Button-group>
        <Button>取消</Button>
        <Button type="primary">确定</Button>
    </Button-group>
    <Button-group>
        <Button disabled>昨日</Button>
        <Button disabled>今日</Button>
        <Button disabled>明日</Button>
    </Button-group>
    <Button-group>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">M</Button>
        <Button type="dashed">R</Button>
    </Button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <Button-group>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </Button>
        <Button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </Button>
    </Button-group>
    <Button-group>
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </Button-group>
    <Button-group>
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </Button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <Button-group shape="circle">
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </Button>
        <Button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </Button-group>
    <br><br>
    <h4>尺寸</h4>
    <br><br>
    <Button-group size="large">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </Button-group>
    <Button-group>
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </Button-group>
    <Button-group size="small">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </Button-group>
    <br><br>
    <Button-group size="large" shape="circle">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </Button-group>
    <Button-group size="small" shape="circle">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </Button-group>

            </div>
            <div style="" class="doc-content">
                <h5>按钮组合</h5>
        <p>将多个Button放入ButtonGroup内，可实现按钮组合的效果。</p>
        <p>通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。</p>
        <p>通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。</p>
            </div>


        </Col>


    </Row> 
        </div>


      
</template>

<script>

export default {
  name: 'buttons',

   data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
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


