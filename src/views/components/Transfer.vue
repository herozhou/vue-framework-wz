<template>
  <div class="animated fadeIn">

  <Row>
        <Col span="24" >
             <div  class="doc-header">

				     <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>
            </div>
            <div style="" class="doc-content">
             		   <h5>基础用法</h5>
     			   <p> 基本用法，展示了 data、target-keys、每行的渲染函数 render-format 以及回调函数 on-change 的用法</p>
            </div>
        </Col>


     
    </Row> 



<Row>
        <Col span="24" >
   <div  class="doc-header">
           
        <Transfer
        :data="data3"
        :target-keys="targetKeys3"
        :list-style="listStyle"
        :render-format="render3"
        :operations="['向左移动','向右移动']"
        filterable
        @on-change="handleChange3">
        <div :style="{float: 'right', margin: '5px'}">
            <i-button type="ghost" size="small" @click="reloadMockData">刷新</i-button>
        </div>
    </Transfer>
    </div>
            <div style="" class="doc-content">
             		   <h5>高级用法</h5>
     			   <p> 穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。 </p>
            </div>
        </Col>


      
    </Row> 






</div>
</template>

<script>
 export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys(),
                 data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                }
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容' + i,
                        description: '内容' + i + '的描述信息',
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            },

          
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            }
        }
    }

</script>


