
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

	// config different files
	module: {
		rules: [
		/*{
			test: /\.(jpg|png)$/,
			use: {
				loader: 'file-loader',
				options: {
					// placeholder: use the original name and original postfix
					name: '[name]_[hash].[ext]',
					// output path 'dist/images'
					outputPath: 'images/'
				}
			}
		},*/
		{
			test: /\.txt$/,
			loader: 'file-loader'
		},
		{
			test: /\.(jpg|png|gif)$/,
			loader: 'url-loader',
			options: {
				name: '[name]_[hash].[ext]',
				outputPath: 'images/',
				// when file size is bigger than 102400 will create seperated file 
				limit: 10240
			}
		},
		// deal with css, css-loader -> style-loader
		// deal with scss sass-loader -> css-loader -> style-loader
		// add -webkit- prefix: postcss-loader -> sass-loader -> css-loader -> style-loader
		{
			test: /\.scss$/,
			loader: [
				'style-loader', 
				'css-loader', 
				'sass-loader',
				'postcss-loader']
		}
		]
	}
}










