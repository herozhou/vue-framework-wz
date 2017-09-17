const { exec } = require('child_process');
const fs = require('fs');
const fs_extra = require('fs-extra');
const chalk = require('chalk');
const log = console.log;
var path = require('path')
const markdown_string=`<template>
  <div class='components-container'>

<h3 class='intro-head'>超赞的👍  <a href='https://github.com/hinesboy/mavonEditor' target='_blank'>mavonEditor</a> </h3>

    <mavon-editor  style='  margin-top: 50px' v-model='content'/>
  </div>
</template>

<script>
 import  { mavonEditor } from 'mavon-editor';

 import 'mavon-editor/dist/css/index.css';
    
export default {
  components: { mavonEditor },
  data() {
    return {
      content: \`Markdown 语法简介
=============
> [语法详解](http://commonmark.org/help/)

## **粗体**

**粗体**
__粗体__

## *斜体*

*斜体*
_斜体_

## 标题

# 一级标题 #
一级标题
====
## 二级标题 ##
二级标题
----
### 三级标题 ###
#### 四级标题 ####
##### 五级标题 #####
###### 六级标题 ######

## 分割线

***
---

****
## ^上^角~下~标

上角标 x^2^
下角标 H~2~0

## ++下划线++ ~~中划线~~

++下划线++
~~中划线~~

## ==标记==

==标记==

## 段落引用

> 一级
>> 二级
>>> 三级
...


## 列表

有序列表
1.
2.
3.
...
无序列表
-
-
...

## 链接

[链接](www.baidu.com)
![图片描述](http://www.image.com)

## 代码段落
 type

代码段落



 代码块 

c++
int main()
{
    printf('hello world!');
}

code
## 表格(table)

| 标题1 | 标题2 | 标题3 |
| :--  | :--: | ----: |
| 左对齐 | 居中 | 右对齐 |
| ---------------------- | ------------- | ----------------- |

| 标题1 | 标题2 | 标题3 |
| :--  | :--: | ----: |
| 左对齐 | 居中 | 右对齐 |
| ---------------------- | ------------- | ----------------- |
## 脚注(footnote)

hello[^hello]


见底部脚注[^hello]

[^hello]: 一个注脚

## 表情(emoji)
[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

:laughing:
:blush:
:smiley:
:)
...

:laughing::blush::smiley::)

## $/KaTeX$公式

我们可以渲染公式例如：$x_i + y_i = z_i$和$/sum_{i=1}^n a_i=0$
我们也可以单行渲染
$$/sum_{i=1}^n a_i=0$$
具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## 布局

::: hljs-left
::: hljs-left
居左
:::
:::

::: hljs-center
::: hljs-center
居中
:::
:::

::: hljs-right
::: hljs-right
居右
:::
:::

## 定义

术语一

:   定义一

包含有*行内标记*的术语二

:   定义二

        {一些定义二的文字或代码}

    定义二的第三段

术语一

:   定义一

包含有*行内标记*的术语二

:   定义二

        {一些定义二的文字或代码}

    定义二的第三段


## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 规范由 W3C 维护
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 规范由 W3C 维护


\`
    }
  }
}
</script>

<style scoped>
.editor-content{
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

							let final_str= begin_str+`{path: '/markdown',name: 'Markdown',icon:"android-list",component: _import('Markdown')},
    `+end_str;

							 fs.writeFile('index.js', final_str, (err) => {
						   if (err){
							  	reject(err);
							  	throw err;
							  } 
		 	log(chalk.green('更改路由信息成功'));

							   resolve();

						});

					});

		  });
 	return promise;

 };


 let writeMarkdown = function() {
 	let promise = new Promise(function(resolve, reject){

  process.chdir(path.resolve(__dirname,'../../../../src/views'))

	const file = 'Markdown.vue';

		fs_extra.outputFile(file, markdown_string, err => {
		 if (err){reject(err);throw err; }
		 	log(chalk.green('写入Markdown文件成功'));
		 	resolve();
		})



  });
	return promise;

 };


execCommand('npm install  --save mavon-editor   --registry=https://registry.npm.taobao.org','安装mavon-editor package成功')
.then(
  	() => writeMarkdown(),
  	err => log(chalk.red('写入Markdown文件失败:',err))

)
.then(
  	() => changeRouter(),
  	err => log(chalk.red('更改路由信息失败:',err))
)
.then(
  	() => log(chalk.green('安装 Markdown 插件成功:'))
)

// .then(
//   	() => execCommand('git init','git 初始化成功'),
//     err => console.log("rejected: ", err)
// )
// .then(
//   	() => execCommand('git config core.sparsecheckout true','设置git sparsecheckout 成功'),
//     err => console.log("rejected: ", err)
// )
// .then(
//   	() => execCommand("echo 'src/views/Markdown.vue' > .git/info/sparse-checkout",'写入git配置文件成功'),
//   	err => console.log("rejected: ", err)
// )
// .then(
//   	() => execCommand('git remote add origin https://github.com/herozhou/vue-framework-wz.git','添加远程仓库地址成功'),
//   	err => console.log("rejected: ", err)
// )
// .then(
//   	() => execCommand('git pull origin master','pull成功'),
//   	err => console.log("rejected: ", err)
// )
// .then(
//   	() => execCommand('rm -r -f .git ','删除.git 成功'),
//   	err => console.log("rejected: ", err)
// )
// .then(
//   	() => changeRouter(),
//   	err => console.log("rejected: ", err)
// )

// .then(
//   	() => {console.log('安装 Markdown 插件成功')}
// )



}
