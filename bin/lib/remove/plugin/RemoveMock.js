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



 let changeMain = function() {
 	let promise = new Promise(function(resolve, reject){

		  	process.chdir(path.resolve(__dirname,'../../../../src'))

					fs.readFile('main.js', 'utf8', (err, data) => {
							 if (err){
							  	reject(err);
							  	throw err;
							  } 
							  const str=`./mock/index.js`;
							  let index=data.indexOf(str);

							  let begin_index=data.lastIndexOf('import',index);
							  let end_index=data.indexOf('import',index);
							  
							 let begin_str=data.substring(0,begin_index);

							 let end_str=data.substring(end_index);

							let final_str=begin_str+end_str;
							
							 fs.writeFile('main.js', final_str, (err) => {
						  	 if (err){
							  	reject(err);
							  	throw err;
							  } 

						  		
								log(chalk.green('移除 main文件 mock 成功!'));
							   resolve();

						});

					});

		  });
 	return promise;

 };


execCommand('npm uninstall --save mockjs','移除 mockjs package成功')

.then(
	() => removeDir('./src/mock'),
	err => log(chalk.red("移除 Mock 文件失败", err))

)
.then(
  	() => changeMain(),
  	err => log(chalk.red("移除 Mock main.js信息失败: ", err))
)
.then(
  	() => {
  	log(chalk.green('移除 Mock.js 插件成功'))
  	log(chalk.yellow('请更下如下文件为api实际地址'))
  	log(chalk.yellow("src/api/login.js:9   url: '/login/loginbyemail'"))
  	log(chalk.yellow("src/api/login.js:17   url: '/login/logout"))
  	log(chalk.yellow("src/api/login.js:24   url: '/user/info'"))
  }
)



}
