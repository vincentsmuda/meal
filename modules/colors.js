/**
 *
 * 	Colors
 * 	Allows us to color the CLI
 * 	
 */

module.exports = {
	
	colors: {
		red: 	 '\033[31m',
		green: 	 '\033[32m',
		magenta: '\033[35m',
		default: '\x1b[0m'
	},

	getColor: function(color) {
		return this.colors[color];
	}

}