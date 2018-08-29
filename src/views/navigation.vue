<!--suppress ALL -->
<template>

	<div class="animated fadeIn">
		<div>
			<Button v-on:click="add" type="info"> 增加</Button>
			<Button v-on:click="refresh" icon="md-refresh" shape="circle"> </Button>
			<!-- <img :src="'../static/img/logo.png'" >-->
		</div>
		<br>
		<add-from ref="addFrom"></add-from>
		<Table :columns="columns1" :data="data1"></Table>




	</div>


</template>

<script>
	import addFrom from './carouse/addFrom'
	import Vue from 'vue';
	export default {
		name: 'navigation',

		data: function () {
			return {
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
						title: '说明',
						key: 'description'
					},
					{
						title: '略缩图',
						key: 'url',
						render: (ce, params) => {


							//  console.warn(params.row.url);
							return ce('img', {
								domProps: {
									src: params.row.url,
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
											this.$refs.addFrom.id = params.row.id
											this.$refs.addFrom.titleN = "编辑";
											this.$refs.addFrom.modal12 = true;
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
											this.remove(params.index)
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
			console.group('------created创建完毕状态------');
			this.refresh();

		},
		methods: {
			show(index) {
				this.$refs.addFrom.modal12 = true;

			},
			remove(index) {
				this.data1.splice(index, 1);
			},
			add() {

				this.$refs.addFrom.titleN = "增加";
				this.$refs.addFrom.modal12 = true;



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
