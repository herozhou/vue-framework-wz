<template>
  <div class="animated fadeIn">

  <Row>
        <Col span="24" >
             <div  class="doc-header">
  <Alert show-icon>消息提示文案</Alert>
    <Alert type="success" show-icon>成功提示文案</Alert>
    <Alert type="warning" show-icon>警告提示文案</Alert>
    <Alert type="error" show-icon>错误提示文案</Alert>
    <Alert show-icon>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success" show-icon>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" show-icon>
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error" show-icon>
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。
        </span>
    </Alert>
    <Alert show-icon>
        自定义图标
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
            </div>
            <div style="" class="doc-content">
             		   <h5>基础用法</h5>
     			   <p>基本使用方法，有四种样式可以选择info、success、warning、error。</p>
            </div>
        </Col>


     
    </Row> 




</div>
</template>

<script>
 export default {
        data () {
            return {
                
            }
        },
        methods: {
           
        }
    }

</script>

