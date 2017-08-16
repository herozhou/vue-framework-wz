<template>
  <div class="animated fadeIn">

          <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
       <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Primary<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Ghost<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;dashed&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Dashed<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;text&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Text<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;info&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>信息按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;success&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>成功按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;warning&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>警告按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;error&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>错误按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>

</pre></div>


        </Col>



    </Row> 

 <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
  <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>搜索<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>搜索<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>圆角按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>搜索<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">icon=&quot;ios-search&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>搜索<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>圆角按钮<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>



    </Row> 


     <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
 <div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">size=&quot;large&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">size=&quot;small&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">size=&quot;large&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span> <span style="color: #4070a0">size=&quot;small&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>



    </Row> 



      <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;success&quot;</span> <span style="color:#4070a0">long</span><span style="color: #062873; font-weight: bold">&gt;</span>确认提交<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;error&quot;</span> <span style="color:#4070a0">long</span><span style="color: #062873; font-weight: bold">&gt;</span>确认删除<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>



    </Row> 



     <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>Default(Disabled)<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Primary<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>Primary(Disabled)<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Ghost<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>Ghost(Disabled)<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;dashed&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Dashed<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;dashed&quot;</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>Dashed(Disabled)<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;text&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Text<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;text&quot;</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>Text(Disabled)<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>



    </Row> 



     <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color:#4070a0">loading</span><span style="color: #062873; font-weight: bold">&gt;</span>Loading...<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">:loading=&quot;loading&quot;</span> <span style="color:#4070a0">@</span><span style="color: #4070a0">click=&quot;toLoading&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;span</span> <span style="color: #4070a0">v-if=&quot;!loading&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Click me!<span style="color: #062873; font-weight: bold">&lt;/span&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;span</span> <span style="color:#4070a0">v-else</span><span style="color: #062873; font-weight: bold">&gt;</span>Loading...<span style="color: #062873; font-weight: bold">&lt;/span&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">:loading=&quot;loading2&quot;</span> <span style="color: #4070a0">icon=&quot;checkmark-round&quot;</span> <span style="color:#4070a0">@</span><span style="color: #4070a0">click=&quot;toLoading2&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;span</span> <span style="color: #4070a0">v-if=&quot;!loading2&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Click me!<span style="color: #062873; font-weight: bold">&lt;/span&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;span</span> <span style="color:#4070a0">v-else</span><span style="color: #062873; font-weight: bold">&gt;</span>Loading...<span style="color: #062873; font-weight: bold">&lt;/span&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
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
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>



    </Row> 



    <Row>
        <Col :md="4" >
           
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


        <Col :md="8">
           
<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;h4&gt;</span>基本<span style="color: #062873; font-weight: bold">&lt;/h4&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button&gt;</span>取消<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>确定<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>昨日<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>今日<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color:#4070a0">disabled</span><span style="color: #062873; font-weight: bold">&gt;</span>明日<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>L<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button&gt;</span>M<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>M<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;dashed&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>R<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;h4&gt;</span>配合图标<span style="color: #062873; font-weight: bold">&lt;/h4&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;chevron-left&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
            前进
        <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            后退
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;chevron-right&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">icon=&quot;ios-skipbackward&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">icon=&quot;ios-skipforward&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-color-wand-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-sunny-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-crop&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-color-filter-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;h4&gt;</span>圆角<span style="color: #062873; font-weight: bold">&lt;/h4&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;chevron-left&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
            前进
        <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            后退
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;chevron-right&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">icon=&quot;ios-skipbackward&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;primary&quot;</span> <span style="color: #4070a0">icon=&quot;ios-skipforward&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-color-wand-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-sunny-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-crop&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-color-filter-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;h4&gt;</span>尺寸<span style="color: #062873; font-weight: bold">&lt;/h4&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">size=&quot;large&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">size=&quot;small&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;br&gt;&lt;br&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">size=&quot;large&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Large<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Default<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Button-group</span> <span style="color: #4070a0">size=&quot;small&quot;</span> <span style="color: #4070a0">shape=&quot;circle&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>Small<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Button-group&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


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



<style type="text/css">


</style>



