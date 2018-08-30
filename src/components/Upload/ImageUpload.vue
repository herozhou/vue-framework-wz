<template>
<div>
    <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="/api/uplod"
            style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View Image" v-model="visible" class-name="my-modal">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>

</div>
</template>
<script>
    export default {
      name: 'image-upload',
      props: ['defaultList123'],
      data() {
        //console.info('{{defaultList123}}');
        //  console.info(this.props.defaultList123);
        return {
          defaultList: [],
          imgName: '',
          visible: false,
          uploadList: this.defaultList123
        }
      },
      methods: {
        handleView(name) {
          this.imgName = name;
          this.visible = true;
        },
        handleRemove(file) {
          console.info("开始删除");
          //以后还要进行优化
          const fileList = this.$refs.upload.fileList;
          if(fileList.length == 0) {
            this.uploadList = [];
          }else{
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
          }
        },
        handleSuccess(res, file) {
          file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
          file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError(file) {
          this.$Notice.warning({
            title: 'The file format is incorrect',
            desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
          });
        },
        handleMaxSize(file) {
          this.$Notice.warning({
            title: 'Exceeding file size limit',
            desc: 'File  ' + file.name + ' is too large, no more than 2M.'
          });
        },
        handleBeforeUpload() {
          let num = 1;
          const check = this.uploadList.length < num;
          if (!check) {
            this.$Notice.warning({
              title: '只能上传' + num + "个图片"
            });
          }
          return check;
        },
        choushabi() {
          let defaultList = [
            {
              // 'name': 'a42bdcc1178e62b4694c830f028db5c0',
              'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            }
          ];
          return defaultList;
        }
      },
      mounted() {
        this.uploadList = this.$refs.upload.fileList;
      },
      watch: {
        'defaultList123': function (n, o) {
          this.uploadList = n;
        //  console.info(this.uploadList);
        }

      }
    }
</script>
<style>
    .my-modal{z-index:1002}
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
