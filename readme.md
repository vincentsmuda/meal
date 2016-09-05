#Meal
An easy way to create templated components on the fly. Meal takes templated files (whether from the npm module directory or your project directory), replaces occurences of __COMPONENT__ with what you specify in your command `$ meal make cool card` (in this case __cool__), and outputs the files in your resources directory, or wherever you specify within the __meal.json__.

##Installation

first install it globally

`$ npm install meal -g`

Then call init in your project folder to generate the meal.json

`$ meal init`

##meal.json
After installation, you can specify the any paramater

```json
{
	"file_types": [
		{
			"type": "html",
			"name": "markup",
			"output_type": "html",
			"path": "/resources/markup/html/components",
			"prefix": ""
		},
		{
			"type": "scss",
			"name": "styles",
			"output_type": "scss",
			"path": "/resources/styles/scss/components",
			"prefix": "_"
		},
		{
			"type": "js",
			"name": "scripts",
			"output_type": "js",
			"path": "/resources/scripts/js/components",
			"prefix": "_"
		}
	],
	"components_dir": "/ingredients",
	"scss_file": "style.scss"
}
```

###file_types

Property | Description | Example
--- | --- | ---
type | The type of the source file's template | markup.__html__
name | The name of the source file's template | __markup__.html
output_type | The filetype that the source will compile to | markup.html -> some-component.__php__
path | The path to the output folder | /public/includes
prefix | The file's prefix | __\___markup.html

###components_dir
Spcifying the components directory will tell meal where to look for the template files.

###scss_file
Meal auto appends module inclides to your scss file. You can specify the name via this property but remember that the scss file will always be placed on directory up from your file_types "scss" path.

##Commands

Command | Description | Example
--- | --- | ---
init | Creates a meal.json in your current directory | meal init
list | Lists all generatable components | meal list
make __[NAME] [TYPE]__ | generates files from the __[TYPE]__ template using the __[NAME]__ | meal make news card

###Make options

Option | Description | Example
--- | --- | ---
--x[TYPE] | Skips the __[TYPE]__ file generation | meal make some card --xjs --xscss --xhtml

##Template Files
