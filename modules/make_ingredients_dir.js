/**
 *
 * 	Creates ingredients directory in project folder
 * 
 */

module.exports = function () {

	var src = this.mod_options.components_dir,
		dest = this.paths.app_dir + 'ingredients';

	if(!this.fs.existsSync(dest)){
		this.duplicateDir(src, dest);
		console.log(
			this.colors.getColor('green'), 
			'  A new ingredients folder has been created.\n', 
			this.colors.getColor('default')
		);
	}else{
		console.log(
			this.colors.getColor('red'), 
			'  The ingredients folder already exists.\n', 
			this.colors.getColor('default')
		);
	}
	
};