<!--首页轮播图 -->
<template>

    <div class="animated fadeIn">
        <div >
           <Button  @click="add"  type="info"> 增加</Button>
           <Button  @click="refresh" icon="md-refresh"   shape="circle"> </Button>
           <!-- <img :src="'../static/img/logo.png'" >-->
        </div><br>
        <add-from v-bind:todo="addFrom" @refreshFrom="refresh"   ref="addFrom"  ></add-from>
        <Table :columns="columns1" :data="data1"></Table>

    </div>


</template>

<script>
    import addFrom from './carouse/addFrom'
    export default {
      name: 'carouselMap',

      data: function () {
        return {
          columns1: [
            {
              title: '序号',
              key: 'id',
              width: 60
            },
            /*  {
                        title: '状态',
                        key: 'switch',
                        width:60,
                        render:(ce, params) =>
                        {
                            let  text="关闭";
                            let  vcolor="";
                            if(params.row.switch==1){
                                text="开启";
                                vcolor="red"
                            }else if(params.row.switch==0){

                            }

                            //  console.warn(params.row.url);
                            return ce('font', {
                                domProps: {
                                    color:vcolor,
                                    width: '80'

                                },
                                props:{

                                }
                            },text)
                        }
                    },*/
            {
              title: '名称',
              key: 'name'
            },
            {
              title: '说明',
              key: 'description'
            },
            {
              title: '略缩图',
              key: 'url',
              render: (ce, params) => {
                let uuu;
                let spUrl = params.row.url;
                let ss = spUrl.split(",");
                if(ss.length > 0 && spUrl.length > 5) {
                  uuu = this.GLOBAL.imageUrl + ss[0];
                }else{
                  return;
                }

                return ce('img', {
                  domProps: {
                    src: uuu,
                    width: '80'

                  },
                  props: {

                  }
                })
              }

            },
            {
              title: '顺序',
              key: 'weights'
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              align: 'center',
              render: (ce, params) => {
                // console.info(ce);
                //   console.info(params);
                return ce('div',
                  [
                    ce('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.addFrom.titleN = "编辑";
                          //对象合并
                          //debugger;
                          let formItemN = JSON.parse(JSON.stringify(params.row))
                          console.info(formItemN);
                          delete formItemN['_index'];
                          delete formItemN['_rowKey'];
                          //   delete formItemN['defaultList'];

                          Object.assign(this.addFrom.formItem, formItemN);
                          this.addFrom.modal12 = true;
                          this.loading = true;
                          //

                          //this.show(params.index)
                        }
                      }
                    }, '编辑'),
                    ce('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          console.info(params);
                          this.remove(params);
                        }
                      }
                    }, '删除')
                  ]);
              }
            }

          ],
          data1: [

          ],
          addFrom: {
            loading: false,
            modal12: false,
            titleN: '',
            id: '',
            formItem: {
              id: '',
              name: '',
              switch: 0,
              url: '',
              weights: 0,
              description: ''
            },
          }

        }
      },
      created: function() {
        console.group('------created创建完毕状态------');
        this.refresh();
      },
      methods: {
        show (index) {
          this.addFrom.modal12 = true;
        },
        remove (params) {
          console.info(params.index);

          this.$store.dispatch('DeleteCarouser', params.row.id).then((response) => {
            console.info(response);
            console.info("成功回调刷新表数据");
            this.loading = false
            this.data1.splice(params.index, 1);
            //  this.$router.push({ path: '/' });
          }).catch(err => {
            // console.info(err)
            this.$message.error(err);
            this.loading = false;
          });
        },
        add() {
          //清空files内容

          this.$refs.addFrom.$refs.uploadFile.$refs.upload.clearFiles();
          this.$refs.addFrom.$refs.uploadFile.imageList = [];
          this.$refs.addFrom.$refs.addFromSub.resetFields();

          this.addFrom.titleN = "增加";
          this.addFrom.modal12 = true;
        },
        refresh() {
          this.loading = true;
          //
          this.$store.dispatch('GetCarouserAll').then((response) => {
            console.info("成功回调刷新表数据");
            //   console.info(response.data);
            this.data1 = response.data;
            //this.$Message.success('登录成功');
            this.loading = false

            //  this.$router.push({ path: '/' });
          }).catch(err => {
            // console.info(err)
            this.$message.error(err);
            this.loading = false;
          });
        }
      },
      components: {
        'add-from': addFrom
      }
    }
</script>

<style scoped>

</style>