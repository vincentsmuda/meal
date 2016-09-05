#!/usr/bin/env node

"use strict";

var meal;

class Meal {

	constructor () {
		this.mod_dir = './modules/';
		this.mod_options = {};
		this.user_options = {};
		this.args = {};
		this.components = [];

		this.fs = require('fs');
		this.commander = require('commander');
		this.mkdirp = require('mkdirp');

		this.colors = require(this.mod_dir + 'colors.js');
		this.init = require(this.mod_dir + 'init.js');
		this.paths = require(this.mod_dir + 'paths.js');
		this.interpret = require(this.mod_dir + 'cli_interpret.js');
		this.listComponents = require(this.mod_dir + 'list_components.js');
		this.createFiles = require(this.mod_dir + 'create_files.js');
		this.createFile = require(this.mod_dir + 'create_file.js');
		this.importScss = require(this.mod_dir + 'import_scss.js');
		this.createDirs = require(this.mod_dir + 'create_dirs.js');
		this.capitalize = require(this.mod_dir + 'capitalize.js');
	}

	cook () {

		this.args = this.commander
			.version('0.0.1')
			.option('--list', 'List usable components')
		 	.option('-m --make [component_name] [component_type]', 'Add a new component')
		  	.option('-xj --xjs', 'Without javascript file')
		  	.option('-xs --xscss', 'Without scss file')
		  	.option('-xh --xhtml', 'Without markup file')
		  	.parse(process.argv);

		this.init();
	
	}

}

(new Meal()).cook();