<template>
    <Modal 	  v-model="todo.modal12"   mask-closable="false" :mask-closable="false"  :title="todo.titleN">
        <!--<div>{{id}}</div>-->
        <Form ref="addFromSub" :model="todo.formItem" :label-width="80"  :rules="ruleInline">
            <FormItem   label="id" hidden="true">
                <Input  v-model="todo.formItem.id" placeholder="id" ></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
                <Input v-model="todo.formItem.name" placeholder="首页导航名称"></Input>
            </FormItem>

            <FormItem  label="图片上传">
                <upload-file ref="uploadFile"  v-bind:url="todo.formItem.url"   ></upload-file>
            </FormItem>

            <FormItem label="首页位置"   prop="weights">
                <Input type="text"  v-model="todo.formItem.weights" placeholder="显示的顺序" number ></Input>
            </FormItem>
            <FormItem label="说明">
                <Input v-model="todo.formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="简单说明以区分..."></Input>
            </FormItem>

            <FormItem>
                <Button type="primary"  @click="handleSubmit()">Submit</Button>
                <Button style="margin-left: 8px"  @click="cancel()" >Cancel</Button>
            </FormItem>
        </Form>
     <div slot="footer">
           <!-- <Button type="submit" size="large"  > 提交</Button>   <Button type="dashed" size="large"  @click="cancel"> 取消</Button>-->
        </div>
    </Modal>
</template>

<script>
    import UploadFile from '../../components/Upload/UploadFile';
    export default {
      name: "add-from",
      props: ['todo'],
      components: {
        UploadFile
      },
      data: function () {
        return {
          id: '',

          //   titleN: "默认"
          ruleInline: {
            name: [
              { required: true, message: '请填写用户名', trigger: 'blur' },

            ],
            weights: [
            /*  { required: true, message: '请填写权重', trigger: 'blur' },*/
              { type: 'integer', message: '不能为空，只能为数字', trigger: 'blur' },

            ]
          },
        }
      },

      methods: {
        handleSubmit () {
          console.info('f到了');
          this.loading = true;
          //    console.info(this.$refs.uploadFile.imageList);
          this.todo.formItem.url = this.$refs.uploadFile.imageList;
          console.info(this.todo.formItem);

          this.$refs.addFromSub.validate(valid => {
            if (valid) {

              this.$store.dispatch('AddNavigation', this.todo.formItem).then((response) => {
                console.info("成功回调");
                if(response.data.code == 0) {
                  console.info(response.data);
                  this.$Message.error('提交失败');
                  this.todo.modal12 = true;
                  // this.data1 = response;
                  this.$emit('refreshFrom');
                  this.loading = false

                  //  this.$router.push({ path: '/' });
                }else{
                  console.info(response.data);
                  this.$Message.success('提交成功');
                  this.todo.modal12 = false;
                  // this.data1 = response;
                  this.$emit('refreshFrom');
                  this.loading = false
                }
              }).catch(err => {
                console.info(err)
                this.$message.error(err);
                this.loading = false;
              });
            } else {
              this.$Message.success('验证失败');
              //   console.log('error submit!!');
              return false;
            }
          });
        },
        cancel () {
          console.info('取消');
          this.todo.modal12 = false;
        },
      }
      // props: ['titleN']
    }
</script>

<style scoped>

</style>