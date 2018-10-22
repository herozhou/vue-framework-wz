<!--TV首页导航 -->
<template>

	<div class="animated fadeIn">
		<div>

			<Button v-on:click="add" type="info"> 增加</Button>
			<Button v-on:click="refresh" icon="md-refresh" shape="circle"> </Button>
			<!-- <img :src="'../static/img/logo.png'" >-->
		</div>
		<br>
		<add-from ref="addFrom" v-bind:todo="addFrom"  @refreshFrom="refresh"  ></add-from>
		<Table :columns="columns1" :data="data1"></Table>

		<Modal
				v-model="modal1"
				title="操作确认"
				@on-ok="ok"
				@on-cancel="cancel">
			<p>是否继续操作</p>
		</Modal>


	</div>


</template>

<script>
	import addFrom from './navigation/addFrom'

	export default {
	  name: 'navigation',

	  data: function () {
	    return {
      modal1: false,
      delete: '',
	      columns1: [{
	        title: '序号',
	        key: 'id',
	        width: 60
	      },
	      {
	        title: '名称',
	        key: 'name'
	      }, {
	        title: '位置',
	        key: 'weights'
	      },
      /*{
        title: '链接开启状态',
        key: 'switch',
        render: (ce, params) => {
          let uuu;

          let switc = params.row.switch;
          if(switc == 1) {
            uuu = '<span style="color:#F00">开启</span>';
		  }else{
            uuu = '关启';
		  }
          let ss;
          if(params.row.goot_url == null || params.row.goot_url == 'null') {
              ss = '';
		   }else{

              ss = '点击查看';
		   }

          return ce('a', {
            src: params.row.goot_url,
            domProps: {
              href: params.row.goot_url,
              width: '80'

            },
          }, ss)
        }
      },*/
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
          if(spUrl == null) {
            spUrl = ""
          }
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
        title: '详情图',
        key: 'urlx',
        render: (ce, params) => {
          let uuu;

          let spUrl = params.row.urlx;
          if(spUrl == null) {
            spUrl = ""
          }
          if(spUrl == null) {
            spUrl = ""
          }
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
	        title: '操作',
	        key: 'action',
	        width: 150,
	        align: 'center',
	        render: (ce, params) => {
	          // console.info(ce);
	          //   console.info(params);
	          return ce('div', [
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
                  let formItemN = JSON.parse(JSON.stringify(params.row))
                  delete formItemN['_index'];
                  delete formItemN['_rowKey'];
                  console.info(formItemN);
                  this.addFrom.modal12 = true;
                  this.loading = true;

                  Object.assign(this.addFrom.formItem, formItemN);
                  //  console.info(this.$refs.addFrom.$refs.uploadFilex.$refs.upload);
                  this.$refs.addFrom.$refs.uploadFilex.$refs.upload.clearFiles();
                  this.$refs.addFrom.$refs.uploadFile.$refs.upload.clearFiles();
                  this.$refs.addFrom.$refs.uploadFile.imageList = [];
                  this.$refs.addFrom.$refs.uploadFilex.imageList =[];
                  //this.show(params.index)
	                }
	              }
	            }, '编辑'), ce('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.delete = params;
                  this.modal1 = true;
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
          url: '',
          urlx: '',
          weights: '',
          description: '',
          switchsb: '',
          goot_url: ''
        },
      },
	      loading: false,

	    }
	  },
	  created: function () {
	    console.group('------created创建完毕状态------');
	    this.refresh();
	  },
	  methods: {
    ok () {
      this.$Message.info('操作成功');

      this.remove(this.delete);
    },
    cancel () {
      this.$Message.info('操作取消');
    },
    show (index) {
      this.addFrom.modal12 = true;
    },
    remove (params) {
      console.info(params.index);
      this.$store.dispatch('DeleteNavigation', params.row.id).then((response) => {
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
      this.$refs.addFrom.$refs.uploadFile.$refs.upload.clearFiles();
      this.$refs.addFrom.$refs.uploadFile.imageList = [];
      this.$refs.addFrom.$refs.addFromSub.resetFields();
      this.addFrom.titleN = "增加";
      this.addFrom.modal12 = true;
    },
	    refresh() {
	      this.loading = true;
	      //
	      this.$store.dispatch('GetNavigation').then((response) => {
	        console.info("成功回调");
	        //   console.info(response.data);
	        this.data1 = response.data;
	        //this.$Message.success('登录成功');
	        this.loading = false;

	        //  this.$router.push({ path: '/' });
	      }).catch(err => {
	        console.info(err)
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
