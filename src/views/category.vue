<!--suppress ALL -->
<template>

	<div class="animated fadeIn">
		<div>
			<Button v-on:click="add" type="info">  增加
			</Button>
			<Button v-on:click="refresh" icon="md-refresh" shape="circle"> </Button>

			<Select style="width:200px" v-model=parent_id  @on-change="freshById">
				<Option v-for="item in category" :value="item.id" :key="item.id">{{ item.name }}</Option>
			</Select>
			<!-- <img :src="'../static/img/logo.png'" >-->
		</div>
		<br>
	<!--	<add-from ref="addFrom" v-bind:todo="addFrom" ></add-from>-->
		<Table :columns="columns1" :data="data1"></Table>

	</div>


</template>

<script>
	import addFrom from './category/addFrom';
    import subClass from './category/subClass';
	import Vue from 'vue';
	export default {
       // components: { subClass },
		name: 'navigation',

		data: function () {
			return {
			    //分类
				category:{},
                parent_id:'',
                addFrom:{
                    loading: false,
                    modal12:false,
                    titleN: '',
                    id: '',
                    formItem: {
                        id:'',
                        name: '',
                        parent_id: 0
                    },
                },
				columns1: [
            /*        {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(subClass, {
                                props: {
                                    row: params.row.children


                                }
                            })
                        }
                    },*/
				    {
						title: '序号',
						key: 'id',
						//width: 60
					},
					{
						title: '名称',
						key: 'name'
					},{
                        title: 'parent_id',
                        key: 'parent_id'
                    },
				/*	{
                        title: '级别',
                        key: 'level'
                    },*/
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
                                            this.addFrom.titleN="编辑";
                                            let formItemN = JSON.parse(JSON.stringify(params.row))
                                            console.info(formItemN);
                                            delete formItemN['_index'];
                                            delete formItemN['_rowKey'];
                                            //   delete formItemN['defaultList'];

                                            Object.assign(this.addFrom.formItem, formItemN);

                                            console.info(this.addFrom.formItem);
                                            this.$router.push({ name:'操作分类',params:this.addFrom.formItem});
                                            this.loading = true;
										}
									}
								}, '编辑'),ce('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {


                                            this.remove(params)
                                        }
                                    }
                                }, '删除')

							]);
						}
					}

				],
				data1: [

				],

				loading: false,

			}
		},
		created: function () {
			console.group('------created创建完毕 状态------');
			this.refresh();

		},
		methods: {
            show (index) {
                this.addFrom.modal12=true;

            },
            remove (params) {
                console.info(params.index);

                this.$store.dispatch('DeleteCategory', params.row.id).then((response) => {
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
            add(){
               // console.info(this.addFrom.formItem);
               this.$router.push({ name:'操作分类',params:this.addFrom.formItem});


               // this.addFrom.titleN="增加";
              //  this.addFrom.modal12=true;
            },
			refresh() {
				this.loading = true;
				//
				this.$store.dispatch('GetCategoryAll').then((response) => {
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

			},
            freshById(){

                console.info("ddd");

                   let data={
                       id:this.parent_id
				   };
                  console.info("data");
                  console.info(data);
                  if(data.id==undefined){
                      this.refresh();
                      return;
				  }
                this.$store.dispatch('GetCategoryById',data).then((response) => {
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
    beforeMount() {
        console.info("到了beforeMount");
        this.$store.dispatch('GetCategoryParent').then((response) => {
            console.info("成功回调");
            console.info(response.data);

            let zhu = [{
                id: '',
                name: "全部"
            },{
                id: 0,
                name: "主分类"
            }];
            let zong = zhu.concat(response.data)

            this.category = zong;
            console.info(this.category);

            // this.category.push(response.data);

            //this.$Message.success('登录成功');
            this.loading = false;

            //  this.$router.push({ path: '/' });
        }).catch(err => {
            console.info(err)
            this.$message.error(err);
            this.loading = false;
        });
    },
		components: {
			'add-from': addFrom
		}
	}
</script>

<style scoped>

</style>
