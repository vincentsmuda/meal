/**
 *
 * 	Init
 * 	Starts meal
 *
 */

module.exports = function() {
	this.fs.readFile(this.paths.app_dir + 'meal.json', 'utf8', (err,data) => {
	    this.fs.readFile(this.paths.mod_dir + '/meal.json', 'utf8', (mod_err,mod_data) => {

	    	this.mod_options = JSON.parse(mod_data);
	    	this.mod_options.components_dir = this.paths.mod_dir + this.mod_options.components_dir;

	    if(err === null){
    		data = JSON.parse(data);
    		this.has_initd = true;
    		if(!!data.components_dir) data.components_dir = this.paths.app_dir + data.components_dir.replace(/^\/|\/$/g, '');
	    	Object.assign(this.user_options, this.mod_options, data);
			}else{
				this.user_options = this.mod_options;
			}

			// remove leading and trailing slashes
			this.user_options.components_dir =
				this.user_options.components_dir;
			for (var i = this.user_options['ingredients'].length - 1; i >= 0; i--) {
				this.user_options['ingredients'][i].path =
					this.user_options['ingredients'][i].path.replace(/^\/|\/$/g, '');
				if(!!this.user_options['ingredients'][i].import)
					this.user_options['ingredients'][i].import.path =
						this.user_options['ingredients'][i].import.path.replace(/^\/|\/$/g, '');
			};

			this.interpret();

		});
	});
}
