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
					  log(chalk.green('成功移除:',dir));
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
							const str=`path: '/jsontree'`;
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
							log(chalk.green('更改路由信息成功'));

							   resolve();

						});

					});

		  });
 	return promise;

 };


 let changeMain = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src'))

					fs.readFile('ui.js', 'utf8', (err, data) => {
							 if (err){
							  	reject(err);
							  	throw err;
							  } 
							  const str=`TreeView`;
							  let index=data.indexOf(str);

							  let begin_index=data.lastIndexOf('import',index);
							  let end_index=data.indexOf('import',index);
							  
							 let begin_str=data.substring(0,begin_index);

							 let end_str=data.substring(end_index);

							let final_str=begin_str+end_str;
							
							 fs.writeFile('ui.js', final_str, (err) => {
						  	 if (err){
							  	reject(err);
							  	throw err;
							  } 

						  		log(chalk.green('移除 ui.js文件 jsontree 成功!'));
							   resolve();

						});

					});

		  });
 	return promise;

 };

execCommand('npm uninstall --save vue-json-tree-view','移除 JsonTree package成功')

.then(
	() => removeDir('./src/views/JsonTree.vue'),
	err => log(chalk.red("移除 views/JsonTree.vue 文件失败 ", err))

)
.then(
  	() => changeRouter(),
  	err => log(chalk.red("移除 JsonTree 路由信息失败: ", err))
)
.then(
  	() => changeMain(),
  	err => log(chalk.red("移除 JsonTree main.js 文件失败: ", err))
)
.then(
  	() => log(chalk.green('移除 JsonTree 插件成功'))
)



}
