/**
 *
 * 	Create Files
 * 	Creates specified files in app directory 
 * 	
 */

module.exports = function() {

	var options = this.args.make,
		types = this.user_options.ingredients;

	for (var i = 0, l = types.length; i < l; i++){
		if(this.args.rawArgs.indexOf('--x'+types[i].type) == -1){
			((type) => { 
				this.createFile(type);
			})(types[i]);
		}
	}

	console.log(this.colors.getColor('green'),'\n  You created a ' + options[0] + ' ' + options[1] + ' component\n',this.colors.getColor('default'));

}