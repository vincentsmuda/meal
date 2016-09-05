/**
 *
 * 	Create File
 * 	Creates a file in a specified directory
 *  
 * 	@param {Object} type    	 The filetype being created {type,name,path,prefix}
 * 	
 */

module.exports = function(type) {
	var options = this.args.make;
	this.fs.readFile(this.user_options.components_dir + '/' + options[1] + '/' + type.name + '.' + type.type, 'utf8', (err,data) => {
		if (err) return console.error(err);
		var contents = data.replace(/COMPONENT/g, options[0]),
			filename = type.prefix + options[1] + '-' + options[0] + '.' + type.type,
			dirs = type.path ? type.path.replace(/^\//g, '') : 'resources/' + type.name + '/' + type.type + '/components';
		this.createDirs(this.paths.app_dir + dirs, (dir) => {
			var filepath = dir + '/' + filename;
			this.fs.stat(filepath, (err, stat) => {
				if(err === null) {

			    }else if(err.code == 'ENOENT') {
			        this.fs.writeFile(filepath, contents);
			    } else {
			        console.log('Some other error: ', err.code);
			    }
			});
			if(type.type == 'scss') this.importScss(type);
		});
	});
}