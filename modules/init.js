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
		    	Object.assign(this.user_options, this.mod_options, JSON.parse(data));
			}else{
				this.user_options = this.mod_options;
			}

			this.interpret();
		
		});
	});
}