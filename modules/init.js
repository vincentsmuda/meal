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
	    		this.has_initd = true;
		    	Object.assign(this.user_options, this.mod_options, JSON.parse(data));
			}else{
				this.user_options = this.mod_options;
			}

			// remove leading and trailing slashes
			this.user_options.components_dir = 
				this.user_options.components_dir.replace(/^\/|\/$/g, '');
			for (var i = this.user_options['file_types'].length - 1; i >= 0; i--) {
				this.user_options['file_types'][i].path = 
					this.user_options['file_types'][i].path.replace(/^\/|\/$/g, '');
				if(!!this.user_options['file_types'][i].import)
					this.user_options['file_types'][i].import.path = 
						this.user_options['file_types'][i].import.path.replace(/^\/|\/$/g, '');
			};

			this.interpret();
		
		});
	});
}