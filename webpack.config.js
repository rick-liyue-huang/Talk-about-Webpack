
/*
	config the webpack
*/

const path = require('path');

module.exports = {

	entry: {
		main: './first-glance/src/index.js'
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './first-glance/dist')
	},

	mode: 'development',

	module: {
		rules: [
		// deal with pictures with 'file-loader'
			/*{
				test: /\.(jpg|png|gif|txt)$/,
				use: {
					loader: 'file-loader'
				}
			},*/
			// deal with pictures with url-loader
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						// define the pictures size limit
						limit: 10240,
						// if bigger than 10k, put in 'distImages' directory
						outputPath: 'distImages/'
					}
				}
			},

			// deal with .css file
			{
				test: /\.css$/,
				use: [
				// secondly, mount combined .css file with .html file
					'style-loader',
				// firstly, combine different .css files.
					'css-loader'
				]
			},

			// deal with .scss file
			// postcss-loader -> sass-loader -> css-loader -> style-loader
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							// deal with nested .scss files in .scss file
							importLoaders: 2,
							// open css modules, to deal with .css on different file
							// modules: true
						}
					},
					// need to install 'sass-loader' and 'node-sass' to deal with .scss file
					'sass-loader',
					// need to create 'postcss.config.js' and require 'autoprefixer'
					'postcss-loader'
				]
			},

			// deal with fonts file such as .eot, .ttf and .svg
			// file-loader can deal with almost all kinds of files
			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: {
					loader: 'file-loader'
				}
			}

		]
	}
}












