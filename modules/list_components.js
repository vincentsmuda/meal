/**
 *
 * 	List Components
 * 	Lists usable components found in user's dir or module's dir
 *
 * 	@param {Array} components The array of usable components
 * 	
 */

module.exports = function() {
	var list = '\n  Valid components include:';
		for (var i = 0, l = this.components.length; i < l; i++) {
			list += '\n  - ' + this.components[i];
		};

	console.log(this.colors.getColor('green'), list + '\n', this.colors.getColor('default'));
}