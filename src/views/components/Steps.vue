<template>
  <div class="animated fadeIn">

  <Row>
        <Col span="24" >
             <div  class="doc-header">

				      <Steps :current="1">
				        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
				        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
				        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
				        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
				    </Steps>
            </div>
            <div style="" class="doc-content">
             		   <h5>基础用法</h5>
  
     			   <p> 基本用法，组件会根据current自动判断各步骤状态</p>
            </div>
        </Col>


       
    </Row> 



<Row>
        <Col span="24" >
   <div  class="doc-header">
           
       <Steps :current="1">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera"></Step>
        <Step title="验证邮箱" icon="email"></Step>
    </Steps>
    </div>
            <div style="" class="doc-content">
             		   <h5>带图标的步骤条</h5>
     			   <p> 通过设置Step的icon属性可以自定义图标。</p>
            </div>
             
        </Col>

    </Row> 




          <Row>
        <Col span="24" >
   <div  class="doc-header">
           
      <Steps :current="2" direction="vertical">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    
    </div>
            <div style="" class="doc-content">
             		   <h5>垂直方向</h5>
     			   <p> 设置属性direction为vertical在垂直方向展示。</p>
            </div>         
        </Col>
    </Row> 





              <Row>
        <Col span="24" >
   <div  class="doc-header">
           
      <Steps :current="1" status="error">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>

     </div>
            <div style="" class="doc-content">
             		   <h5>步骤运行错误</h5>
     			   <p> 设置Steps的属性status为error指定当前步骤状态。</p>
            </div>      
             
        </Col>
    </Row> 




</div>
</template>

<script>

export default {
  name: 'spin',

}


</script>

<style type="text/css" scoped>
  .doc-header{
    background-color: white!important;
  }
</style>

