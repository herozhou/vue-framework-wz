const { exec } = require('child_process');
const fs = require('fs');
const fs_extra = require('fs-extra');
var path = require('path');
const chalk = require('chalk');
const log = console.log;

const tinymce_string=`<template>
  <div class="components-container">

<h3 class="intro-head"><a href="https://github.com/lpreterite/vue-tinymce" target="_blank">vue-tinymce</a> </h3>
  <p class="intro-head">作者的原项目有一些bug，自己改进一个临时的 </p>

   <Row :gutter="20">
        <Col :span="12" ><vue-tinymce
                    ref="tinymce"
                    v-model="content1"
                    :setting="setting1">
                  </vue-tinymce></Col>
        <Col span="12">
                  <vue-tinymce
                    ref="tinymce"
                    v-model="content2"
                    :setting="setting2" >
                  </vue-tinymce >
        </Col>
    </Row >

       <Row :gutter="20">
        <Col :span="12"> 
        <Button type="primary" @click="show_content1_html=!show_content1_html">点击切换显示内容</Button>
        <div v-html='content1' v-if="!show_content1_html"></div> 
                        <div  v-else>{{content1}}</div>

        </Col>
        <Col :span="12"> 
        <Button type="primary" @click="show_content2_html=!show_content2_html">点击切换显示内容</Button>

        <div v-html='content2' v-if="!show_content2_html"></div>
                        <div v-else>{{content2}}</div>
         </Col>
    </Row>

    

  </div>
</template>
<script>
import { VueTinymce , TinymceSetting } from 'vue-tinymce';

 
export default {
  components: { VueTinymce,TinymceSetting },
  data() {
     return {
            show_content1_html:false,
            show_content2_html:false,
            content1: '<p>可直接粘贴图片地址插入图片</p>',
            setting1: Object.assign({}, TinymceSetting,{
                height: 200,
                language_url: "./static/langs/zh_CN.js",
                block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;",
                      

            }),
            content2: '<p>Tinymce inlite主题</p><hr><p>这里输入时回车可快速插入选择本地图片和表格 <img src="//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif" data-key="[哈哈]"></img></p>',
            setting2: Object.assign({}, TinymceSetting,{
                height: 200,
                language_url: "./static/langs/zh_CN.js",
                block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;",


                        menubar: false,
                        keep_styles: false,
                        theme: 'inlite',
                        inline: true,
                        invalid_styles: 'color font-size',
                        plugins: 'image table link paste contextmenu textpattern autolink',
                        insert_toolbar: 'quickimage quicktable',
                          selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
                        paste_data_images: true,

            })
        }
  },
   methods: {
        getTinymceId(name){
            alert(this.$refs[name].id);
        },
        insertImg(editor, {path, key}){
            editor.undoManager.transact(function(){
                editor.focus();
                editor.selection.setContent(editor.dom.createHTML('img', {src: path, 'data-key': key}));
            })
        },
        insertEmotion(editor, key){
            this.insertImg(editor, {key, path:this.emotions[key]});
        },
        formatHtml(html, emotions){
            var parser = new tinymce.html.DomParser();
            var serializer = new tinymce.html.Serializer();
            var nodes = parser.parse(html);
            nodes.getAll('img').map(function(item){
                var key = item.attr('data-key') || '';
                if(key.length > 0){
                    var spanNode = new tinymce.html.Node('span', 1);
                    var textNode = new tinymce.html.Node('#text', 3);
                    textNode.value = key;
                    spanNode.append(textNode);
                    item.replace(spanNode);
                }
            });
            return serializer.serialize(nodes);
        },
        restoreHtml(html, emotions){
            var parser = new tinymce.html.DomParser();
            var serializer = new tinymce.html.Serializer();
            var nodes = parser.parse(html);
            nodes.getAll('#text').map(function(item){
                var value = emotions[item.value];
                if(value){
                    var imgNode = new tinymce.html.Node('img', 1);
                    imgNode.attr('data-key', item.value);
                    imgNode.attr('src', value);
                    item.replace(imgNode);
                }
            })
            return serializer.serialize(nodes);
        }
    }
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


`;
module.exports = function (option,package_name){

    process.chdir(path.resolve(__dirname,'../../../../'))


let execCommand = function(command,console_content) {
  let promise = new Promise(function(resolve, reject){

  	exec(command, (error, stdout, stderr) => {

	   if (error) {
      log(chalk.red('exec error:',error));
        reject(new Error(error));

      return;
    }
    if(stdout!==''){
       log(chalk.green('stdout:',stdout));
    }
    if(stderr!==''){
      log(chalk.red('stderr:',stderr));
    }
        resolve();

  });



  });
  return promise;

 };

 let changeRouter = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src/router'))

					fs.readFile('index.js', 'utf8', (err, data) => {
							  if (err) throw err;

							  let index=data.lastIndexOf(',');
							  let begin_index=data.lastIndexOf(']',index);

							 let begin_str=data.substring(0,begin_index-1);
							 let end_str=data.substring(begin_index);

							let final_str= begin_str+`{path: '/tinymce',name: 'Tinymce编辑器',icon:"android-document",component: _import('Tinymce')},
    `+end_str;


							 fs.writeFile('index.js', final_str, (err) => {
						   if (err){
							  	reject(err);
							  	throw err;
							  } 

                    log(chalk.green('添加 Tinymce 路由成功!'));
							   resolve();

						});

					});

		  });
 	return promise;

 };


let changeIndex = function() {
 	let promise = new Promise(function(resolve, reject){

process.chdir(path.resolve(__dirname,'../../../../'))

		fs.readFile('index.html', 'utf8', (err, data) => {
			if (err) throw err;
			let begin_index=data.indexOf('</body>')
			let begin_str=data.substring(0,begin_index);
			let end_str=data.substring(begin_index);
			let final_str= begin_str+`
<script src="https://cdn.bootcss.com/tinymce/4.6.6/tinymce.min.js"></script>
`+end_str;
					 fs.writeFile('index.html', final_str, (err) => {
				  if (err){
				  	reject(err);
				  	throw err;
				  } 
                    log(chalk.green('添加 Tinymce script链接成功!'));


				  resolve();
				});

			});

  });
	return promise;

 };

 let writeTinymce = function() {
 	let promise = new Promise(function(resolve, reject){
process.chdir(path.resolve(__dirname,'../../../../src/views/'))



	const file = 'Tinymce.vue';

		fs_extra.outputFile(file, tinymce_string, err => {
		 if (err){reject(err);throw err; }


       log(chalk.green('写入 Tinymce 文件成功!'));

		 	resolve();
		})



  });
	return promise;

 };


execCommand('npm install --save vue-tinymce@github:lpreterite/vue-tinymce --registry=https://registry.npm.taobao.org','安装Tinymce package 成功')

.then(
  	() => writeTinymce(),
      err => log(chalk.red('写入 Tinymce 文件失败:',err))
)
.then(
  	() => changeRouter(),
  	err => log(chalk.red('更改路由信息失败:',err))
)
.then(
  	() => changeIndex(),
    err => log(chalk.red('添加Tinymce script 链接失败:',err))
)
.then(
      err => log(chalk.green('安装 Tinymce 插件成功:'))
)


}


