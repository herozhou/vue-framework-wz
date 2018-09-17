<template>
    <div>
    <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="GLOBAL.imageUrl +item.name">
            <div class="demo-upload-list-cover">
                <Icon  type="ios-eye-outline" @click.native="handleView(GLOBAL.imageUrl+item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
            ref="upload"
            name="logo"
            :show-upload-list="false"
            :default-file-list="setting.defaultList"
            :accept="setting.accept"
            :on-success="handleSuccess"
            :format="setting.format"
            :max-size="setting.maxSize"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="api/uploadFile"
            style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
        <img :src=imgName v-if="visible" style="width: 100%">
    </Modal>
    </div>
</template>
<script>
    export default {
      props: ['setting'],
      data () {
        return {

          imgName: '',
          visible: false,
          uploadList: []
        }
      },
      methods: {
        handleView (name) {
          this.imgName = name;
          this.visible = true;
        },
        handleRemove (file) {
          const fileList = this.$refs.upload.fileList;
          this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
          //   file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
          file.name = res.filename;

          this.setting.fileList = this.$refs.upload.fileList;
        },
        handleFormatError (file) {
          this.$Notice.warning({
            title: '文件格式不正确',
            desc: +file.name + ' 的文件格式不正确，请选择' + this.setting.format
          });
        },
        handleMaxSize (file) {
          this.$Notice.warning({
            title: 'Exceeding file size limit',
            desc: 'File  ' + file.name + ' is too large, no more than 2M.'
          });
        },
        handleBeforeUpload () {
          const check = this.uploadList.length < this.setting.maxFileNum;
          if (!check) {
            this.$Notice.warning({
              title: '最多可上传' + this.setting.maxFileNum + '张照片'
            });
          }
          return check;
        }
      },
      mounted () {
        console.info("mounted");
        this.uploadList = this.$refs.upload.fileList;
        console.info(this.uploadList);
      }
    }
</script>
<style>
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