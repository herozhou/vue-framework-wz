<template>
  <div class="animated fadeIn"  style="margin-top:50px;">

    
    <Row>
      <Col :md="8" :sm="12" :lg="9">
      <div style="text-align:center">
          
  <video  controls height="300" v-if="is_video" id='video' preload="auto" src="http://otl6ypoog.bkt.clouddn.com/Objectstoarge/videos/2017-08-14/65055_WeChatSight38.mp4">
     
    
  </video>

      </div>


      </Col>
       <Col :md="4" :sm="12" :lg="3">
            <Card>
                <div v-if="is_video">
                       <p slot="title" >视频名称:{{video_name}}</p>
                    <p >上传时间:{{video_create_timestamp}}</p>
                    <p>视频长度:{{video_duration}}</p>
                    <p >文件大小: {{video_size}}</p>
                    <p>识别结果</p>
                   
                   
                    <i-circle
                          :size="100"
                          :trail-width="4"
                          :stroke-width="5"
                          :percent="sex_percent"
                          stroke-linecap="square"
                          stroke-color="#ff9900">
                          <div class="demo-i-circle-custom">
                              <h1>{{sex_count}}</h1>
                              <p>性感镜头数</p>
                              <span>
                                  总占比
                                  <i>{{sex_percent+"%"}}</i>
                              </span>
                          </div>
                      </i-circle>
                      <i-circle
                          :size="100"
                          :trail-width="4"
                          :stroke-width="5"
                          :percent="porn_percent"
                          stroke-linecap="square"
                          stroke-color="#ed3f14">
                          <div class="demo-i-circle-custom">
                              <h1>{{porn_count}}</h1>
                              <p>涉黄镜头数</p>
                              <span>
                                  总占比
                                  <i>{{porn_percent+"%"}}</i>
                              </span>
                          </div>
                  </i-circle>
                </div>



                <div v-else-if="is_img">
                  
                  <p slot="title" >图片名称:{{video_name}}</p>
                    <p >上传时间:{{video_create_timestamp}}</p>
                    <p >文件大小: {{video_size}}</p>
                    <p >识别结果</p>
                <h3 style="margin-top:30px;text-align:center">  <strong >{{img_result}}</strong></h3>  
                </div>
               


            </Card>
       </Col>
    </Row>
  

    <Row v-if="is_video">   
        <Col :md="12" :sm="12">
 <Table border :columns="columns6" :data="video_result"  ></Table>
 <Page :total="this.video_result.length" show-total @on-change="setInitPage" style="text-align:right;margin-top:50px"></Page>
        </Col> 
    </Row>
  

  </div>
</template>


<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>

   
<script>

    export default {
        data () {
            return {
                json_list:[],
                video_size:'1M',
                video_duration:'11s',
                video_create_timestamp:'2017-08-10 17:03:54',
                video_name:'p.video',
                porn_count:100,
                sex_count:200,
                porn_percent:10,
                sex_count:500,
                sex_percent:70,
                is_video:true,
                is_img:false,
                video_src:'',
                img_result:'',
                page_result_list:[],
                  video_result: [
                  {
                    level:0,
                    time:1,
                    duration:"1s",
                    confidence:"0.67"
                  },
                    {
                    level:0,
                    time:2,
                    duration:"3s",
                    confidence:"0.71"
                  },
                    {
                    level:0,
                    time:5,
                    duration:"1s",
                    confidence:"0.98"
                  },
                    {
                    level:0,
                    time:6,
                    duration:"1s",
                    confidence:"0.61"
                  },
                    {
                    level:0,
                    time:7,
                    duration:"10s",
                    confidence:"0.38"
                  },
                    
                ],
                columns6: [
                    {
                        title: '级别',
                        key: 'level',
                        render: (h, params) => {
                          let level='';
                             if(params.row.level===0)
                                level="黄色镜头";
                              else if(params.row.level===1)
                                level="性感镜头";
                             return h('div', [
                                 h('strong', level)
                               ]);
                        },
                         filters: [
                            {
                                label: '黄色镜头',
                                value: 1
                            },
                            {
                                label: '性感镜头',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.level===0;
                            } else if (value === 2) {
                                return row.level ===1;
                            }
                        }
                    },
                    {
                        title: '出现时刻',
                         render: (h, params) => {
                             
                             return h('div', [
                                 h('strong',{
                                    style:{
                                      color:"#2d8cf0",
                                        cursor:"pointer",
                                    },

                                  }, params.row.time)
                               ]);
                        },
                       
                    },
                     {
                        title: '持续时间',
                         render: (h, params) => {
                             
                             return h('div', [
                                 h('strong', params.row.duration)
                               ]);
                        },
                       
                    }, 
                    {
                        title:"置信度",
                         render: (h, params) => {
                             
                             return h('div', [
                                 h('strong', params.row.confidence)
                               ]);
                        },
                        filters: [
                            {
                                label: '大于0.90',
                                value: 1
                            },
                            {
                                label: '小于0.90',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.confidence>=0.90;
                            } else if (value === 2) {
                                return row.confidence <0.90;
                            }
                        }
                    }
                ],
            }
        },
        created(){

        },
        mounted(){
            const vue=this;
            var id=this.$route.params.id;
            let video_list=null;
        },
        methods:{
          
        },
       
    }
</script>

<style type="text/css">
        .demo-i-circle-custom h1{
            color: #3f414d;
            font-size: 10px;
            font-weight: normal;
        }
        .demo-i-circle-custom p{
            color: #657180;
            font-size: 8px;
            margin: 5px 0 2px;
        }
        .demo-i-circle-custom span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 10px;}
           .demo-i-circle-custom span :before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -20px;
            };
        .demo-i-circle-custom span i{
            font-style: normal;
            color: #3f414d;
        }
</style>