var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config ={
	entry: SRC_DIR + "/app/index.js", //tell webpack which file is the first file you should start your 
	// transpiling. This will be our route file which starts our application later on.
	output: { //This tells webpack where to output everthing.
		path: DIST_DIR + "/app", //location of the file. This will be created automatically.
		filename:"bundle.js", //the file name.
		publicPath: "/app/"// this is where our app lives in.
	},
	module: { //here you define all the modules I want to use with your webpack. here we are transpiling es6 -> es5.
		loaders: [
			{
				test: /\.js?/, // tells webpack which files it should test regarding this loader. 
				//This syntax means have a look at al files which ends .js

				include: SRC_DIR,//  means which while should scan to test. SRC_DIR was defined earlier.
				loaders: "babel-loader", //This is the actual loader.
				query: { // babel needs some presets to work correctly.
					presets: ["react", "es2015", "stage-2"]
				}
			}
		]
	}
};

module.exports = config;