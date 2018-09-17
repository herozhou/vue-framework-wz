<template>
    <div class="components-container">
        <Row :gutter="20">
            <Col :span="12" >
            <vue-tinymce
                ref="tinymce"
                v-model="content1"
                :setting="setting1"
            >

        </vue-tinymce>
            </Col>
        </Row >

        <Row :gutter="20">
            <Col :span="12">
           <!-- <Button type="primary" @click="show_content1_html=!show_content1_html">点击切换显示内容</Button>-->
           <h3>实现效果：</h3>
            <div v-html='content1'></div>
           <!-- <div  v-else>{{content1}}</div>-->

            </Col>
         <!--   <Col :span="12">
            <Button type="primary" @click="show_content2_html=!show_content2_html">点击切换显示内容</Button>

            <div v-html='content2' v-if="!show_content2_html"></div>
            <div v-else>{{content2}}</div>
            </Col>-->
        </Row>



    </div>
</template>
<script>
    import { VueTinymce, TinymceSetting } from '@packy-tang/vue-tinymce';

    export default {
      props: ['content'],
      components: { VueTinymce, TinymceSetting },
      data() {
        return {
          content1: '<p>可直接粘贴图片地址插入图片</p>',
          show_content1_html: false,
          show_content2_html: false,
          // content1: '<p>可直接粘贴图片地址插入图片</p>',
          setting1: Object.assign({}, ...TinymceSetting, {
            height: 200,
            language_url: "./static/langs/zh_CN.js",
            block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;",

          })
        }
      },
      methods: {
        getTinymceId(name) {
          alert(this.$refs[name].id);
        },
        insertImg(editor, {path, key}) {
          editor.undoManager.transact(function() {
            editor.focus();
            editor.selection.setContent(editor.dom.createHTML('img', {src: path, 'data-key': key}));
          })
        },
        insertEmotion(editor, key) {
          this.insertImg(editor, {key, path: this.emotions[key]});
        },
        formatHtml(html, emotions) {
          var parser = new tinymce.html.DomParser();
          var serializer = new tinymce.html.Serializer();
          var nodes = parser.parse(html);
          nodes.getAll('img').map(function(item) {
            var key = item.attr('data-key') || '';
            if(key.length > 0) {
              var spanNode = new tinymce.html.Node('span', 1);
              var textNode = new tinymce.html.Node('#text', 3);
              textNode.value = key;
              spanNode.append(textNode);
              item.replace(spanNode);
            }
          });
          return serializer.serialize(nodes);
        },
        restoreHtml(html, emotions) {
          var parser = new tinymce.html.DomParser();
          var serializer = new tinymce.html.Serializer();
          var nodes = parser.parse(html);
          nodes.getAll('#text').map(function(item) {
            var value = emotions[item.value];
            if(value) {
              var imgNode = new tinymce.html.Node('img', 1);
              imgNode.attr('data-key', item.value);
              imgNode.attr('src', value);
              item.replace(imgNode);
            }
          })
          return serializer.serialize(nodes);
        }
      },
      created: function () {
        this.content1 = this.content;
      },

    }
</script>

<style scoped>
    .editor-content{
        margin-top: 20px;
    }
    .intro-head{
        text-align: center;
        margin: 10px;
    }
</style>


