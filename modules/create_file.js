/**
 *
 * 	Create File
 * 	Creates a file in a specified directory
 *
 * 	@param {Object} type The filetype being created {type,name,path,prefix}
 *
 */

module.exports = function(type) {

	// if(!!type.component_types_as_dirs && !type.components_as_dirs)
		// type.component_types_as_dirs = false;
	// else if(!!type.components_as_dirs && !type.component_types_as_dirs)
		// type.components_as_dirs = false;

	var options = this.args.make,
		contents = '',
		filename = (!!type.prefix ? type.prefix : '') +
							 (!!type.component_types_as_dirs ? '' : options[1] + '-') +
							 options[0] + '.' +
							 (!!type.output_type ? type.output_type : type.type);

	this.file_read(this.user_options.components_dir + '/' + options[1] + '/ingredient.' + type.type)
		.then(response => {
			var data = response.data,
				err = response.err;

			if(err !== null && err.code === 'ENOENT')
				return console.log(this.colors.getColor('red'),'\n  the ' + type.type + ' file for the ' + options[1] + ' component does not exist.\n  Looking -> ' + this.user_options.components_dir + '/' + options[1] + '/ingredient.' + type.type + '\n',this.colors.getColor('default'));

			var dirs = type.path ? type.path : 'resources/' + type.type + '/components';

			if(!!type.component_types_as_dirs) dirs += '/' + this.pluralize(options[1]) + '/';

			if(!!type.components_as_dirs) dirs += '/' +
				(!type.component_types_as_dirs ? options[1] + '-' : '') +
				options[0] + '/';

			// UPPERCASE, Capitalize, lowercase
			contents = data.replace(/!COMPONENT!/g, options[0].toUpperCase())
			 	   		   .replace(/!COMPONENT/g, this.capitalize(options[0]))
			 	   		   .replace(/COMPONENT/g, options[0].toLowerCase());

			return this.createDirs(this.paths.app_dir + dirs);
		})
		.then(dir => {
			var filepath = dir + '/' + filename;
			this.fs.stat(filepath, (err, stat) => {
				if(err === null) {
					// do nothing
			    }else if(err.code == 'ENOENT') {
			        this.fs.writeFile(filepath, contents, () => {});
			    } else {
			        console.log('Some other error: ', err.code);
			    }
			});
			if(type.type == 'scss') this.importScss(type);
		})
		.then(null,console.log);

}
