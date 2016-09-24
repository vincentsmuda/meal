#!/usr/bin/env node

"use strict";

var meal;

class Meal {

	constructor () {
		this.mod_dir 		= './modules/';
		this.mod_options 	= {};
		this.user_options 	= {};
		this.args 			= {};
		this.components 	= [];
		this.has_initd		= false;

		this.fs 		= require('fs');
		this.commander 	= require('commander');
		this.mkdirp 	= require('mkdirp');
		this.path 		= require('path');

		this.paths 			= require(this.mod_dir + 'paths.js');
		this.paths.mod_dir  = this.path.dirname(require.main.filename);
		this.paths.req_dir	= this.paths.mod_dir + '/modules/';

		this.colors 		= require(this.mod_dir + 'colors.js');
		this.duplicateDir   = require(this.mod_dir + 'copy_dirs_recursively.js');
		this.init 			= require(this.mod_dir + 'init.js');
		this.interpret 		= require(this.mod_dir + 'cli_interpret.js');
		this.listComponents = require(this.mod_dir + 'list_components.js');
		this.createFiles 	= require(this.mod_dir + 'create_files.js');
		this.createFile 	= require(this.mod_dir + 'create_file.js');
		this.importScss 	= require(this.mod_dir + 'import_scss.js');
		this.createDirs 	= require(this.mod_dir + 'create_dirs.js');
		this.capitalize 	= require(this.mod_dir + 'capitalize.js');
		this.makeJson 		= require(this.mod_dir + 'make_json.js');
		this.makeIngreds	= require(this.mod_dir + 'make_ingredients_dir.js');
	}

	cook () {

		this.args = this.commander
			.version('0.0.1')
			.option('--list', 'List usable components')
			.option('--init', 'Creates a meal.json in your current directory')
		 	.option('--make [component_name] [component_type]', 'Add a new component')
		  	.option('--x[type]', 'Skip file generation of specific type')
		  	.parse(process.argv);

		this.init();
	
	}

}

(new Meal()).cook();