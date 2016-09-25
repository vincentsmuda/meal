/**
 *
 * 	Create Directories
 * 	Creates a directory in the specified location
 * 
 * 	@param {String}   dirs The path of the desired directory
 * 	@param {Function} cb   The callback function after the directory has been created
 * 	
 */

module.exports = function(dirs) {
	return new Promise((resolve,reject) => 
		this.mkdirp(dirs, err => { 
			if(err) reject(err);
			else resolve(dirs);
		})
	);
};