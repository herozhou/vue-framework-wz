<!--suppress ALL -->
<template>
    <div class="animated fadeIn">
        <Row>
            <col :sm="24" :md="24" :lg="12">
         <!--   <h3>框架在手，天下我有</h3>
            <p>好用的框架决定了一个程序员的效率</p>-->
            </col>
        </Row>
        <Table :columns="columns1" :data="data1"></Table>
        <div id="components-demo">
            <button-counter></button-counter>
        </div>

            <Select>
                <Option value="New York" label="New York">
                    <span>New York</span>
                    <span style="float:right;color:#ccc">America</span>
                </Option>
                <Option value="London" label="London">
                    <span>London</span>
                    <span style="float:right;color:#ccc">U.K.</span>
                </Option>
                <Option value="Sydney" label="Sydney">
                    <span>Sydney</span>
                    <span style="float:right;color:#ccc">Australian</span>
                </Option>
            </Select>

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
        data : ()=> {
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
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ]
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
            }
        }
    }
</script>

<style scoped>

</style>