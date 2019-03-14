
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './first-glance/src/index.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../first-glance/dist')
	},

	module: {
		rules: [
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

			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: {
					loader: 'file-loader'
				}
			},

			// deal with es6 by babel
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						// put contents in .babelrc
					}
				}
				
			}

		]
	},

	plugins: [
	// create automatically index.html by template 'index.html'
		new HtmlWebpackPlugin({
			template: './first-glance/src/index.html'
		}),

		// clean the dist (output) directory before bundle
		new CleanWebpackPlugin(),
	],

	// 1. synchronous code splitting 
	// 2. asynchronous code splitting add 'babel-plugin-dynamic-import-webpack' in .babelrc file
	optimization: {
		splitChunks: {
      // chunks: 'async',
      chunks: 'all', // for sync
      // chunks: 'initial', for sync
      // minSize: 30000, // if bigger than minsize, it will get seperated file
      // maxSize: 0,
      // minChunks: 1, // min use imported file
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: false, // for async
      //   default: false // for async
      //   // vendors: {
      //   //   test: /[\\/]node_modules[\\/]/,
      //   //   priority: -10,
      //   //   filename: 'vendors.js'
      //   // },
      //   // default: {
      //   //   minChunks: 2,
      //   //   priority: -20,
      //   //   reuseExistingChunk: true,
      //   //   filename: 'common.js'
      //   // }
      // }
    }
	}

}










