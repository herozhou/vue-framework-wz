<template>
    <Modal  v-model="modal12" mask-closable="false" :mask-closable="false"    v-bind:title="titleN">
        <!--<div>{{id}}</div>-->
        <Form :model="formItem" :label-width="80">
            <FormItem label="名称">
                <Input v-model="formItem.input" placeholder="轮播图名称"></Input>
            </FormItem>

            <FormItem label="图片上传">
                <image-upload></image-upload>
            </FormItem>
            <FormItem label="是否开启">
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem label="权重">
                <Input v-model="formItem.input" placeholder="显示的顺序"></Input>
            </FormItem>
            <FormItem label="说明">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="简单说明以区分..."></Input>
            </FormItem>
        </Form>

    </Modal>
</template>

<script>
    import ImageUpload from '../../components/Upload/ImageUpload';
    export default {
      name: "add-from",
      components: {
          ImageUpload,
          'image-upload': ImageUpload
      },
      data: function () {
        return {
          modal12: false,
          titleN: '',
          id: '',
          formItem: {
            input: '',
            select: '',
            radio: 'male',
            checkbox: [],
            switch: true,
            date: '',
            time: '',
            slider: [20, 50],
            textarea: ''}
          //   titleN: "默认"
        }
      },
      // props: ['titleN']
    }
</script>

<style scoped>

</style>