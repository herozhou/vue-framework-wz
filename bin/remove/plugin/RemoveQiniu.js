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
process.chdir(path.resolve(__dirname,'../../../../'))
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




  let changeTabelRouter = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src/router'))

					fs.readFile('index.js', 'utf8', (err, data) => {
							 if (err){
							  	reject(err);
							  	throw err;
							  } 
							const str=`path: '/table'`;
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


						  		log(chalk.green('移除 Table 路由成功!'));
							   resolve();

						});

					});

		  });
 	return promise;

 };

   let changeTabelDetailRouter = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src/router'))

					fs.readFile('index.js', 'utf8', (err, data) => {
							 if (err){
							  	reject(err);
							  	throw err;
							  } 
							const str=`path: '/tabledetail/:id'`;
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


						  		log(chalk.green('移除 TableDetail 路由成功!'));
							   resolve();

						});

					});

		  });
 	return promise;

 };

removeDir('./static/bower_components')

.then(
  	() => removeDir('./src/views/Table.vue'),
  	err => log(chalk.red("删除 Table 文件 失败 ", err))
)


.then(
  	() => removeDir('./src/views/TableDetail.vue'),
  	err => log(chalk.red("删除 TableDetail.vue 文件 失败 ", err))
)

.then(
  	() => removeDir('./src/views/table-expand.vue'),
  	err => log(chalk.red("删除 table-expand.vue 文件 失败 ", err))
)

.then(
  	() => changeTabelRouter(),
  	err => log(chalk.red("移除 Table 路由失败 ", err))
)
.then(
  	() => changeTabelDetailRouter(),
  	err => log(chalk.red("移除 TableDetail 路由失败 ", err))
)

.then(
  	() => log(chalk.green('移除 Qiniu 插件成功'))
)

}
