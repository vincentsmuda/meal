/**
 *
 * 	Import Scss
 * 	Appends the scss import statement to the defined main scss file
 *  
 * 	@param {Object} type The filetype being created {type,name,path,prefix}
 * 	
 */

module.exports = function(type) {
	var options = this.args.make,
		style_folder = type.path ? type.path.replace(/^\//g, '') + '/../' : 'resources/' + type.name + '/' + type.type + '/',
		inclu_folder = type.path ? type.path.replace(/^\//g, '').split('/')  : ['components'],
		style_folder_array = style_folder.split('/'),
		style_path = this.paths.app_dir + style_folder + this.user_options.scss_file,
		import_name = type.prefix + options[1] + '-' + options[0] + '.' + type.type,
		import_string = '\n\t@import \"' + inclu_folder[inclu_folder.length-1] + '/' + options[1] + '-' + options[0] + '\";\n\n';
	this.fs.stat(style_path, (err, stat) => {
		if(err === null) {
	    	this.fs.readFile(style_path, 'utf8', (err,data) => {
	    		this.fs.writeFile(style_path, '\n' + data.trim() + import_string);
	    	});
	    }else if(err.code == 'ENOENT') {
	    	this.fs.writeFile(style_path, '\n/*\n *\n *\tMEAL IMPORTS (LEAVE AT BOTTOM)\n *\n */\n' + import_string);
	    }
	});
}