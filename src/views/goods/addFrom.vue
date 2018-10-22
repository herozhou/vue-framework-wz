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

        <FormItem label="权重"   prop="weights">
            <InputNumber  :max="10000000" :min="1" v-model="formItem.weights"></InputNumber>
        </FormItem>

        <FormItem label="关键字" prop="keyword">
            <Input  v-model="formItem.keyword" placeholder="搜索用（名称的首字母）"></Input>
        </FormItem>
        <FormItem label="类别">

            <Select v-model=formItem.category_id style="width:200px">
                <OptionGroup  v-for="item in category" :key="item.id"  :label="item.name" >
                    <Option v-for="children in item.children" :value="children.id" :key="children.id">{{ children.name }}</Option>
                </OptionGroup>
            </Select>

        </FormItem>

        <FormItem  label="产品图片">
            <image-upload ref="settingF"   v-bind:setting="settingF"  ></image-upload>

        </FormItem>
        <FormItem  label="二维码图片">
            <image-upload ref="settingQrcode"   v-bind:setting="settingQrcode"  ></image-upload>

        </FormItem>
        <FormItem label="产品视频">
            <image-upload ref="settingS"    v-bind:setting="settingS" ></image-upload>
        </FormItem>

        <!--   <FormItem  label="效果图">
                 <image-upload v-bind:setting="settingX" ></image-upload>
             </FormItem>-->
        <FormItem label ='产品参数'  >
            <tinymce ref="parameter"  v-bind:content="formItem.parameter" ></tinymce>
        </FormItem>

        <FormItem label ='产品详情'>
            <tinymce  ref="details"  v-bind:content="formItem.details" ></tinymce>
        </FormItem>
        <FormItem label ='产品特性'>
            <tinymce  ref="characteristic"  v-bind:content="formItem.characteristic" ></tinymce>
        </FormItem>

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
      props: ['ids'],
      data: function () {
        return {
          model1: '',
          category: [],
          formItem: {
            id: '',
            name: '',
            price: 0,
            category_id: 0,
            product_images: '',
            qrcode: '',
            product_video: '',
            parameter: '<p>可直接粘贴图片地址插入图片</p>',
            details: '',
            characteristic: '',
            weights: 0,
          },
          settingF: {
            maxFileNum: 1,
            maxSize: 4096,
            accept: 'image/gif, image/jpeg,image/*',
            format: ['jpg', 'jpeg', 'png'],
            defaultList: [],
            fileList: '',

          },
          settingS: {
            maxFileNum: 1,
            maxSize: 409600,
            accept: 'video/mpeg, video/mp4,video/*',
            format: ['mpeg', 'mp4', 'dat', 'rmvb'],
            defaultList: [
              /* {
                                    name: '1536818124597.png'
                                  }*/
            ],
            fileList: '',
          },
          settingQrcode: {
            maxFileNum: 1,
            maxSize: 4096,
            accept: 'image/gif, image/jpeg,image/*',
            format: ['jpg', 'jpeg', 'png'],
            defaultList: [],
            fileList: '',
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
          this.formItem.characteristic = this.$refs.characteristic.content1;
          this.formItem.parameter = this.$refs.parameter.content1;
          this.formItem.details = this.$refs.details.content1;
          //  this.formItem.product_images=this.settingF.fileList.

          if(this.settingF.fileList.length > 0) {
            this.formItem.product_images = this.settingF.fileList[0].name;
          }
          if(this.settingQrcode.fileList.length > 0) {
            this.formItem.qrcode = this.settingQrcode.fileList[0].name;
          }
          if(this.settingS.fileList.length > 0) {
            this.formItem.product_video = this.settingS.fileList[0].name;
          }
          if(this.formItem.weights == null || this.formItem.weights == "") {
            this.formItem.weights = 0;
          }
          console.info(this.formItem);
          // console.info(this.settingF.fileList);
          //  console.info(this.settingF[0]);
          this.$refs.addFromSub.validate(valid => {
            if (valid) {
              this.$store.dispatch('AddGoods', this.formItem).then((response) => {
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
                  this.$router.push({name: '商品管理'});
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
        refresh() {
          this.loading = true;
          //this.settingF.defaultList.push({'name': this.formItem.product_images});
          this.$store.dispatch('GetGoodsById', this.ids).then((response) => {
            console.info("成功回调");
            //   console.info(response.data);
            if(response.data.length > 0) {
              this.formItem = response.data[0];
              this.$refs.characteristic.content1 = this.formItem.characteristic;
              this.$refs.parameter.content1 = this.formItem.parameter;
              this.$refs.details.content1 = this.formItem.details;

              this.$refs.settingF.uploadList.push({
                'name': this.formItem.product_images,
                percentage: 100,
                showProgress: true,
                size: 7072842,
                status: "finished",
                uid: 1536828375626

              });
              this.$refs.settingS.uploadList.push({
                'name': this.formItem.product_video,
                percentage: 100,
                showProgress: true,
                size: 7072842,
                status: "finished",
                uid: 1536828375626
              });
            }else{
              this.$message.error('数据异常');
            }

            //this.$Message.success('登录成功');
            this.loading = false;

            //  this.$router.push({ path: '/' });
          }).catch(err => {
            console.info(err)
            //this.refresh();
            //this.$message.error(err);
            this.loading = false;
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
        this.formItem.id = this.$route.params.ids.id;
        this.formItem.keyword = this.$route.params.ids.keyword;
        this.formItem.name = this.$route.params.ids.name;
        this.formItem.price = this.$route.params.ids.price;
        this.formItem.category_id = this.$route.params.ids.category_id;
        this.formItem.parameter = this.$route.params.ids.parameter;
        this.formItem.details = this.$route.params.ids.details;
        this.formItem.qrcode = this.$route.params.ids.qrcode;
        this.formItem.product_images = this.$route.params.ids.product_images;
        this.formItem.characteristic = this.$route.params.ids.characteristic;
        this.formItem.weights = this.$route.params.ids.weights;
        this.settingF.defaultList = [
          {
            name: this.$route.params.ids.product_images
          }
        ];
        this.settingS.defaultList = [
          {
            name: this.$route.params.ids.product_video
          }
        ];
        this.settingQrcode.defaultList = [
          {
            name: this.$route.params.ids.qrcode
          }
        ];

        console.info(this.ids);
        //this.$router.push({name: '商品管理'});
        if(this.ids == undefined) {
          this.$router.push({name: '商品管理'});
        }else if(this.ids == 0) {
          // this.formItem = this.$route.params.formItem;
        }else{
          this.refresh();
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