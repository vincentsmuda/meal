#!/usr/bin/env node

var meal = require('commander'),
	fs = require('fs'),
	path = require('path'),
	mkdirp = require('mkdirp'),
	app_dir = path.dirname(require.main.filename),
	user_options = {

		// TODO: check to see if user has a meal.json file in their root dir
		// if they do, use their settings including the below filetypes
		file_types: [
			{
				type: 'html',
				name: 'markup',
				// path: '/path/to/generated/file/',
				prefix: ''
			},
			{
				type: 'scss',
				name: 'styles',
				// path: '/path/to/generated/file/',
				prefix: '_'
			},
			{
				type: 'js',
				name: 'scripts',
				// path: '/path/to/generated/file/',
				prefix: '_'
			}
		],

		// TODO: check to see if the user has a folder called meal_components
		// if they do, use that folder, else use the default folder
		components_dir: './components',

		// TODO: allow the user to specify their own master scss file
		scss_file: 'style.scss'

	},
	components = fs.readdirSync(user_options.components_dir).filter(v => v[0] !== '.'),
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

		var options = args.add,
			types = user_options.file_types;

		for (var i = 0, l = types.length; i < l; i++){
			if(!args['x'+types[i].type]){
				(function(type){ 
					createFile(type, options);
				})(types[i]);
			}
		}

		console.log('\n  You created a new ' + options[0] + ' ' + options[1] + ' component\n');

	},
	createFile = function(type, options) {
		fs.readFile('./components/' + options[1] + '/' + type.name + '.' + type.type, 'utf8', function (err,data) {
			if (err) return console.error(err);
			var contents = data.replace(/COMPONENT/g, options[0]),
				filename = type.prefix + options[1] + '-' + options[0] + '.' + type.type,
				dirs = type.path ? type.path : '/resources/' + type.name + '/' + type.type + '/components/';
			createDirs(app_dir + dirs, function(dir){
				var filepath = dir + filename;
				fs.stat(filepath, function(err, stat) {
				    if(err === null) {
				    	// do nothing
				    }else if(err.code == 'ENOENT') {
				        fs.writeFile(filepath, contents);
				    } else {
				        console.log('Some other error: ', err.code);
				    }
				});
				if(type.type == 'scss') importScss(type, options);
			});
		});
	},
	createDirs = function(dirs,cb) { 
		mkdirp(dirs, function(err) { 
		    cb(dirs);
		});
	},
	importScss = function(type, options) {
		var style_folder = type.path ? type.path + '../' : '/resources/' + type.name + '/' + type.type + '/',
			style_folder_array = style_folder.split('/'),
			style_path = app_dir + style_folder + user_options.scss_file,
			import_name = type.prefix + options[1] + '-' + options[0] + '.' + type.type,
			import_string = '\n@import \'./' + style_folder_array[style_folder_array.length-2] + '/' + import_name + '\';\n\n';
		fs.stat(style_path, (err, stat) => {
			if(err === null) {
		    	fs.readFile(style_path, 'utf8', (err,data) => {
		    		fs.writeFile(style_path, '\n' + data.trim() + import_string);
		    	});
		    }else if(err.code == 'ENOENT') {
		    	fs.writeFile(style_path, '\n/*\n *\n *\tMEAL IMPORTS (LEAVE AT BOTTOM)\n *\n */' + import_string);
		    }
		});
	};

meal
  .version('0.0.1')
  .option('-a --add [component_name] [component_type]', 'Add a new component')
  .option('-xj --xjs', 'Without javascript file')
  .option('-xs --xscss', 'Without scss file')
  .option('-xm --xhtml', 'Without markup file')
  .parse(process.argv);

interpret(meal);