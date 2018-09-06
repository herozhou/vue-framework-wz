<template>
    <Upload
            ref="upload"
            name="logo"
            action="api/uploadFile"
            accept="image/gif, image/jpeg,image/*"
            :format="['jpg','jpeg','png','gif']"
            :on-format-error="handleFormatError"
            :on-success="handleSuccess"
            :on-remove="remove"
            :before-upload="handleBeforeUpload"
    >
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
</template>
<script>
    export default {
      data () {
        return {
          imageList: [

          ],
          imgName: '',
          visible: false,
          uploadList: []
        }
      },
      methods: {
        handleFormatError (file) {
          this.$Notice.warning({
            title: '文件格式不正确',
            desc: file.name + ' 的文件格式不正确，请选择jpg或png。'
          });
        },
        mounted() {
          console.info("mounted");
        },
        handleSuccess (res, file) {
          console.info("-------handleSuccess------------");
          //console.info(res);
          // console.info(file);
          // console.info(res.filename);
          this.imageList.push(res.filename);
          // console.info(this.imageList);
          console.info("----end---handleSuccess------------");
        },
        remove(a) {
          // console.info(this.imageList);
          this.imageList.splice(this.imageList, 1);

        //  this.imageList.$remove(a.response.path);
          // console.info(this.imageList);
          //   console.info(a);
          //   console.info(a.response);
        },
        handleBeforeUpload() {
          const check = this.imageList.length < 1;
          if (!check) {
            this.$Notice.warning({
              title: '只能上传一个文件.'
            });
          }
          return check;
        }
      },
      mounted() {
        console.info("===mounted======");
      },
    }
</script>