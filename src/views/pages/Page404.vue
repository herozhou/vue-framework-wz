<template>
<div>
    


    <div style="float: left;width: 40%">
    <canvas id="can" width="800" height="800" style="position: absolute;left: 100px;top: 100px;" >
 
    </canvas>
     <img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=ca5abb5b7bf0f736ccf344536b3cd87c/29381f30e924b899c83ff41c6d061d950a7bf697.jpg"  alt="" id="myimg" 
      width="500" height="500"  style="display:none"/> 

       
</div>

<div style="position:absolute;right: 20px;margin-top:200px;"  >

 <Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
         :closable="false"
         :mask-closable="false"
        @on-cancel="cancel">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="标签名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入标签名称"></Input>
        </Form-item>
       
       
       
        <Form-item label="介绍" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
       <!--  <Form-item>
            <Button type="primary" @click="">确定</Button>
            <Button type="ghost" @click="" style="margin-left: 8px">取消</Button>
        </Form-item> -->
    </Form>

    </Modal>


   

     
</div>

<div style="position:absolute;right:300px;top:200px; ">
<p v-for="item in formList" >
      <Tag type="dot" closable color="blue" @on-close="handleCloseTag(item.name,item.desc)" :name="item.name">
             <span>{{item.name}}</span>
             
             <span>{{item.desc}}</span>
             标签一</Tag>
</p>
   
</div>

<div style="position:absolute;right:0px; ">
            <input type="button"  value="自由画笔" @click=""/>
            <button type="button" onclick="getimg()">导出图片</button>
            <p>x:{{mouseXpos}}</p>
            <p>y:{{mouseYpos}}</p>
            <p>formList</p>
            
            <div>
                选择画笔颜色： <input id="color" class="color" style="width: 60px;" width="10px" value="66ff00" onchange="changePenColor()">
            </div>
            <div>
                选择画笔宽度： 
                <select id="penWidth" onchange="changePenWidth()">
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>
                </select>
            </div>


              <!-- <canvas id="can" width="800" height="600" style="border:1px solid #999;" >您的浏览器不支持canvas画图功能，推荐使用Google浏览器!</canvas> -->

        </div>

</div>
</template>

<script>
import Vue from 'vue'

function findformitem(formList,obj){
    console.log(formList)
    for(let i=0;i<formList.length;i++)
    {
        if (formList[i].name===obj.name&&formList[i].desc===obj.desc) {
            return i;
        }   
    }
    return -1;

}
   export default {

        data () {
            return {
                formValidate: {
                    name: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '标签名不能为空', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请输入标签介绍', trigger: 'blur' },
                         // { type: 'string', min: 20, message: '标签介绍不能少于20字', trigger: 'blur' }
                    ]
                },
                mouseXpos:0,
                mouseYpos:0,
                layerList:[],
                formList:[],
                modal1: false,
            }
        },
        methods: {
            handleSubmit (name) {
                console.log(this.formValidate.name);
                var obj=new Object();
                obj.name=this.formValidate.name;
                obj.desc=this.formValidate.desc;
                obj.show=true;
                obj.mouseXpos=this.mouseXpos;
                 obj.mouseYpos=this.mouseYpos;
                this.formList.push(obj);
                this.$refs[name].resetFields();

                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('提交成功!');

                //     } else {
                //         this.$Message.error('表单验证失败!');
                //     }
                // })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            drawPen(){
                    var color= "#"+$("#color").val();
                    var width=$("#penWidth option:selected").text();
                    CanvasExt.drawRect("can",color,width,this);
            },
            removelayer(){
                var layername=this.layerList.pop();
                removecanvas(layername);
            },
            handleCloseTag (name,desc) {
                console.log(name);
                var obj=new Object();
                obj.name=name;
                obj.desc=desc;
                const index = findformitem(this.formList,obj);
                console.log(index);
                if(index!==-1)
                {
                     this.formList.splice(index, 1);
                 var layername=this.layerList.splice(index, 1);
                 removecanvas(layername);
                }
               
            },
             ok () {
                    this.modal1=false;
                this.handleSubmit('formValidate')
            },
            cancel () {
                this.removelayer()
            },
           
        },
        mounted(){
            this.drawPen();

        },
         watch: {
            // 如果 layerList 发生改变，这个函数就会运行
                formList: function (newQuestion) {
                    console.log(newQuestion);
                }
          },
       
    }

</script>
