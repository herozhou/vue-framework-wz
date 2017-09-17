const { exec } = require('child_process');
const fs = require('fs');
var path = require('path')


let install_pulgin = require('./install/plugin')


module.exports = function (option,package_name){

	if(option==='plugin'&&package_name==='Tinymce'){

		install_pulgin.InstallTinymce();

	}else if(option==='plugin'&&package_name==='Markdown'){

		install_pulgin.InstallMarkdown();

	}else if(option==='plugin'&&package_name==='Mockjs'){

		install_pulgin.InstallMockjs();

	}	
}
