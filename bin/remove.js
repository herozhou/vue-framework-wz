const { exec } = require('child_process');
const fs = require('fs');

var path = require('path')

var remove_pulgin = require('./remove/plugin')

module.exports = function (option,package_name){

	if(option==='plugin'&&package_name==='Tinymce'){
		
		remove_pulgin.RemoveTinymce();


	}else if(option==='plugin'&&package_name==='Markdown'){
		
		remove_pulgin.RemoveMarkdown();

	}else if(option==='plugin'&&package_name==='Jsontree'){
		
		remove_pulgin.RemoveJsontree();

	}else if(option==='plugin'&&package_name==='Mockjs'){
		
		remove_pulgin.RemoveMock();
		
	}else if(option==='plugin'&&package_name==='Qiniu'){
		
		remove_pulgin.RemoveQiniu();
		
	}

}
