/**
 *
 * 	Recursively duplicates folder
 * 
 */

module.exports = function(src, dest) {
	var exists = this.fs.existsSync(src),
		stats = exists && this.fs.statSync(src),
		isDirectory = exists && stats.isDirectory();

	if (exists && isDirectory) {
		this.fs.mkdirSync(dest);
		this.fs.readdirSync(src).forEach((childItemName) => {
			this.duplicateDir(
				this.path.join(src, childItemName),
				this.path.join(dest, childItemName)
			);
		});
	} else {
		this.fs.linkSync(src, dest);
	}
};