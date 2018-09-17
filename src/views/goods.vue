<!--suppress ALL -->
<template>

	<div class="animated fadeIn">
		<div>
			<Button v-on:click="add" type="info"> 增加</Button>
			<Button v-on:click="refresh" icon="md-refresh" shape="circle"> </Button>


			<Select v-model=addFrom.formItem.parent_id style="width:200px">
				<OptionGroup  v-for="item in category" :key="item.id"  :label="item.name" >
					<Option v-for="children in item.children" :value="children.id" :key="children.id">{{ children.name }}</Option>
				</OptionGroup>
			</Select>

			<!-- <img :src="'../static/img/logo.png'" >-->
		</div>
		<br>
	<!--	<add-from ref="addFrom" v-bind:todo="addFrom" ></add-from>-->
		<Table :columns="columns1" :data="data1"></Table>




	</div>


</template>

<script>
	import addFrom from './navigation/addFrom'
	import Vue from 'vue';
	export default {
		name: 'navigation',

		data: function () {
			return {
                modelSelect:'0'
				,
                loading: false,
                category:[],
                addFrom:{
                    loading: false,
                    modal12:false,
                    titleN: '',
                    id: '',
                    formItem: {
                        id: '',
                        name: '',
                        price: 0,
                        parent_id: 0,
                        parameter: '',
                        details: '',
                        characteristic: '',
                        weights: 0,
                    },
                },

                data1: [

                ],

				columns1: [{
						title: '序号',
						key: 'id',
						width: 60
					},
					{
						title: '名称',
						key: 'name'
					},
					{
						title: '价格',
						key: 'price'
					},
					{
						title: '关键字',
						key: 'keyword'
					},
					{
						title: '视频',
						key: 'product_video',
                        render: (ce, params) => {
                            let uuu;
                            let spUrl = params.row.product_video;
                            let ss = spUrl.split(",");
                            if(ss.length > 0 && spUrl.length > 5) {
                                uuu = this.GLOBAL.imageUrl + ss[0];
                            }else{
                                return;
                            }

                            return ce('a', {
                                src: uuu,
                                domProps: {
                                    href: uuu,
                                    width: '80'

                                },
                            },'点击查看')
                        }
					},
					{
						title: '略缩图',
						key: 'product_images',
                        render: (ce, params) => {
                            let uuu;
                            let spUrl = params.row.product_images;
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
                                            this.$router.push({ name:'操作商品',params:{ids:params.row.id}});
                                            this.loading = true;
                                            //
                                            //this.show(params.index)
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


			}
		},
		created: function () {
			console.group('------created创建完毕状态------');
            this.$store.dispatch('GetCategoryGroup').then((response) => {
                console.info("成功回调1");
                console.info(response.data);
                this.category = response.data;
                //this.$Message.success('登录成功');
                this.loading = false;

                //  this.$router.push({ path: '/' });
            }).catch(err => {
                console.info(err)
               // this.$message.error(err);
                this.loading = false;
            });
			this.refresh();

		},
		methods: {
            show (index) {
                this.addFrom.modal12=true;

            },
            remove (params) {
                console.info(params.index);

                this.$store.dispatch('DeleteGoods', params.row.id).then((response) => {
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
                this.$router.push({ name:'操作商品',params:{ids:0}});




            },
			refresh() {
				this.loading = true;
				//
				this.$store.dispatch('GetGoods').then((response) => {
					console.info("成功回调");
					//   console.info(response.data);
					this.data1 = response.data;
					//this.$Message.success('登录成功');
					this.loading = false;

					//  this.$router.push({ path: '/' });
				}).catch(err => {
					console.info(err)
                    //this.refresh();
					//this.$message.error(err);
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
