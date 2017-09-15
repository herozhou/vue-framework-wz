<template>

<div>
    
     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
            <Select v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>

            </div>
            <div style="" class="doc-content">
                <h5>基础用法</h5>
        <p>基本用法。可以使用 v-model 双向绑定数据。</p>
        <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。</p>
        <p>可以给Select添加 style 样式，比如宽度。</p>
        <p>在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。</p>



            </div>
        </Col>

    </Row>



     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

           <Select v-model="model8" clearable style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>

            </div>
            <div style="" class="doc-content">
                <h5>可清空</h5>
        <p>通过设置属性clearable可以清空已选项，仅适用于单选模式。</p>
            </div>
        </Col>

    </Row>





         <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

            <Select v-model="model7" style="width:200px">
        <Option-group label="热门城市">
            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Option-group>
        <Option-group label="其它城市">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Option-group>
    </Select>

            </div>
            <div style="" class="doc-content">
                <h5>分组</h5>
        <p>使用Option-group可将选项进行分</p>

            </div>
        </Col>



    </Row>


     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

           <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>

            </div>
            <div style="" class="doc-content">
                <h5>多选</h5>
        <p>通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</p>
            </div>
        </Col>


    </Row>






     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">

            <Select v-model="model11" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
 <Select v-model="model12" filterable multiple>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </div>
            <div style="" class="doc-content">
                <h5>可搜索</h5>
        <p>通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘Delete快捷删除最后一个已选项。</p>
            </div>

             
        </Col>

    </Row>


</div>
    
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',
                model5: '',
                model6: '',
                model7: '',
                model8: '',
                model10:[],
                 model11: '',
                model12: [],
            }
        }
    }
</script>
