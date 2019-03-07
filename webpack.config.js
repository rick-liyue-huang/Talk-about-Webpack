
/*
	config the webpack
*/

const path = require('path');

module.exports = {
	// entry file
	entry: {
		main: './src/index.js'
	},
	// output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// or mode: 'production' 
	mode: 'development',
}










