<template>
<!--<div>
   {{ this.$route.params}}
</div>-->
     <Form ref="addFromSub" :model=" formItem" :label-width="80"  :rules="ruleInline">

           <FormItem   label="id" hidden="true">

                <Input   v-model="formItem.id" placeholder="id" ></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
                <Input  v-model="formItem.name" placeholder="名称"></Input>
            </FormItem>
         <FormItem label="价格" prop="price">
             <InputNumber :max="10000000" :min="1" v-model="formItem.price"></InputNumber> 元

            </FormItem>
         <FormItem label="关键字" prop="keyword">
                <Input  v-model="formItem.keyword" placeholder="搜索用（名称的首字母）"></Input>
            </FormItem>
            <FormItem label="类别">

                    <Select v-model=formItem.parent_id style="width:200px">
                        <OptionGroup  v-for="item in category" :label="item.name" >
                            <Option v-for="children in item.children" :value="children.id" :key="children.id">{{ children.name }}</Option>
                        </OptionGroup>
                    </Select>

            </FormItem>

            <FormItem  label="产品图片">
                <image-upload  v-bind:setting="settingF"  ></image-upload>

            </FormItem>
         <FormItem label="产品视频">
             <image-upload  v-bind:setting="settingS" ></image-upload>
         </FormItem>
       <!--   <FormItem  label="效果图">
                <image-upload v-bind:setting="settingX" ></image-upload>
            </FormItem>-->
        <FormItem label ='产品参数' >
                <tinymce ></tinymce>
            </FormItem>
      <!--   v-bind:content1="formItem.parameter"-->
         <!-- <FormItem label ='产品详情'>
              <tinymce  v-bind:content1="formItem.details" ></tinymce>
          </FormItem>
          <FormItem label ='产品特性'>
              <tinymce  v-bind:content1="formItem.characteristic" ></tinymce>
          </FormItem>
-->
            <FormItem>
                <Button type="primary"  @click="handleSubmit()">提交</Button>
                <Button style="margin-left: 8px"  @click="cancel()" >取消</Button>
            </FormItem>
        </Form>

</template>

<script>
    import ImageUpload from '../../components/Upload/ImageUpload';
    import Tinymce from '../../components/Tinymce';
    export default {
      name: "add-from",
      components: {ImageUpload, Tinymce},

      data: function () {
        return {
          id: '',
          model1: '',
          category: [],
          formItem: {
            id: '',
            name: '',
            parent_id: 0,
            parameter: '',
            details: '',
            characteristic: '',
          },
          settingF: {
            maxFileNum: 1,
            maxSize: 4096,
            accept: 'image/gif, image/jpeg,image/*',
            format: ['jpg', 'jpeg', 'png'],
            defaultList: [],

          },
          settingS: {
            maxFileNum: 1,
            maxSize: 409600,
            accept: 'video/mpeg, video/mp4,video/*',
            format: ['mpeg', 'mp4', 'dat', 'rmvb'],
            defaultList: [],
          },
          //   titleN: "默认"
          ruleInline: {
            name: [
              { required: true, message: '请填写分类名称', trigger: 'blur' },

            ],
            keyword: [
              { required: true, message: '请填写关键字名称的首字母', trigger: 'blur' },

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

              /*   this.$store.dispatch('Addcategory', this.formItem).then((response) => {
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
              });*/
            } else {
              this.$Message.success('验证失败');
              //   console.log('error submit!!');
              return false;
            }
          });
        },
        cancel () {
          console.info('取消');
          this.$router.push({name: '商品管理'});
        },
        firstLoad() {
          this.$store.dispatch('GetCategoryGroup').then((response) => {
            console.info("成功回调1");
            console.info(response.data);
            this.category = response.data;
            //this.$Message.success('登录成功');
            this.loading = false;

            //  this.$router.push({ path: '/' });
          }).catch(err => {
            console.info(err);
            //this.firstLoad();
            // this.$message.error(err);
            this.loading = false;
          });
        }

      },
      mounted() {
        console.group('------ mounted创建完毕状态------');
        //  this.formItem = this.$route.params;

        //我想在这里得到参数,会报下面这个错误
        //$route is not defined
      },
      beforeMount() {
        console.group('------ beforeMount创建完毕状态------');
        this.firstLoad();
      },
      created: function () {
        console.group('------created创建完毕状态------');

        //this.$router.push({name: '商品管理'});
        if(this.$route.query.id == undefined) {
          this.$router.push({name: '商品管理'});
        }else{
          this.formItem = this.$route.query;
        }
      },
      beforeCreate: function () {
        console.group('------beforeCreate创建完毕状态------');
      },
      beforeDestroy: function () {
        console.group('------beforeDestroy创建完毕状态------');
      },
      // props: ['titleN']
    }
</script>

<style scoped>

</style>