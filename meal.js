#!/usr/bin/env node

var meal = require('commander'),
	components = [
		'card',
		'hero',
		'article'
	],
	interpret = function (args) {
		var options = args.add;
		if(options) {
			switch (options.length) {
				case 0:
					console.error('\n  Add a component name and type.\n');
					return;
				case 1:
					console.error('\n  Add the component type.\n');
					return;
				case 3:
					console.error('\n  Too many arguments.\n');
					return;
				default:
					break;
			}

			for (var i = 0, l = components.length; i < l; i++) {
				if(components[i] == options[1]) {
					createFiles(args);
					break;
				}else if(i + 1 == l) {
					console.error('\n  That component does not exist.\n');
					return;
				}
			};
		} else {
			args.outputHelp();
		}
	},
	createFiles = function(args) {

		var options = args.add;
		console.log('\n  You created a ' + options[0] + ' ' + options[1] + ' component\n');

		// get contents of markup, style, script
		// replace COMPONENT with options[0]
		// create respective files at
		// /resources/styles/scss/components/_type-name.scss
		// /resources/scripts/js/components/_type-name.js
		// /resources/markup/html/components/type-name.html

	};

meal
  .version('0.0.1')
  .option('-a --add [name] [type]', 'Add a new component')
  .option('-j --js', 'With javascript file')
  .option('-s --scss', 'With scss file')
  .option('-m --markup', 'With markup file')
  .parse(process.argv);

interpret(meal);