/**
 *
 * 	Creates a promise for file reading
 *  
 * 	@param {string} The url to what we are going to read
 * 	
 */

module.exports = function(src) {
	return new Promise((resolve, reject) => {
		this.fs.readFile(src, 'utf8', (err,data) => {
			if(err === null || err.code === 'ENOENT'){
				resolve({
					data: data,
					err: err
				});
			}else{
				reject(err);
			}
		});
	});
};
