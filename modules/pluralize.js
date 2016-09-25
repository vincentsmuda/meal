/**
 *
 * 	Pluralize
 * 
 */

module.exports = function (string) {

	var last_char = string[string.length-1],
		second_last_char = string[string.length-2],
		vowels = ['a','e','i','o','u'];
    
	switch(last_char) {

		case 'h':
		case 'x':
		case 's':
		case 'z':
			
			string += 'es';

			break;

		case 'y':

			if(vowels.indexOf(second_last_char) > -1){
				string += 's';
			}else{
				string = string.slice(0, -1);
				string += 'ies';
			}

			break;

		case 'o':
			if(vowels.indexOf(second_last_char) > -1) {
				string += 's';
			} else {
				string += 'es';
			}
			break;

		default:
			string += 's';
	}

	return string;

};