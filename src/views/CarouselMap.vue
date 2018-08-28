<!--suppress ALL -->
<template>

    <div class="animated fadeIn">
        <div >
            <Button  v-on:click="add"  type="info"> 增加</Button>
           <Button  v-on:click="refresh" icon="md-refresh"   shape="circle"> </Button>
        </div><br>

        <Table :columns="columns1" :data="data1"></Table>



        <Modal v-model="modal12" draggable scrollable title="Modal 1">
            <div>This is the first modal</div>
        </Modal>

    </div>


</template>

<script>
    import  Vue from 'vue'
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })

    export default {
        name:'mr',

        data:function  () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (ce, params) =>
                        {

                           // console.info(params);
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


                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
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
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                modal12: false,
                loading: false
            }
        },
        methods: {
            show (index) {

                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data1[index].name}<br>年龄：${this.data1[index].age}<br>地址：${this.data1[index].address}`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            },
            add(){
                this.loading = true;
                //
                this.$store.dispatch('GetCarouser').then((response)  => {
                    console.info("成功回调");
                    console.info(response.data);
                    this.data1=response.data;
                    //this.$Message.success('登录成功');
                    this.loading = false;

                    //  this.$router.push({ path: '/' });
                }).catch(err => {
                    console.info(err)
                    this.$message.error(err);
                    this.loading = false;
                });
              //  this.modal12= true
            },
            refresh(){
                this.loading = true;
                //
                this.$store.dispatch('GetCarouser').then((response)  => {
                    console.info("成功回调");
                    console.info(response.data);
                    this.data1=response.data;
                    //this.$Message.success('登录成功');
                    this.loading = false;

                  //  this.$router.push({ path: '/' });
                }).catch(err => {
                    console.info(err)
                    this.$message.error(err);
                    this.loading = false;
                });

            }
        }
    }
</script>

<style scoped>

</style>