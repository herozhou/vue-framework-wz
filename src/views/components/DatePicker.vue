<template>
<div>

    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
            <Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>

            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            <Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </div>
            <div  class="doc-content">
                    <h5>基础用法 </h5>
                <p>设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。   </p>
                <p>设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                <p>设置属性 format 可以改变日期的显示格式。注意，format 只是改变显示的格式，并非改变 value 值。</p>
            </div>
        </Col>

    </Row>

    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
            <Date-picker type="date" :options="options1" placeholder="选择日期" style="width: 250px"></Date-picker>
            <Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 250px"></Date-picker>
            </div>
            <div  class="doc-content">
                    <h5>快捷方式 </h5>
                <p>设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。</p>
                
                <p>其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p>
               
                     <p> value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。</p>  
                     <p>设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。</p>  
                 <p>disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。</p>
                     <Button  @click="changecodestate()" type="primary">展开</Button>
            </div>
        </Col>


     

        </Col>



    </Row>



      <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
            <h5>禁用</h5>
            <Date-picker type="year" placeholder="选择年" style="width: 200px"></Date-picker>

            <Date-picker type="month" placeholder="选择月" style="width: 200px"></Date-picker>           
          </div>

            <div style="" class="doc-content">
            <h5>日期时间选择</h5>
                <p>设置属性 type 为 year 或 month 可以使用选择年或月的功能。</p>
            </div>
        </Col>


       



    </Row>

     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
            <Date-picker
                :open="open"
                :value="value3"
                confirm
                type="date"
                @on-change="handleChange"
                @on-clear="handleClear"
                @on-ok="handleOk">
                <a href="javascript:void(0)" @click="handleClick">
                    <Icon type="ios-calendar-outline"></Icon>
                    <template v-if="value3 === ''">选择日期</template>
                    <template v-else>{{ value3 }}</template>
                </a>
            </Date-picker>     
          </div>

            <div  class="doc-content">
            <h5>手动控制组件</h5>
                <p对于一些定制化的场景，可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态，详见示例和 API</p>
            </div>
        </Col>


    </Row>

    
    </div>
</template>
<script>
    export default {
         data () {
            return {
                showcodeall:true,
                open: false,
                value3: '',
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15'],
                  options1: {
                    disabledDate (date) {
                                   return date && date.valueOf() < Date.now() - 86400000;
                          },
                    shortcuts: [
                        {
                            text: '今天',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了今天');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了昨天');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了一周前');
                            }
                        }
                    ]
                },
                options2: {
                     disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    },
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            },
                             
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods:{
            changecodestate:function(){

                this.showcodeall=!this.showcodeall;
            },
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            },
        }
    }
</script>
<style type="text/css">
    .doc-header{
        width:100%;border-bottom:1.5px dashed rgb(6, 40, 115);
        padding: 5px;
    }
    .doc-content{
        margin-bottom:20px;font-size: 12px;
        padding: 5px;
        line-height: 20px;
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


