<template>
<!--<div>
   {{ this.$route.params}}
</div>-->
     <Form ref="addFromSub" :model=" formItem" :label-width="80"  :rules="ruleInline">

           <FormItem   label="id" hidden="true">
                <Input  v-model="formItem.id" placeholder="id" ></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
                <Input  v-model="formItem.name" placeholder="名称"></Input>
            </FormItem>
            <FormItem label="类别">
                <Select v-model=formItem.parent_id style="width:200px">
                   <Option v-for="item in category" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </FormItem>



            <FormItem>
                <Button type="primary"  @click="handleSubmit()">提交</Button>
                <Button style="margin-left: 8px"  @click="cancel()" >取消</Button>
            </FormItem>
        </Form>

</template>

<script>
    export default {
      name: "add-from",

      data: function () {
        return {
          id: '',
          model1: '',
          category: [],
          formItem: {
            id: '',
            name: '',
            parent_id: 0
          },
          //   titleN: "默认"
          ruleInline: {
            name: [
              { required: true, message: '请填写分类名称', trigger: 'blur' },

            ]
          },
        }
      },

      methods: {
        handleSubmit () {
          console.info('f到了');
          this.loading = true;
          console.info(this.formItem);
          this.$refs.addFromSub.validate(valid => {
            if (valid) {
              this.$store.dispatch('Addcategory', this.formItem).then((response) => {
                console.info("成功回调");
                if(response.data.code == 0) {
                  console.info(response.data);
                  this.$Message.error('提交失败');
                  this.todo.modal12 = true;
                  // this.data1 = response;
                  this.$emit('refreshFrom');
                  this.loading = false
                }else{
                  console.info(response.data);
                  this.$Message.success('提交成功');
                  this.$router.push({name: '商品类别'});
                  this.loading = false
                }
              }).catch(err => {
                console.info(err)
                this.$Message.error(err);
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
          this.$router.push({name: '商品类别'});
        },

      },
      mounted() {
        console.info("到了mounted");
        //  this.formItem = this.$route.params;

        //我想在这里得到参数,会报下面这个错误
        //$route is not defined
      },
      beforeMount() {
        console.info("到了beforeMount");

        if(this.$route.params.id == undefined) {
          this.$router.push({name: '商品类别'});
        }else{
          this.formItem = this.$route.params;
        }

        this.$store.dispatch('GetCategoryParent').then((response) => {
          console.info("成功回调");
          console.info(response.data);

          let zhu = [{
            id: 0,
            name: "主分类"
          }];
          let zong = zhu.concat(response.data)

          this.category = zong;
          console.info(this.category);

          // this.category.push(response.data);
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
      // props: ['titleN']
    }
</script>

<style scoped>

</style>