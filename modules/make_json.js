/**
 *
 * 	Creates meal.json in project folder
 * 
 */

module.exports = function () {
	var new_meal = this.paths.app_dir + '/meal.json';
	this.fs.readFile(this.paths.mod_dir + '/meal.json', 'utf8', (err,data) => {
		this.fs.stat(new_meal, (err, stat) => {
			if(err === null) {
				console.log(this.colors.getColor('red'), '  The meal.json file already exists in this directory.\n', this.colors.getColor('default'));
		    }else if(err.code == 'ENOENT') {
		        this.fs.writeFile(new_meal, data);
				console.log(this.colors.getColor('green'), '  A new meal.json file has been created.\n', this.colors.getColor('default'));
		    } else {
		        console.log('Some other error: ', err.code);
		    }
		});
	});
};