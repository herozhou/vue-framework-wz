const { exec } = require('child_process');
const fs_extra = require('fs-extra');
const fs = require('fs');

var path = require('path')
const chalk = require('chalk');
const log = console.log;

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


  let removeDir = function(dir) {
 	let promise = new Promise(function(resolve, reject){

 				fs_extra.remove(dir,(err) =>{
	 					if (err){
					  	reject(err);
					  	throw err;
					  }
					 log(chalk.green('成功移除 ',dir));
					  resolve(); 

 				});

		  });
 	return promise;

 };



 let changeRouter = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src/router'))

					fs.readFile('index.js', 'utf8', (err, data) => {
							 if (err){
							  	reject(err);
							  	throw err;
							  } 
							const str=`path: '/tinymce'`;
							  let index=data.indexOf(str);
							  let begin_index=data.lastIndexOf('{',index);
							  let end_index=data.indexOf('}',index)+2;
							  
							 let begin_str=data.substring(0,begin_index);

							 let end_str=data.substring(end_index+1);

							let final_str=begin_str+end_str;
							
							 fs.writeFile('index.js', final_str, (err) => {
						  	 if (err){
							  	reject(err);
							  	throw err;
							  } 


						  		log(chalk.green('移除Tinymce路由成功!'));
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

			const str=`<script src="https://cdn.bootcss.com/tinymce/4.6.6/tinymce.min.js"></script>`;

			let index=data.indexOf(str);
			let begin_str=data.substring(0,index);
			let end_str=data.substring(index+str.length);
			let final_str=begin_str+end_str;


					 fs.writeFile('index.html', final_str, (err) => {
				  if (err){
				  	reject(err);
				  	throw err;
				  } 
				 log(chalk.green('删除index.html中Script链接成功!'));

				  resolve();
				});

			});

  });
	return promise;

 };

execCommand('npm uninstall --save vue-tinymce','删除Tinymce package成功')

.then(
	() => removeDir('./src/views/Tinymce.vue'),
	err => log(chalk.red("移除 Tinymce 文件失败", err))

)
.then(
  	() => changeRouter(),
  	err => log(chalk.red("移除 Tinymce 路由信息失败: ", err))
)
.then(
  	() => changeIndex(),
  	err => log(chalk.red("移除 Tinymce index.html信息失败: ", err))

)

.then(
  	() => log(chalk.green('移除 Tinymce 插件成功'))
)

}
