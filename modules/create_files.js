/**
 *
 * 	Create Files
 * 	Creates specified files in app directory 
 * 	
 */

module.exports = function() {

	var options = this.args.add,
		types = this.user_options.file_types;

	for (var i = 0, l = types.length; i < l; i++){
		if(!this.args['x'+types[i].type]){
			((type) => { 
				this.createFile(type);
			})(types[i]);
		}
	}

	console.log('\n  You created a new ' + options[0] + ' ' + options[1] + ' component\n');

}