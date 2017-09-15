// expand-row.vue
<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
  
</style>
<template>
    <Steps :current="1"   v-if="row.task_status===0" >
        <Step title="已上传" ></Step>
        <Step title="正在分析" content="正在分析，大概需要5-10分钟,请耐心等待"></Step>

        <Step title="分析完成"></Step>
    </Steps>

     <Steps :current="2"   v-else-if="row.task_status===1">
        <Step title="已上传" ></Step>
        <Step title="正在分析" ></Step>

        <Step title="分析完成" content="分析完成，请点击查看"></Step>
    </Steps>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>
