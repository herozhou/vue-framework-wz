<template>
    <Upload
            ref="upload"
            name="logo"
            action="api/uploadFile"
            accept="image/gif, image/jpeg,image/*"
            :format="['jpg','jpeg','png']"
            :on-format-error="handleFormatError"
            :on-success="handleSuccess"
    >
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
</template>
<script>
    export default {
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
          console.info(res);
          console.info(file);
        },

      },
      mounted() {
        console.info("===mounted======");
      },
    }
</script>