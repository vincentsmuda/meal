/**
 *
 * 	Paths
 * 	Sets up paths to be included globally throughout modules
 *  
 * 	@param {Object} args         The CLI arguments
 * 	@param {String} app_dir 	 The destination directory
 * 	
 */

var path = require('path'),
	mod_dir = path.dirname(require.main.filename);

module.exports = {
	mod_dir: mod_dir,
	app_dir: './',
	req_dir: mod_dir + '/modules/'
};