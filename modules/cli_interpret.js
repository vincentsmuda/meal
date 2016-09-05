/**
 *
 * 	Interpret
 * 	Interprets CLI command
 * 	
 */

module.exports = function () {
	var options = this.args.add;
		
	this.components = this.fs.readdirSync(this.user_options.components_dir).filter(v => v[0] !== '.');

	if(options) {

		switch (options.length) {
			case 0:
				console.error('\n  Add a component name and type.\n');
				return;
			case 1:
				console.error('\n  Add the component type.\n');
				return;
			case 3:
				console.error('\n  Too many arguments.\n');
				return;
			default:
				break;
		}

		for (var i = 0, l = this.components.length; i < l; i++) {
			if(this.components[i] == options[1]) {
				this.createFiles();
				break;
			}else if(i + 1 == l) {
				console.error('\n  That component does not exist.');
				this.listComponents();
				return;
			}
		}

	} else if(this.args.list) {
		this.listComponents();
	} else {
		this.args.outputHelp();
	}

}