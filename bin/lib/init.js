const { exec } = require('child_process');

var path = require('path')

var install_pulgin = require('./install/plugin')

module.exports = function (option,package_name){
	if(option==='plugin'&&package_name==='Tinymce'){
	
		install_pulgin.InstallTinymce();

	}

}
