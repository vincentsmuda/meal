/**
 *
 * 	Interpret
 * 	Interprets CLI command
 * 	
 */

module.exports = function () {
	var options = this.args.make;

	if(options) {

		switch (options.length) {
			case 0:
				console.error(this.colors.getColor('red'), '\n  Add a component name and type.\n',this.colors.getColor('default'));
				return;
			case 1:
				console.error(this.colors.getColor('red'), '\n  Add the component type.\n',this.colors.getColor('default'));
				return;
			case 3:
				console.error(this.colors.getColor('red'), '\n  Too many arguments.\n',this.colors.getColor('default'));
				return;
			default:
				break;
		}
		
		this.fs.stat(this.user_options.components_dir, (err, stat) => {

			if(err !== null && err.code == 'ENOENT') {
		    	console.error(
		    		this.colors.getColor('red'),
		    		'\nWarning!\nthe component directory (' + 
		    			this.paths.app_dir + this.user_options.components_dir + 
		    		') doesn\'t exist.\n\nMake sure to create, and populate, it with components.' +
		    		' In the meantime, the default package directory will be used.\n\n' +
		    		'To learn more about how to make and structure a component directory, visit ' +
		    		'https://www.npmjs.com/package/meal',
		    		this.colors.getColor('default')
		    	);
		    	this.user_options.components_dir = this.mod_options.components_dir;
			}

			this.components = this.fs.readdirSync(this.user_options.components_dir).filter(v => v[0] !== '.');
			
			for (var i = 0, l = this.components.length; i < l; i++) {
				if(this.components[i] == options[1]) {
					this.createFiles();
					break;
				}else if(i + 1 == l) {
					console.error(this.colors.getColor('red'),'\n  The ' + options[1] + ' component does not exist.',this.colors.getColor('default'));
					this.listComponents();
					return;
				}
			}
		});

	} else if(this.args.list) {
		this.listComponents();
	} else if(this.args.init) {
		this.makeJson();
	} else {
		this.args.outputHelp();
	}
}