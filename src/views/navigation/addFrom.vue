<template>
    <Modal  v-model="todo.modal12"   mask-closable="false" :mask-closable="false"  :title="todo.titleN">
        <!--<div>{{id}}</div>-->
        <Form :model="todo.formItem" :label-width="80">
            <FormItem   label="id" hidden="true">
                <Input  v-model="todo.formItem.id" placeholder="id" ></Input>
            </FormItem>
            <FormItem label="名称">
                <Input v-model="todo.formItem.name" placeholder="轮播图名称"></Input>
            </FormItem>

            <FormItem  label="图片上传">
                <image-upload  v-bind:defaultList123="todo.formItem.defaultList" ></image-upload>
            </FormItem>

            <FormItem label="权重">
                <Input v-model="todo.formItem.weights" placeholder="显示的顺序"></Input>
            </FormItem>
            <FormItem label="说明">{{todo.formItem.switch}}
                <Input v-model="todo.formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="简单说明以区分..."></Input>
            </FormItem>
        </Form>

    </Modal>
</template>

<script>
    import ImageUpload from '../../components/Upload/ImageUpload';
    export default {
      name: "add-from",
      props: ['todo'],
      components: {
        ImageUpload
      },
      data: function () {
        return {
          id: '',

          //   titleN: "默认"
        }
      },
      // props: ['titleN']
    }
</script>

<style scoped>

</style>